import { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";

type EventTabProps = {
    name: string;
    selectedEventType: boolean;
    setSelectedEventType: Dispatch<SetStateAction<string>>
}

export default function Tab({name, selectedEventType, setSelectedEventType }: EventTabProps) {
    
  return (
    <div>
         <button
      onClick={() => setSelectedEventType(name)}
      className={`${
        selectedEventType
          ? "text-primary"
          : "text-gray-300"
      } text-2xl`}
    >
      <span className="relative z-10 font-light">{name}</span>
      
    </button>
    {selectedEventType && <div className={`${name== 'All Events' ? 'w-[6.5rem]' : 'w-[4rem]'} h-1 rounded bg-btnWarning`} />}
    </div>
  )
}

