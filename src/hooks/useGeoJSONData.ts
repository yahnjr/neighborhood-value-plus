// hooks/useGeoJSONData.ts
import { useState, useEffect, useCallback } from 'react';
import { 
  GeoJSON, 
  GeoJSONFeature, 
  fetchAllGeoJSONLayers,
  fetchGeoJSONLayer,
  addFeatureToLayer,
  updateFeatureInLayer,
  deleteFeatureFromLayer,
  createLayerBackup,
  clearLayerCache
} from '../services/geojsonService';

interface UseGeoJSONDataReturn {
  // State
  layers: { [key: string]: GeoJSON };
  loading: boolean;
  error: string | null;
  
  // Actions
  refreshLayer: (layerName: string) => Promise<void>;
  refreshAllLayers: () => Promise<void>;
  addPoint: (layerName: string, feature: GeoJSONFeature) => Promise<void>;
  updatePoint: (layerName: string, feature: GeoJSONFeature) => Promise<void>;
  deletePoint: (layerName: string, featureId: string) => Promise<void>;
  createBackup: (layerName: string) => Promise<void>;
  
  // Utilities
  getLayerFeatures: (layerName: string) => GeoJSONFeature[];
  findFeatureById: (layerName: string, featureId: string) => GeoJSONFeature | undefined;
}

export const useGeoJSONData = (): UseGeoJSONDataReturn => {
  const [layers, setLayers] = useState<{ [key: string]: GeoJSON }>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Initial data load
  useEffect(() => {
    const loadInitialData = async () => {
      setLoading(true);
      setError(null);
      try {
        const allLayers = await fetchAllGeoJSONLayers();
        setLayers(allLayers);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load initial data');
        console.error('Error loading initial data:', err);
      } finally {
        setLoading(false);
      }
    };

    loadInitialData();
  }, []);

  // Refresh a specific layer
  const refreshLayer = useCallback(async (layerName: string) => {
    setError(null);
    try {
      // Clear cache to force fresh fetch
      clearLayerCache(layerName);
      const layerData = await fetchGeoJSONLayer(layerName);
      setLayers(prev => ({
        ...prev,
        [layerName]: layerData
      }));
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : `Failed to refresh ${layerName}`;
      setError(errorMessage);
      console.error(`Error refreshing layer ${layerName}:`, err);
      throw err;
    }
  }, []);

  // Refresh all layers
  const refreshAllLayers = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const allLayers = await fetchAllGeoJSONLayers();
      setLayers(allLayers);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to refresh all layers';
      setError(errorMessage);
      console.error('Error refreshing all layers:', err);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  // Add a new point
  const addPoint = useCallback(async (layerName: string, feature: GeoJSONFeature) => {
    setError(null);
    try {
      const updatedLayer = await addFeatureToLayer(layerName, feature);
      setLayers(prev => ({
        ...prev,
        [layerName]: updatedLayer
      }));
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : `Failed to add point to ${layerName}`;
      setError(errorMessage);
      console.error(`Error adding point to ${layerName}:`, err);
      throw err;
    }
  }, []);

  // Update an existing point
  const updatePoint = useCallback(async (layerName: string, feature: GeoJSONFeature) => {
    setError(null);
    try {
      const updatedLayer = await updateFeatureInLayer(layerName, feature);
      setLayers(prev => ({
        ...prev,
        [layerName]: updatedLayer
      }));
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : `Failed to update point in ${layerName}`;
      setError(errorMessage);
      console.error(`Error updating point in ${layerName}:`, err);
      throw err;
    }
  }, []);

  // Delete a point
  const deletePoint = useCallback(async (layerName: string, featureId: string) => {
    setError(null);
    try {
      const updatedLayer = await deleteFeatureFromLayer(layerName, featureId);
      setLayers(prev => ({
        ...prev,
        [layerName]: updatedLayer
      }));
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : `Failed to delete point from ${layerName}`;
      setError(errorMessage);
      console.error(`Error deleting point from ${layerName}:`, err);
      throw err;
    }
  }, []);

  // Create a backup of a layer
  const createBackup = useCallback(async (layerName: string) => {
    setError(null);
    try {
      await createLayerBackup(layerName);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : `Failed to create backup for ${layerName}`;
      setError(errorMessage);
      console.error(`Error creating backup for ${layerName}:`, err);
      throw err;
    }
  }, []);

  // Get features for a specific layer
  const getLayerFeatures = useCallback((layerName: string): GeoJSONFeature[] => {
    return layers[layerName]?.features || [];
  }, [layers]);

  // Find a specific feature by ID
  const findFeatureById = useCallback((layerName: string, featureId: string): GeoJSONFeature | undefined => {
    const layerFeatures = getLayerFeatures(layerName);
    return layerFeatures.find(feature => feature.properties?.id === featureId);
  }, [getLayerFeatures]);

  return {
    // State
    layers,
    loading,
    error,
    
    // Actions
    refreshLayer,
    refreshAllLayers,
    addPoint,
    updatePoint,
    deletePoint,
    createBackup,
    
    // Utilities
    getLayerFeatures,
    findFeatureById
  };
};