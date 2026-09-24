import { z } from 'zod';

const GeocodingCitySchema = z.object({
  id: z.number(),
  name: z.string(),
  latitude: z.number(),
  longitude: z.number(),
  country: z.string().optional(),
  admin1: z.string().optional(),
  admin2: z.string().optional(),
  admin3: z.string().optional(),
});

export const GeocodingCitiesDTOSchema = z.object({
  results: z.array(GeocodingCitySchema).optional(),
});

export type GeocodingCitiesDTO = z.infer<typeof GeocodingCitiesDTOSchema>;
