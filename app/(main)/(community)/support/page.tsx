"use client";
import React, { useState } from "react";
import { TransitionParent, TransitionFromBottom } from "@/lib/utils/transition";
import Image from "next/image";
import Support from "@/public/images/support.png";
import Connect from "@/public/images/connect.png";
import Icon from "@/components/Common/Icons/Icon";
// import Button from "@/components/Common/Button/Button";
import Link from "next/link";
import { guideCardData } from "./components/guideCard-mockup-data";
import GuideCard from "./components/GuideCard";
import Phone from "@/components/Common/Icons/social-media-icons/Phone";
import Mail from "@/components/Common/Icons/social-media-icons/Mail";
import Location from "@/components/Common/Icons/social-media-icons/Location";
import Facebook from "@/components/Common/Icons/social-media-icons/Facebook";
import Twitter from "@/components/Common/Icons/social-media-icons/Twitter";
import Instagram from "@/components/Common/Icons/social-media-icons/Instagram";
import LinkedIn from "@/components/Common/Icons/social-media-icons/LinkedIn";

const SupportPage = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [question, setQuestion] = useState<string>("");

  const guides: any = guideCardData;

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
        <div className="bg-primary w-[98%] md:w-[95%] lg:h-[25rem] h-[26rem] rounded-[1rem] grid grid-cols-1 lg:grid-cols-2 place-content-start lg:place-content-center items-center p-2 md:p-16 relative overflow-hidden">
          <div className="w-full md:col-span-1 flex flex-col  justify-start py-4 gap-2 md:gap-4 relative left-0 z-20">
            <h1 className="text-2xl md:text-4xl font-semibold text-primaryWhite text-center md:text-left font-sora">
              Hi, Need some help?
            </h1>
            <div className="flex items-center justify-start relative w-full font-quickSand">
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
          <div className="md:col-span-1 flex items-center justify-between">
            <Image
              src={Support}
              alt="rubik"
              width={446.19}
              height={334.11}
              className="lg:w-[25rem] w-[15rem] mx-auto aspect-auto rounded-br-xl"
            />
          </div>
        </div>

        <div className="flex flex-col place-content-center">
          <div className="self-center text-primary font-sora font-bold text-[32px]">
            Welcome to the Women Hub Support Center!
          </div>
          <div className="text-center font-sora text-[24px] max-w-[1064px]">
            We're here to assist you with any questions or concerns you may
            have. Explore our resources to find the help you need.
          </div>
        </div>

        <div className="flex mt-10 mb-10 ">
          {guides.map((guide: any) => {
            return guide.id === "1" ? (
              <Link
                href={`/support/${guide.page}`}
                // state={{ pageName: "Header", data: guide }}
              >
                <GuideCard key={guide.id} data={guide} />
              </Link>
            ) : guide.id === "2" ? (
              <Link
                href={`/support/${guide.page}`}
                // state={{ pageName: "Header", data: guide }}
              >
                <GuideCard key={guide.id} data={guide} />
              </Link>
            ) : (
              <Link
                href={`/support/${guide.page}`}
                // state={{ pageName: "Header", data: guide }}
              >
                <GuideCard key={guide.id} data={guide} />
              </Link>
            );
          })}
        </div>
        {/* <div className="w-[95%] mx-auto">
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
                <p className="text-xs font-semibold text-btnWarning font-quickSand">
                  Answer
                </p>
                <p className="text-sm text-gray-100 font-quickSand">
                  Yes, you can add multiple organizations by clicking &lsquo;Add
                  Organization&rsquo; button and entering their details.
                </p>
              </div>
            ))}
          </div>
        </div> */}

        <div className="w-screen py-[2rem] grid grid-cols-1 md:grid-cols-2 gap-10 bg-[#F0EBD6] items-center">
          <div className="p-8">
            <Image
              src={Connect}
              alt="connect"
              className="md:w-3/4 w-full aspect-square mx-auto object-contain"
            />
          </div>
          <div className="w-full flex flex-col items-center justify-center gap-5">
            <h4 className="text-[32px] md:text-2xl font-normal text-primary font-sora">
              Contact Information
            </h4>

            <div className="flex flex-col gap-y-10">
              <div className="flex flex-row ">
                <div className="pr-4">
                  <Phone />
                </div>
                <div>+234 9064137838</div>
              </div>
              <div className="flex flex-row">
                <div className="pr-4">
                  <Mail />
                </div>
                <div>social@vhdo.org</div>
              </div>
              <div className="flex flex-row">
                <div className="pr-4">
                  <Location />
                </div>
                <div>Plot c114, platinum plaza, first avenue gwarinpa</div>
              </div>
            </div>
            <div className="text-btnWarning py-10">
              Follow our social media page to get updates
            </div>
            <div className="my-4 flex w-auto items-center justify-center text-[#106840]">
              <a
                href="https://x.com/TheWomen_hub?t=GzIJ8w21eTToumkHJfvQTA&s=09"
                target="__blank"
              >
                <Facebook size="40" color="#515151" />
              </a>
              <a
                href="https://x.com/TheWomen_hub?t=GzIJ8w21eTToumkHJfvQTA&s=09"
                target="__blank"
              >
                <Twitter size="40" color="#515151" />
              </a>
              <a
                href="https://ng.linkedin.com/company/viable-helpers-development-organization"
                target="__blank"
              >
                <LinkedIn size="40" color="#515151" />
              </a>
              <a
                href="https://www.instagram.com/women_hub_org?igsh=MTN2d3h6aGgyOHV5NA=="
                target="__blank"
              >
                <Instagram size="40" color="#515151" />
              </a>
            </div>
          </div>
        </div>

        {/* <div className="w-[95%] mx-auto pb-[7rem] ">
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
                  <span className="text-primary font-quickSand font-semibold">
                    0808000123456
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div> */}
      </section>
    </TransitionParent>
  );
};

export default SupportPage;
