"use client";
import { useCallback, useRef, useEffect, MouseEventHandler } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useAppContext } from "@/lib/context/app-context";

interface ModalProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  const overlay = useRef(null);
  const wrapper = useRef(null);
  const router = useRouter();
  const ref = useRef<HTMLDivElement | null>(null);
  const {toggleOrganizationBlocker} = useAppContext()

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
      scale: "50%",
      opacity: 0,
    },
    visible: {
      scale: "100%",
      opacity: 1,
      transition: {
        ...transition,
      },
    },
    exit: {
      scale: "50%",
      opacity: 0,
      transition,
    },
  };

  const onDismiss = useCallback(() => {
    onClose()
    // toggleOrganizationBlocker()
    // router.back();
  }, [router]);

  const onClick: MouseEventHandler = useCallback(
    (e) => {
      if (e.target === overlay.current || e.target === wrapper.current) {
        if (onDismiss) onDismiss();
      }
    },
    [onDismiss, overlay, wrapper]
  );

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onDismiss();
    },
    [onDismiss]
  );

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onKeyDown]);

  return (
    <>
      {isOpen && (
        <motion.div
          key="modal-bg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          ref={overlay}
          className="w-screen fixed left-0 right-0 top-0 bottom-0 mx-auto bg-primaryBlack/40 z-[3000] flex items-center justify-center"
          onClick={onClick}
        >
          <motion.div
            ref={wrapper}
            key="modal-content"
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="w-[95%] max-auto max-h-3/4 relative"
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
