import { useState, useEffect } from 'react';
import { Map, Source, Layer, NavigationControl, Marker } from 'react-map-gl';
import * as turf from '@turf/turf';
import { fetchAllGeoJSONLayers } from '../services/geojsonService';
import { useAuth } from '../services/auth-context';
import SponsorPopup from './SponsorPopup';
import PointPopup from './PointPopup';
import EditPointPanel from './EditPointPanel';
import NeighborhoodHoverPopup from './NeighborhoodHoverPopup'; 
import { FilterState } from './FilterPanel';
import layerStyles from '../constants/layerStyles.json';
import 'mapbox-gl/dist/mapbox-gl.css';
import { LayerProps } from 'react-map-gl';
import hairconnect from '../assets/hairconnect.png';
import bbox from '@turf/bbox';
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
  searchMarker?: {
    longitude: number;
    latitude: number;
    address: string;
  } | null;
  filters: FilterState;
  isAddingPoint: boolean;
  onPointAdd: (coords: { lat: number; lng: number; neighborhood?: string | null; crossStreet?: string | null }) => void;
  addPointCoordinates?: { lat: number; lng: number; neighborhood?: string | null; crossStreet?: string | null };
}

const MapComponent: React.FC<MapComponentProps> = ({ 
  viewState: externalViewState, 
  onViewStateChange,
  searchMarker,
  filters,
  isAddingPoint,
  onPointAdd,
  addPointCoordinates
}) => {
  // Get authentication state
  const { user: _user, userData, isAnonymous, loading: authLoading } = useAuth();
  
  // Use external viewState if provided, otherwise use internal state
  const [internalViewState, setInternalViewState] = useState({
    longitude: -122.5715,
    latitude: 45.498,
    zoom: 12
  });

  const currentViewState = externalViewState || internalViewState;
  
  const [geoJsonData, setGeoJsonData] = useState<GeoJsonData>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [showSponsorHighlight, setShowSponsorHighlight] = useState(true);
  const [highlightedSponsor, setHighlightedSponsor] = useState<GeoJSONFeature | null>(null);

  // State for popups
  const [selectedAddpoint, setSelectedAddpoint] = useState<GeoJSONFeature | null>(null);
  const [editingAddpoint, setEditingAddpoint] = useState<GeoJSONFeature | null>(null);

  // State for neighborhood selection
  const [selectedNeighborhood, setSelectedNeighborhood] = useState<string | null>(null);

  // State for neighborhood hover
  const [hoveredNeighborhood, setHoveredNeighborhood] = useState<{
    name: string;
    pointCount: number;
    x: number;
    y: number;
  } | null>(null);

  useEffect(() => {
    const loadGeoJSONData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        console.log('Loading GeoJSON data...');
        const role = !isAnonymous && userData ? userData.role : null;
        console.log('Current user role:', role || 'Guest');
        
        const layers = await fetchAllGeoJSONLayers();
        
        // Delete commented out block for filtering layers
        
        console.log('Loaded and filtered layers:', Object.keys(layers));
        setGeoJsonData(layers);
      } catch (err) {
        console.error('Error loading GeoJSON data:', err);
        setError(`Failed to load map data: ${err instanceof Error ? err.message : 'Unknown error'}`);
      } finally {
        setLoading(false);
      }
    };

    // Only load data after auth state is determined
    if (!authLoading) {
      loadGeoJSONData();
    }
  }, [isAnonymous, userData, authLoading]); // Reload when auth state changes

  useEffect(() => {
    if (geoJsonData.Sponsors) {
      const sponsorFeature = geoJsonData.Sponsors.features.find(
        f => f.properties?.Name === 'The Hair Connect'
      );
      if (sponsorFeature) {
        console.log('Sponsor feature found:', sponsorFeature);
        setHighlightedSponsor(sponsorFeature);
      } else {
        console.log('Sponsor feature not found');
      }
    }
  }, [geoJsonData.Sponsors]);

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

  // Counts the number of service points within a given neighborhood.
  const countPointsInNeighborhood = (neighborhoodName: string): number => {
    if (!geoJsonData.addpoints) return 0;
    
    return geoJsonData.addpoints.features.filter(feature => {
      const pointNeighborhood = feature.properties?.neighbhood;
      return pointNeighborhood === neighborhoodName;
    }).length;
  };

  // Utility function to check if a point is inside a polygon
  const getNeighborhoodFromCoordinates = (
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

      let neighborhood: string | null = null;
      if (geoJsonData.NeighborhoodBoundaries) {
        neighborhood = getNeighborhoodFromCoordinates(
          roundedLng,
          roundedLat,
          geoJsonData.NeighborhoodBoundaries
        )
      }

      let crossStreet: string | null = null;
      if (geoJsonData.PortlandStreets) {
        const point = turf.point([roundedLng, roundedLat]);
        const streets = geoJsonData.PortlandStreets.features;
        let streetsWithDistances: { street: any; distance: number }[] = [];

        streets.forEach(street => {
          if (street.geometry.type === 'LineString') {
            const distance = turf.pointToLineDistance(point, street as Feature<any>);
            streetsWithDistances.push({ street, distance });
          } else if (street.geometry.type === 'MultiLineString') {
            // For each LineString in the MultiLineString, treat as a separate street segment
            street.geometry.coordinates.forEach((coords: any) => {
              const singleLine = turf.lineString(coords, street.properties);
              const distance = turf.pointToLineDistance(point, singleLine as Feature<any>);
              // Attach the parent street's properties for name lookup
              streetsWithDistances.push({ street: { ...street, geometry: { type: 'LineString', coordinates: coords } }, distance });
            });
          }
        });

        streetsWithDistances.sort((a, b) => a.distance - b.distance);

        if (streetsWithDistances.length >= 2) {
          const street1 = streetsWithDistances[0].street.properties?.FullName;
          const street2 = streetsWithDistances[1].street.properties?.FullName;
          crossStreet = `${street1} & ${street2}`;
        }
      }

      onPointAdd({ lat: roundedLat, lng: roundedLng, neighborhood, crossStreet });

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

      // Check if a neighborhood was clicked
      const neighborhoodFeature = features.find((f: any) => f.source === 'neighborhoods');
      if (neighborhoodFeature) {
        const neighborhoodName = neighborhoodFeature.properties?.MAPLABEL || neighborhoodFeature.properties?.NAME;
        if (neighborhoodName) {
          setSelectedNeighborhood(neighborhoodName);
          const [minLng, minLat, maxLng, maxLat] = bbox(neighborhoodFeature.geometry);
          const newViewState = {
            ...currentViewState,
            longitude: (minLng + maxLng) / 2,
            latitude: (minLat + maxLat) / 2,
            zoom: 14,
          };
          if (onViewStateChange) {
            onViewStateChange(newViewState);
          } else {
            setInternalViewState(newViewState);
          }
        }
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

  // Shows a popup with neighborhood info on hover.
  const handleMouseMove = (event: any) => {
    const features = event.features;
    if (features && features.length > 0) {
      // Look for neighborhood boundary feature
      const neighborhoodFeature = features.find((f: any) => f.source === 'neighborhoods');
      if (neighborhoodFeature) {
        const neighborhoodName = neighborhoodFeature.properties?.MAPLABEL || neighborhoodFeature.properties?.NAME;
        if (neighborhoodName) {
          const pointCount = countPointsInNeighborhood(neighborhoodName);
          setHoveredNeighborhood({
            name: neighborhoodName,
            pointCount,
            x: event.point.x,
            y: event.point.y
          });
        }
      } else {
        // Not hovering over a neighborhood, clear the hover state
        setHoveredNeighborhood(null);
      }
    } else {
      setHoveredNeighborhood(null);
    }
  };

  // Changes the cursor to a pointer when hovering over interactive map elements.
  const handleMouseEnter = () => {
    if (currentViewState) {
      // Change cursor to pointer when hovering over interactive elements
    }
  };

  const handleMouseLeave = () => {
    // Reset cursor and clear hover state
    setHoveredNeighborhood(null);
  };

  // Filters map data based on selected neighborhoods and service types.
  const getFilteredData = () => {
    const filtered: GeoJsonData = { ...geoJsonData };

    // Filter addpoints based on both neighborhood and service type
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
          const serviceType = feature.properties?.["Service Ty"];
          return filters.selectedServiceTypes.includes(serviceType);
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
  if (authLoading || loading) {
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
            {isAnonymous ? 'Loading as guest' : `Logged in as ${userData?.role}`}
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

  return (
    <div style={{ height: '100vh', width: '100%', position: 'relative' }}>
      {/* Debug info - remove in production */}
      {!isAnonymous && userData && (
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
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
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
          <Source id="streets" type="geojson" data={geoJsonData.PortlandStreets}></Source>
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
        {showSponsorHighlight && highlightedSponsor && highlightedSponsor.geometry.type === 'Point' && (
          <Marker
            longitude={highlightedSponsor.geometry.coordinates[0]}
            latitude={highlightedSponsor.geometry.coordinates[1]}
            anchor="center"
          >
            <div className="sponsor-marker-container">
              <img
                src={hairconnect}
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
              onClose={() => setShowSponsorHighlight(false)}
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

      {/* Neighborhood Hover Popup */}
      {hoveredNeighborhood && (
        <NeighborhoodHoverPopup
          neighborhoodName={hoveredNeighborhood.name}
          pointCount={hoveredNeighborhood.pointCount}
          x={hoveredNeighborhood.x}
          y={hoveredNeighborhood.y}
        />
      )}

      {/* Addpoint Popup */}
      {selectedAddpoint && (
        (() => {
          return (
            <PointPopup
              jobType={selectedAddpoint.properties?.["Service Ty"]}
              location={selectedAddpoint.properties?.["Cross Stre"]}
              status={selectedAddpoint.properties?.Status}
              fullAddress={selectedAddpoint.properties?.["Full Addre"]}
              referralSource={selectedAddpoint.properties?.["Referral S"]}
              estimate={selectedAddpoint.properties?.Estimate}
              onClose={() => setSelectedAddpoint(null)}
              onEdit={() => handleEditPoint(selectedAddpoint)}
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