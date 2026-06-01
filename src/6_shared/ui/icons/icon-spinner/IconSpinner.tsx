import React from 'react';
import { FaSpinner } from 'react-icons/fa';
import classes from '@shared/ui/icons/icon-spinner/IconSpinner.module.scss';

const IconSpinner: React.FC<{ size: string }> = ({ size }) => {
  return <FaSpinner className={classes.iconSpinner} color={'currentColor'} size={size} />;
};

export default IconSpinner;
