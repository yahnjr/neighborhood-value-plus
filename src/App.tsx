import { useState } from 'react';
import Header from './components/Header';
import MapComponent from './components/MapComponent';
import { FilterState } from './components/FilterPanel';
import './App.css';
import { AuthProvider } from './services/auth-context';
import { useGeoJSONData } from "./hooks/useGeoJSONData";

interface MapViewState {
  longitude: number;
  latitude: number;
  zoom: number;
}

interface SearchMarker {
  longitude: number;
  latitude: number;
  address: string;
}

function App() {
  // Debug environment variables
  console.log('Environment Variables Debug:');
  console.log({
    firebase: {
      apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
      authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
      projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
      storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
      appId: import.meta.env.VITE_FIREBASE_APP_ID
    },
    supabase: {
      url: import.meta.env.VITE_SUPABASE_URL,
      anonKey: import.meta.env.VITE_SUPABASE_ANON_KEY?.slice(0, 8) + '...' // Only show first 8 chars for security
    },
    mapbox: {
      token: import.meta.env.VITE_MAPBOX_ACCESS_TOKEN?.slice(0, 8) + '...' // Only show first 8 chars for security
    }
  });

  const geojson = useGeoJSONData();

  const [mapViewState, setMapViewState] = useState<MapViewState>({
    longitude: -122.5715,
    latitude: 45.498,
    zoom: 12
  });

  const [searchMarker, setSearchMarker] = useState<SearchMarker | null> (null);

  // Filter state and panel open/close state
  const [filters, setFilters] = useState<FilterState>({
    selectedNeighborhoods: [],
    selectedServiceTypes: []
  });
  const [filterPanelOpen, setFilterPanelOpen] = useState(false);
  const [isAddingPoint, setIsAddingPoint] = useState(false);
  const [addPointCoordinates, setAddPointCoordinates] = useState<{ lat: number; lng: number; neighborhood?: string | null; crossStreet?: string | null } | null>(null);

  const handleLocationSelect = (locationData: MapViewState & { address: string }) => {
    // Update map view state
    setMapViewState({
      longitude: locationData.longitude,
      latitude: locationData.latitude,
      zoom: locationData.zoom
    });

    // Set search marker
    setSearchMarker({
      longitude: locationData.longitude,
      latitude: locationData.latitude,
      address: locationData.address
    });

    // Optional: Clear search marker after some time
    setTimeout(() => {
      setSearchMarker(null);
    }, 10000); // Remove marker after 10 seconds
  };

  // Handle map view state changes (when user pans/zooms manually)
  const handleViewStateChange = (newViewState: MapViewState) => {
    setMapViewState(newViewState);
  };

  // Handler for filter changes
  const handleFiltersChange = (newFilters: FilterState) => {
    setFilters(newFilters);
  };

  // Handler for adding a point and refreshing map data
  const handleAddPointAndRefresh = async (point: any) => {
    // Add the point to the layer (default 'addpoints')
    await geojson.addPoint("addpoints", point);
    // Refresh all layers so the map updates
    await geojson.refreshAllLayers();
    // Optionally clear add point coordinates
    setAddPointCoordinates(null);
  };

  const handlePointAdd = (coords: { lat: number; lng: number; neighborhood?: string | null; crossStreet?: string | null }) => {
    setAddPointCoordinates(coords);
    setIsAddingPoint(false); // Turn off adding mode after selecting a point
  };

  return (
    <AuthProvider>
      <div className="App">
        <Header
          onLocationSelect={handleLocationSelect}
          filters={filters}
          onFiltersChange={handleFiltersChange}
          filterPanelOpen={filterPanelOpen}
          setFilterPanelOpen={setFilterPanelOpen}
          isAddingPoint={isAddingPoint}
          setIsAddingPoint={setIsAddingPoint}
          addPointCoordinates={addPointCoordinates === null ? undefined : addPointCoordinates}
          setAddPointCoordinates={setAddPointCoordinates}
          onAddPoint={handleAddPointAndRefresh}
        />
        <MapComponent
          viewState={mapViewState}
          onViewStateChange={handleViewStateChange}
          searchMarker={searchMarker}
          filters={filters}
          isAddingPoint={isAddingPoint}
          onPointAdd={handlePointAdd}
          addPointCoordinates={addPointCoordinates === null ? undefined : addPointCoordinates}
          geoJsonData={geojson.layers}
          loadingGeoJson={geojson.loading}
        />
      </div>
    </AuthProvider>
  );
}

export default App;