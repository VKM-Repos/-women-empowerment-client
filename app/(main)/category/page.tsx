'use client'
import React from "react";
import { TransitionParent } from "@/lib/utils/transition";
import { CategoryCard } from "./components/CategoryCard";
import { useGET } from "@/lib/hooks/useGET.hook";
import { Category } from "@/lib/types/category.types";
import LoadingThinkingWomen from "@/components/Common/Loaders/LoadingThinkingWomen";
import Loading from "../loading";

const CategoryPage = () => {

   const { data: categories, isLoading, isError } = useGET({
    url: "/categories",
    queryKey: ["categories"],
    withAuth: false, 
    enabled: true,
  });

  console.log(categories?.content);
  


  return (
     <TransitionParent>
      <section className="w-screen flex flex-col items-center justify-center space-y-[2rem] min-h-screen">
          <h1 className="text-primary text-2xl md:text-4xl lg:text-5xl text-center mt-8 font-semibold font-sora">
            Get Familiar with Women organizations
          </h1>
          <p className="text-gray-300 text-base md:text-lg lg:text-xl text-center font-quickSand">
            Please select any of the category below to begin
          </p>

          {isLoading && <Loading />}

          {isError && <p>Error fetching categories</p>}

          {!isLoading && !isError && (
          <div className="w-full md:w-[95%] mx-auto flex justify-center gap-5 flex-wrap md:gap-y-16 pb-[8rem]">
            {Array.isArray(categories?.content) &&
              categories?.content.map((category: Category) => (
                <CategoryCard key={category.id} category={category} />
              ))}
          </div>
        )}
      </section>
    </TransitionParent>
  );
};

export default CategoryPage;
