'use client'
import React from "react";
import { BtnIncrease } from "@/components/Common/Icons/BtnIncrease";
import { BtnDecrease } from "@/components/Common/Icons/BtnDecrease";

interface DateInputProps {
  label: string;
  bgClassName: string;
  textClassName: string;
  value: number;
  min: number;
  max: number;
  onIncrease: (field: string, event: React.MouseEvent<HTMLButtonElement>) => void;
  onDecrease: (field: string, event: React.MouseEvent<HTMLButtonElement>) => void;
  onChange: (field: string, value: number) => void;
}

const DateInput: React.FC<DateInputProps> = ({ label, bgClassName, textClassName, value, min, max, onIncrease, onDecrease, onChange }) => {
  // const textColorClass = `text-[${color}]`;
  // const bgColorClass = `bg-[${color}]`;

  const handleIncrease = (field: string, event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (value < max) {
      onIncrease(field, event);
    }
  };

  const handleDecrease = (field: string, event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (value > min) {
      onDecrease(field, event);
    }
  };

  return (
    <div className={`w-full flex flex-col items-center justify-center border-2 gap-0 rounded-t-xl border-primaryWhite aspect-square relative`}>
      <span className="w-full flex items-center justify-center p-2">
        <input
          type="number"
          id={label.toLowerCase()}
          name={label.toLowerCase()}
          min={min.toString()}
          max={max.toString()}
          value={value}
          onChange={(e) => onChange(label.toLowerCase(), parseInt(e.target.value, 10))}
          className={` ${textClassName} focus:outline-none bg-transparent text-2xl md:text-3xl font-bold max-w-5/6 text-center`}
        />
        <span className="flex flex-col gap-0.5">
          <button onClick={(e) => handleIncrease(label.toLowerCase(), e)}>
            <BtnIncrease />
          </button>
          <button onClick={(e) => handleDecrease(label.toLowerCase(), e)}>
            <BtnDecrease />
          </button>
        </span>
      </span>
      <p className={`text-primaryWhite font-normal text-base md:text-lg`}>{label}</p>
      <div className={`${bgClassName} absolute bottom-0 w-full h-1`} />
    </div>
  );
};

export default DateInput;
