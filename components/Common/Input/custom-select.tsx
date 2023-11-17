import { TransitionOpacity, TransitionParentFast } from "@/lib/utils/transition";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";

export interface OptionBase {
  value: string;
  label: string;
}

interface OptionWithImage extends OptionBase {
  image: string;
}

export type Option = OptionBase | OptionWithImage;

interface CustomSelectProps {
  options: Option[];
  isImg: boolean;
  defaultText: string;
  onChange: (selectedOption: Option | null) => void;
  triggerFn?: () => void;
}

const CustomSelect: React.FC<CustomSelectProps> = ({ options, onChange, isImg, defaultText, triggerFn }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(options[0]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleOptionChange = (option: Option) => {
    setIsOpen(false);
    setSelectedOption(option);
    if (triggerFn) triggerFn();
    if (onChange) onChange(option);
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative select-none" ref={dropdownRef}>
      <div onClick={() => setIsOpen(!isOpen)} className="w-full border p-3 border-gray-500 cursor-pointer rounded-xl">
        {selectedOption ? (
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2">
              {isImg && "image" in selectedOption && (
                <Image src={selectedOption.image} alt={selectedOption.label} width={24} height={24} />
              )}
              <span>{selectedOption.label}</span>
            </span>

            <div className={`${isOpen && "rotate-180"} transition-transform duration-300`}>
              icon
            </div>
          </div>
        ) : (
          <span className="text-zinc-500">{defaultText}</span>
        )}
        <i className={`fas fa-chevron-${isOpen ? "up" : "down"}`}></i>
      </div>
      {isOpen && (
        <TransitionParentFast className="absolute bg-white-100 border border-zinc-100 overflow-hidden shadow-xl z-[100] mt-1 rounded-md w-full max-h-[16rem] overflow-y-auto overflow-x-hidden">
          {options.map((option, idx) => (
            <TransitionOpacity key={idx}>
              <div
                className="flex items-center px-3 py-2 cursor-pointer transition-colors bg-white-100 duration-200 hover:bg-zinc-100 gap-2"
                onClick={() => handleOptionChange(option)}
              >
                {isImg && "image" in option && <Image src={option.image} alt={option.label} width={24} height={24} />}
                <span>{option.label}</span>
              </div>
            </TransitionOpacity>
          ))}
        </TransitionParentFast>
      )}
    </div>
  );
};

export default CustomSelect;
