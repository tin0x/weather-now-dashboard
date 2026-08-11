import { getTemperatureUnit } from '@entities/units/model/selectors.ts';
import { useAppDispatch, useAppSelector } from '@shared/hooks/reduxHooks.ts';
import { toggleTemperatureUnit } from '@entities/units/model/unitsSlice.ts';

export const useGetTemperatureUnit = () => {
  const temperature = useAppSelector(getTemperatureUnit);
  const dispatch = useAppDispatch();

  const changeTemperatureFormat = () => {
    dispatch(toggleTemperatureUnit());
  };

  return { temperature, changeTemperatureFormat };
};
