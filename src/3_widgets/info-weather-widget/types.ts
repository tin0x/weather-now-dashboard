import type { CurrentForecast, MappedDailyForecast, MappedHourlyForecast } from '@entities/weather/types.ts';

export type InfoWeatherWidgetProps = {
  country: string;
  city: string;
  current: CurrentForecast;
  hourly: MappedHourlyForecast;
  daily: MappedDailyForecast;
};
