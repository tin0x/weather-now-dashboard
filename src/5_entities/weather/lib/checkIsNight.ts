export const checkIsNight = (hour: number) => {
  return hour < 6 || hour >= 20;
};
