import mapGeocoding from '@entities/weather/mappers/mapGeocoding';
import { GeocodingCitiesDTOSchema } from '@entities/weather/schemas/GeocodingCitySchema';
import type { GeocodingArgs, GeocodingResponse } from '@entities/weather/types.ts';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { GEOCODING_API } from '@shared/constants/api.ts';

export const geocodingApi = createApi({
  reducerPath: 'geocodingApi',
  baseQuery: fetchBaseQuery({ baseUrl: GEOCODING_API.BASE }),
  endpoints: (builder) => ({
    getGeocoding: builder.query<GeocodingResponse[], GeocodingArgs>({
      query: ({ city, count }) => ({
        url: GEOCODING_API.SEARCH,
        params: {
          name: city,
          count: count,
        },
      }),
      transformResponse: (dto: unknown) => {
        const parsed = GeocodingCitiesDTOSchema.parse(dto);
        return mapGeocoding(parsed);
      },
    }),
  }),
});

export const { useGetGeocodingQuery } = geocodingApi;
