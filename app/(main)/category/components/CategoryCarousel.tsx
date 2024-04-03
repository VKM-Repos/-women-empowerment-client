"use client";

import Link from "next/link";
import { Swiper, SwiperSlide, } from "swiper/react";
import { useRef } from "react";
import { ProjectCard } from "@/app/(main)/projects/components/ProjectCard";
import { Project } from "@/lib/types/project.types";
import "swiper/swiper-bundle.css";


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import { Category } from "@/lib/types/category.types";
import { CategoryCard } from "./CategoryCard";
import { Swiper as SwiperType } from "swiper/types";


const CategoryCarousel = ({ category, params }: any) => {


  const swiperRef = useRef<any>();

  const navigationNextRef = useRef(null);
  const navigationPrevRef = useRef(null);



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
                ref={navigationPrevRef}
                // onClick={() => swiper.slidePrev()}
                className="w-[3.5rem] aspect-square rounded-full bg-primary flex items-center justify-center"
            >
                <svg
                width="32"
                height="38"
                viewBox="0 0 32 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    d="M5.34128 19H26.4402"
                    stroke="white"
                    stroke-width="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M11.9341 26.6922C11.9341 26.6922 5.34067 21.027 5.34067 18.9999C5.34067 16.9728 11.9341 11.3076 11.9341 11.3076"
                    stroke="white"
                    stroke-width="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                </svg>
            </button>
            <button
                ref={navigationNextRef}
                // onClick={() => swiper.slideNext()}
                className="w-[3.5rem] aspect-square rounded-full bg-primary flex items-center justify-center"
            >
                <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    d="M26.6587 16.1099H5.55981"
                    stroke="white"
                    stroke-width="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M20.0659 22.7032C20.0659 22.7032 26.6593 17.8473 26.6593 16.1098C26.6593 14.3723 20.0659 9.51636 20.0659 9.51636"
                    stroke="white"
                    stroke-width="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                </svg>
            </button>
            </span>
      </div>
      <div className="w-full">
        <Swiper
          ref={swiperRef}
          className=""
          slidesPerView={2}
          modules={[Navigation]}
            // navigation={{
            // prevEl: navigationPrevRef.current,
            // nextEl: navigationNextRef.current,
            // }}
            onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
            }}
          spaceBetween={10}
        //   loop={true} 
          breakpoints={{
            768: {
              slidesPerView: 3, 
            },
            1024: {
              slidesPerView: 4, 
            },
          }}
        >
          <div className="">
            {Array.isArray(category) &&
            category
              .filter((category: Category) => category.id != params?.id) 
              .map((category: Category) => (
                <SwiperSlide
                  key={category.id}
                  className="md:w-[20rem] w-[10rem] aspect-square"
                >
                  <CategoryCard category={category} />
                </SwiperSlide>
              ))}
          </div>
        </Swiper>
      </div>
      
    </div>
  );
};

export default CategoryCarousel;
