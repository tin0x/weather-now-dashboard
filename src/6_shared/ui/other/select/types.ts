import React from 'react';

export type SelectProps = {
  Icon?: React.ComponentType<{ size: string; isActive: boolean }>;
  title: string | undefined;
  background: 'primary' | 'secondary';
  children?: React.ReactNode;
};
