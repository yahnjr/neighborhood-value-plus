function requireEnvVar(name: string): string {
  const value = import.meta.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

export const config = {
  firebase: {
    apiKey: requireEnvVar('VITE_FIREBASE_API_KEY'),
    authDomain: requireEnvVar('VITE_FIREBASE_AUTH_DOMAIN'),
    projectId: requireEnvVar('VITE_FIREBASE_PROJECT_ID'),
    storageBucket: requireEnvVar('VITE_FIREBASE_STORAGE_BUCKET'),
    messagingSenderId: requireEnvVar('VITE_FIREBASE_MESSAGING_SENDER_ID'),
    appId: requireEnvVar('VITE_FIREBASE_APP_ID')
  },
  supabase: {
    url: requireEnvVar('VITE_SUPABASE_URL'),
    anonKey: requireEnvVar('VITE_SUPABASE_ANON_KEY')
  },
  mapbox: {
    accessToken: requireEnvVar('VITE_MAPBOX_ACCESS_TOKEN')
  }
} as const;
