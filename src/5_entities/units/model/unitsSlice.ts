import { createSlice } from '@reduxjs/toolkit';
import type { UnitsState } from '@entities/units/types.ts';

const initialState: UnitsState = {
  mode: 'metric',
  temperature: 'celsius',
  windSpeed: 'kmh',
  precipitation: 'millimeters',
};

const unitsSlice = createSlice({
  name: 'units',
  initialState,
  reducers: {
    toggleTemperatureUnit: (state) => {
      if (state.temperature === 'celsius') {
        state.temperature = 'fahrenheit';
      } else {
        state.temperature = 'celsius';
      }
    },
    toggleWindSpeedUnit: (state) => {
      if (state.windSpeed === 'kmh') {
        state.windSpeed = 'mph';
      } else {
        state.windSpeed = 'kmh';
      }
    },
    togglePrecipitationUnit: (state) => {
      if (state.precipitation === 'millimeters') {
        state.precipitation = 'inches';
      } else {
        state.precipitation = 'millimeters';
      }
    },
    toggleUnitsMode: (state) => {
      if (state.mode === 'metric') {
        state.mode = 'imperial';
        state.temperature = 'fahrenheit';
        state.windSpeed = 'mph';
        state.precipitation = 'inches';
      } else {
        state.mode = 'metric';
        state.temperature = 'celsius';
        state.windSpeed = 'kmh';
        state.precipitation = 'millimeters';
      }
    },
  },
});

export const { toggleTemperatureUnit, toggleUnitsMode, toggleWindSpeedUnit, togglePrecipitationUnit } =
  unitsSlice.actions;
export default unitsSlice.reducer;
