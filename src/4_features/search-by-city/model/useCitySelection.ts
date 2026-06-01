import React, { useState } from 'react';
import { useAppDispatch } from '@shared/hooks/reduxHooks.ts';
import { setLocation, setSearchResultCity } from '@entities/weather/model/locationSlice.ts';
import { mapGeocoding } from '@entities/weather/model/utils/mappers.ts';
import { useGetGeocodingQuery } from '@entities/weather/api/geocodingApi.ts';
import { useDebounce } from '@shared/hooks/useDebounce.ts';
import { skipToken } from '@reduxjs/toolkit/query';

export const useCitySelection = () => {
  const [city, setCity] = useState('');
  const debouncedSearch = useDebounce(city, 700);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const { data, isLoading, isFetching, error } = useGetGeocodingQuery(
    city && city.length >= 2 ? { city: debouncedSearch, count: 5 } : skipToken,
  );
  const mappedGeocoding = data ? mapGeocoding(data) : [];

  const dispatch = useAppDispatch();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;

    if (value.startsWith(' ')) value = value.trimStart();
    value = value.replace(/[^a-zA-Z\s]/g, '').replace(/\s\s+/g, ' ');

    setCity(value);
    setShowSuggestions(true);
  };

  const handleChangeCity = (city: string, location: { lat: number; lon: number }) => {
    setCity(city.trim());
    dispatch(setLocation(location));
    setShowSuggestions(false);
  };

  const handleStartSearch = (e: React.FormEvent) => {
    e.preventDefault();

    if (city.length < 2) return null;

    const firstResult = mappedGeocoding?.[0];

    if (firstResult) {
      setCity(firstResult.city.trim());
      dispatch(setSearchResultCity(true));
      dispatch(
        setLocation({
          lat: firstResult.location.lat,
          lon: firstResult.location.lon,
        }),
      );
    } else {
      dispatch(setSearchResultCity(false));
    }

    setShowSuggestions(false);
  };

  return {
    handleInputChange,
    handleChangeCity,
    handleStartSearch,
    mappedGeocoding,
    isLoading,
    isFetching,
    error,
    city,
    debouncedSearch,
    showSuggestions,
  };
};
