import React from 'react';
import classes from '@shared/ui/other/card/Card.module.scss';
import type { CardProps } from '@shared/ui/other/card/types.ts';
import clsx from 'clsx';

const Card: React.FC<CardProps> = ({ children, background, isBorder, className, style }) => {
  return (
    <div
      className={clsx(className, classes.card, {
        [classes.cardBgPrimary]: background === 'primary',
        [classes.cardBgSecondary]: background === 'secondary',
        [classes.cardBorder]: isBorder,
      })}
      style={style}
    >
      {children}
    </div>
  );
};

export default Card;
