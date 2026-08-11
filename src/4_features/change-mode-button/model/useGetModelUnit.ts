import { useAppDispatch, useAppSelector } from '@shared/hooks/reduxHooks.ts';
import { getModeUnit } from '@entities/units/model/selectors.ts';
import { toggleUnitsMode } from '@entities/units/model/unitsSlice.ts';

export const useGetModeUnit = () => {
  const modeUnits = useAppSelector(getModeUnit);
  const dispatch = useAppDispatch();

  const changeUnitsMode = () => {
    dispatch(toggleUnitsMode());
  };

  return { modeUnits, changeUnitsMode };
};
