import { configureStore } from '@reduxjs/toolkit';
import unitsReducer from '@entities/units/model/unitsSlice.ts';
import { weatherApi } from '@entities/weather/api/weatherApi.ts';
import locationReducer from '@entities/weather/model/locationSlice.ts';
import { geolocationApi } from '@entities/weather/api/geolocationApi.ts';
import { geocodingApi } from '@entities/weather/api/geocodingApi.ts';

export const store = configureStore({
  reducer: {
    [weatherApi.reducerPath]: weatherApi.reducer,
    [geolocationApi.reducerPath]: geolocationApi.reducer,
    [geocodingApi.reducerPath]: geocodingApi.reducer,
    units: unitsReducer,
    location: locationReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(weatherApi.middleware, geolocationApi.middleware, geocodingApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
