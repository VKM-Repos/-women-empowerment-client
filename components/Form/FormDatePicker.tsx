import { FC } from 'react';
import { useFormContext } from 'react-hook-form';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import { Button } from '../UI/Button';
import { FormControl, FormField, FormItem, FormMessage } from '../UI/Form';
import { Popover, PopoverContent, PopoverTrigger } from '../UI/Popover';
import { cn } from '@/lib/utils';
import { Calendar } from '../UI/Calendar';

interface DatePickerProps {
  name: string;
  label?: string;
  required?: boolean;
}

const FormDatePicker: FC<DatePickerProps> = ({ name, label, required }) => {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => {
        const { value, onChange } = field;

        const handleDateChange = (date: Date | undefined) => {
          onChange(date);
        };

        return (
          <FormItem className="flex flex-col gap-0">
            <Popover>
              <PopoverTrigger asChild>
                <FormControl>
                  <Button
                    variant={'outline'}
                    className={cn(
                      'font-normal flex w-full items-center justify-between gap-2 p-3 text-left',
                      !value && 'text-muted-foreground'
                    )}
                  >
                    {value ? format(value, 'PPP') : <span>{label}</span>}
                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    
                  </Button>
                </FormControl>
              </PopoverTrigger>
              <PopoverContent className="w-80 p-0" align="start">
                <Calendar
                  mode="single"
                  selected={value}
                  onSelect={handleDateChange}
                  disabled={date =>
                    date > new Date() || date < new Date('1900-01-01')
                  }
                  initialFocus
                />
              </PopoverContent>
            </Popover>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
};

export default FormDatePicker;
