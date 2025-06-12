import { User } from 'firebase/auth';
import { Firestore } from 'firebase/firestore';
import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import GeoJSONLayer from '@arcgis/core/layers/GeoJSONLayer';
import Graphic from '@arcgis/core/Graphic';

export interface AuthState {
  isAuthenticated: boolean;
  currentUser: User | null;
  loading: boolean;
}

export interface MapState {
  map: Map | null;
  view: MapView | null;
  taxlotLayer: GeoJSONLayer | null;
  selectionsLayer: FeatureLayer | null;
  communityLayer: FeatureLayer | null;
  selectedFeatures: Graphic[];
  clickPoint: any | null;
}

export interface StorageInterface {
  ref: (path: string) => any;
  getDownloadURL: (path: string) => Promise<string>;
}

export interface FirebaseContextType {
  auth: AuthState;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  showMessage: (message: string, type: 'success' | 'error') => void;
  db: Firestore;
  storage: StorageInterface;
}

export interface LayerSource {
  id: string;
  title: string;
  type: 'geojson' | 'feature';
  sourceType: 'firebase' | 'rest';
  path?: string; // Firebase path
  url?: string;  // REST service URL
  renderer?: any;
  popupTemplate?: any;
  visible?: boolean;
  opacity?: number;
  outFields?: string[];
}

// Map Configuration Types
export interface MapExtent {
  xmin: number;
  ymin: number;
  xmax: number;
  ymax: number;
  spatialReference: { wkid: number };
}