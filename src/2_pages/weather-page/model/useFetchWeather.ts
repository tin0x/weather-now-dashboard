import { useGetGeolocationQuery } from '@entities/weather/api/geolocationApi.ts';
import { useGetWeatherQuery } from '@entities/weather/api/weatherApi.ts';
import { setLocation } from '@entities/weather/model/locationSlice.ts';
import { getLocation } from '@entities/weather/model/selectors.ts';
import type { CoordinatesResponse } from '@pages/weather-page/types.ts';
import { useAppDispatch, useAppSelector } from '@shared/hooks/reduxHooks.ts';
import { getCoordinates } from '@shared/services/getCoordinates.ts';
import { useEffect, useState } from 'react';

const defaultLocation = {
  lat: 50.4501,
  lon: 30.5234,
};

export const useFetchWeather = () => {
  const dispatch = useAppDispatch();
  const { lat, lon, isSearchResultCity } = useAppSelector(getLocation);
  const [geoError, setGeoError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const response = (await getCoordinates()) as CoordinatesResponse;
        dispatch(setLocation(response));
      } catch (error) {
        setGeoError(error instanceof Error ? error.message : 'Geolocation Error');
        dispatch(setLocation({ lat: defaultLocation.lat, lon: defaultLocation.lon }));
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

  return {
    mappedWeather: weather,
    mappedGeolocation: geolocation,
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
