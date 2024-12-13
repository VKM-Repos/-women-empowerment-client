"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type TitleProps = {
  title: string;
};

function AnimatedTitle({ title }: TitleProps) {
  const words = ["Able", "Strong", "Women"];

  const transition = { duration: 1, ease: "easeInOut" };

  const itemVariants = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        ...transition,
        delay: 0.5,
      },
    },
    exit: {
      y: 100,
      opacity: 0,
      transition,
    },
  };

  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      // Animate out the current word
      setCurrentWordIndex((prevIndex) => {
        return (prevIndex + 1) % words.length;
      });
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <h1 className="relative md:text-[48px] text-[20px] text-left text-primaryWhite font-sora font-semibold flex whitespace-nowrap items-start justify-center gap-0">
      {title}
      <AnimatePresence mode="wait" initial={false}>
        <span className=" w-[12rem] overflow-hidden">
          <motion.span
            style={{ display: "inline-block" }}
            key={words[currentWordIndex]}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="text-secondary italic px-1"
          >
            {words[currentWordIndex]}
          </motion.span>
        </span>
      </AnimatePresence>
    </h1>
  );
}

export default AnimatedTitle;
