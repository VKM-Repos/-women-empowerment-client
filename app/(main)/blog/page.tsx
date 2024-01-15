"use client";
import React, { useEffect } from "react";
import { TransitionParent } from "@/lib/utils/transition";
import Image from "next/image";
import GroupFaces from "@/public/images/group-faces.png";



const BlogPage = () => {
  return (
    <TransitionParent>
      <section className="w-[95vw] mx-auto flex flex-col items-center justify-start space-y-[4rem] pb-[3rem] min-h-screen">
        <div className="w-full bg-primary h-[23rem] rounded-[2rem] flex items-center justify-center relative overflow-hidden">
          <span className=" max-w-2xl flex flex-col items-center justify-start space-y-4 text-center relative z-10">
            <h1 className="text-3xl md:text-5xl font-bold text-primaryWhite">
              Blog
            </h1>
            <p className="text-base font-light w-2/3 mx-auto text-primaryWhite">
              Welcome to blog page
            </p>
          </span>
          <Image
            src={GroupFaces}
            alt="group Of Women"
            className="absolute bottom-0 left-0 w-4/5 md:w-1/3 aspect-auto"
          />
        </div>

      <h1>There are no blogs yet</h1>
      </section>
    </TransitionParent>
  );
};

export default BlogPage;
