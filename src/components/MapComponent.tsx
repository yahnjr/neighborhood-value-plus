import React, { useState, useEffect } from 'react';
import { Map, Source, Layer, NavigationControl, Marker } from 'react-map-gl';
import * as turf from '@turf/turf';
import { fetchAllGeoJSONLayers, getSponsorLogoUrl, updateFeatureInLayer } from '../services/supabaseService';
import { useAuth } from '../services/auth-context';
import SponsorPopup from './SponsorPopup';
import PointPopup from './PointPopup';
import EditPointPanel from './EditPointPanel';
import { FilterState } from './FilterPanel';
import layerStyles from '../constants/layerStyles.json';
import 'mapbox-gl/dist/mapbox-gl.css';
import { LayerProps } from 'react-map-gl';
import type { Feature, Polygon, MultiPolygon } from 'geojson';

// GeoJSON types
interface GeoJSONFeature {
  type: 'Feature';
  geometry: {
    type: string;
    coordinates: any;
  };
  properties: { [key: string]: any };
}

interface GeoJSON {
  type: 'FeatureCollection';
  features: GeoJSONFeature[];
}

interface GeoJsonData {
  NeighborhoodBoundaries?: GeoJSON;
  addpoints?: GeoJSON;
  Sponsors?: GeoJSON;
  [key: string]: GeoJSON | undefined;
}

// Props interface for the MapComponent
interface MapComponentProps {
  viewState?: {
    longitude: number;
    latitude: number;
    zoom: number;
  };
  onViewStateChange?: (viewState: any) => void;
  showContractors?: boolean;
  searchMarker?: {
    longitude: number;
    latitude: number;
    address: string;
  } | null;
  filters: FilterState;
  isAddingPoint: boolean;
  onPointAdd: (coords: { lat: number; lng: number; neighborhood?: string | null; crossStreet?: string | null }) => void;
  addPointCoordinates?: { lat: number; lng: number; neighborhood?: string | null; crossStreet?: string | null };
  geoJsonData: GeoJsonData;
  loadingGeoJson: boolean;
  onRefreshData?: () => Promise<void>;
  analyticsMode?: boolean;
}

// No test function needed

