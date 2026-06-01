import React from 'react';
import logo from '@shared/assets/images/logo.svg';

const Logo: React.FC<{ className: string }> = ({ className }) => {
  return <img className={className} src={logo} alt="logo-image" />;
};

export default Logo;
