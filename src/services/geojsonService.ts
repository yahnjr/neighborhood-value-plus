// geojsonService.ts
import { getDownloadURL, ref } from 'firebase/storage';
import { storage } from './firebase';

export interface GeoJSONFeature {
  type: 'Feature';
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

export const fetchGeoJSONLayer = async (layerName: string): Promise<GeoJSON> => {
  try {
    console.log(`Fetching ${layerName}...`);
    
    // Try different possible paths for the files
    const possiblePaths = [
      `geojson/${layerName}.geojson`,
      `${layerName}.geojson`,
      `data/${layerName}.geojson`
    ];
    
    let downloadURL: string | null = null;
    let lastError: Error | null = null;
    
    // Try each path until we find the file
    for (const path of possiblePaths) {
      try {
        const fileRef = ref(storage, path);
        downloadURL = await getDownloadURL(fileRef);
        console.log(`Found ${layerName} at path: ${path}`);
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
    console.log(`Successfully loaded ${layerName}:`, geoJsonData);
    
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
