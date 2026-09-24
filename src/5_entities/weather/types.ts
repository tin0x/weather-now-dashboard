// GEOCODING

export type GeocodingResponse = {
  id: number;
  city: string;
  country: string;
  location: {
    lat: number;
    lon: number;
  };
  adminDivision: {
    admin1: string | null;
    admin2: string | null;
    admin3: string | null;
  };
};

export type GeocodingArgs = {
  city: string;
  count: number;
};

// GEOLOCATION

export type Geolocation = {
  country: string;
  city: string;
};

export type GeolocationArgs = {
  lat: number;
  lon: number;
};

// WEATHER

export type CurrentForecast = {
  country?: string;
  city?: string;
  date: string;
  feelsLike: number;
  precipitation: number;
  temp: number;
  wind: number;
  humidity: number;
  isDay: boolean;
  icon: number;
};

export type HourlyForecast = {
  id: string;
  rawDate: string;
  utcSeconds: number;
  temp: number;
  formattedHour: string;
  icon: number;
};

export type DailyForecast = {
  id: string;
  dayName: string;
  maxTemp: number;
  minTemp: number;
  icon: number;
};

export type MappedWeatherResponse = {
  current: CurrentForecast;
  hourly: HourlyForecast[];
  daily: DailyForecast[];
};

// Reducer State

export type LocationState = {
  lat: number;
  lon: number;
  isSearchResultCity: boolean;
};

// UI

export type WeatherStatWidgetProps = CurrentForecast;

export type LocationBannerProps = {
  icon: string;
  city: string | undefined;
  country: string | undefined;
  date: string;
  temp: string;
  isDay: boolean;
};

export type DailyForecastItemProps = {
  day: string;
  icon: string;
  maxTemp: string;
  minTemp: string;
};
export type HourlyForecastItemProps = {
  hour: string;
  temp: string;
  icon: string;
  isNight: boolean;
};
