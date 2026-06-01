import React from 'react';
import SelectOption from '@shared/ui/other/select/select-option/SelectOption.tsx';
import { useGetPrecipitationUnit } from '@features/change-units/change-precipitation/model/useGetPrecipitationUnit.ts';

const InchesButton: React.FC = () => {
  const { precipitationUnit, changePrecipitationUnit } = useGetPrecipitationUnit();

  return (
    <SelectOption label="Inches (in)" isActive={precipitationUnit === 'inches'} onClick={changePrecipitationUnit} />
  );
};

export default InchesButton;
