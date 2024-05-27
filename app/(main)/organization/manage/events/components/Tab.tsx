import { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";

type EventTabProps = {
  name: string;
  selectedEventType: boolean;
  setSelectedEventType: Dispatch<SetStateAction<string>>;
};

export default function Tab({
  name,
  selectedEventType,
  setSelectedEventType,
}: EventTabProps) {
  return (
    <div>
    <button
      onClick={() => setSelectedEventType(name)}
      className={`${
        selectedEventType
          ? "text-primary"
          : "text-gray-100 hover:text-btnWarning "
      } text-base md:text-xl capitalize transition-colors relative flex flex-col items-center justify-center text-center`}
    >
      <span className="relative z-10 font-normal font-sora">{name}</span>
      {selectedEventType && (
        <motion.span
          layoutId="pill-tab"
          transition={{ type: "spring", duration: 0.5 }}
          className="absolute -bottom-1 w-full h-1 bg-btnWarning rounded-full"
        ></motion.span>
      )}
    </button>
    </div>
  );
}
