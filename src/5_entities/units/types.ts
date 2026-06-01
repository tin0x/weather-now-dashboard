import React from 'react';

export type UnitsState = {
  mode: 'metric' | 'imperial';
  temperature: 'celsius' | 'fahrenheit';
  windSpeed: 'kmh' | 'mph';
  precipitation: 'millimeters' | 'inches';
};

export type SelectUnitsProps = {
  ModeButton: React.ComponentType;
  CelsiusButton: React.ComponentType;
  FahrenheitButton: React.ComponentType;
  KmhButton: React.ComponentType;
  MphButton: React.ComponentType;
  MillimetersButton: React.ComponentType;
  InchesButton: React.ComponentType;
};
