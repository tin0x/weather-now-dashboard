export const convertWeekdayToLong = (day: string) => {
  const longWeekday = new Date(day);
  return longWeekday.toLocaleDateString('en-US', { weekday: 'long' });
};
