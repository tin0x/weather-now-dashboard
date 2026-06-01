export const getHour = (date: Date, timeZone: string) => {
  return Number(
    new Intl.DateTimeFormat('en-GB', {
      timeZone,
      hour: '2-digit',
      hour12: false,
    }).format(date),
  );
};
