"use client";
import React, { useEffect } from "react";
import { TransitionParent } from "@/lib/utils/transition";
import Image from "next/image";
import GroupFaces from "@/public/images/group-faces.png";

import heroImage from "@/public/images/blog_hero_image.svg";
import BlogCard from "./components/BlogCard";
const BlogPage = () => {
  const subscribe = (event: any) => {
    event.preventDefault();
  };
  return (
    <TransitionParent>
      <section className="w-[95vw]  space-y-[4rem] pb-[3rem] min-h-screen">
        <div className="w-full bg-primary h-[23rem] hidden rounded-[2rem] lg:flex  items-center justify-between relative overflow-hidden px-10">
          <div className="w-1/2 pl-5">
            <p className="text-white-100 text-3xl font-sora font-medium w-[35rem] leading-10">
              Explore a collection of inspiring blogs, leadership insights, and
              community triumphs.{" "}
            </p>
          </div>
          <div className="w-1/2 flex justify-end">
            <Image src={heroImage} alt="Hero image" />
          </div>
        </div>
        <div className="w-full bg-primary h-[12.5rem] flex items-center rounded-[2rem] -mt-[100px] relative sm:hidden ">
          <p className="text-white-100 text-center text-xl font-sora font-medium w-[35rem] leading-7">
            Explore a collection of inspiring blogs, leadership insights, and
            community triumphs.{" "}
          </p>
        </div>
        <div className="font-quickSand flex flex-col items-center ">
          <h1 className="text-xl text-gray-200 text-center">
            Stay updated by subscribing to our newsletter for the latest stories
            and insights.
          </h1>
          <form action="" className="flex w-full" onSubmit={subscribe}>
            <div className="flex gap-5 items-center justify-center mt-5 w-[40%] mx-auto ">
              <input
                type="email"
                className="border border-gray-500 focus:outline-none px-4 py-1 rounded-md flex-1"
                placeholder="sarahbling@gmail.com"
              />
              <button className="bg-btnWarning text-white-100 px-2 py-1 rounded-md">
                Subscribe
              </button>
            </div>
          </form>
        </div>
        <div className="">
          <h2 className="font-sora font-semibold mb-5">Recent blog post</h2>
          <div className="flex justify-center gap-[100px] ">
            <div>
              <BlogCard imageWidth="500px" width="500px" flexType="flex-col" />
            </div>

            <div className="flex flex-col gap-16">
              <BlogCard imageWidth="220px" width="300px" flexType="flex-row" />
              <BlogCard imageWidth="220px" width="300px" flexType="flex-row" />
            </div>
          </div>
        </div>
        <div>
          <h2 className="font-sora font-semibold mb-5">All blog post</h2>
          <div className="flex justify-center w-full">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 ">
              {[1, 2, 3, 4, 5, 6].map((item, index) => (
                <div className="flex flex-col justify-start ">
                  <img
                    src="https://placehold.co/400x400?text=Women\n Hub"
                    className="w-[300px]"
                    alt=""
                  />
                  <div className="flex flex-col gap-2">
                    <p className="text-primary font-sora text-sm font-semibold mt-2">
                      John Doe . 19 Feb 2024
                    </p>
                    <p
                      className={`flex items-center gap-5 text-lg text-gray-200 font-sora font-bold`}
                    >
                      Ongoing TFVA discussions{" "}
                      <span>
                        <svg
                          width="36"
                          height="36"
                          viewBox="0 0 36 36"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M26.3572 9.33077C26.9362 9.90983 26.9362 10.8487 26.3572 11.4277L10.0469 27.738C9.4678 28.3171 8.52897 28.3171 7.94991 27.738C7.37086 27.159 7.37086 26.2201 7.94991 25.6411L24.2603 9.33077C24.8393 8.75172 25.7782 8.75172 26.3572 9.33077Z"
                            fill="#65655E"
                          />
                          <path
                            d="M25.6714 7.84379C26.0876 7.96524 26.6531 8.17818 27.0818 8.60685C27.5104 9.03553 27.7235 9.60108 27.8449 10.0173C27.9791 10.4774 28.0678 10.9979 28.1289 11.5214C28.2517 12.5723 28.2821 13.8058 28.2732 14.9527C28.2641 16.1085 28.2143 17.2184 28.1673 18.0364C28.1437 18.4462 28.1206 18.785 28.1034 19.0223C28.0948 19.1397 28.0797 19.3319 28.0745 19.398L28.0743 19.3998C28.0055 20.2159 27.2882 20.8225 26.4722 20.7537C25.6562 20.6849 25.0505 19.9677 25.1192 19.1517C25.1238 19.093 25.1376 18.9195 25.1457 18.8073C25.162 18.5826 25.184 18.259 25.2067 17.8659C25.252 17.0781 25.2992 16.0203 25.3077 14.9294C25.3163 13.8297 25.2853 12.7372 25.1834 11.8653C25.1322 11.4274 25.0296 10.9682 24.9598 10.7289C24.7205 10.659 24.2613 10.5564 23.8234 10.5053C22.9514 10.4035 21.8589 10.3723 20.7591 10.3809C19.6683 10.3895 18.6106 10.4366 17.8227 10.4819C17.4296 10.5046 17.1059 10.5266 16.8814 10.5429C16.7692 10.5511 16.5963 10.5647 16.5376 10.5693C15.7216 10.638 15.0038 10.0324 14.935 9.21641C14.8662 8.40039 15.4719 7.68312 16.288 7.61433L16.2913 7.61407C16.3589 7.60874 16.5497 7.59369 16.6664 7.58521C16.9037 7.56797 17.2425 7.54491 17.6523 7.52132C18.4702 7.47426 19.5801 7.42457 20.736 7.41553C21.8829 7.40654 23.1164 7.43706 24.1673 7.55975C24.6908 7.62087 25.2113 7.7095 25.6714 7.84379Z"
                            fill="#65655E"
                          />
                        </svg>
                      </span>
                    </p>
                    <p className="text-gray-300 text-sm font-quickSand w-[200px]">
                      The unveiling of the official name to which technology
                      facilitated violence and abuse...{" "}
                    </p>
                    <div className="flex gap-4 items-center">
                      <span className="flex gap-1">
                        <svg
                          width="25"
                          height="25"
                          viewBox="0 0 25 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.33714 10.4739C2.80455 16.5563 9.15347 20.4162 12.2695 21.5859C15.5904 20.4809 21.6782 16.6136 22.2316 10.4739C23.225 2.8017 14.3089 1.75789 12.2695 6.25385C10.3084 1.75789 1.75288 2.87089 2.33714 10.4739Z"
                            stroke="#787878"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>{" "}
                        3.5K
                      </span>
                      <span>
                        {" "}
                        <svg
                          width="25"
                          height="25"
                          viewBox="0 0 25 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.30859 6.58594L12.3086 2.58594L16.3086 6.58594"
                            stroke="#787878"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M16.3086 10.5859H18.3086C18.5738 10.5859 18.8282 10.6913 19.0157 10.8788C19.2032 11.0664 19.3086 11.3207 19.3086 11.5859V20.5859C19.3086 20.8512 19.2032 21.1055 19.0157 21.293C18.8282 21.4806 18.5738 21.5859 18.3086 21.5859H6.30859C6.04338 21.5859 5.78902 21.4806 5.60149 21.293C5.41395 21.1055 5.30859 20.8512 5.30859 20.5859V11.5859C5.30859 11.3207 5.41395 11.0664 5.60149 10.8788C5.78902 10.6913 6.04338 10.5859 6.30859 10.5859H8.30859"
                            stroke="#787878"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M12.3086 2.58594V15.5859"
                            stroke="#787878"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </TransitionParent>
  );
};

export default BlogPage;
