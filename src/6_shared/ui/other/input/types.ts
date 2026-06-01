import React, { type ComponentPropsWithoutRef, type ComponentType } from 'react';

export type InputProps = {
  Icon?: ComponentType<{ size: string }>;
  children?: React.ReactNode;
} & ComponentPropsWithoutRef<'input'>;
