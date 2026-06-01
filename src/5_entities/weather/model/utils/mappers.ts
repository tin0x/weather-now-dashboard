import type {
  GeocodingResponseDTO,
  GeolocationResponseDTO,
  MappedCurrentForecast,
  MappedDailyForecast,
  MappedGeocodingArray,
  MappedGeolocation,
  MappedHourlyForecast,
  MappedWeatherResponse,
  WeatherResponseDTO,
} from '@entities/weather/types.ts';

const userLocale = window.navigator.language;

export const mapCurrentForecast = (data: WeatherResponseDTO): MappedCurrentForecast => {
  const { current } = data;
  const date = new Date(current.time);

  return {
    date: date.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    }),
    feelsLike: current.apparent_temperature,
    precipitation: current.precipitation,
    temp: Math.round(current.temperature_2m),
    wind: current.wind_speed_10m,
    humidity: current.relative_humidity_2m,
    isDay: Boolean(current.is_day),
    icon: current.weather_code,
  };
};

export const mapHourlyForecast = (data: WeatherResponseDTO): MappedHourlyForecast => {
  const { time, temperature_2m, weather_code } = data.hourly;

  return time.map((t: string, index: number) => ({
    id: t,
    rawDate: new Date(t),
    utcSeconds: data.utc_offset_seconds,
    temp: Math.round(temperature_2m[index]),
    icon: weather_code[index],
    formattedHour: new Date(t).toLocaleTimeString(userLocale, {
      hour: userLocale === 'en-US' ? 'numeric' : '2-digit',
      minute: userLocale === 'en-US' ? undefined : '2-digit',
    }),
  }));
};

export const mapDailyForecast = (data: WeatherResponseDTO): MappedDailyForecast => {
  const { time, weather_code, temperature_2m_max, temperature_2m_min } = data.daily;

  return time.map((t: string, index: number) => {
    const date = new Date(t);

    return {
      id: t,
      dayName: date.toLocaleDateString('en-US', { weekday: 'short' }),
      maxTemp: Math.round(temperature_2m_max[index]),
      minTemp: Math.round(temperature_2m_min[index]),
      icon: weather_code[index],
    };
  });
};

export const mapWeatherResponse = (data: WeatherResponseDTO): MappedWeatherResponse => ({
  current: mapCurrentForecast(data),
  hourly: mapHourlyForecast(data),
  daily: mapDailyForecast(data),
});

export const mapGeolocation = (data: GeolocationResponseDTO): MappedGeolocation => {
  const { countryName, city } = data;

  return {
    country: countryName,
    city,
  };
};

export const mapGeocoding = (data: GeocodingResponseDTO | undefined): MappedGeocodingArray => {
  if (!data || !data.results) return [];

  return data.results.map((item) => ({
    id: item.id,
    city: item.name,
    country: item.country,
    location: {
      lat: item.latitude,
      lon: item.longitude,
    },
    adminDivision: {
      admin1: item.admin1 ?? null,
      admin2: item.admin2 ?? null,
      admin3: item.admin3 ?? null,
    },
  }));
};
