import mapCurrentForecast from '@entities/weather/mappers/mapCurrentForecast';
import mapDailyForecast from '@entities/weather/mappers/mapDailyForecast';
import mapHourlyForecast from '@entities/weather/mappers/mapHourlyForecast';
import { WeatherSchema } from '@entities/weather/schemas/WeatherSchema';
import type { Weather, WeatherArgs } from '@entities/weather/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { WEATHER_API } from '@shared/constants/api.ts';

export const weatherApi = createApi({
  reducerPath: 'weatherApi',
  baseQuery: fetchBaseQuery({ baseUrl: WEATHER_API.BASE }),
  endpoints: (builder) => ({
    getWeather: builder.query<Weather, WeatherArgs>({
      query: ({ lat, lon }) => ({
        url: WEATHER_API.FORECAST,
        params: {
          latitude: lat,
          longitude: lon,
          timezone: 'auto',
          daily: 'weather_code,temperature_2m_max,temperature_2m_min',
          hourly: 'temperature_2m,weather_code',
          current:
            'temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code,precipitation,apparent_temperature,is_day',
        },
      }),
      transformResponse: (dto: unknown) => {
        const parsed = WeatherSchema.parse(dto);
        const userLocale = window.navigator.language;

        return {
          current: mapCurrentForecast(parsed),
          hourly: mapHourlyForecast(parsed, userLocale),
          daily: mapDailyForecast(parsed),
        };
      },
    }),
  }),
});

export const { useGetWeatherQuery } = weatherApi;
