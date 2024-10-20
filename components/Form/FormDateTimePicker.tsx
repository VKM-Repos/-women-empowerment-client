import React, { useEffect, useCallback } from 'react';
import { format } from 'date-fns';
import { Popover, PopoverContent, PopoverTrigger } from '../UI/Popover';
import { Button } from '../UI/Button';
import { Calendar } from '../UI/Calendar';
import { TimePicker } from '../UI/TimePicker';
import { Label } from '../UI/Label';
import { TransitionFromBottomAlone } from '@/lib/utils/transition';

type Props = {
  placeholder?: string;
  date: Date | undefined | any;
  onChange?: (date: Date | undefined) => void;
};

export function FormDateTimePicker({ date, placeholder, onChange }: Props) {
  const [selectedDate, setSelectedDate] = React.useState<Date | undefined>(date);

  useEffect(() => {
    if (date) {
      setSelectedDate(new Date(date));
    }
  }, [date]);

  const handleDateChange = useCallback((newDate: Date | undefined) => {
    if (newDate) {
      setSelectedDate((prev) => {
        const updatedDate = new Date(newDate);
        if (prev instanceof Date && !isNaN(prev.getTime())) {
          updatedDate.setHours(prev.getHours());
          updatedDate.setMinutes(prev.getMinutes());
          updatedDate.setSeconds(prev.getSeconds());
        }
        onChange && onChange(updatedDate);
        return updatedDate;
      });
    } else {
      setSelectedDate(undefined);
      onChange && onChange(undefined);
    }
  }, [onChange]);

  const handleTimeChange = useCallback((time: Date | undefined) => {
    if (!(selectedDate instanceof Date) || isNaN(selectedDate.getTime()) || !time) return;

    const newDateTime = new Date(selectedDate);
    newDateTime.setHours(time.getHours());
    newDateTime.setMinutes(time.getMinutes());
    newDateTime.setSeconds(time.getSeconds());

    setSelectedDate(newDateTime);
    onChange && onChange(newDateTime);
  }, [selectedDate, onChange]);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={'outline'}
          className={`font-medium placeholder:text-black/30 bg-[#F9F9F9] w-fit truncate text-xs justify-start text-left ${
            !selectedDate && 'text-gray-100'
          }`}
        >
          {selectedDate ? (
            format(selectedDate, 'PPP p')
          ) : (
            <span>{placeholder}</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-auto p-0">
        <div className="flex flex-col items-center justify-items-stretch p-1">
          <Label className="w-full text-sm font-sora text-center font-bold">Select Date</Label>
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={handleDateChange}
            initialFocus
          />

          {selectedDate && (
            <TransitionFromBottomAlone className='w-full flex flex-col items-center'>
              <Label className="w-full text-sm font-sora text-center font-bold">Select Time</Label>
              <TimePicker date={selectedDate} setDate={handleTimeChange} />
            </TransitionFromBottomAlone>
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
}
