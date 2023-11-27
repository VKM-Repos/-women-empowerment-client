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
      x: "50%",
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
      x: "50%",
      opacity: 0,
      transition,
    },
  };

  return (
    <>
      {isOpen && (
      
          <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-start  z-[1000] overflow-hidden">
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
              className="bg-primaryWhite absolute right-0  py-4 pb-8 w-2/5 h-screen z-[600] overflow-y-auto"
            >
              {children}

              {/* Close button */}
              <button
                onClick={onClose}
                className=" absolute top-2 right-0 px-6 cursor-pointer"
              >
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 10L30 30"
                    stroke="#08382C"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M30 10L10 30"
                    stroke="#08382C"
                    strokeWidth="3.5"
                    strokeLinecap="round"
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
