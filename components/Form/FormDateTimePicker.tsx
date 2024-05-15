import React from 'react';
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
  const [selectedDate, setSelectedDate] = React.useState<Date | undefined>(
    date
  );

  const handleDateChange = (newDate: Date | undefined) => {
    setSelectedDate(newDate);
    onChange && onChange(newDate);
  };

  const handleTimeChange = (time: Date | undefined) => {
    if (!selectedDate) return;

    const newDateTime = new Date(selectedDate);
    newDateTime.setHours(time?.getHours() ?? selectedDate.getHours());
    newDateTime.setMinutes(time?.getMinutes() ?? selectedDate.getMinutes());
    newDateTime.setSeconds(time?.getSeconds() ?? selectedDate.getSeconds());

    setSelectedDate(newDateTime);
    onChange && onChange(newDateTime);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={'outline'}
          className={`font-normal w-full justify-start text-left ${
            !date && 'text-gray-100'
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
