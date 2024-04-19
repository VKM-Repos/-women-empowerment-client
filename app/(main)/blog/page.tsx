"use client";
import React, { useEffect } from "react";
import { TransitionParent } from "@/lib/utils/transition";
import Image from "next/image";
import GroupFaces from "@/public/images/group-faces.png";
import heroImage from "@/public/images/blog_hero_image.svg";
import BlogCard from "./components/BlogCard";
import comingSoon from "@/public/images/coming_soon.svg";
const BlogPage = () => {
  const subscribe = (event: any) => {
    event.preventDefault();
  };
  return (
    <TransitionParent>
      <section className="w-[95vw]  space-y-[4rem] pb-[3rem] min-h-screen">
        <div className="flex flex-col items-center  w-[50%] mx-auto">
          <Image src={comingSoon} alt="Coming Soon" />
          <div className="w-full flex flex-col mt-10 gap-5 ">
            <p className="text-center">
              Subscribe and be the first to be notified once blog posts are up
            </p>
            <div className="flex gap-5">
              <input
                type="text"
                className="focus:outline-none border border-gray-500 px-5 py-2 w-[80%] rounded-md"
                placeholder="sarahbling@gmail.com"
              />
              <button className="text-white-100 bg-btnWarning px-5 py-2.5 rounded-md">
                Subscribe
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center mt-10">
            <p>Follow us on</p>
            <div className="flex gap-3">
              <a href="" target="__blank">
                <svg
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M27.0713 25.456H31.7241L32.4546 20.7007H27.0704V18.1017C27.0704 16.1262 27.712 14.3745 29.5486 14.3745H32.5V10.2247C31.9815 10.1542 30.8847 10 28.8125 10C24.4852 10 21.9483 12.2991 21.9483 17.5371V20.7007H17.5V25.456H21.9483V38.5263C22.8293 38.6596 23.7216 38.75 24.6376 38.75C25.4656 38.75 26.2737 38.6738 27.0713 38.5653V25.456Z"
                    fill="#106840"
                  />
                </svg>
              </a>
              <a href="" target="__blank">
                <svg
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M38.25 18.625C37.375 19 36.375 19.25 35.375 19.375C36.375 18.75 37.25 17.75 37.625 16.625C36.625 17.25 35.625 17.625 34.375 17.875C33.5 16.875 32.125 16.25 30.75 16.25C28 16.25 25.75 18.5 25.75 21.25C25.75 21.625 25.75 22 25.875 22.375C21.75 22.125 18 20.125 15.5 17.125C15.125 17.875 14.875 18.75 14.875 19.625C14.875 21.375 15.75 22.875 17.125 23.75C16.25 23.75 15.5 23.5 14.875 23.125C14.875 25.5 16.625 27.625 18.875 28C18.5 28.125 18 28.125 17.5 28.125C17.125 28.125 16.875 28.125 16.5 28C17.125 30 19 31.5 21.25 31.5C19.5 32.875 17.375 33.625 15 33.625C14.625 33.625 14.25 33.625 13.75 33.5C16 34.875 18.625 35.75 21.5 35.75C30.75 35.75 35.75 28.125 35.75 21.5V20.875C36.75 20.5 37.625 19.625 38.25 18.625Z"
                    fill="#106840"
                  />
                </svg>
              </a>
              <a href="" target="__blank">
                <svg
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M35 25.9305V32.8251H30.9641V26.3509C30.9641 24.7534 30.3756 23.6603 28.9462 23.6603C27.8531 23.6603 27.1805 24.417 26.9283 25.0897C26.8442 25.3419 26.7601 25.6783 26.7601 26.0987V32.8251H22.7242C22.7242 32.8251 22.8083 21.8946 22.7242 20.8016H26.7601V22.4832C27.2646 21.6424 28.2735 20.4652 30.3756 20.4652C32.9821 20.4652 35 22.2309 35 25.9305ZM18.5202 15C17.1749 15 16.25 15.9249 16.25 17.102C16.25 18.2791 17.0908 19.204 18.4361 19.204C19.8655 19.204 20.7063 18.2791 20.7063 17.102C20.7904 15.8408 19.9495 15 18.5202 15ZM16.5022 32.8251H20.5381V20.8016H16.5022V32.8251Z"
                    fill="#106840"
                  />
                </svg>
              </a>
              <a href="" target="__blank">
                <svg
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.4645 16.4645L15.5806 15.5806L15.5806 15.5806L16.4645 16.4645ZM33.5356 16.4645L34.4195 15.5806L34.4194 15.5806L33.5356 16.4645ZM33.5356 33.5356L34.4194 34.4195L34.4195 34.4194L33.5356 33.5356ZM16.4645 33.5356L15.5806 34.4194L15.5806 34.4195L16.4645 33.5356ZM30.7977 20.4605C31.488 20.4605 32.0477 19.9009 32.0477 19.2105C32.0477 18.5202 31.488 17.9605 30.7977 17.9605V20.4605ZM30.7882 17.9605C30.0979 17.9605 29.5382 18.5202 29.5382 19.2105C29.5382 19.9009 30.0979 20.4605 30.7882 20.4605V17.9605ZM16.25 25C16.25 22.6076 16.2527 20.9391 16.4219 19.6802C16.5863 18.4572 16.8871 17.8096 17.3483 17.3483L15.5806 15.5806C14.5774 16.5838 14.1459 17.8469 13.9442 19.3471C13.7473 20.8113 13.75 22.6783 13.75 25H16.25ZM17.3483 17.3483C17.8096 16.8871 18.4572 16.5863 19.6802 16.4219C20.9391 16.2527 22.6076 16.25 25 16.25V13.75C22.6783 13.75 20.8113 13.7473 19.3471 13.9442C17.8469 14.1459 16.5838 14.5774 15.5806 15.5806L17.3483 17.3483ZM25 16.25C27.3923 16.25 29.0609 16.2527 30.3198 16.4219C31.5428 16.5863 32.1904 16.8871 32.6517 17.3484L34.4194 15.5806C33.4162 14.5774 32.1531 14.1459 30.6529 13.9442C29.1887 13.7473 27.3217 13.75 25 13.75V16.25ZM32.6517 17.3483C33.1129 17.8096 33.4137 18.4572 33.5781 19.6802C33.7473 20.9391 33.75 22.6076 33.75 25H36.25C36.25 22.6783 36.2527 20.8113 36.0558 19.3471C35.8541 17.8469 35.4226 16.5838 34.4195 15.5806L32.6517 17.3483ZM33.75 25C33.75 27.3923 33.7473 29.0609 33.5781 30.3198C33.4137 31.5428 33.1129 32.1904 32.6517 32.6517L34.4195 34.4194C35.4226 33.4162 35.8541 32.1531 36.0558 30.6529C36.2527 29.1887 36.25 27.3217 36.25 25H33.75ZM32.6517 32.6517C32.1904 33.1129 31.5428 33.4137 30.3198 33.5781C29.0609 33.7473 27.3923 33.75 25 33.75V36.25C27.3217 36.25 29.1887 36.2527 30.6529 36.0558C32.1531 35.8541 33.4162 35.4226 34.4194 34.4195L32.6517 32.6517ZM25 33.75C22.6076 33.75 20.9391 33.7473 19.6802 33.5781C18.4572 33.4137 17.8096 33.1129 17.3483 32.6517L15.5806 34.4195C16.5838 35.4226 17.8469 35.8541 19.3471 36.0558C20.8113 36.2527 22.6783 36.25 25 36.25V33.75ZM17.3484 32.6517C16.8871 32.1904 16.5863 31.5428 16.4219 30.3198C16.2527 29.0609 16.25 27.3923 16.25 25H13.75C13.75 27.3217 13.7473 29.1887 13.9442 30.6529C14.1459 32.1531 14.5774 33.4162 15.5806 34.4194L17.3484 32.6517ZM28.4868 25C28.4868 26.9257 26.9257 28.4868 25 28.4868V30.9868C28.3065 30.9868 30.9868 28.3065 30.9868 25H28.4868ZM25 28.4868C23.0743 28.4868 21.5132 26.9257 21.5132 25H19.0132C19.0132 28.3065 21.6936 30.9868 25 30.9868V28.4868ZM21.5132 25C21.5132 23.0743 23.0743 21.5132 25 21.5132V19.0132C21.6936 19.0132 19.0132 21.6936 19.0132 25H21.5132ZM25 21.5132C26.9257 21.5132 28.4868 23.0743 28.4868 25H30.9868C30.9868 21.6936 28.3065 19.0132 25 19.0132V21.5132ZM30.7977 17.9605H30.7882V20.4605H30.7977V17.9605Z"
                    fill="#106840"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        {/* <div className="w-full bg-primary h-[23rem] hidden rounded-[2rem] lg:flex  items-center justify-between relative overflow-hidden px-10">
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
                className="border border-gray-500 focus:outline-none px-4 py-2 rounded-md flex-1"
                placeholder="sarahbling@gmail.com"
              />
              <button className="bg-btnWarning text-white-100 px-3 py-2 rounded-md">
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
        </div> */}
      </section>
    </TransitionParent>
  );
};

export default BlogPage;
