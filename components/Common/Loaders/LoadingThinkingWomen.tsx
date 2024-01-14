"use client";

import React, { useEffect, useState } from "react";

import thinkingWoman from "@/public/images/avatar-thinking-svgrepo-com.svg";
import thinkingWoman1 from "@/public/images/avatar-thinking-1-svgrepo-com.svg";
import thinkingWoman2 from "@/public/images/avatar-thinking-2-svgrepo-com.svg";
import thinkingWoman3 from "@/public/images/avatar-thinking-3-svgrepo-com.svg";
import thinkingWoman4 from "@/public/images/avatar-thinking-4-svgrepo-com.svg";
import thinkingWoman5 from "@/public/images/avatar-thinking-8-svgrepo-com.svg";
import thinkingWoman6 from "@/public/images/avatar-thinking-9-svgrepo-com.svg";


const svgImages = [thinkingWoman, thinkingWoman1, thinkingWoman2, thinkingWoman2, thinkingWoman3, thinkingWoman4, thinkingWoman5, thinkingWoman6];

const getRandomImage = () => {
  const randomIndex = Math.floor(Math.random() * svgImages.length);
  return svgImages[randomIndex];
};

const LoadingThinkingWomen: React.FC = () => {
  const [randomImage, setRandomImage] = useState<any>(null);

  useEffect(() => {
    setRandomImage(getRandomImage());
  }, []);

  return (
    <div className="fixed inset-0 backdrop-blur-[2px] flex items-center justify-center z-[2500]">
      <div className="relative flex justify-center items-center">
        <div className="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-btnWarning"></div>
        {randomImage && (
          <img src={randomImage.src} alt="Thinking woman"  className="rounded-full h-28 w-28" />
        )}
      </div>
    </div>
  );
};

export default LoadingThinkingWomen;

