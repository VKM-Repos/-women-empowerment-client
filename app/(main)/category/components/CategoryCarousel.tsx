"use client";

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { Category } from "@/lib/types/category.types";
import { CategoryCard } from "./CategoryCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/UI/Carousel';

interface CategoryCarouselProps {
  category: Category[];
  params: any;
}

const CategoryCarousel: React.FC<CategoryCarouselProps> = ({ category, params }) => {
  const router = useRouter();

  return (
    <div className="w-[90%] mx-auto py-4 relative z-10">
      <div className="w-full flex items-center justify-between py-4">
        <span className="w-[90%] mx-auto flex flex-col space-y-2">
          <h3 className="text-lg md:text-3xl font-bold text-primary text-sora">
            Other Categories
          </h3>
          <div className="w-[6rem] h-1 rounded bg-btnWarning" />
        </span>
        <span className="flex gap-5 items-center justify-center">
          <button
            className="w-[2.5rem] aspect-square rounded-full bg-primary flex items-center justify-center"
            onClick={() => document.getElementById('carouselPrev')?.click()}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 32 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.34128 19H26.4402"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.9341 26.6922C11.9341 26.6922 5.34067 21.027 5.34067 18.9999C5.34067 16.9728 11.9341 11.3076 11.9341 11.3076"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            className="w-[2.5rem] aspect-square rounded-full bg-primary flex items-center justify-center"
            onClick={() => document.getElementById('carouselNext')?.click()}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M26.6587 16.1099H5.55981"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20.0659 22.7032C20.0659 22.7032 26.6593 17.8473 26.6593 16.1098C26.6593 14.3723 20.0659 9.51636 20.0659 9.51636"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </span>
      </div>
      <div className="w-full">
        <Carousel opts={{ align: 'start' }} className="w-full relative">
          <CarouselContent>
            {Array.isArray(category) &&
              category
                .filter((cat: Category) => cat.id !== params?.id)
                .map((cat: Category) => (
                  <CarouselItem
                    key={cat.id}
                    className="md:basis-1/3 lg:basis-1/3 xl:basis-1/4 basis-1/2 aspect-square"
                  >
                    <CategoryCard category={cat} />
                  </CarouselItem>
                ))}
          </CarouselContent>
          <span className='absolute -top-10 right-12 flex items-center justify-end gap-2'>
            <CarouselPrevious className='hidden' id="carouselPrev" />
            <CarouselNext className='hidden' id="carouselNext" />
          </span>
        </Carousel>
      </div>
    </div>
  );
};

export default CategoryCarousel;
