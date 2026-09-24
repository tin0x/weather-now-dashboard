import type { GeocodingCitiesDTO } from '@entities/weather/schemas/GeocodingSchema';
import type { GeocodingResponse } from '@entities/weather/types';

const mapGeocoding = (dto: GeocodingCitiesDTO): GeocodingResponse[] => {
  if (!dto || !dto.results?.length) return [];

  return dto.results.map((item) => ({
    id: item.id,
    city: item.name,
    country: item.country,
    location: {
      lat: item.latitude,
      lon: item.longitude,
    },
    adminDivision: {
      admin1: item.admin1 ?? null,
      admin2: item.admin2 ?? null,
      admin3: item.admin3 ?? null,
    },
  }));
};

export default mapGeocoding;
