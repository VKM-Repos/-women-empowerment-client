"use client";
import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ModalProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
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
      // y: "-50%",
      scale: "50%",
      opacity: 0,
    },
    visible: {
      // y: 0,
      scale: "100%",
      opacity: 1,
      transition: {
        ...transition,
      },
    },
    exit: {
      // y: "-50%",
      scale: "50%",
      opacity: 0,
      transition,
    },
  };

  return (
    <>
      {isOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center z-[3000] overflow-hidden">
          {/* Fixed background */}
          <motion.div
            key="modal-bg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed top-0 left-0 w-screen h-screen bg-primaryBlack/40"
            onClick={onClose}
          ></motion.div>
          {/* modal */}
          <motion.div
            key="modal-content"
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className=" w-[45%] max-h-3/4 relative z-[300]"
          >
            {children}
          </motion.div>
        </div>
      )}
    </>
  );
};

export default Modal;
