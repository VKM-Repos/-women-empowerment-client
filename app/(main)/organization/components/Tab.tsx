import { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";

type EventTabProps = {
    name: string;
    selectedEventType: boolean;
    setSelectedEventType: Dispatch<SetStateAction<string>>
}

export default function Tab({name, selectedEventType, setSelectedEventType }: EventTabProps) {
    console.log(selectedEventType);
    
  return (
    <button
      onClick={() => setSelectedEventType(name)}
      className={`${
        selectedEventType
          ? "text-white-100 bg-primary"
          : "text-primary bg-white-100 "
      } text-2xl tracking-wide whitespace-nowrap items-stretch border border-primary  bg-white grow justify-center px-8 py-4 rounded-tl-lg rounded-tr-lg border-solid max-md:px-5`}
    >
      <span className="relative z-10 font-light">{name}</span>
      
    </button>
  )
}

