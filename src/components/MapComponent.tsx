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
import contractorTypesJson from '../constants/contractorTypes.json';

const contractorTypes: Record<string, string[]> = contractorTypesJson;

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
  loadingGeoJson
}) => {
  // Get authentication state
  const { user: _user, userData, loading: authLoading } = useAuth();
  
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
        
        // Delete commented out block for filtering layers
        
        console.log('Loaded and filtered layers:', Object.keys(layers));
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

    // Check if clicked on addpoints layer
    const features = event.features;
    if (features && features.length > 0) {
      const addpointFeature = features.find((f: any) => f.source === 'addpoints');
      if (addpointFeature) {
        console.log('Clicked addpoint:', addpointFeature);
        setSelectedAddpoint(addpointFeature);
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

  // Filters map data based on selected neighborhoods and service types and user role.
  const getFilteredData = () => {
    const filtered: GeoJsonData = { ...geoJsonData };

    // Filter addpoints based on both neighborhood, service type, and user role
    if (filtered.addpoints) {
      let filteredFeatures = filtered.addpoints.features;

      // Apply neighborhood filter from either props or internal state
      const activeNeighborhoods = selectedNeighborhood ? [selectedNeighborhood] : filters.selectedNeighborhoods;
      if (activeNeighborhoods.length > 0) {
        filteredFeatures = filteredFeatures.filter(feature => {
          const neighborhood = feature.properties?.neighbhood;
          return activeNeighborhoods.includes(neighborhood);
        });
      }

      // Apply service type filter (use 'Service Ty' property only)
      if (filters.selectedServiceTypes.length > 0) {
        filteredFeatures = filteredFeatures.filter(feature => {
          const serviceType = feature.properties?.["Service_Ty"];
          return filters.selectedServiceTypes.includes(serviceType);
        });
      }

      // Further restrict for contractors: only show allowed service types
      if (userData?.role === 'contractor' && userData.contractorType) {
        const allowedNames = contractorTypes[userData.contractorType] || [];
        filteredFeatures = filteredFeatures.filter(feature => {
          const serviceType = feature.properties?.["Service_Ty"];
          return allowedNames.includes(serviceType);
        });
      }

      filtered.addpoints = {
        ...filtered.addpoints,
        features: filteredFeatures
      };
    }

    // Filter neighborhood boundaries to only show selected neighborhoods (use 'MAPLABEL' only)
    const activeNeighborhoods = selectedNeighborhood ? [selectedNeighborhood] : filters.selectedNeighborhoods;
    if (filtered.NeighborhoodBoundaries && activeNeighborhoods.length > 0) {
      const filteredBoundaries = filtered.NeighborhoodBoundaries.features.filter(feature => {
        const neighborhood = feature.properties?.MAPLABEL;
        return activeNeighborhoods.includes(neighborhood);
      });

      filtered.NeighborhoodBoundaries = {
        ...filtered.NeighborhoodBoundaries,
        features: filteredBoundaries
      };
    }

    return filtered;
  };

  // Get the filtered data to display
  const displayData = getFilteredData();

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
        interactiveLayerIds={['addpoints', 'neighborhoods-fill']}
        mapboxAccessToken={import.meta.env.VITE_MAPBOX_ACCESS_TOKEN}
        style={{ width: '100%', height: '100%' }}
        mapStyle="mapbox://styles/mapbox/satellite-streets-v12"
        cursor={isAddingPoint ? 'crosshair' : 'auto'}
      >
        <NavigationControl position="top-right" />

        {/* Use filtered data for neighborhood boundaries */}
        {displayData.NeighborhoodBoundaries && (
          <Source id="neighborhoods" type="geojson" data={displayData.NeighborhoodBoundaries}>
            <Layer
              id="neighborhoods-fill"
              type="fill"
              paint={{
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

        {/* Use filtered data for addpoints*/}
        {displayData.addpoints && (
          <Source id="addpoints" type="geojson" data={displayData.addpoints}>
            <Layer id="addpoints" {...(layerStyles.addpoints as LayerProps)} />
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
          return (
            <PointPopup
              jobType={selectedAddpoint.properties?.["Service_Ty"]}
              location={selectedAddpoint.properties?.["Cross_Stre"]}
              status={selectedAddpoint.properties?.Status}
              fullAddress={selectedAddpoint.properties?.["Full_Addre"]}
              referralSource={selectedAddpoint.properties?.["Referral_S"]}
              estimate={selectedAddpoint.properties?.Estimate}
              feature={selectedAddpoint}
              onClose={() => setSelectedAddpoint(null)}
              onEdit={() => handleEditPoint(selectedAddpoint)}
              onStatusUpdate={() => { /* Optionally reload data here */ }}
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
    </div>
  );
};

export default MapComponent;