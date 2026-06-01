import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { GEOLOCATION_API } from '@shared/constants/api.ts';
import type { CoordsArgs, GeolocationResponseDTO } from '@entities/weather/types.ts';

export const geolocationApi = createApi({
  reducerPath: 'geolocationApi',
  baseQuery: fetchBaseQuery({ baseUrl: GEOLOCATION_API.BASE }),
  endpoints: (builder) => ({
    getGeolocation: builder.query<GeolocationResponseDTO, CoordsArgs>({
      query: ({ lat, lon }) => ({
        url: GEOLOCATION_API.REVERSE,
        params: {
          latitude: lat,
          longitude: lon,
          localityLanguage: 'en',
        },
      }),
    }),
  }),
});

export const { useGetGeolocationQuery } = geolocationApi;
