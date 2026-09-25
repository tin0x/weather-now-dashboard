import { checkIsNight } from '@entities/weather/lib/checkIsNight';
import { getDateString } from '@entities/weather/lib/getDateString';
import { getHour } from '@entities/weather/lib/getHour';
import type {
  DailyForecast,
  HourlyForecast,
} from '@entities/weather/types.ts';
import { useMemo, useState } from 'react';

export const useFormattedHourlyForecast = (
  hourly: HourlyForecast[],
  daily: DailyForecast[],
  selectedDay: string,
) => {
  const [now] = useState(() => Date.now());

  const timezone = hourly?.[0]?.timezone;

  const selectedDayISO = useMemo(() => {
    if (!timezone) return '';

    return getDateString(
      new Date(selectedDay),
      timezone,
    );
  }, [selectedDay, timezone]);

  const filteredHours = useMemo(() => {
    if (!hourly?.length || !timezone) return [];

    const currentNow = new Date(now);

    const remoteDateISO = getDateString(
      currentNow,
      timezone,
    );

    const remoteHour = getHour(
      currentNow,
      timezone,
    );

    return hourly
      .filter((item) => {
        const itemDate = new Date(item.id);

        const itemDay = getDateString(
          itemDate,
          timezone,
        );

        if (itemDay !== selectedDayISO) {
          return false;
        }

        if (selectedDayISO === remoteDateISO) {
          const itemHour = getHour(
            itemDate,
            timezone,
          );

          return itemHour >= remoteHour;
        }

        return true;
      })
      .map((item) => {
        const itemDate = new Date(item.id);

        const hour = getHour(
          itemDate,
          timezone,
        );

        return {
          ...item,
          isNight: checkIsNight(hour),
          formattedHour: `${String(hour).padStart(2, '0')}:00`,
        };
      });
  }, [hourly, now, selectedDayISO, timezone]);

  const selectedDayData = useMemo(() => {
    return daily.find((item) => item.id === selectedDay);
  }, [daily, selectedDay]);

  const fullDayName = useMemo(() => {
    if (!selectedDayData || !timezone) return '';

    return new Date(selectedDayData.id).toLocaleDateString(
      'en-US',
      {
        weekday: 'long',
        timeZone: timezone,
      },
    );
  }, [selectedDayData, timezone]);

  return {
    filteredHours,
    fullDayName,
  };
};