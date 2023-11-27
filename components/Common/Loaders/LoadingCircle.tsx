"use client";

import { motion } from "framer-motion";

const LoadingCircle: React.FC = () => {
  return (
    <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-[2500]">
      <motion.svg
        className="rounded-full shadow-xl"
        width="50"
        height="50"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
      >
        <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="2" fill="white" />
        <motion.circle
          cx="50"
          cy="50"
          r="8"
          fill="black"
          initial={{ y: 35 }}
          animate={{ y: 35, transition: { duration: 3, repeat: Infinity } }}
        />
      </motion.svg>
    </div>
  );
};

export default LoadingCircle;
