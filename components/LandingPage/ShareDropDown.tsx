"use client";
import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  ReactNode,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import ShareButton from "./ShareButton";


interface ShareDropdownProps {
  children: ReactNode;
}

const ShareDropdown: React.FC<ShareDropdownProps> = ({
  children,
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
    <div className="relative z-[20000] inline-block" ref={dropdownRef}>
      <button
        className="p-2 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
       <ShareButton /> 
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="w-[300px] max-h-[15rem] absolute top-[-250%] left-[100%] mt-2 bg-primaryWhite border border-gray-500 p-2 rounded-md shadow-md z-[3000]"
          >
            <div className="w-full z-[4000]">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ShareDropdown;
