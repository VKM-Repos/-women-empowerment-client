"use client";
import React, { useState } from "react";
import { TransitionParent, TransitionFromBottom } from "@/lib/utils/transition";
import Image from "next/image";
import helpline from "@/public/images/helpline.png";
// import Connect from "@/public/images/connect.png";
import Icon from "@/components/Common/Icons/Icon";
import BubbleChat from "@/components/Common/Icons/BubbleChat";
import { useModal } from "@/lib/context/modal-context";
import Concern from "../components/Concern";
import { useRouter } from "next/navigation";
// import FormSelect from "@/components/Form/FormSelect";
// import { Form } from "@/components/UI/Form";

// import Button from "@/components/Common/Button/Button";
// import PaginationControls from "@/components/Common/Pagination/PaginationControls";

export default function Helplines() {
  const { showModal } = useModal();
  const [searchTerm, setSearchTerm] = useState<string>("");
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

  return (
    <TransitionParent>
      <section className=" w-screen mx-auto flex flex-col items-center justify-start space-y-[3rem] pb-[14rem] ">
        <div className="bg-primary w-[98%] md:w-[95%] lg:h-[25rem] h-[26rem] rounded-[1rem] flex flex-row justify-around items-center  relative overflow-hidden">
          <div className="w-[690px] md:col-span-1 flex flex-col  justify-start  gap-2 md:gap-4 relative left-0 z-20">
            <h1 className="text-[48px] font-semibold text-primaryWhite text-center md:text-left font-sora">
              Helplines
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
              src={helpline}
              alt="rubik"
              width={446.19}
              height={334.11}
              className="lg:w-[25rem] w-[15rem] mx-auto aspect-auto rounded-br-xl"
            />
          </div>
        </div>

        <div className="w-[95%] mx-auto pb-[7rem] ">
          <div className="flex flex-row justify-between mb-10 items-center">
            <div className="">
              <select
                name="cars"
                id="cars"
                className="border-2 rounded-[8px] px-[32px] py-[16px] w-[451px]  text-[14px] font-quickSand font-[400]"
              >
                <option disabled>Select State</option>
                <option value="volvo">F.C.T</option>
                <option value="saab">OYO</option>
                <option value="mercedes">Kaduna</option>
                <option value="audi">Kano</option>
                <option value="audi">Lagos</option>
                <option value="audi">Ondo</option>
              </select>
            </div>

            <div className="font-quickSand font-[600]">
              <button
                onClick={router.back}
                className="bg-[#FCFCFC] border-2 border-blue text-[15px] px-[20px] py-[12px] rounded-[12px] border-2 border-[#EFEFEF]"
              >
                Back to support center
              </button>
            </div>
          </div>
          <h1 className="font-sora font-[400] text-[32px] mb-4">Help Lines</h1>
          <div className="w-full  md:mx-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-2 border-gray-500 rounded-lg">
            {Array.from({ length: 15 }, (_, i) => (
              <div
                key={i}
                className="w-full flex flex-col items-center text-center justify-center p-4"
              >
                <p className="text-base font-light text-gray-100 flex items-center justify-center space-x-2 font-sora">
                  <span className="">Domestic violence</span>
                  <span>-</span>
                  <span className="text-primary font-quickSand font-semibold">
                    0808000123456
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-[80%] py-[2rem] flex flex-row justify-between  bg-[#F0EBD6] items-center rounded-[16px] px-[24px] py-[32px]">
          <div className="">
            <div className="font-quickSand font-[600] text-[20px] p-2">
              Still have questions?
            </div>
            <div className="font-sora font-[400] text-[16px] p-2">
              Can’t find the answer to your question? Chat with our support
              team.
            </div>
          </div>
          <div className="">
            <button className="flex flex-row bg-[#E3FFF4] text-primary px-[24px] py-[14px] rounded-[12px] mr-6">
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
