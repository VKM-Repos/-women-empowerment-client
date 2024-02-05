"use client";
import React from "react";
import { TransitionParent } from "@/lib/utils/transition";
import db from "@/data/db.json";
import { CategoryCard } from "./components/CategoryCard";

const CategoryPage = () => {
  return (
    <TransitionParent>
      <section className="w-screen flex flex-col items-center justify-center space-y-[2rem] min-h-screen">
       
          <h1 className="text-primary text-2xl md:text-4xl lg:text-5xl text-center mt-8 font-semibold font-sora">
            Get Familiar with Women organizations
          </h1>
          <p className="text-gray-300 text-base md:text-lg lg:text-xl text-center font-quickSand">
            Please select any of the category below to begin
          </p>

          <div className="w-full md:w-[95%] mx-auto flex justify-center gap-5 flex-wrap md:gap-y-16 pb-[8rem]">
            {db.categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
      </section>
    </TransitionParent>
  );
};

export default CategoryPage;
