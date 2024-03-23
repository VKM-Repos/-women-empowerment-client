import { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";

type ProjectTabProps = {
  name: string;
  selectedProjectType: boolean;
  setSelectedProjectType: Dispatch<SetStateAction<string>>;
};

export default function Tab({
  name,
  selectedProjectType,
  setSelectedProjectType,
}: ProjectTabProps) {
  return (
    <div>
      <button
        onClick={() => setSelectedProjectType(name)}
        className={`${
          selectedProjectType ? "text-primary" : "text-gray-300"
        } text-2xl`}
      >
        <span className="relative z-10 font-light">{name}</span>
      </button>
      {selectedProjectType && (
        <div
          className={`${
            name == "All Projects" ? "w-[7.5rem]" : "w-[4rem]"
          } h-1 rounded bg-btnWarning`}
        />
      )}
    </div>
  );
}
