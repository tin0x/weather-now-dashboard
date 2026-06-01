import Card from '@shared/ui/other/card/Card.tsx';
import classes from '@shared/ui/other/skeletons/skeleton-card/SkeletonCard.module.scss';
import React from 'react';
import clsx from 'clsx';
import type { SkeletonCardProps } from '@shared/ui/other/skeletons/skeleton-card/types.ts';

export const SkeletonCard: React.FC<SkeletonCardProps> = ({ background, className, isBorder, children }) => {
  return (
    <Card className={clsx(className, classes.skeletonCard)} background={background} isBorder={isBorder}>
      {children}
    </Card>
  );
};

export default SkeletonCard;
