import type { DailyForecast } from '@entities/weather/types.ts';

export type DailyForecastWidgetProps = {
  daily: DailyForecast[];
};
