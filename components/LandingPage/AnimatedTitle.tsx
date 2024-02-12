'use client'
import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

type TitleProps = {
    title: string
}

function AnimatedTitle({title}: TitleProps) {

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
    <h1 className="md:text-[45px] text-[24px] text-center text-primaryWhite font-sora font-semibold flex flex-nowrap items-start justify-center gap-1">
              {title}
              <AnimatePresence mode="wait" initial={false}>
                <span className="inline-block overflow-hidden">
                  <motion.span
                    style={{ display: "inline-block" }}
                    key={words[currentWordIndex]}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="text-secondary italic px-2"
                  >
                    {words[currentWordIndex]}
                  </motion.span>
                </span>
              </AnimatePresence>
            </h1>
  )
}

export default AnimatedTitle