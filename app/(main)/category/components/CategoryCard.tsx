import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import React from "react";
import formatIdToTitle from "@/lib/utils/formatIdToTitle";

type CategoryProps = {
  id: string;
  icon?: string;
  title: string;
};

export const CategoryCard: React.FC<{ category: CategoryProps }> = ({
  category,
}) => {
  const imageControls = useAnimation();

  const handleHoverStart = () => {
    imageControls.start({ scale: 1.3 }); 
  };

  const handleHoverEnd = () => {
    imageControls.start({ scale: 1 }); 
  };

  return (
    <Link
      href={`/category/${category.id}`}
      as={`/category/${formatIdToTitle(category.title)}`}
      className="lg:w-[20rem] md:w-[14rem] w-[10rem] aspect-square flex flex-col items-center justify-center gap-2 md:gap-5 drop-shadow-sm transform transition-all ease-in-out duration-300 rounded-[0.5rem] shadow-md p-2 overflow-hidden bg-btnWarning/20 hover:bg-primary/70"
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
    >
      <motion.img
        loading="lazy"
        srcSet={category.icon}
        className="h-2/3  mx-auto flex bg-center mt-8 md:aspect-square overflow-hidden drop-shadow-lg"
        animate={imageControls}
      />
      <motion.h6
        className="text-black text-xs md:text-xl font-semibold flex items-center justify-center h-1/3 w-full text-center font-quickSand"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {category.title}
      </motion.h6>
    </Link>
  );
};
