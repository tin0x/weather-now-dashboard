import React from 'react';

export type ButtonProps = {
  children: React.ReactNode;
  color: 'primary' | 'secondary';
  className?: string | '';
} & React.ComponentPropsWithoutRef<'button'>;
