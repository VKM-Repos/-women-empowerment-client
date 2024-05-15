import * as React from "react";
import { format } from "date-fns";
import { Popover, PopoverContent, PopoverTrigger } from "../UI/Popover";
import { Button } from "../UI/Button";
import { Calendar } from "../UI/Calendar";


type Props = {
  placeholder?: string;
  date: Date | undefined | any;
  onChange?: (date: Date | undefined) => void; 
};

export function FormDatePicker({date, placeholder, onChange }: Props) {


  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={`w-full justify-start text-left font-normal ${
            !date && "text-gray-100"
          }`}
        >
          {date ? format(date, "PPP") : <span>{placeholder}</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={onChange}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}



