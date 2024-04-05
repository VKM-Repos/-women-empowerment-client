import React, { useState } from "react";
import DateInput from "./DateInput";

type Props = {
  getEventDate: any;
};

function FindEvent({ getEventDate }: Props) {
  const [date, setDate] = useState({
    day: new Date().getDay(),
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear(),
  });

  const increment = (
    field: string,
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    setDate((prevDate: any) => ({
      ...prevDate,
      [field]: prevDate[field] + 1,
    }));
  };

  const decrement = (
    field: string,
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    setDate((prevDate: any) => ({
      ...prevDate,
      [field]: prevDate[field] - 1,
    }));
  };

  const filterEvent = (event: any) => {
    event?.preventDefault();
    getEventDate(date);
  };
  return (
    <form className="w-full" onSubmit={filterEvent}>
      <fieldset>
        <legend className="text-primaryWhite py-2 font-quickSand">
          Find an Event:
        </legend>
        <div className="w-[80%] grid grid-cols-3 md:grid-cols-4 items-center">
          <DateInput
            label="Day"
            bgClassName="bg-[#FFF200]"
            textClassName="text-[#FFF200]"
            value={date.day}
            min={1}
            max={31}
            onIncrease={increment}
            onDecrease={decrement}
            onChange={(field, value) => setDate({ ...date, [field]: value })}
          />
          <DateInput
            label="Month"
            bgClassName="bg-[#FF7400]"
            textClassName="text-[#FF7400]"
            value={date.month}
            min={1}
            max={12}
            onIncrease={increment}
            onDecrease={decrement}
            onChange={(field, value) => setDate({ ...date, [field]: value })}
          />
          <DateInput
            label="Year"
            bgClassName="bg-[#E7D6FF]"
            textClassName=" text-[#E7D6FF]"
            value={date.year}
            min={2000}
            max={3000}
            onIncrease={increment}
            onDecrease={decrement}
            onChange={(field, value) => setDate({ ...date, [field]: value })}
          />
          <button className="flex flex-row-reverse md:flex-col gap-1 items-center justify-center bg-btnWarning active:bg-gray-400 h-[70%] w-[50%] rounded-md text-primaryWhite">
            <span>
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.4194 6.47656L18.4141 6.4768V13.4386M6.41406 18.4766L18.1252 6.76568"
                  stroke="white"
                  stroke-width="1.5"
                />
              </svg>
            </span>
            <span>go</span>
          </button>
        </div>
      </fieldset>
    </form>
  );
}

export default FindEvent;
