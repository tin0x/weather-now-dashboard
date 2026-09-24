import type { WeatherDTO } from '@entities/weather/schemas/WeatherSchema';
import type { CurrentForecast } from '@entities/weather/types';

const mapCurrentForecast = (dto: WeatherDTO): CurrentForecast => {
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
