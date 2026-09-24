import mapGeolocation from '@entities/weather/mappers/mapGeolocation';
import { GeolocationSchema } from '@entities/weather/schemas/GeolocationSchema';
import type { Geolocation, GeolocationArgs } from '@entities/weather/types.ts';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { GEOLOCATION_API } from '@shared/constants/api.ts';

export const geolocationApi = createApi({
  reducerPath: 'geolocationApi',
  baseQuery: fetchBaseQuery({ baseUrl: GEOLOCATION_API.BASE }),
  endpoints: (builder) => ({
    getGeolocation: builder.query<Geolocation, GeolocationArgs>({
      query: ({ lat, lon }) => ({
        url: GEOLOCATION_API.REVERSE,
        params: {
          latitude: lat,
          longitude: lon,
          localityLanguage: 'en',
        },
      }),
      transformResponse: (dto: unknown) => {
        const parsed = GeolocationSchema.parse(dto);
        return mapGeolocation(parsed);
      },
    }),
  }),
});

export const { useGetGeolocationQuery } = geolocationApi;
