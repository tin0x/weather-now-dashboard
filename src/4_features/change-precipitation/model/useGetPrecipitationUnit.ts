import { useAppDispatch, useAppSelector } from '@shared/hooks/reduxHooks.ts';
import { getPrecipitationUnit } from '@entities/units/model/selectors.ts';
import { togglePrecipitationUnit } from '@entities/units/model/unitsSlice.ts';

export const useGetPrecipitationUnit = () => {
  const precipitationUnit = useAppSelector(getPrecipitationUnit);
  const dispatch = useAppDispatch();

  const changePrecipitationUnit = () => {
    dispatch(togglePrecipitationUnit());
  };

  return { precipitationUnit, changePrecipitationUnit };
};
