import { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";

type EventTabProps = {
  className: string;
    name: string;
    selectedEventType: boolean;
    setSelectedEventType: Dispatch<SetStateAction<string>>
}

export default function Tab({name, selectedEventType, setSelectedEventType, className }: EventTabProps) {
    
  return (
    <button
      onClick={() => setSelectedEventType(name)}
      className={`${
        selectedEventType
          ? "text-white-100 !bg-primary"
          : "text-primary bg-white-100 "
      } text-base font-sora tracking-wide whitespace-nowrap items-stretch border transition-colors duration-150 delay-75  bg-white-100 grow justify-center px-6 py-3 border-b-0 rounded-tl-lg rounded-tr-lg border-solid ${className}`}
    >
      <span className="relative z-10 font-light">{name}</span>  
    </button>
  )
}

