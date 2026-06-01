import React from 'react';
import { IoSearch } from 'react-icons/io5';
import classes from '@shared/ui/icons/icon-search/IconSearch.module.scss';

const IconSearch: React.FC<{ size: string }> = ({ size }) => {
  return <IoSearch className={classes.iconSearch} color="currentColor" size={size} />;
};

export default IconSearch;
