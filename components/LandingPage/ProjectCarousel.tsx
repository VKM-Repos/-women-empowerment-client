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


const ProjectCarousel = ({ projects }: any) => {

  const swiperRef = useRef<any>();

  const navigationNextRef = useRef(null);
  const navigationPrevRef = useRef(null);



  return (
    <div className="w-[90%] mx-auto  py-4 relative z-10">
      <div className="w-full">
        <Swiper
          ref={swiperRef}
          className=""
          slidesPerView={1}
          modules={[Navigation]}
            navigation={{
            prevEl: navigationPrevRef?.current,
            nextEl: navigationNextRef?.current,
            }}
        // onBeforeInit={(swiper) => {
        //   swiper.navigation.nextEl = navigationNextRef.current;
        //   swiper.navigation.prevEl = navigationPrevRef.current;
        // }}
          spaceBetween={30}
          loop={true} 
          breakpoints={{
            768: {
              slidesPerView: 3, // Display 3 slides per view on tablet screens
            },
            1024: {
              slidesPerView: 4, // Display 4 slides per view on larger screens
            },
          }}
        >
          {projects?.content.slice(0, 6).map((project: Project) => (
            <SwiperSlide className="" key={project?.id}>
              <div className="w-full flex ">
                <ProjectCard project={project} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="w-[90%] mx-auto flex items-center justify-between py-4">
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
        <Link
          href="projects"
          className="text-primary font-semibold text-sm md:text-base mr-0 md:mr-8"
        >
          View all
        </Link>
      </div>
    </div>
  );
};

export default ProjectCarousel;
