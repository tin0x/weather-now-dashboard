import type { DailyForecast, HourlyForecast } from '@entities/weather/types.ts';

export type HourlyForecastWidgetProps = {
  hourly: HourlyForecast[];
  daily: DailyForecast[];
};
