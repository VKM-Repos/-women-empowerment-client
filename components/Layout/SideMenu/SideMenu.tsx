"use client";
import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const SideMenu: React.FC<SideMenuProps> = ({ isOpen, onClose, children }) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        document.body.style.overflow = "hidden";
        onClose;
      }
    };

    if (isOpen) {
      window.addEventListener("click", handleOutsideClick);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("click", handleOutsideClick);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  const transition = { duration: 0.3, ease: "easeInOut" };

  const variants = {
    hidden: {
      x: "-50%",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        ...transition,
      },
    },
    exit: {
      x: "-50%",
      opacity: 0,
      transition,
    },
  };

  return (
    <>
      {isOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-start  z-[4000] overflow-hidden">
          {/* Fixed background */}
          <motion.div
            key="side-menu-bg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed top-0 left-0 w-screen h-screen bg-black-100/40"
            onClick={onClose}
          ></motion.div>
          {/* Side Menu content */}
          <motion.div
            key="side-menu-content"
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="bg-primaryWhite absolute left-0  py-4 pb-8 w-4/5 h-screen z-[600] overflow-y-auto"
          >
            {children}

            {/* Close button */}
            <button
              onClick={onClose}
              className=" absolute top-5 right-0 px-6 cursor-pointer"
            >
              <svg
                width="25"
                height="31"
                viewBox="0 0 25 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.29529 5.93799L19.8578 22.4179"
                  stroke="black"
                  stroke-width="2.125"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4.88513 22.1553L20.4486 5.67627"
                  stroke="black"
                  stroke-width="2.125"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default SideMenu;
