import type { RootState } from '@app/store/store.ts';
import type { UnitsState } from '@entities/units/types.ts';

export const getModeUnit = (state: RootState): UnitsState['mode'] => state.units.mode;
export const getTemperatureUnit = (state: RootState): UnitsState['temperature'] => state.units.temperature;
export const getWindSpeedUnit = (state: RootState): UnitsState['windSpeed'] => state.units.windSpeed;
export const getPrecipitationUnit = (state: RootState): UnitsState['precipitation'] => state.units.precipitation;
