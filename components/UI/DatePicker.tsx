"use client"

import * as React from "react"
import { format } from "date-fns"


import { cn } from "@/lib/utils"
import { Popover, PopoverContent, PopoverTrigger } from "./Popover"
import { Button } from "./Button"
import { Calendar } from "./Calendar"

type Props = {
  placeholder?: string
}

export function DatePicker({placeholder}: Props) {
  const [date, setDate] = React.useState<Date>()

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[280px] justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          {date ? format(date, "PPP") : <span>{placeholder}</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}
