import { useGetWeatherQuery } from '@entities/weather/api/weatherApi.ts';
import { useEffect, useMemo, useState } from 'react';
import { getCoordinates } from '@shared/services/getCoordinates.ts';
import type { CoordinatesResponse } from '@pages/weather-page/types.ts';
import { mapGeolocation, mapWeatherResponse } from '@entities/weather/model/utils/mappers.ts';
import { setLocation } from '@entities/weather/model/locationSlice.ts';
import { useSelector } from 'react-redux';
import { getLocation } from '@entities/weather/model/selectors.ts';
import { useAppDispatch } from '@shared/hooks/reduxHooks.ts';
import { useGetGeolocationQuery } from '@entities/weather/api/geolocationApi.ts';

export const useFetchWeather = () => {
  const dispatch = useAppDispatch();
  const { lat, lon, isSearchResultCity } = useSelector(getLocation);
  const [geoError, setGeoError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const response = (await getCoordinates()) as CoordinatesResponse;
        dispatch(setLocation(response));
      } catch (error) {
        setGeoError(error instanceof Error ? error.message : 'Geolocation Error');
        dispatch(setLocation({ lat: 50.4501, lon: 30.5234 }));
      }
    })();
  }, [dispatch]);

  const isLocationEmpty = lat === 0 && lon === 0;

  const {
    data: weather,
    isLoading: isWeatherLoading,
    error: weatherError,
    refetch: refetchWeather,
    isFetching: isWeatherFetching,
  } = useGetWeatherQuery(
    { lat, lon },
    {
      skip: isLocationEmpty,
    },
  );

  const {
    data: geolocation,
    isLoading: isGeolocationLoading,
    error: geolocationError,
    refetch: refetchGeo,
  } = useGetGeolocationQuery(
    { lat, lon },
    {
      skip: isLocationEmpty,
    },
  );

  const mappedWeather = useMemo(() => {
    return weather ? mapWeatherResponse(weather) : null;
  }, [weather]);

  const mappedGeolocation = useMemo(() => {
    return geolocation ? mapGeolocation(geolocation) : null;
  }, [geolocation]);

  return {
    mappedWeather,
    mappedGeolocation,
    isWeatherLoading: isWeatherLoading || isWeatherFetching || isLocationEmpty,
    isGeolocationLoading: isGeolocationLoading || isLocationEmpty,
    isSearchResultCity,
    weatherError,
    geolocationError: geolocationError || geoError,
    refetchAll: () => {
      refetchWeather();
      refetchGeo();
    },
  };
};
