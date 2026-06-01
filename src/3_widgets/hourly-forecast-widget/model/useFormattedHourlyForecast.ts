import { useMemo, useState } from 'react';
import type { DailyForecast, HourlyForecast } from '@entities/weather/types.ts';
import { getDateString } from '@entities/weather/model/utils/getDateString.ts';
import { getHour } from '@entities/weather/model/utils/getHour.ts';
import { checkIsNight } from '@entities/weather/model/utils/checkIsNight.ts';

export const useFormattedHourlyForecast = (
  hourly: HourlyForecast[],
  daily: DailyForecast[],
  selectedDay: string,
  utcSeconds: number,
) => {
  const [now] = useState(() => Date.now());
  const TIME_ZONE = 'Europe/Kyiv';

  const selectedDayISO = selectedDay.split('T')[0];

  const filteredHours = useMemo(() => {
    if (!hourly || hourly.length === 0) return [];

    const clientUnifyingUtc = now + new Date().getTimezoneOffset() * 60 * 1000;
    const targetRemoteNow = new Date(clientUnifyingUtc + utcSeconds * 1000);

    const remoteDateISO = getDateString(targetRemoteNow, TIME_ZONE);
    const remoteHour = getHour(targetRemoteNow, TIME_ZONE);

    return hourly
      .filter((item) => {
        const itemDay = item.id.split('T')[0];

        if (itemDay !== selectedDayISO) return false;

        if (selectedDayISO === remoteDateISO) {
          const itemHour = new Date(item.id).getHours();
          return itemHour >= remoteHour;
        }

        return true;
      })
      .map((item) => {
        const itemDate = new Date(item.id);
        const hour = getHour(itemDate, TIME_ZONE);

        return {
          ...item,
          isNight: checkIsNight(hour),
          formattedHour: `${String(hour).padStart(2, '0')}:00`,
        };
      });
  }, [hourly, now, selectedDayISO, utcSeconds]);

  const selectedDayData = useMemo(() => {
    return daily.find((item) => item.id === selectedDay);
  }, [daily, selectedDay]);

  const fullDayName = useMemo(() => {
    if (!selectedDayData) return '';

    return new Date(selectedDayData.id).toLocaleDateString('en-US', {
      weekday: 'long',
    });
  }, [selectedDayData]);

  return {
    filteredHours,
    fullDayName,
  };
};
