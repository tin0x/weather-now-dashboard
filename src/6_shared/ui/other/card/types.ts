import React from 'react';

type CardBackgrounds = 'primary' | 'secondary';

export type CardProps = {
  children: React.ReactNode;
  background?: CardBackgrounds;
  isBorder?: boolean;
  className?: string;
  style?: React.CSSProperties;
};
