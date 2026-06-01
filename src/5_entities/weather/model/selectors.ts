import type { RootState } from '@app/store/store.ts';
import type { LocationState } from '@entities/weather/types.ts';

export const getLocation = (state: RootState): LocationState => state.location;
