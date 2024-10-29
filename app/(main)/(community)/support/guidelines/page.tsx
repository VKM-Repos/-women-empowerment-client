"use client";
import React, { useState } from "react";
import { TransitionParent, TransitionFromBottom } from "@/lib/utils/transition";
import Image from "next/image";
import guideline from "@/public/images/guideline.png";
// import Connect from "@/public/images/connect.png";
import Icon from "@/components/Common/Icons/Icon";
// import Button from "@/components/Common/Button/Button";
import BubbleChat from "@/components/Common/Icons/BubbleChat";
import { useModal } from "@/lib/context/modal-context";
import Concern from "../components/Concern";
import PaginationControls from "@/components/Common/Pagination/PaginationControls";
import AllGuidelinesPosts from "../components/AllGuidelinesPosts";
import { useRouter } from "next/navigation";
import { guidelineMockPosts } from "../mockupData/guidelineMockPosts";

export default function Guidelines() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { showModal } = useModal();
  // const [email, setEmail] = useState<string>("");
  // const [question, setQuestion] = useState<string>("");

  const router = useRouter();
  const handleConcern = () => {
    showModal(<Concern />);
  };

  const handleSearchInputChange = (event: any) => {
    setSearchTerm(event.target.value);
  };

  const searchTerms = [
    "Technology",
    "can i add multiple organizations",
    "Sensitization",
    "Feminism",
    "How to add an organization",
  ];

  const handleSearch = (
    selectedTerm: string,
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    // Call the API using the selected search term (selectedTerm)

    // Update the state or perform any other necessary actions based on the API response
    console.log(`Searching for: '${selectedTerm}'`);
  };

  const mockData = guidelineMockPosts;

  return (
    <TransitionParent>
      <section className=" w-screen mx-auto flex flex-col items-center justify-start space-y-[3rem] pb-[14rem] ">
        <div className="bg-primary w-[98%] md:w-[95%] lg:h-[25rem] h-[26rem] rounded-[1rem] flex flex-row justify-around items-center  relative overflow-hidden">
          <div className="w-[690px] md:col-span-1 flex flex-col  justify-start  gap-2 md:gap-4 relative left-0 z-20">
            <h1 className="text-[48px] font-semibold text-primaryWhite text-center md:text-left font-sora">
              A Guide to Women Hub
            </h1>
            <div className="flex items-center justify-start relative w-[541.49px] font-quickSand">
              <input
                type="text"
                name=""
                id=""
                placeholder="Search a question"
                value={searchTerm}
                onChange={handleSearchInputChange}
                className="w-[95%] py-2 border border-primaryWhite bg-primaryWhite rounded-l text-base md:text-lg text-gray-100 focus:outline-btnWarning p-2 "
              />
              <button
                onClick={(e) => handleSearch(searchTerm, e)}
                className="bg-btnWarning p-4 rounded-br-md rounded-tr-md"
              >
                <Icon name="img_search" className="" />
              </button>
            </div>
            <div className="w-full flex items-start justify-start space-x-4 font-sora">
              <span className="hidden md:block text-primaryWhite font-semibold text-base whitespace-nowrap">
                Popular questions:{" "}
              </span>
              <span className="flex flex-wrap items-center justify-start gap-1 md:gap-5 font-quickSand">
                {searchTerms.map((term) => (
                  <button
                    className="w-fit p-1 px-2 bg-secondaryOffWhite/80 md:text-sm text-xs rounded hover:bg-btnWarning hover:text-primaryWhite transition-colors"
                    key={term}
                    onClick={(e) => handleSearch(term, e)}
                  >
                    {term}
                  </button>
                ))}
              </span>
            </div>
          </div>

          {/* <div className="md:col-span-1 relative md:absolute bottom-0 right-0 block z-10"> */}
          <div className=" flex items-center justify-between">
            <Image
              src={guideline}
              alt="rubik"
              width={446.19}
              height={334.11}
              className="lg:w-[25rem] w-[15rem] mx-auto aspect-auto rounded-br-xl"
            />
          </div>
        </div>

        <div className="w-[95%] mx-auto">
          <div className="flex flex-row justify-between mb-10 items-center">
            <h1 className=" text-primary md:text-left font-sora text-[32px] font-[700]">
              Articles
            </h1>
            <div className="font-quickSand font-[600]">
              <button
                onClick={router.back}
                className="bg-[#FCFCFC] border-2 border-blue text-[15px] px-[20px] py-[12px] rounded-[12px] border-2 border-[#EFEFEF]"
              >
                Back to support center
              </button>
            </div>
          </div>
          <div className="mx-auto w-full space-y-[4rem] md:w-[90%]">
            {/* {allBlogPosts.length > 0 ? ( */}
            <>
              <AllGuidelinesPosts data={mockData} />
            </>
            {/* ) : (
              <span className="text-center">
                There are no blog posts yet
              </span>
            )} */}
          </div>
        </div>

        <PaginationControls
          // totalPages={Math.ceil(data.totalElements / per_page)}
          // currentPage={data.page}
          totalPages={5}
          currentPage={1}
        />

        <div className="w-full flex-1">
          <div className="flex justify-end">
            <button className="flex flex-row bg-[#E3FFF4] text-primary px-[24px] py-[14px] rounded-[12px] mr-16 mt-8">
              <BubbleChat />{" "}
              <span className="ml-4" onClick={handleConcern}>
                Have concerns ? Talk to us
              </span>
            </button>
          </div>
        </div>
      </section>
    </TransitionParent>
  );
}
