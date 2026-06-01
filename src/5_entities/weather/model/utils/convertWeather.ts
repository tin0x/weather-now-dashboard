export const formatTemp = (value: number, system: 'celsius' | 'fahrenheit') => {
  if (system === 'celsius') return `${Math.round(value)}°`;
  return `${Math.round(value * 1.8 + 32)}°`;
};

export const formatWind = (value: number, system: 'kmh' | 'mph') => {
  if (system === 'kmh') return `${Math.round(value)} km/h`;
  return `${Math.round(value * 0.62)} mph`;
};

export const formatPrecipitation = (value: number, system: 'millimeters' | 'inches') => {
  if (system === 'millimeters') return `${Math.round(value)} mm`;
  return `${Math.round(value * 0.39)} in`;
};
