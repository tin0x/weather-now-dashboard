import React from 'react';
import { TiCancel } from 'react-icons/ti';
import classes from '@shared/ui/icons/icon-cancel/IconCancel.module.scss';

const IconCancel: React.FC<{
  size: string;
  color: 'primary' | 'secondary';
}> = ({ size, color }) => {
  return <TiCancel className={classes.iconCancel} color={color || 'currentColor'} size={size} />;
};

export default IconCancel;
