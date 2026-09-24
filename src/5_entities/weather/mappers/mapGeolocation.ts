import type { GeolocationDTO } from '@entities/weather/schemas/GeolocationSchema';
import type { Geolocation } from '@entities/weather/types';

const mapGeolocation = (dto: GeolocationDTO): Geolocation => {
  const { countryName, city } = dto;

  return {
    country: countryName,
    city,
  };
};

export default mapGeolocation;