const MapComponent: React.FC<MapComponentProps> = ({ 
  viewState: externalViewState, 
  onViewStateChange,
  searchMarker,
  filters,
  isAddingPoint,
  onPointAdd,
  addPointCoordinates,
  geoJsonData,
  loadingGeoJson,
  showContractors,
  onRefreshData,
  analyticsMode
}) => {
  // Get authentication state
  const { user: _user, userData, loading: authLoading } = useAuth();

  // State for selected contractor
  const [selectedContractor, setSelectedContractor] = useState<GeoJSONFeature | null>(null);
  
  // State for neighborhood selection
  const [selectedNeighborhood, setSelectedNeighborhood] = useState<string | null>(null);
  
  // Use external viewState if provided, otherwise use internal state
  const [internalViewState, setInternalViewState] = useState({
    longitude: -122.5715,
    latitude: 45.498,
    zoom: 12
  });

  const currentViewState = externalViewState || internalViewState;
  
  const [error, setError] = useState<string | null>(null);

  const [showSponsorHighlight, setShowSponsorHighlight] = useState(true);

  // Generate dynamic heatmap layer styles based on filter settings
  const getDynamicHeatmapStyle = (): LayerProps => {
    const heatmapSettings = filters.heatmapSettings;
    const baseStyle = layerStyles.addpointsHeatmap as any;
    
    if (!heatmapSettings) return baseStyle;

    return {
      ...baseStyle,
      paint: {
        ...baseStyle.paint,
        'heatmap-intensity': [
          'interpolate',
          ['linear'],
          ['zoom'],
          0, heatmapSettings.intensity * 0.5,
          15, heatmapSettings.intensity * 1.5
        ],
        'heatmap-radius': [
          'interpolate',
          ['linear'],
          ['zoom'],
          0, heatmapSettings.radius * 0.3,
          15, heatmapSettings.radius * 1.2
        ],
        'heatmap-opacity': heatmapSettings.enabled ? [
          'interpolate',
          ['linear'],
          ['zoom'],
          7, 1,
          15, 0.5
        ] : 0
      }
    } as LayerProps;
  };
  const [highlightedSponsor, setHighlightedSponsor] = useState<GeoJSONFeature | null>(null);

  // State for popups
  const [selectedAddpoint, setSelectedAddpoint] = useState<GeoJSONFeature | null>(null);
  const [editingAddpoint, setEditingAddpoint] = useState<GeoJSONFeature | null>(null);

  // State for sponsor logo
  const [sponsorLogoUrl, setSponsorLogoUrl] = useState<string | null>(null);

  // Initial map setup
  useEffect(() => {
    // Set initial view to Lents neighborhood
    const lentsView = {
      longitude: -122.5715, // Update these coordinates to center of Lents
      latitude: 45.4814,
      zoom: 13
    };
    
    if (onViewStateChange) {
      onViewStateChange(lentsView);
    } else {
      setInternalViewState(lentsView);
    }
  }, []);

  useEffect(() => {
    const loadGeoJSONData = async () => {
      try {
        setError(null);
        
        console.log('Loading GeoJSON data...');
        console.log('Current user role:', userData?.role || 'Guest');
        
        const layers = await fetchAllGeoJSONLayers();
        
        console.log('Loaded layers:', Object.keys(layers));
        // Removed setGeoJsonData call - using prop instead
      } catch (err) {
        console.error('Error loading GeoJSON data:', err);
        setError(`Failed to load map data: ${err instanceof Error ? err.message : 'Unknown error'}`);
      } 
    };

    // Only load data after auth state is determined
    if (!authLoading) {
      loadGeoJSONData();
    }
  }, [userData, authLoading]); // Reload when auth state changes

  useEffect(() => {
    if (geoJsonData.Sponsors) {
      // Find the sponsor with Featured === 'Y'
      const sponsorFeature = geoJsonData.Sponsors.features.find(
        f => f.properties?.Featured === 'Y'
      );
      if (sponsorFeature) {
        console.log('Featured sponsor found:', sponsorFeature);
        setHighlightedSponsor(sponsorFeature);
      } else {
        console.log('No featured sponsor found');
        setHighlightedSponsor(null);
      }
    }
  }, [geoJsonData.Sponsors]);

  // Fetch sponsor logo from Supabase Storage when highlightedSponsor changes
  useEffect(() => {
    const fetchSponsorLogo = async () => {
      if (highlightedSponsor && highlightedSponsor.properties?.Image) {
        try {
          const imageName = highlightedSponsor.properties.Image;
          const url = await getSponsorLogoUrl(imageName);
          setSponsorLogoUrl(url);
        } catch (err) {
          console.error('Error fetching sponsor logo:', err);
          setSponsorLogoUrl(null);
        }
      } else {
        setSponsorLogoUrl(null);
      }
    };
    fetchSponsorLogo();
  }, [highlightedSponsor]);

  const handleMove = (evt: any) => {
    if (onViewStateChange) {
      onViewStateChange(evt.viewState);
    } else {
      setInternalViewState(evt.viewState);
    }
    // Reset neighborhood filter on zoom out
    if (evt.viewState.zoom < 14) {
      setSelectedNeighborhood(null);
    }
  };

  // Utility function to check if a point is inside a polygon
  // @ts-ignore - This function will be used in future functionality
  const _getNeighborhoodFromCoordinates = (
    lng: number, 
    lat: number, 
    neighborhoodBoundaries: GeoJSON
  ): string | null => {
    const point = turf.point([lng, lat]);
    
    for (const feature of neighborhoodBoundaries.features) {
      if (
        feature.geometry.type === 'Polygon' ||
        feature.geometry.type === 'MultiPolygon'
      ) {
        // Cast feature to correct type for turf
        if (turf.booleanPointInPolygon(point, feature as Feature<Polygon | MultiPolygon>)) {
          // Use MAPLABEL as primary, fallback to NAME
          return feature.properties?.MAPLABEL || feature.properties?.NAME || null;
          console.log('Found neighborhood:', feature.properties?.MAPLABEL || feature.properties?.NAME);
        }
      }
    }
    
    return null;
  };

  // Handles clicks on the map to select points or place a new one.
  const handleMapClick = (event: any) => {
    if (isAddingPoint) {
      const { lng, lat } = event.lngLat;
      const roundedLng = Math.round(lng * 10000) / 10000;
      const roundedLat = Math.round(lat * 10000) / 10000;
      
      onPointAdd({ lat: roundedLat, lng: roundedLng });
      return;
    }

    // Check if clicked on addpoints or contractors layer
    const features = event.features;
    if (features && features.length > 0) {
      const addpointFeature = features.find((f: any) => 
        f.source === 'addpoints' && (f.layer?.id === 'addpoints' || f.layer?.id === 'addpoints-heatmap-circles')
      );
      if (addpointFeature) {
        console.log('Clicked addpoint:', addpointFeature);
        setSelectedAddpoint(addpointFeature);
        setSelectedContractor(null);
        return;
      }

      const contractorFeature = features.find((f: any) => f.source === 'contractors');
      if (contractorFeature) {
        console.log('Clicked contractor:', contractorFeature);
        setSelectedContractor(contractorFeature);
        setSelectedAddpoint(null);
        return;
      }
    }
  };

  const handleEditPoint = (point: GeoJSONFeature) => {
    setEditingAddpoint(point);
    setSelectedAddpoint(null); // Close the view-only popup
  };

  const handleUpdatePoint = (updatedPoint: GeoJSONFeature) => {
    console.log("Update point:", updatedPoint);
    // Here you would typically call a service to update the data in Firebase/backend
    setEditingAddpoint(null);
  };

  const handleDeletePoint = (pointId: string) => {
    console.log("Delete point:", pointId);
    // Here you would typically call a service to delete the data in Firebase/backend
    setEditingAddpoint(null);
  };

  // Gets map data with minimal filtering (only contractors visibility, NO contractor role filtering for map display)
  const getMapData = () => {
    const mapData: GeoJsonData = { ...geoJsonData };

    // Handle contractors visibility - simple toggle for admin users only
    if (mapData.contractors) {
      // Only show contractors if user is admin AND showContractors is true
      if (!(userData?.role === 'admin' && showContractors)) {
        mapData.contractors = {
          ...mapData.contractors,
          features: []
        };
      }
    }

    // DO NOT filter map points for contractors - they should see all points on the map
    // Filtering only applies to the ContractorJobTable, not the map display

    return mapData;
  };

  // Gets neighborhood boundaries for the overlay (non-focus neighborhoods)
  const getOverlayNeighborhoods = () => {
    if (!geoJsonData.NeighborhoodBoundaries) return null;

    let activeNeighborhoods = selectedNeighborhood ? [selectedNeighborhood] : filters.selectedNeighborhoods;
    
    // For contractors, always include their neighborhood as a focus area (no overlay)
    if (userData?.role === 'contractor' && userData.neighborhood) {
      activeNeighborhoods = [...activeNeighborhoods];
      if (!activeNeighborhoods.includes(userData.neighborhood)) {
        activeNeighborhoods = [userData.neighborhood];
      }
    }
    
    // If no neighborhoods are selected or all neighborhoods are selected, don't show overlay
    if (activeNeighborhoods.length === 0 || 
        activeNeighborhoods.length >= geoJsonData.NeighborhoodBoundaries.features.length) {
      return null;
    }

    // Get neighborhoods that are NOT in the focus list (these will be overlayed)
    const overlayBoundaries = geoJsonData.NeighborhoodBoundaries.features.filter(feature => {
      const neighborhood = feature.properties?.MAPLABEL;
      return !activeNeighborhoods.includes(neighborhood);
    });

    if (overlayBoundaries.length === 0) return null;

    return {
      ...geoJsonData.NeighborhoodBoundaries,
      features: overlayBoundaries
    };
  };

  // Get the map data to display (minimal filtering)
  const displayData = getMapData();
  
  // Get overlay neighborhoods for fading effect
  const overlayNeighborhoods = getOverlayNeighborhoods();

  // Show loading state while auth is loading or data is loading
  if (authLoading || loadingGeoJson) {
    return (
      <div style={{ 
        height: '100vh', 
        width: '100%', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: '#f0f0f0'
      }}>
        <div>
          {authLoading ? 'Initializing...' : 'Loading map data...'}
          <br />
          <small style={{ color: '#666', marginTop: '8px' }}>
            {userData ? `Logged in as ${userData.role}` : 'Loading as guest'}
          </small>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ 
        height: '100vh', 
        width: '100%', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: '#f0f0f0',
        flexDirection: 'column',
        gap: '16px'
      }}>
        <div style={{ color: 'red', textAlign: 'center' }}>
          <strong>Error loading map data</strong>
          <br />
          {error}
        </div>
        <button 
          onClick={() => window.location.reload()} 
          style={{
            padding: '8px 16px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Retry
        </button>
      </div>
    );
  }

  // Admin: Set featured sponsor
  const handleSetFeaturedSponsor = async (featureId: string) => {
    if (!geoJsonData.Sponsors) return;
    
    // First, update all sponsors to not be featured
    for (const feature of geoJsonData.Sponsors.features) {
      if (feature.properties.Featured === 'Y') {
        await updateFeatureInLayer('Sponsors', {
          ...feature,
          properties: {
            ...feature.properties,
            Featured: 'N'
          }
        });
      }
    }

    // Then, set the selected sponsor as featured
    const sponsorToUpdate = geoJsonData.Sponsors.features.find(f => {
      const fId = f.properties?.FID?.toString() || f.properties?.OBJECTID?.toString() || f.properties?.Name;
      return fId === featureId;
    });

    if (sponsorToUpdate) {
      const updatedSponsor = {
        ...sponsorToUpdate,
        properties: {
          ...sponsorToUpdate.properties,
          Featured: 'Y'
        }
      };
      await updateFeatureInLayer('Sponsors', updatedSponsor);
      setHighlightedSponsor(updatedSponsor);
    }
  };

  return (
    <div style={{ height: '100vh', width: '100%', position: 'relative' }}>
      {/* Debug info - remove in production */}
      {userData && (
        <div style={{
          position: 'absolute',
          top: '10px',
          left: '10px',
          zIndex: 1000,
          background: 'rgba(0,0,0,0.7)',
          color: 'white',
          padding: '4px 8px',
          borderRadius: '4px',
          fontSize: '12px'
        }}>
          {userData.role} - {userData.email}
        </div>
      )}
      
      <Map
        {...currentViewState}
        onMove={handleMove}
        onClick={handleMapClick}
        interactiveLayerIds={analyticsMode ? ['addpoints-heatmap-circles', 'neighborhoods-fill', 'contractors'] : ['addpoints', 'neighborhoods-fill', 'contractors']}
        mapboxAccessToken={import.meta.env.VITE_MAPBOX_ACCESS_TOKEN}
        style={{ width: '100%', height: '100%' }}
        mapStyle="mapbox://styles/mapbox/satellite-streets-v12"
        cursor={isAddingPoint ? 'crosshair' : 'auto'}
      >
        <NavigationControl position="top-right" />

        {/* Show all neighborhood boundaries (not filtered) */}
        {geoJsonData.NeighborhoodBoundaries && (
          <Source id="neighborhoods" type="geojson" data={geoJsonData.NeighborhoodBoundaries}>
            <Layer
              id="neighborhoods-fill"
              type="fill"
              paint={analyticsMode ? {
                'fill-opacity': 0,
                'fill-outline-color': layerStyles.NeighborhoodBoundariesAnalytics.paint["fill-outline-color"]
              } : {
                'fill-color': (layerStyles.NeighborhoodBoundaries.paint["fill-color"] as any),
                'fill-opacity': [
                  'interpolate',
                  ['linear'],
                  ['zoom'],
                  13, 0.35,
                  16, 0.05,
                  18, 0
                ],
                'fill-outline-color': layerStyles.NeighborhoodBoundaries.paint["fill-outline-color"]
              }}
            />
            <Layer {...(layerStyles.NeighborhoodBoundariesOutline as LayerProps)} />
            <Layer
              id="neighborhoods-labels"
              type="symbol"
              layout={{
                'text-field': ['get', 'NAME'],
                'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
                'text-size': 12,
                'text-anchor': 'center',
                'text-justify': 'center'
              }}
              paint={{
                'text-color': '#171717',
                'text-halo-color': 'rgba(255, 255, 255, 0.8)',
                'text-halo-width': 1,
                'text-opacity': [
                  'interpolate',
                  ['linear'],
                  ['zoom'],
                  13, 1,
                  16, 0.5,
                  18, 0
                ]
              }}
            />
          </Source>
        )}

        {/* Add transparent white overlay for non-focus neighborhoods */}
        {overlayNeighborhoods && (
          <Source id="neighborhoods-overlay" type="geojson" data={overlayNeighborhoods}>
            <Layer
              id="neighborhoods-overlay-fill"
              type="fill"
              paint={{
                'fill-color': '#ffffff',
                'fill-opacity': 0.4
              }}
            />
          </Source>
        )}

        {/* Contractors layer */}
        {displayData.contractors && (
          <Source id="contractors" type="geojson" data={displayData.contractors}>
            <Layer {...(layerStyles.contractors as LayerProps)} />
          </Source>
        )}

        {/* Use filtered data for addpoints*/}
        {displayData.addpoints && (
          <Source id="addpoints" type="geojson" data={displayData.addpoints}>
            {analyticsMode && filters.heatmapSettings?.enabled !== false ? (
              <>
                <Layer 
                  id="addpoints-heatmap" 
                  {...getDynamicHeatmapStyle()} 
                  beforeId="neighborhoods-labels"
                />
                <Layer 
                  id="addpoints-heatmap-circles" 
                  {...(layerStyles.addpointsHeatmapCircles as LayerProps)} 
                  beforeId="neighborhoods-labels"
                />
              </>
            ) : analyticsMode ? (
              <Layer 
                id="addpoints" 
                {...(layerStyles.addpoints as LayerProps)} 
                beforeId="neighborhoods-labels"
              />
            ) : (
              <Layer 
                id="addpoints" 
                {...(layerStyles.addpoints as LayerProps)} 
                beforeId="neighborhoods-labels"
              />
            )}
          </Source>
        )}

        {/* Sponsors layer*/}
        {geoJsonData.Sponsors && (
          <Source id="sponsors" type="geojson" data={geoJsonData.Sponsors}>
            <Layer {...(layerStyles.Sponsors as LayerProps)} />
          </Source>
        )}

        {geoJsonData.PortlandStreets && (
          <Source id="streets" type="geojson" data={geoJsonData.PortlandStreets}>
            <Layer 
              id="streets-line"
              type="line"
              source="streets"
              paint={{
                'line-color': '#888',
                'line-width': 0,
                'line-opacity': 0
              }}
            />
          </Source>
        )}

        {/* Search Result Marker */}
        {searchMarker && (
          <Marker
            longitude={searchMarker.longitude}
            latitude={searchMarker.latitude}
            anchor="bottom"
          >
            <div className="search-marker-container">
              {/* Search marker pin */}
              <div className="search-marker-pin">
                <div className="search-marker-dot" />
              </div>
              
              {/* Address tooltip */}
              <div className="search-marker-tooltip">
                {searchMarker.address}
                {/* Arrow pointing down */}
                <div className="search-marker-tooltip-arrow" />
              </div>
            </div>
          </Marker>
        )}

        {/* Sponsor Marker + Popup */}
        {showSponsorHighlight && highlightedSponsor && highlightedSponsor.geometry.type === 'Point' && sponsorLogoUrl && (
          <Marker
            longitude={highlightedSponsor.geometry.coordinates[0]}
            latitude={highlightedSponsor.geometry.coordinates[1]}
            anchor="center"
          >
            <div className="sponsor-marker-container">
              <img
                src={sponsorLogoUrl}
                alt="Sponsor Logo"
                className="sponsor-marker-img"
              />
            </div>
          </Marker>
        )}

        {/* Sponsor Popup */}
        {showSponsorHighlight && highlightedSponsor && !selectedAddpoint && !editingAddpoint && (
          <div
            style={{
              position: 'fixed',
              left: 24,
              bottom: 24,
              zIndex: 1000,
              background: 'white',
              borderRadius: 12,
              boxShadow: '0 2px 16px rgba(0,0,0,0.18)',
              padding: 0,
              minWidth: 320,
              maxWidth: 360,
              display: 'flex',
              alignItems: 'center',
              gap: 16
            }}
          >
            <SponsorPopup
              title="Featured Sponsor"
              name={highlightedSponsor.properties?.Name}
              crossStreet={highlightedSponsor.properties?.CrossStreet}
              instagram={highlightedSponsor.properties?.Instagram}
              logoUrl={sponsorLogoUrl}
              onClose={() => setShowSponsorHighlight(false)}
              isAdmin={userData?.role === 'admin'}
              sponsors={geoJsonData.Sponsors?.features || []}
              currentFeaturedId={highlightedSponsor?.properties?.OBJECTID?.toString() || highlightedSponsor?.properties?.Name || null}
              onSetFeatured={handleSetFeaturedSponsor}
              loading={loadingGeoJson}
            />
          </div>
        )}

        {/* Temporary marker for add-point mode */}
        {addPointCoordinates && (
          <Marker longitude={addPointCoordinates.lng} latitude={addPointCoordinates.lat} anchor="center">
            <div className="add-point-marker" />
          </Marker>
        )}
      </Map>

      {/* Addpoint Popup */}
      {selectedAddpoint && (
        (() => {
          const handleStatusUpdate = async (newStatus: string) => {
            console.log('[MapComponent] Status updated to:', newStatus);
            // Update the local state immediately for better UX
            if (selectedAddpoint) {
              const updatedFeature = {
                ...selectedAddpoint,
                properties: {
                  ...selectedAddpoint.properties,
                  Status: newStatus
                }
              };
              setSelectedAddpoint(updatedFeature);
            }
            
            // Refresh the data from the server to ensure map is updated
            if (onRefreshData) {
              try {
                await onRefreshData();
                // Reduced logging - only log if there's an error
              } catch (error) {
                console.error('[MapComponent] Error refreshing data:', error);
              }
            }
          };

          return (
            <PointPopup
              jobType={selectedAddpoint.properties?.["Service_Ty"]}
              location={selectedAddpoint.properties?.["Cross_Stre"]}
              status={selectedAddpoint.properties?.Status}
              fullAddress={selectedAddpoint.properties?.["Full_Addre"]}
              referralSource={selectedAddpoint.properties?.["Refferal S"]}
              estimate={selectedAddpoint.properties?.Estimate}
              feature={selectedAddpoint}
              onClose={() => setSelectedAddpoint(null)}
              onEdit={() => handleEditPoint(selectedAddpoint)}
              onStatusUpdate={handleStatusUpdate}
            />
          );
        })()
      )}

      {/* Edit Point Panel- opened from inside popup in admin mode*/}
      {editingAddpoint && (
        <EditPointPanel
          point={editingAddpoint}
          onClose={() => setEditingAddpoint(null)}
          onUpdatePoint={handleUpdatePoint}
          onDeletePoint={handleDeletePoint}
        />
      )}

      {/* Contractor Popup */}
      {selectedContractor && (
        <PointPopup
          location={selectedContractor.properties?.Address}
          jobType={selectedContractor.properties?.Type}
          fullAddress={selectedContractor.properties?.Name}
          onClose={() => setSelectedContractor(null)}
          onEdit={() => {}}
          feature={selectedContractor}
        />
      )}
    </div>
  );
};

export default MapComponent;