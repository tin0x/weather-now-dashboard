import type { WeatherResponseDTO } from '@entities/weather/schemas/WeatherResponseSchema';
import type { MappedCurrentForecast } from '@entities/weather/types';

const mapCurrentForecast = (dto: WeatherResponseDTO): MappedCurrentForecast => {
  const { current } = dto;
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

export default mapCurrentForecast;
