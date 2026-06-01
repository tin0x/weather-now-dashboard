import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { WEATHER_API } from '@shared/constants/api.ts';
import type { CoordsArgs, WeatherResponseDTO } from '@entities/weather/types.ts';

export const weatherApi = createApi({
  reducerPath: 'weatherApi',
  baseQuery: fetchBaseQuery({ baseUrl: WEATHER_API.BASE }),
  endpoints: (builder) => ({
    getWeather: builder.query<WeatherResponseDTO, CoordsArgs>({
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
    }),
  }),
});

export const { useGetWeatherQuery } = weatherApi;
