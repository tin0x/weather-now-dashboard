import { z } from 'zod';

export const GeolocationSchema = z.object({
  countryName: z.string(),
  city: z.string(),
});

export type GeolocationDTO = z.infer<typeof GeolocationSchema>;
