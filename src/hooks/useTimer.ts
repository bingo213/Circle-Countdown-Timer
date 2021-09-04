import { useEffect, useState } from 'react';
import { getTime } from '../helpers';

export const useTimer = (futureDate: Date) => {
  const [time, setTime] = useState(getTime(futureDate));

  useEffect(() => {
    const timer = setInterval(() => setTime(getTime(futureDate)), 1000);
    return () => {
      clearInterval(timer);
    };
  }, [futureDate]);

  return time;
};
