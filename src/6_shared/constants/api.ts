export const WEATHER_API = {
  BASE: import.meta.env.VITE_WEATHER_API_BASE_URL,
  FORECAST: '/forecast',
};

export const GEOLOCATION_API = {
  BASE: import.meta.env.VITE_GEOLOCATION_API_BASE_URL,
  REVERSE: '/data/reverse-geocode-client',
};

export const GEOCODING_API = {
  BASE: import.meta.env.VITE_GEOCODING_API_BASE_URL,
  SEARCH: '/search',
};
