"use client";
import React, { useState } from "react";
import { TransitionParent } from "@/lib/utils/transition";
import Image from "next/image";
import faq from "@/public/images/faq.png";
import Icon from "@/components/Common/Icons/Icon";
import { useRouter } from "next/navigation";

export default function FAQs() {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const router = useRouter();
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
    console.log(`Searching for: '${selectedTerm}'`);
  };

  return (
    <TransitionParent>
      <section className=" w-screen mx-auto flex flex-col items-center justify-start space-y-[3rem] pb-[14rem] ">
        <div className="bg-primary w-[98%] md:w-[95%] lg:h-[25rem] h-[26rem] rounded-[1rem] flex flex-row justify-around items-center  relative overflow-hidden">
          <div className="w-[690px] md:col-span-1 flex flex-col  justify-start  gap-2 md:gap-4 relative left-0 z-20">
            <h1 className="text-[48px] font-semibold text-primaryWhite text-center md:text-left font-sora">
              FAQs
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

          <div className=" flex items-center justify-between">
            <Image
              src={faq}
              alt="rubik"
              width={446.19}
              height={334.11}
              className="lg:w-[25rem] w-[15rem] mx-auto aspect-auto rounded-br-xl"
            />
          </div>
        </div>

        <div className="w-[95%] mx-auto">
          <div className="flex flex-row justify-between mb-10 items-center">
            <h1 className="  text-primary md:text-left font-quickSand text-[20px] font-[500]">
              These questions are generated from user feedback and are updated
              frequently
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
        </div>
      </section>
    </TransitionParent>
  );
}
