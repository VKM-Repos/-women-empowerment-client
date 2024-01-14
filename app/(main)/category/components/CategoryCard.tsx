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
      className="w-[20rem] aspect-square flex flex-col items-center justify-center gap-5 drop-shadow-sm transform transition-all ease-in-out duration-300 rounded-[0.7rem] shadow-md p-4 overflow-hidden bg-btnWarning/20 hover:bg-primary/70"
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
    >
      <motion.img
        loading="lazy"
        srcSet={category.icon}
        className="w-1/2 mx-auto aspect-square overflow-hidden drop-shadow-lg"
        animate={imageControls}
      />
      <motion.h6
        className="text-black text-xl font-medium"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {category.title}
      </motion.h6>
    </Link>
  );
};
