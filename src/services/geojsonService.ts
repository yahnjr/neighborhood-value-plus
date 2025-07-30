// geojsonService.ts
import { getDownloadURL, ref, uploadString, listAll } from 'firebase/storage';
import { storage } from './firebase';
import { getAuth } from 'firebase/auth';

export interface GeoJSONFeature {
  type: 'Feature';
  id?: string | number;
  geometry: {
    type: string;
    coordinates: any;
  };
  properties: { [key: string]: any };
}

export interface GeoJSON {
  type: 'FeatureCollection';
  features: GeoJSONFeature[];
}

// Define which layers exist
const LAYER_NAMES = [
  'NeighborhoodBoundaries',
  'addpoints',
  'Sponsors',
  'PortlandStreets'
];

// Cache for storing loaded GeoJSON data
const geoJSONCache: { [key: string]: GeoJSON } = {};

export const fetchGeoJSONLayer = async (layerName: string): Promise<GeoJSON> => {
  try {
    // Check cache first
    if (geoJSONCache[layerName]) {
      console.log(`Using cached data for ${layerName}`);
      return geoJSONCache[layerName];
    }
   
    // Try different possible paths for the files
    const possiblePaths = [
      // `geojson/${layerName}.geojson`,
      `${layerName}.geojson`
      // `data/${layerName}.geojson`
    ];
   
    let downloadURL: string | null = null;
    let lastError: Error | null = null;
   
    // Try each path until we find the file
    for (const path of possiblePaths) {
      try {
        const fileRef = ref(storage, path);
        downloadURL = await getDownloadURL(fileRef);
        break;
      } catch (error) {
        console.log(`File not found at path: ${path}`);
        lastError = error as Error;
        continue;
      }
    }
   
    if (!downloadURL) {
      throw new Error(`Could not find ${layerName}.geojson in any expected location. Last error: ${lastError?.message}`);
    }
   
    // Fetch the actual GeoJSON data
    const response = await fetch(downloadURL);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
   
    const geoJsonData: GeoJSON = await response.json();
   
    // Cache the data
    geoJSONCache[layerName] = geoJsonData;
   
    return geoJsonData;
  } catch (error) {
    console.error(`Error fetching ${layerName}.geojson:`, error);
    throw error;
  }
};

export const fetchAllGeoJSONLayers = async (): Promise<{ [key: string]: GeoJSON }> => {
  const results: { [key: string]: GeoJSON } = {};
  const errors: { [key: string]: string } = {};
 
  // Try to fetch each layer, but don't fail if some are missing
  const fetchPromises = LAYER_NAMES.map(async (layerName) => {
    try {
      const data = await fetchGeoJSONLayer(layerName);
      results[layerName] = data;
    } catch (error) {
      console.warn(`Failed to load ${layerName}:`, error);
      errors[layerName] = error instanceof Error ? error.message : 'Unknown error';
    }
  });
 
  await Promise.allSettled(fetchPromises);
 
  // Log summary
  console.log('Loaded layers:', Object.keys(results));
  if (Object.keys(errors).length > 0) {
    console.warn('Failed to load layers:', errors);
  }
 
  // Return what we successfully loaded
  return results;
};

// New functions for data editing

/**
 * Save GeoJSON data back to Firebase Storage
 */
export const saveGeoJSONLayer = async (layerName: string, geoJsonData: GeoJSON): Promise<void> => {
  try {
    console.log(`Saving ${layerName}...`);
    // Log current user info
    const auth = getAuth();
    const currentUser = auth.currentUser;
    if (currentUser) {
      // Log all available user info
      console.log('[saveGeoJSONLayer] Authenticated user:', {
        uid: currentUser.uid,
        email: currentUser.email,
        displayName: currentUser.displayName,
        isAnonymous: currentUser.isAnonymous,
        providerData: currentUser.providerData,
      });
    } else {
      console.log('[saveGeoJSONLayer] No authenticated user');
    }
    // Convert GeoJSON object to string
    const geoJsonString = JSON.stringify(geoJsonData, null, 2);
    // Determine the storage path (use the first path from our standard paths)
    const storagePath = `${layerName}.geojson`;
    const fileRef = ref(storage, storagePath);
    // Log the uploadString request
    console.log('[saveGeoJSONLayer] uploadString request:', {
      storagePath,
      geoJsonString,
      contentType: 'application/json',
      user: currentUser ? {
        uid: currentUser.uid,
        email: currentUser.email,
        displayName: currentUser.displayName,
        isAnonymous: currentUser.isAnonymous,
      } : null
    });
    // Upload the updated GeoJSON data
    await uploadString(fileRef, geoJsonString, 'raw', {
      contentType: 'application/json'
    });
    // Update cache
    geoJSONCache[layerName] = geoJsonData;
    console.log(`Successfully saved ${layerName} to ${storagePath}`);
  } catch (error) {
    console.error(`Error saving ${layerName}:`, error);
    throw error;
  }
};

