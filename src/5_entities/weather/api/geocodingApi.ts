import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { GEOCODING_API } from '@shared/constants/api.ts';
import type { GeocodingArgs, GeocodingResponseDTO } from '@entities/weather/types.ts';

export const geocodingApi = createApi({
  reducerPath: 'geocodingApi',
  baseQuery: fetchBaseQuery({ baseUrl: GEOCODING_API.BASE }),
  endpoints: (builder) => ({
    getGeocoding: builder.query<GeocodingResponseDTO, GeocodingArgs>({
      query: ({ city, count }) => ({
        url: GEOCODING_API.SEARCH,
        params: {
          name: city,
          count: count,
        },
      }),
    }),
  }),
});

export const { useGetGeocodingQuery } = geocodingApi;
