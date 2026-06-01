import React from 'react';
import SelectOption from '@shared/ui/other/select/select-option/SelectOption.tsx';
import { useGetPrecipitationUnit } from '@features/change-units/change-precipitation/model/useGetPrecipitationUnit.ts';

const MillimetersButton: React.FC = () => {
  const { precipitationUnit, changePrecipitationUnit } = useGetPrecipitationUnit();

  return (
    <SelectOption
      label="Millimeters (mm)"
      isActive={precipitationUnit === 'millimeters'}
      onClick={changePrecipitationUnit}
    />
  );
};

export default MillimetersButton;
