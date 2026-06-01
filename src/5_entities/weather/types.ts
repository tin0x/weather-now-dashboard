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

export type GeocodingCity = {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  country: string;
  admin1?: string;
  admin2?: string;
  admin3?: string;
};

export type WeatherResponseDTO = {
  utc_offset_seconds: number;
  current: {
    time: string;
    temperature_2m: number;
    relative_humidity_2m: number;
    wind_speed_10m: number;
    weather_code: number;
    precipitation: number;
    apparent_temperature: number;
    is_day: number;
  };
  hourly: {
    time: string[];
    temperature_2m: number[];
    weather_code: number[];
  };
  daily: {
    time: string[];
    weather_code: number[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
  };
};

export type GeolocationResponseDTO = {
  countryName: string;
  city: string;
};

export type GeocodingResponseDTO = {
  results: GeocodingCity[];
};

export type GeocodingArgs = {
  city: string;
  count: number;
};

export type CoordsArgs = {
  lat: number;
  lon: number;
};

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
  rawDate: Date;
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

export type MappedCurrentForecast = CurrentForecast;
export type MappedHourlyForecast = HourlyForecast[];
export type MappedDailyForecast = DailyForecast[];

export type MappedWeatherResponse = {
  current: MappedCurrentForecast;
  hourly: MappedHourlyForecast;
  daily: MappedDailyForecast;
};

export type MappedGeolocation = {
  country: string;
  city: string;
};

export type MappedGeocoding = {
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

export type MappedGeocodingArray = MappedGeocoding[] | null;

export type LocationState = {
  lat: number;
  lon: number;
  isSearchResultCity: boolean;
};

// прочистити зайві поля DTO
