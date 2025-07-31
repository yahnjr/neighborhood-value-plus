import supabase from './supabase';

// GeoJSON types
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

// Cache for storing loaded GeoJSON data
const geoJSONCache: { [key: string]: GeoJSON } = {};

// Map Firebase layer names to Supabase table names
const TABLE_MAPPING = {
  'addpoints': 'servicepoints', // lowercase to match Supabase table name
  'Sponsors': 'sponsors',
  'NeighborhoodBoundaries': 'neighborhoods',
  'PortlandStreets': 'streets'
};

// Convert Supabase row to GeoJSON Feature
const rowToGeoJSON = (row: any): GeoJSONFeature => {
  return {
    type: 'Feature',
    id: row.id,
    geometry: row.geom,
    properties: {
      ...row.properties,
      created_at: row.created_at
    }
  };
};

export const fetchGeoJSONLayer = async (layerName: string): Promise<GeoJSON> => {
  try {
    // Check cache first
    if (geoJSONCache[layerName]) {
      return geoJSONCache[layerName];
    }

    const tableName = TABLE_MAPPING[layerName as keyof typeof TABLE_MAPPING];
    if (!tableName) {
      throw new Error(`Unknown layer: ${layerName}`);
    }

    const { data, error } = await supabase
      .from(tableName)
      .select('id, geom, properties, created_at');

    if (error) {
      throw error;
    }
    if (!data) {
      throw new Error('No data returned');
    }

    // Convert to GeoJSON
    const geoJson: GeoJSON = {
      type: 'FeatureCollection',
      features: data.map(rowToGeoJSON)
    };

    // Cache the data
    geoJSONCache[layerName] = geoJson;

    return geoJson;
  } catch (error) {
    console.error(`Error fetching ${layerName}:`, error);
    throw error;
  }
};

export const addFeatureToLayer = async (layerName: string, feature: GeoJSONFeature): Promise<GeoJSON> => {
  try {
    const tableName = TABLE_MAPPING[layerName as keyof typeof TABLE_MAPPING];
    if (!tableName) {
      throw new Error(`Unknown layer: ${layerName}`);
    }

    const { data, error } = await supabase
      .from(tableName)
      .insert({
        geom: feature.geometry,
        properties: feature.properties
      })
      .select()
      .single();

    if (error) throw error;
    if (!data) throw new Error('No data returned after insert');

    // Clear cache for this layer
    clearLayerCache(layerName);

    // Fetch and return updated layer
    return await fetchGeoJSONLayer(layerName);
  } catch (error) {
    console.error(`Error adding feature to ${layerName}:`, error);
    throw error;
  }
};

export const updateFeatureInLayer = async (layerName: string, updatedFeature: GeoJSONFeature): Promise<GeoJSON> => {
  try {
    const tableName = TABLE_MAPPING[layerName as keyof typeof TABLE_MAPPING];
    if (!tableName) {
      throw new Error(`Unknown layer: ${layerName}`);
    }

    const { error } = await supabase
      .from(tableName)
      .update({
        geom: updatedFeature.geometry,
        properties: updatedFeature.properties
      })
      .eq('id', updatedFeature.id);

    if (error) throw error;

    // Clear cache for this layer
    clearLayerCache(layerName);

    // Fetch and return updated layer
    return await fetchGeoJSONLayer(layerName);
  } catch (error) {
    console.error(`Error updating feature in ${layerName}:`, error);
    throw error;
  }
};

export const deleteFeatureFromLayer = async (layerName: string, featureId: string): Promise<GeoJSON> => {
  try {
    const tableName = TABLE_MAPPING[layerName as keyof typeof TABLE_MAPPING];
    if (!tableName) {
      throw new Error(`Unknown layer: ${layerName}`);
    }

    const { error } = await supabase
      .from(tableName)
      .delete()
      .eq('id', featureId);

    if (error) throw error;

    // Clear cache for this layer
    clearLayerCache(layerName);

    // Fetch and return updated layer
    return await fetchGeoJSONLayer(layerName);
  } catch (error) {
    console.error(`Error deleting feature from ${layerName}:`, error);
    throw error;
  }
};

export const clearLayerCache = (layerName: string): void => {
  delete geoJSONCache[layerName];
};

export const clearAllCache = (): void => {
  Object.keys(geoJSONCache).forEach(key => delete geoJSONCache[key]);
};

export const getSponsorLogoUrl = async (imageName: string): Promise<string> => {
  try {
    const { data } = supabase
      .storage
      .from('sponsor-logos')
      .getPublicUrl(imageName);
    
    return data.publicUrl;
  } catch (error) {
    console.error('Error getting sponsor logo URL:', error);
    throw error;
  }
};

export const fetchAllGeoJSONLayers = async (): Promise<{ [key: string]: GeoJSON }> => {
  const results: { [key: string]: GeoJSON } = {};
  const errors: { [key: string]: string } = {};
 
  // Try to fetch each layer, but don't fail if some are missing
  const layerNames = Object.keys(TABLE_MAPPING);
  const fetchPromises = layerNames.map(async (layerName) => {
    try {
      const data = await fetchGeoJSONLayer(layerName);
      results[layerName] = data;
    } catch (error) {
      console.warn(`Failed to load ${layerName}:`, error);
      errors[layerName] = error instanceof Error ? error.message : 'Unknown error';
    }
  });
 
  await Promise.allSettled(fetchPromises);
 
  // Handle any errors silently and return successful results
 
  return results;
};
