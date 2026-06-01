import React from 'react';
import { FaCheck } from 'react-icons/fa6';

const IconCheck: React.FC<{ size: string }> = ({ size }) => {
  return <FaCheck color="currentColor" size={size} />;
};

export default IconCheck;
