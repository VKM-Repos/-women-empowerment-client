import { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";

type EventTabProps = {
    name: string;
    selectedEventType: boolean;
    setSelectedEventType: Dispatch<SetStateAction<string>>
}

export default function EventsTab({name, selectedEventType, setSelectedEventType }: EventTabProps) {
  return (
    <button
      onClick={() => setSelectedEventType(name)}
      className={`${
        selectedEventType
          ? "text-primary"
          : "text-gray-200 hover:text-btnWarning "
      } text-lg md:text-3xl uppercase transition-colors relative flex flex-col items-center justify-center text-center`}
    >
      <span className="relative z-10">{name}</span>
      {selectedEventType && (
        <motion.span
          layoutId="pill-tab"
          transition={{ type: "spring", duration: 0.5 }}
          className="absolute bottom-0 w-full h-1 bg-btnWarning rounded-full"
        ></motion.span>
      )}
    </button>
  )
}

