import React from 'react';
import { TfiReload } from 'react-icons/tfi';
import classes from '@shared/ui/icons/icon-reload/IconReload.module.scss';
import clsx from 'clsx';

const IconReload: React.FC<{
  className: string;
  size: string;
  isLoading: boolean;
}> = ({ className, size, isLoading }) => {
  return (
    <TfiReload
      className={clsx(classes.iconReload, className, {
        [classes.iconReloadAnimation]: isLoading,
      })}
      color="currentColor"
      size={size}
    />
  );
};

export default IconReload;
