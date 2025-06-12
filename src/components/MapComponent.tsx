import { useState, useEffect } from 'react';
import { Map, Source, Layer, NavigationControl, Marker } from 'react-map-gl';
import { fetchAllGeoJSONLayers, filterAttributesForUser } from '../services/geojsonService';
import { useAuth } from '../services/auth-context'; // Import the auth context
import SponsorPopup from './SponsorPopup';
import PointPopup from './PointPopup';
import NeighborhoodHoverPopup from './NeighborhoodHoverPopup'; 
import { FilterState } from './FilterPanel';
import layerStyles from '../constants/layerStyles.json';
import 'mapbox-gl/dist/mapbox-gl.css';
import { LayerProps } from 'react-map-gl';

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
  onPointAdd: (coords: { lat: number; lng: number }) => void;
  addPointCoordinates?: { lat: number; lng: number };
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

  // State for addpoint popup
  const [selectedAddpoint, setSelectedAddpoint] = useState<GeoJSONFeature | null>(null);

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
        
        // Filter data based on user role
        const filteredLayers: GeoJsonData = {};
        Object.keys(layers).forEach(layerName => {
          filteredLayers[layerName] = filterAttributesForUser(
            layers[layerName], 
            layerName, 
            role
          );
        });
        
        console.log('Loaded and filtered layers:', Object.keys(filteredLayers));
        setGeoJsonData(filteredLayers);
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
  };

  // Function to count points within a neighborhood
  const countPointsInNeighborhood = (neighborhoodName: string): number => {
    if (!geoJsonData.addpoints) return 0;
    
    return geoJsonData.addpoints.features.filter(feature => {
      const pointNeighborhood = feature.properties?.neighbhood;
      return pointNeighborhood === neighborhoodName;
    }).length;
  };

  // Handle map clicks
  const handleMapClick = (event: any) => {
    if (isAddingPoint) {
      const { lng, lat } = event.lngLat;
      onPointAdd({ lng, lat });
      return;
    }
    // Check if clicked on addpoints layer
    const features = event.features;
    if (features && features.length > 0) {
      const addpointFeature = features.find((f: any) => f.source === 'addpoints');
      if (addpointFeature) {
        console.log('Clicked addpoint:', addpointFeature);
        setSelectedAddpoint(addpointFeature);
      }
    }
  };

  // Handle mouse move for neighborhood hover
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

  // Handle cursor changes on hover
  const handleMouseEnter = () => {
    if (currentViewState) {
      // Change cursor to pointer when hovering over interactive elements
    }
  };

  const handleMouseLeave = () => {
    // Reset cursor and clear hover state
    setHoveredNeighborhood(null);
  };

  // Create filtered GeoJSON data based on filters from props
  const getFilteredData = () => {
    const filtered: GeoJsonData = { ...geoJsonData };

    // Filter addpoints based on both neighborhood and service type
    if (filtered.addpoints) {
      let filteredFeatures = filtered.addpoints.features;

      // Apply neighborhood filter (use 'neighborhood' property only)
      if (filters.selectedNeighborhoods.length > 0) {
        filteredFeatures = filteredFeatures.filter(feature => {
          const neighborhood = feature.properties?.neighbhood;
          return filters.selectedNeighborhoods.includes(neighborhood);
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
    if (filtered.NeighborhoodBoundaries && filters.selectedNeighborhoods.length > 0) {
      const filteredBoundaries = filtered.NeighborhoodBoundaries.features.filter(feature => {
        const neighborhood = feature.properties?.MAPLABEL;
        console.log('Comparing boundary MAPLABEL:', neighborhood, 'against', filters.selectedNeighborhoods);
        return filters.selectedNeighborhoods.includes(neighborhood);
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

        {/* Use filtered data for addpoints - now with click interaction */}
        {displayData.addpoints && (
          <Source id="addpoints" type="geojson" data={displayData.addpoints}>
            <Layer id="addpoints" {...(layerStyles.addpoints as LayerProps)} />
          </Source>
        )}

        {/* Sponsors layer (not filtered) */}
        {geoJsonData.Sponsors && (
          <Source id="sponsors" type="geojson" data={geoJsonData.Sponsors}>
            <Layer {...(layerStyles.Sponsors as LayerProps)} />
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
        {showSponsorHighlight && highlightedSponsor && highlightedSponsor.geometry.type === 'Point' && (
          <Marker
            longitude={highlightedSponsor.geometry.coordinates[0]}
            latitude={highlightedSponsor.geometry.coordinates[1]}
            anchor="center"
          >
            <div className="sponsor-marker-container">
              <img
                src="/src/assets/hairconnect.png"
                alt="Sponsor Logo"
                className="sponsor-marker-img"
              />
            </div>
          </Marker>
        )}

        {/* Sponsor Popup */}
        {showSponsorHighlight && highlightedSponsor && !selectedAddpoint && (
          <div
            style={{
              position: 'fixed',
              left: 24,
              bottom: 24, // Always 24 if no addpoint popup
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
          <Marker longitude={addPointCoordinates.lng} latitude={addPointCoordinates.lat} anchor="bottom">
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
              referralSource={selectedAddpoint.properties?.["Refferal S"]}
              estimate={selectedAddpoint.properties?.Estimate}
              onClose={() => setSelectedAddpoint(null)}
            />
          );
        })()
      )}
    </div>
  );
};

export default MapComponent;