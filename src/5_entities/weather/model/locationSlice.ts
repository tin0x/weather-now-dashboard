import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { CoordinatesResponse } from '@pages/weather-page/types.ts';
import type { LocationState } from '@entities/weather/types.ts';

const initialState: LocationState = {
  lat: 0,
  lon: 0,
  isSearchResultCity: false,
};

export const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setLocation: (state, action: PayloadAction<CoordinatesResponse>) => {
      state.lat = action.payload.lat;
      state.lon = action.payload.lon;
      state.isSearchResultCity = true;
    },
    setSearchResultCity: (state, action: PayloadAction<boolean>) => {
      state.isSearchResultCity = action.payload;
    },
  },
});

export default locationSlice.reducer;
export const { setLocation, setSearchResultCity } = locationSlice.actions;
