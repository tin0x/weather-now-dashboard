import React from 'react';

export type ErrorViewProps = {
  Icon?: React.ComponentType<{ size: string; color: 'primary' | 'secondary' }>;
  title: string;
  text: string;
  Button?: React.ComponentType<{ color: 'primary' | 'secondary' }>;
};
