"use client";
import React from "react";
import { TransitionParent } from "@/lib/utils/transition";
import db from "@/data/db.json";
import { CategoryCard } from "./components/CategoryCard";

const CategoryPage = () => {
  return (
    <TransitionParent>
      <section className="w-full flex flex-col items-stretch">
        <div className="flex w-full flex-col mt-9 px-16 max-md:max-w-full max-md:px-5">
          <div className="text-green-800 text-5xl font-semibold max-w-[968px] self-center ml-5 max-md:max-w-full max-md:text-4xl">
            Get Familiar with Women organizations
          </div>
          <div className="text-black text-opacity-80 text-base max-w-[400px] self-center ml-3.5 mt-3">
            Please select any of the category below to begin
          </div>

          <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-5 gap-y-16 my-[5rem]">
            {db.categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>

        <div className="justify-center items-center flex w-full flex-col mt-28 mb-16 px-5 py-10 rounded-lg max-md:max-w-full max-md:mt-10">
          <div className="flex w-[978px] max-w-full flex-col items-stretch">
            <h2 className="text-primary text-center text-5xl font-semibold max-md:max-w-full max-md:text-4xl">
              Join the growing community and create awareness
            </h2>
            <button className="text-white-100 text-center text-base font-medium justify-center items-center rounded bg-orange-500 self-center w-[145px] max-w-full mt-7 px-5 py-3.5">
              Get started
            </button>
          </div>
        </div>
      </section>
    </TransitionParent>
  );
};

export default CategoryPage;
