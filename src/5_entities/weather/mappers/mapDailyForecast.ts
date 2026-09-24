import type { WeatherDTO } from '@entities/weather/schemas/WeatherSchema';
import type { DailyForecast } from '@entities/weather/types';

const mapDailyForecast = (dto: WeatherDTO): DailyForecast[] => {
  const { time, weather_code, temperature_2m_max, temperature_2m_min } = dto.daily;

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

export default mapDailyForecast;
