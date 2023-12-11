"use client";
import React, { useEffect } from "react";
import { TransitionElement, TransitionStart } from "@/lib/utils/transition";
import Link from "next/link";

import db from '@/data/db.json'
import { Categories } from "@/components/Category";

const CategoryPage = () => {

  return (
    <TransitionElement>
      <section className="flex flex-col items-stretch w-screen">
        <div className="flex w-screen flex-col mt-9 px-10 max-md:max-w-full max-md:px-5 bg-white-100">
          <div className="text-green-800 text-5xl font-semibold max-w-[968px] self-center ml-5 max-md:max-w-full max-md:text-4xl">
            Get Familiar with Women organizations
          </div>
          <div className="text-black text-opacity-80 text-base max-w-[400px] self-center ml-3.5 mt-3">
            Please select any of the category below to begin
          </div>
          <Categories categories={db.categories} />
        </div>
        <div className="justify-center items-center flex w-full flex-col mt-28 mb-16 px-5 py-10 rounded-lg max-md:max-w-full max-md:mt-10">
          <div className="flex w-[978px] max-w-full flex-col items-stretch">
            <div className="text-green-800 text-center text-5xl font-semibold max-md:max-w-full max-md:text-4xl">
              Join the growing community and create awareness
            </div>
            <button className="text-white-100 text-center text-base font-medium justify-center items-center rounded bg-orange-500 self-center w-[145px] max-w-full mt-7 px-5 py-3.5">
              Get started
            </button>
          </div>
        </div>
      </section>
    </TransitionElement>
  );
};

export default CategoryPage;
