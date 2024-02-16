import { useEffect, useState } from 'react';
import { formatDistanceToNow, format, isToday, isYesterday, parseISO } from 'date-fns';

const useRelativeTime = (timestamp: any) => {
  const [formattedDate, setFormattedDate] = useState('');

  useEffect(() => {
    const updateRelativeTime = () => {
      if (!timestamp) {
        setFormattedDate('');
        return;
      }

      const date: any = parseISO(timestamp);
      const now: any = new Date();

      if (isToday(date)) {
        setFormattedDate(formatDistanceToNow(date, { addSuffix: true }));
      } else if (isYesterday(date)) {
        setFormattedDate('yesterday');
      } else if (now - date < 7 * 24 * 60 * 60 * 1000) {
        setFormattedDate(formatDistanceToNow(date, { addSuffix: true }));
      } else {
        setFormattedDate(format(date, 'PPP'));
      }
    };

    updateRelativeTime(); // Initial call

    // Update the relative time every minute
    const interval = setInterval(updateRelativeTime, 60 * 1000);

    return () => clearInterval(interval);
  }, [timestamp]);

  return formattedDate;
};

export default useRelativeTime;
