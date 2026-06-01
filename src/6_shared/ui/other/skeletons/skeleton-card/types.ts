import React from 'react';

export type SkeletonCardProps = {
  background?: 'primary' | 'secondary';
  className?: string;
  isBorder?: boolean;
  children?: React.ReactNode;
};
