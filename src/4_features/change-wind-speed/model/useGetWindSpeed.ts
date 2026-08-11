import { useAppDispatch, useAppSelector } from '@shared/hooks/reduxHooks.ts';
import { getWindSpeedUnit } from '@entities/units/model/selectors.ts';
import { toggleWindSpeedUnit } from '@entities/units/model/unitsSlice.ts';

export const useGetWindSpeedUnit = () => {
  const windSpeedUnit = useAppSelector(getWindSpeedUnit);
  const dispatch = useAppDispatch();

  const changeWindSpeedUnit = () => {
    dispatch(toggleWindSpeedUnit());
  };

  return { windSpeedUnit, changeWindSpeedUnit };
};
