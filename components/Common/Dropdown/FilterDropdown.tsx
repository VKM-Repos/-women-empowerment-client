"use client";
import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  ReactNode,
} from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FilterDropdownProps {
  children: ReactNode;
  placeholder?: string;
}

const FilterDropdown: React.FC<FilterDropdownProps> = ({
  children,
  placeholder = "Filter",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <button
        className="flex items-center justify-between bg-primaryWhite rounded-md text-gray-300  p-2 px-3 w-[6rem] drop-shadow-md border border-gray-500 focus:ring-btnWarning cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          width="29"
          height="29"
          viewBox="0 0 29 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.7595 15.2272C7.85629 13.0566 5.78736 10.6691 4.65768 9.32683C4.30798 8.91134 4.19339 8.60727 4.1245 8.07165C3.88858 6.23765 3.77063 5.32065 4.30839 4.72869C4.84617 4.13672 5.79716 4.13672 7.69917 4.13672H21.1524C23.0544 4.13672 24.0054 4.13672 24.5431 4.72869C25.081 5.32065 24.963 6.23765 24.7271 8.07166C24.6581 8.60728 24.5436 8.91135 24.1938 9.32683C23.0626 10.6708 20.9896 13.0625 18.0805 15.2358C17.8173 15.4325 17.6438 15.7529 17.6116 16.1084C17.3234 19.2941 17.0577 21.0389 16.8922 21.9216C16.6253 23.3467 14.6045 24.2041 13.5228 24.9691C12.8789 25.4244 12.0975 24.8824 12.014 24.1775C11.855 22.8338 11.5553 20.1042 11.2283 16.1084C11.1989 15.7496 11.0248 15.4255 10.7595 15.2272Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="flex items-center font-semibold font-quickSand">
          filter
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="w-[300px] max-h-[15rem] absolute right-0 mt-2 bg-primaryWhite border border-gray-500 p-2 rounded-md shadow-md z-10"
          >
            <span className="w-full flex items-center justify-between">
              <h6 className="text-gray-300 font-semibold">Filters</h6>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-btnWarning"
              >
                cancel
              </button>
            </span>
            <div className="w-full">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FilterDropdown;
