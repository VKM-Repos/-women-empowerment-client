"use client";
import React, { useState } from "react";
import { TransitionParent, TransitionFromBottom } from "@/lib/utils/transition";
import Image from "next/image";
import Support from "@/public/images/support.png";
import Connect from "@/public/images/connect.png";
import Icon from "@/components/Common/Icons/Icon";
import Button from "@/components/Common/Button/Button";

const SupportPage = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [question, setQuestion] = useState<string>("");

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
      <section className=" w-screen mx-auto flex flex-col items-center justify-start space-y-[3rem] ">
        <div className="bg-primary w-[98%] md:w-[95%] lg:h-[25rem] h-[26rem] rounded-[1rem] grid grid-cols-1 lg:grid-cols-2 place-content-start lg:place-content-center items-center p-2 md:p-16 relative overflow-hidden">
          <div className="w-full md:col-span-1 flex flex-col items-start justify-start py-4 gap-2 md:gap-4 relative left-0 z-20">
            <h1 className="text-2xl md:text-4xl font-semibold text-primaryWhite text-center md:text-left font-sora">
              Hi, Need some help?
            </h1>
            <div className="flex items-center justify-start relative w-full font-quickSand">
              <input
                type="text"
                name=""
                id=""
                placeholder="Ask a question"
                value={searchTerm}
                onChange={handleSearchInputChange}
                className="w-[95%] py-3 border border-primaryWhite bg-primaryWhite rounded-l text-base md:text-lg text-gray-100 focus:outline-btnWarning p-2 "
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

             <div className="md:col-span-1 relative md:absolute bottom-0 right-0 block z-10">
            <Image
              src={Support}
              alt="rubik"
              width={1000}
              height={1000}
              className="lg:w-[25rem] w-[15rem] mx-auto aspect-auto rounded-br-xl"
            />
          </div>
          {/* <Image
            src={Support}
            alt="support"
            className="absolute bottom-0 right-10 w-4/5 md:w-1/4 opacity-20 md:opacity-100 aspect-square object-cover"
          /> */}
        </div>

        <div className="w-[95%] mx-auto">
          <h3 className="font-semibold text-xl md:text-4xl text-primary py-4 font-sora">
            FAQ
          </h3>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
            {Array.from({ length: 9 }, (_, i) => (
              <div
                key={i}
                className="w-full mx-auto h-[15rem] bg-[#DFEBF7] border border-gray-400 rounded-lg flex flex-col items-start justify-center gap-2 drop-shadow-md p-4"
              >
                <h6 className="text-base font-semibold text-gray-200 font-sora">
                  Can i add multiple organizations?
                </h6>
                <p className="text-xs font-semibold text-btnWarning font-quickSand">Answer</p>
                <p className="text-sm text-gray-100 font-quickSand">
                  Yes, you can add multiple organizations by clicking &lsquo;Add
                  Organization&rsquo; button and entering their details.
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-screen py-[2rem] grid grid-cols-1 md:grid-cols-2 gap-10 bg-[#F0EBD6] items-center">
          <div className="p-8">
            <Image
              src={Connect}
              alt="connect"
              className="md:w-3/4 w-full aspect-square mx-auto object-contain"
            />
          </div>
          <div className="w-full flex flex-col items-center justify-center gap-5">
            <h4 className="text-center text-base md:text-2xl font-normal text-gray-100 font-sora">
              Would you like to contact us?
            </h4>
            <p className="text-light text-sm md:text-base text-gray-300 font-sora">Fill in the form below</p>
            <form className="w-full md:w-2/3 mx-auto px-4 font-quickSand" action="">
              <fieldset className="flex flex-col gap-5">
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full py-3 border border-primaryWhite bg-primaryWhite rounded-lg text-base md:text-lg text-gray-100 focus:outline-btnWarning p-2 "
                />
                <textarea
                className="py-3 border border-primaryWhite bg-primaryWhite rounded-lg text-base md:text-lg text-gray-100 focus:outline-btnWarning p-2 h-[12rem]"
                  name=""
                  id=""
                  placeholder="Your question"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                ></textarea>
              </fieldset>
            </form>
            <Button
              label="Send"
              fullWidth={false}
              variant="primary"
              size="normal"
              state="active"
              onClick={() => {}}
            />
          </div>
        </div>

         <div className="w-[95%] mx-auto pb-[7rem] ">
          <h3 className="font-semibold text-xl md:text-4xl text-primary py-4 font-sora">
            Help Line
          </h3>
          <div className="w-[95%] mx-auto md:mx-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-2 border-gray-500 rounded-lg">
            {Array.from({ length: 15 }, (_, i) => (
              <div
                key={i}
                className="w-full flex flex-col items-center text-center justify-center p-4"
              >
                <p className="text-base font-light text-gray-100 flex items-center justify-center space-x-2 font-sora">
                  <span className="">Domestic violence</span>
                  <span>-</span>
                  <span className="text-primary font-quickSand font-semibold">0808000123456</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </TransitionParent>
  );
};

export default SupportPage;
