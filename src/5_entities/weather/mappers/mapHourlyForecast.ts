import type { WeatherResponseDTO } from '@entities/weather/schemas/WeatherResponseSchema';
import type { MappedHourlyForecast } from '@entities/weather/types';

export const mapHourlyForecast = (dto: WeatherResponseDTO, locale: string): MappedHourlyForecast => {
  const { time, temperature_2m, weather_code } = dto.hourly;

  const isEnUs = locale === 'en-US';
  const formatter = new Intl.DateTimeFormat(locale, {
    hour: isEnUs ? 'numeric' : '2-digit',
    ...(isEnUs ? {} : { minute: '2-digit' }),
  });

  return time.map((t: string, index: number) => {
    const rawDate = new Date(t);

    return {
      id: t,
      rawDate: rawDate.toISOString(),
      utcSeconds: dto.utc_offset_seconds,
      temp: Math.round(temperature_2m[index]),
      icon: weather_code[index],
      formattedHour: formatter.format(rawDate),
    };
  });
};

export default mapHourlyForecast;