/**
 * Add a new feature to a GeoJSON layer
 */
export const addFeatureToLayer = async (layerName: string, feature: GeoJSONFeature): Promise<GeoJSON> => {
  try {
    // Fetch the current layer data
    const currentData = await fetchGeoJSONLayer(layerName);
    
    // Generate a unique ID for the new feature if it doesn't have one
    if (!feature.id) {
      feature.id = `feature_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    }
    
    // Add the new feature
    const updatedData: GeoJSON = {
      ...currentData,
      features: [...currentData.features, feature]
    };
    
    // Save back to Firebase
    await saveGeoJSONLayer(layerName, updatedData);
    
    return updatedData;
  } catch (error) {
    console.error(`Error adding feature to ${layerName}:`, error);
    throw error;
  }
};

/**
 * Update an existing feature in a GeoJSON layer
 */
export const updateFeatureInLayer = async (layerName: string, updatedFeature: GeoJSONFeature): Promise<GeoJSON> => {
  try {
    // Fetch the current layer data
    const currentData = await fetchGeoJSONLayer(layerName);
    
    // Find and update the feature
    const featureId = updatedFeature.properties.FID;
    if (!featureId) {
      throw new Error('Feature must have an id to be updated');
    }
    
    const updatedFeatures = currentData.features.map((feature) => 
      feature.id === featureId ? updatedFeature : feature
    );
    
    const updatedData: GeoJSON = {
      ...currentData,
      features: updatedFeatures
    };
    
    // Save back to Firebase
    await saveGeoJSONLayer(layerName, updatedData);
    
    return updatedData;
  } catch (error) {
    console.error(`Error updating feature in ${layerName}:`, error);
    throw error;
  }
};

/**
 * Delete a feature from a GeoJSON layer
 */
export const deleteFeatureFromLayer = async (layerName: string, featureId: string): Promise<GeoJSON> => {
  try {
    // Fetch the current layer data
    const currentData = await fetchGeoJSONLayer(layerName);
    
    // Remove the feature
    const updatedFeatures = currentData.features.filter(
      (feature) => feature.id !== featureId
    );
    
    const updatedData: GeoJSON = {
      ...currentData,
      features: updatedFeatures
    };
    
    // Save back to Firebase
    await saveGeoJSONLayer(layerName, updatedData);
    
    return updatedData;
  } catch (error) {
    console.error(`Error deleting feature from ${layerName}:`, error);
    throw error;
  }
};

/**
 * Clear cache for a specific layer (useful after external changes)
 */
export const clearLayerCache = (layerName: string): void => {
  delete geoJSONCache[layerName];
};

/**
 * Clear all cached data
 */
export const clearAllCache = (): void => {
  Object.keys(geoJSONCache).forEach(key => delete geoJSONCache[key]);
};

/**
 * Get all available layers in Firebase Storage
 */
export const getAvailableLayers = async (): Promise<string[]> => {
  try {
    const geojsonRef = ref(storage, 'geojson/');
    const result = await listAll(geojsonRef);
    
    const layerNames = result.items
      .filter(item => item.name.endsWith('.geojson'))
      .map(item => item.name.replace('.geojson', ''));
    
    return layerNames;
  } catch (error) {
    console.error('Error getting available layers:', error);
    // Fallback to predefined layer names
    return LAYER_NAMES;
  }
};

/**
 * Create a backup of a layer before making changes
 */
export const createLayerBackup = async (layerName: string): Promise<void> => {
  try {
    const currentData = await fetchGeoJSONLayer(layerName);
    const backupName = `${layerName}_backup_${new Date().toISOString().replace(/[:.]/g, '-')}`;
    await saveGeoJSONLayer(backupName, currentData);
    console.log(`Created backup: ${backupName}`);
  } catch (error) {
    console.error(`Error creating backup for ${layerName}:`, error);
    throw error;
  }
};