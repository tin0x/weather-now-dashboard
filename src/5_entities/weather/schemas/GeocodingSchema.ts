import { z } from 'zod';

const GeocodingSchema = z.object({
  id: z.number(),
  name: z.string(),
  latitude: z.number(),
  longitude: z.number(),
  country: z.string().optional(),
  admin1: z.string().optional(),
  admin2: z.string().optional(),
  admin3: z.string().optional(),
});

export const GeocodingDTOSchema = z.object({
  results: z.array(GeocodingSchema).optional(),
});

export type GeocodingDTO = z.infer<typeof GeocodingDTOSchema>;
