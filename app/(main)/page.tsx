"use client";
import React, { useEffect, useState } from "react";
import doddles from "@/public/images/img_circledoodle.png";
import maginify from "@/public/images/img_search.svg";
import womenInPower from "@/public/images/img_womeninpower1.svg";
import { TransitionElement } from "@/lib/utils/transition";
import db from "@/data/db.json";
import { Organization } from "@/components/LandingPage/Organization";
import { Events } from "@/components/LandingPage/EventsCard";
import ellipse from "@/public/images/ellipse.svg";
import { CommunityCard } from "@/components/LandingPage/CommunityCard";
import EventCard from "./(community)/discussions/components/EventCard";
import Image from "next/image";
import Icon from "@/components/Common/Icons/Icon";
import { AnimatePresence, motion } from "framer-motion";
import NewsCard from "./(community)/discussions/components/NewsCard";


const communityDiscussionTopics = [
  {
    id: "1",
    topic: "Sensitization",
    desc: "Women in power speaks louder that riots for our rights",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/525b2f46-be25-4721-b43c-5cb642182b00?apiKey=12cdcbacd64a44978db653c66e993585&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/525b2f46-be25-4721-b43c-5cb642182b00?apiKey=12cdcbacd64a44978db653c66e993585&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/525b2f46-be25-4721-b43c-5cb642182b00?apiKey=12cdcbacd64a44978db653c66e993585&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/525b2f46-be25-4721-b43c-5cb642182b00?apiKey=12cdcbacd64a44978db653c66e993585&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/525b2f46-be25-4721-b43c-5cb642182b00?apiKey=12cdcbacd64a44978db653c66e993585&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/525b2f46-be25-4721-b43c-5cb642182b00?apiKey=12cdcbacd64a44978db653c66e993585&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/525b2f46-be25-4721-b43c-5cb642182b00?apiKey=12cdcbacd64a44978db653c66e993585&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/525b2f46-be25-4721-b43c-5cb642182b00?apiKey=12cdcbacd64a44978db653c66e993585&",
  },
  {
    id: "2",
    topic: "Health",
    desc: "Tips women will surely need to maintain the upper hand indiscussions.",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/afedf1c5-8a5d-487a-8a46-f5cde8be68a5?apiKey=12cdcbacd64a44978db653c66e993585&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/afedf1c5-8a5d-487a-8a46-f5cde8be68a5?apiKey=12cdcbacd64a44978db653c66e993585&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/afedf1c5-8a5d-487a-8a46-f5cde8be68a5?apiKey=12cdcbacd64a44978db653c66e993585&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/afedf1c5-8a5d-487a-8a46-f5cde8be68a5?apiKey=12cdcbacd64a44978db653c66e993585&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/afedf1c5-8a5d-487a-8a46-f5cde8be68a5?apiKey=12cdcbacd64a44978db653c66e993585&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/afedf1c5-8a5d-487a-8a46-f5cde8be68a5?apiKey=12cdcbacd64a44978db653c66e993585&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/afedf1c5-8a5d-487a-8a46-f5cde8be68a5?apiKey=12cdcbacd64a44978db653c66e993585&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/afedf1c5-8a5d-487a-8a46-f5cde8be68a5?apiKey=12cdcbacd64a44978db653c66e993585&",
  },
  {
    id: "3",
    topic: "Girl Power",
    desc: "                    Creating a safe environment for ladies to share their pain and not feel condemned",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/fdbae476-32ff-4e3d-8589-a1630a88b08e?apiKey=12cdcbacd64a44978db653c66e993585&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/fdbae476-32ff-4e3d-8589-a1630a88b08e?apiKey=12cdcbacd64a44978db653c66e993585&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fdbae476-32ff-4e3d-8589-a1630a88b08e?apiKey=12cdcbacd64a44978db653c66e993585&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/fdbae476-32ff-4e3d-8589-a1630a88b08e?apiKey=12cdcbacd64a44978db653c66e993585&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/fdbae476-32ff-4e3d-8589-a1630a88b08e?apiKey=12cdcbacd64a44978db653c66e993585&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fdbae476-32ff-4e3d-8589-a1630a88b08e?apiKey=12cdcbacd64a44978db653c66e993585&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/fdbae476-32ff-4e3d-8589-a1630a88b08e?apiKey=12cdcbacd64a44978db653c66e993585&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/fdbae476-32ff-4e3d-8589-a1630a88b08e?apiKey=12cdcbacd64a44978db653c66e993585&",
  },
  {
    id: "4",
    topic: "Growth",
    desc: " Empowering women is all about helping women grow in their field and become better humans",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/e5961b25-f66c-4c2e-9680-e706dc3ea692?apiKey=12cdcbacd64a44978db653c66e993585&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e5961b25-f66c-4c2e-9680-e706dc3ea692?apiKey=12cdcbacd64a44978db653c66e993585&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e5961b25-f66c-4c2e-9680-e706dc3ea692?apiKey=12cdcbacd64a44978db653c66e993585&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e5961b25-f66c-4c2e-9680-e706dc3ea692?apiKey=12cdcbacd64a44978db653c66e993585&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e5961b25-f66c-4c2e-9680-e706dc3ea692?apiKey=12cdcbacd64a44978db653c66e993585&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e5961b25-f66c-4c2e-9680-e706dc3ea692?apiKey=12cdcbacd64a44978db653c66e993585&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e5961b25-f66c-4c2e-9680-e706dc3ea692?apiKey=12cdcbacd64a44978db653c66e993585&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e5961b25-f66c-4c2e-9680-e706dc3ea692?apiKey=12cdcbacd64a44978db653c66e993585&",
  },
]

const featuredProjects = [
  {
    id: "1",
    topic: "A360 Project",
    desc: "To ignite transforming change in Nigeria’s Education sector, fostering an ecosystem where education, excellence is recognized and celebrated",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/525b2f46-be25-4721-b43c-5cb642182b00?apiKey=12cdcbacd64a44978db653c66e993585&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/525b2f46-be25-4721-b43c-5cb642182b00?apiKey=12cdcbacd64a44978db653c66e993585&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/525b2f46-be25-4721-b43c-5cb642182b00?apiKey=12cdcbacd64a44978db653c66e993585&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/525b2f46-be25-4721-b43c-5cb642182b00?apiKey=12cdcbacd64a44978db653c66e993585&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/525b2f46-be25-4721-b43c-5cb642182b00?apiKey=12cdcbacd64a44978db653c66e993585&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/525b2f46-be25-4721-b43c-5cb642182b00?apiKey=12cdcbacd64a44978db653c66e993585&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/525b2f46-be25-4721-b43c-5cb642182b00?apiKey=12cdcbacd64a44978db653c66e993585&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/525b2f46-be25-4721-b43c-5cb642182b00?apiKey=12cdcbacd64a44978db653c66e993585&",
  },
  {
    id: "2",
    topic: "Reporta Health",
    desc: "To ignite transforming change in Nigeria’s Education sector, fostering an ecosystem where education, excellence is recognized and celebrated",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/afedf1c5-8a5d-487a-8a46-f5cde8be68a5?apiKey=12cdcbacd64a44978db653c66e993585&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/afedf1c5-8a5d-487a-8a46-f5cde8be68a5?apiKey=12cdcbacd64a44978db653c66e993585&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/afedf1c5-8a5d-487a-8a46-f5cde8be68a5?apiKey=12cdcbacd64a44978db653c66e993585&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/afedf1c5-8a5d-487a-8a46-f5cde8be68a5?apiKey=12cdcbacd64a44978db653c66e993585&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/afedf1c5-8a5d-487a-8a46-f5cde8be68a5?apiKey=12cdcbacd64a44978db653c66e993585&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/afedf1c5-8a5d-487a-8a46-f5cde8be68a5?apiKey=12cdcbacd64a44978db653c66e993585&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/afedf1c5-8a5d-487a-8a46-f5cde8be68a5?apiKey=12cdcbacd64a44978db653c66e993585&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/afedf1c5-8a5d-487a-8a46-f5cde8be68a5?apiKey=12cdcbacd64a44978db653c66e993585&",
  },
  {
    id: "3",
    topic: "UNICEF - child safety",
    desc: "To ignite transforming change in Nigeria’s Education sector, fostering an ecosystem where education, excellence is recognized and celebrated",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/fdbae476-32ff-4e3d-8589-a1630a88b08e?apiKey=12cdcbacd64a44978db653c66e993585&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/fdbae476-32ff-4e3d-8589-a1630a88b08e?apiKey=12cdcbacd64a44978db653c66e993585&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fdbae476-32ff-4e3d-8589-a1630a88b08e?apiKey=12cdcbacd64a44978db653c66e993585&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/fdbae476-32ff-4e3d-8589-a1630a88b08e?apiKey=12cdcbacd64a44978db653c66e993585&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/fdbae476-32ff-4e3d-8589-a1630a88b08e?apiKey=12cdcbacd64a44978db653c66e993585&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fdbae476-32ff-4e3d-8589-a1630a88b08e?apiKey=12cdcbacd64a44978db653c66e993585&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/fdbae476-32ff-4e3d-8589-a1630a88b08e?apiKey=12cdcbacd64a44978db653c66e993585&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/fdbae476-32ff-4e3d-8589-a1630a88b08e?apiKey=12cdcbacd64a44978db653c66e993585&",
  },

]

const LandingPage = () => {
  const searchTerms = [
    "Technology",
    "Gender Equity",
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


  const words = ["Able", "Strong", "Women"];

  const transition = { duration: 1, ease: "easeInOut" };

  const itemVariants = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        ...transition,
        delay: 0.5, // Delay before new word appears
      },
    },
    exit: {
      y: 100,
      opacity: 0,
      transition,
    },
  };

  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      // Animate out the current word
      setCurrentWordIndex((prevIndex) => {
        return (prevIndex + 1) % words.length;
      });
    }, 4000);

    return () => clearInterval(timer);
  }, []);
  return (
    <TransitionElement>
      <section className=" w-screen mx-auto flex flex-col items-center justify-start">
        <div className="z-10 absolute top-5 left-0 hidden md:block">
          <Image
            src={doddles}
            alt="doodles"
            layout="responsive"
            width={10}
            height={10}
            className="lg:max-w-[12rem] max-w-[7rem]"
          />
        </div>

        {/* Hero */}
        <div className="bg-primary w-[95%] lg:h-[30rem] h-[25rem] rounded-[1rem] flex justify-start items-center p-2 md:p-16 relative overflow-hidden">
          <div className="w-full lg:w-1/2 flex flex-col items-start gap-4 relative left-0 lg:left-[5%]">
            <h1 className="md:text-[46px] text-[28px] text-center text-primaryWhite font-bold flex flex-nowrap items-start justify-center gap-2">
              Together we are
              <AnimatePresence mode="wait" initial={false}>
                <span
                  style={{
                    overflow: "hidden",
                    display: "inline-block",
                  }}
                  key={words[currentWordIndex]}
                >
                  <motion.span
                    style={{ display: "inline-block" }}
                    // key={words[currentWordIndex]}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="text-secondary italic px-2"
                  >
                    {words[currentWordIndex]}
                  </motion.span>
                </span>
              </AnimatePresence>
            </h1>
            <p className="text-white-100 font-light text-base font-Quicksand text-center">
              Discover and learn about women organizations with only one click.
            </p>
            <div className="w-full flex justify-center items-center">
              <input
                type="text"
                name=""
                id=""
                placeholder="Search for organization"
                // value={searchTerm}
                // onChange={handleSearchInputChange}
                className="w-[95%] py-3 border border-primaryWhite bg-primaryWhite rounded-l text-base md:text-lg text-gray-100 focus:outline-btnWarning p-2 "
              />
              <button
                // onClick={(e) => handleSearch(searchTerm, e)}
                className="bg-btnWarning p-4 rounded-br-md rounded-tr-md"
              >
                <Icon name="img_search" className="" />
              </button>
            </div>
            <div className="w-full flex items-start justify-start space-x-4">
              <span className="text-primaryWhite font-semibold text-base md:whitespace-nowrap">
                Popular questions:{" "}
              </span>
              <span className="flex flex-wrap items-center justify-start gap-1 md:gap-5">
                {searchTerms.map((term) => (
                  <button
                    className="w-fit p-1 px-2 bg-secondaryOffWhite/80 font-light text-sm rounded hover:bg-btnWarning hover:text-primaryWhite transition-colors"
                    key={term}
                    onClick={(e) => handleSearch(term, e)}
                  >
                    {term}
                  </button>
                ))}
              </span>
            </div>
          </div>
          <div className="absolute bottom-0 -right-10 hidden md:block">
            <Image
              src={womenInPower}
              alt="group of women"
              layout="intrinsic"
              width={100}
              height={100}
              className="w-[650px] rounded-br-xl"
            />
          </div>
        </div>

        {/* Organizations, events and news  */}
        <div className="w-full p-4 mx-auto flex flex-col lg:flex-row gap-2 relative">
          <div className="lg:w-4/6 w-full flex flex-col py-4">
            <div className="text-orange-500 text-2xl font-sora font-bold items-stretch justify-center px-5 mx-5 py-2.5 border-b-neutral-200 border-b border-solid max-md:max-w-full mb-5">
              TOP ORGANIZATIONS
            </div>
            {/* Organization feeds */}
            <section className=" flex flex-col gap-10 px-5">
              {db.communities.length === 0 ? (
                <p className="no-result">No Organization found</p>
              ) : (
                <>
                  {db.communities.map((item: any) => (
                    <CommunityCard organization={item} key={item} />
                  ))}
                </>
              )}
              <button onClick={() => { }} className="text-orange-500 text-base justify-center items-stretch border self-center w-[255px] max-w-full mt-8 p-5 rounded-lg border-solid border-orange-500 mb-10">
                SEE ALL ORGANIZATIONS
              </button>
            </section>
          </div>

          <div className="lg:w-2/6 w-full flex flex-col space-y-8  border-none py-[5rem] relative lg:sticky top-0 lg:h-screen h-full overflow-y-scroll scrollable-section ">
            <aside className="w-full py-4 rounded-[1.5rem]">
              <div className="text-orange-500 text-3xl font-bold items-stretch self-stretch justify-center px-5 py-2.5 border-b-neutral-200 border-b border-solid lg:-mt-[86.5px]">
                EVENTS
              </div>

              <section className="flex flex-col lg:gap-[0.1rem] gap-[3rem]  py-1">
                {db.events.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
                <button className="text-orange-500 text-base justify-center items-stretch border self-center w-[207px] max-w-full mt-6 p-5 rounded-lg border-solid border-orange-500">
                  SEE MORE EVENTS
                </button>
              </section>
            </aside>

            <aside className="w-full py-6 rounded-[1.5rem]">
              <div className="text-orange-500 text-2xl font-bold items-stretch self-stretch justify-center px-5 py-2.5 border-b-neutral-200 border-b border-solid -mt-[50px]">
                NEWS CENTER
              </div>
              <section className="flex flex-col lg:gap-[0.1rem] gap-[3rem] py-1">
                {db.news.map((item) => (
                  <NewsCard key={item.id} news={item} />
                ))}
                <button className="text-orange-500 text-base justify-center items-stretch border shadow-sm self-center  max-w-full mt-10 p-5 rounded-lg border-solid border-orange-500 max-md:mt-10">
                  MORE FROM NEWS CENTER
                </button>
              </section>
            </aside>
          </div>
        </div>

        {/* Discussions */}
        <div className="bg-[#F0EBD6] self-stretch z-[1] flex w-full flex-col pt-12 px-16 max-md:max-w-full max-md:px-5">
          <h3 className="font-sora text-center text-green-800 text-5xl font-semibold max-w-[600px] self-center mt-9 max-md:max-w-full max-md:text-4xl">
            Community Discussions
          </h3>
          <p className="text-black my-8 text-opacity-90 md:text-center text-left text-base leading-6 self-center max-w-[736px] mt-3 max-md:max-w-full">
            A platform that seeks to help Women thrive in their own environment,
            <br /> a free space to share with people who can relate, a community
            for all who want and ask for help.
          </p>

          <div className="gap-5 flex max-md:flex-col items-start max-md:gap-0">
            {communityDiscussionTopics.map((discussion) => (
              <div key={discussion.id} className="flex flex-col items-stretch w-3/12 max-md:w-full max-md:ml-0">
                <div className="justify-center items-stretch bg-primaryWhite flex-col w-full h-[28rem] shadow-lg pt-6 pb-12 px-6 rounded-3xl max-md:mt-5 max-md:px-5">
                  <div className="justify-center items-center bg-slate-200 flex flex-col p-2.5 h-[15rem]">
                    <img
                      loading="lazy"
                      srcSet={discussion.image}
                      className=" aspect-auto object-contain object-center h-[15rem] overflow-hidden max-md:mr-0.5"
                    />
                  </div>
                  <div className="text-green-800 font-sora text-2xl font-semibold leading-5 mt-5">
                    {discussion.topic}
                  </div>
                  <div className="text-sm text-gray-200 mt-4">
                    {discussion.desc}
                  </div>
                </div>
              </div>
            ))}

          </div>

          <button className="text-white-100 font-quickSand text-base font-medium justify-center items-center bg-green-800 self-center w-44 max-w-full mt-11 px-5 py-4 rounded-xl max-md:mt-10">
            Join Discussion
          </button>

          <svg
            className="-mb-[45px]"
            width="88"
            height="85"
            viewBox="0 0 88 85"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.17"
              d="M32.1321 11.2577C34.8218 14.1002 37.5062 16.9373 40.1959 19.7799C43.5488 23.3234 46.3554 23.3668 50.212 19.8433C56.1113 14.3868 61.9333 8.93036 67.652 3.34144C70.2023 0.834164 71.9506 0.320204 74.3576 3.27328C77.8685 7.55662 81.8361 11.481 85.7596 15.4053C87.8763 17.5138 87.6327 19.2088 85.4283 21.2632C79.3701 26.8909 73.3798 32.5903 67.4046 38.3173C63.7975 41.7303 63.6683 44.5517 66.8679 47.9683C72.1532 53.5541 77.362 59.2227 82.7693 64.7036C85.0513 67.0218 85.0507 68.8216 82.4608 71.1467C78.1947 74.974 73.9843 78.8951 69.9644 82.9708C67.3204 85.6714 65.5589 85.3296 63.2932 82.8181C58.4208 77.3647 53.2927 72.1322 48.2517 66.8279C44.225 62.5723 41.7069 62.6117 37.1106 66.9084C31.3907 72.3206 25.6191 77.6666 19.9566 83.1396C17.6293 85.4149 15.8958 85.4651 13.8193 83.1303C10.0404 78.8949 6.13905 74.7718 2.11537 70.761C-0.011776 68.6415 0.200145 67.0182 2.4442 64.9472C8.22621 59.6122 13.9148 54.1669 19.5924 48.7215C24.2617 44.3033 24.3725 41.6146 20.2583 37.2431C15.2289 31.9277 10.3046 26.513 5.12867 21.3467C2.80245 19.0286 2.74647 17.2508 5.30448 14.9036C9.74805 10.8665 14.0558 6.68583 18.3845 2.52725C20.4215 0.599831 22.077 0.163203 24.0321 2.59191C26.5725 5.73266 29.4425 8.41508 32.1321 11.2577Z"
              fill="#106840"
            />
          </svg>
        </div>


        {/* Projects */}
        <div className="bg-[#EEEEED] self-stretch flex w-full flex-col space-y-6 pt-12 px-16 max-md:max-w-full max-md:px-5">
          <h3 className="font-sora text-center text-green-800 text-5xl font-semibold max-w-[600px] self-center mt-9 max-md:max-w-full max-md:text-4xl">
            Women Hub Projects
          </h3>
          <p className="text-black my-8 text-opacity-90 text-left md:text-center text-base leading-6 self-center max-w-[736px] mt-3 max-md:max-w-full">
            A platform that seeks to help Women thrive in their own environment,
            <br /> a free space to share with people who can relate, a community
            for all who want and ask for help.
          </p>

          <div className="gap-5 flex max-md:flex-col items-start max-md:gap-0">
            {featuredProjects.map((project) => (
              <div key={project.id} className="flex flex-col items-stretch w-1/3 max-md:w-full max-md:ml-0">
                <div className="justify-center items-stretch bg-primaryWhite flex-col w-full h-[35rem] shadow-lg pt-6 pb-12 px-6 rounded-3xl max-md:mt-5 max-md:px-5">
                  <div className="justify-center items-center bg-slate-200 flex flex-col p-2.5 h-[20rem] relative">
                    <div className="bg-gradient-to-t from-primaryBlack/40 to-transparent absolute inset-0 "></div>
                    <img
                      loading="lazy"
                      srcSet={project.image}
                      className=" aspect-auto object-contain object-center h-[15rem] overflow-hidden max-md:mr-0.5"
                    />
                    <span className="w-fit text-xs bg-btnWarning text-primaryWhite p-1 px-2 rounded-md absolute bottom-2 left-2">completed</span>
                  </div>
                  <div className="text-green-800 font-sora text-2xl font-semibold leading-5 mt-5">
                    {project.topic}
                  </div>
                  <div className="text-sm text-gray-200 mt-4">
                    {project.desc}
                  </div>
                </div>
              </div>
            ))}

          </div>

          <div className="flex items-center justify-between py-4">
            <span className="flex gap-5 items-center justify-center">
              <button className="w-[3.5rem] aspect-square rounded-full bg-primary flex items-center justify-center">
                <svg width="32" height="38" viewBox="0 0 32 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.34128 19H26.4402" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M11.9341 26.6922C11.9341 26.6922 5.34067 21.027 5.34067 18.9999C5.34067 16.9728 11.9341 11.3076 11.9341 11.3076" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

              </button>
              <button className="w-[3.5rem] aspect-square rounded-full bg-primary flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M26.6587 16.1099H5.55981" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M20.0659 22.7032C20.0659 22.7032 26.6593 17.8473 26.6593 16.1098C26.6593 14.3723 20.0659 9.51636 20.0659 9.51636" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </button>
            </span>
            <button className="text-primary font-semibold text-sm md:text-base mr-0 md:mr-8">View all</button>
          </div>

          <svg
            className="-mb-[45px]"
            width="88"
            height="85"
            viewBox="0 0 88 85"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.17"
              d="M32.1321 11.2577C34.8218 14.1002 37.5062 16.9373 40.1959 19.7799C43.5488 23.3234 46.3554 23.3668 50.212 19.8433C56.1113 14.3868 61.9333 8.93036 67.652 3.34144C70.2023 0.834164 71.9506 0.320204 74.3576 3.27328C77.8685 7.55662 81.8361 11.481 85.7596 15.4053C87.8763 17.5138 87.6327 19.2088 85.4283 21.2632C79.3701 26.8909 73.3798 32.5903 67.4046 38.3173C63.7975 41.7303 63.6683 44.5517 66.8679 47.9683C72.1532 53.5541 77.362 59.2227 82.7693 64.7036C85.0513 67.0218 85.0507 68.8216 82.4608 71.1467C78.1947 74.974 73.9843 78.8951 69.9644 82.9708C67.3204 85.6714 65.5589 85.3296 63.2932 82.8181C58.4208 77.3647 53.2927 72.1322 48.2517 66.8279C44.225 62.5723 41.7069 62.6117 37.1106 66.9084C31.3907 72.3206 25.6191 77.6666 19.9566 83.1396C17.6293 85.4149 15.8958 85.4651 13.8193 83.1303C10.0404 78.8949 6.13905 74.7718 2.11537 70.761C-0.011776 68.6415 0.200145 67.0182 2.4442 64.9472C8.22621 59.6122 13.9148 54.1669 19.5924 48.7215C24.2617 44.3033 24.3725 41.6146 20.2583 37.2431C15.2289 31.9277 10.3046 26.513 5.12867 21.3467C2.80245 19.0286 2.74647 17.2508 5.30448 14.9036C9.74805 10.8665 14.0558 6.68583 18.3845 2.52725C20.4215 0.599831 22.077 0.163203 24.0321 2.59191C26.5725 5.73266 29.4425 8.41508 32.1321 11.2577Z"
              fill="#106840"
            />
          </svg>
        </div>

        {/* How this works */}
        <div className="justify-center items-center bg-[#F9F2FF] self-stretch flex mt-0 w-full flex-col px-16 py-12 max-md:max-w-full max-md:px-5">
          <div className="text-green-800 font-sora text-5xl font-semibold max-w-[379px] self-center mt-16 max-md:text-4xl max-md:mt-10">
            How this works
          </div>
          <div className="text-black font-quickSand text-opacity-90 text-center text-base leading-6 self-center max-w-[736px] mt-3 max-md:max-w-full">
            This platform serves as a comprehensive resource, bringing together
            all the organizations dedicated to supporting women in Nigeria.
          </div>
          <div className="self-stretch mt-16 max-md:max-w-full max-md:mt-10">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
                <div className="justify-between self-stretch bg-pink-300 grow w-full px-10 py-11 rounded-3xl max-md:max-w-full max-md:px-5">
                  <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <div className="flex flex-col items-stretch w-[54%] max-md:w-full max-md:ml-0">
                      <div className="justify-center items-stretch self-stretch flex flex-col my-auto max-md:mt-10">
                        <div className="text-neutral-950 font-sora text-2xl font-semibold">
                          Add organization
                        </div>
                        <div className="text-black text-opacity-90 font-quickSand text-sm mt-4">
                          You have an organization towards empowering women?
                          join the platform
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-stretch w-[46%] ml-5 max-md:w-full max-md:ml-0">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d0dec30b-9670-4956-8f75-9f6a66e82975?apiKey=12cdcbacd64a44978db653c66e993585&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d0dec30b-9670-4956-8f75-9f6a66e82975?apiKey=12cdcbacd64a44978db653c66e993585&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d0dec30b-9670-4956-8f75-9f6a66e82975?apiKey=12cdcbacd64a44978db653c66e993585&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d0dec30b-9670-4956-8f75-9f6a66e82975?apiKey=12cdcbacd64a44978db653c66e993585&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d0dec30b-9670-4956-8f75-9f6a66e82975?apiKey=12cdcbacd64a44978db653c66e993585&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d0dec30b-9670-4956-8f75-9f6a66e82975?apiKey=12cdcbacd64a44978db653c66e993585&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d0dec30b-9670-4956-8f75-9f6a66e82975?apiKey=12cdcbacd64a44978db653c66e993585&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d0dec30b-9670-4956-8f75-9f6a66e82975?apiKey=12cdcbacd64a44978db653c66e993585&"
                        className="aspect-[1.07] object-contain object-center w-full overflow-hidden max-md:mt-10"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
                <div className="self-stretch bg-orange-200 grow w-full px-10 py-9 rounded-3xl max-md:max-w-full max-md:px-5">
                  <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <div className="flex flex-col items-stretch w-[53%] max-md:w-full max-md:ml-0">
                      <div className="justify-center items-stretch self-stretch flex flex-col my-auto max-md:mt-10">
                        <div className="text-neutral-950 font-sora text-2xl font-semibold">
                          Share
                        </div>
                        <div className="text-black text-opacity-90 font-quickSand text-sm mt-4">
                          Help others become aware of evnets discussions and
                          women organiation .. share
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-stretch w-[47%] ml-5 max-md:w-full max-md:ml-0">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/87880df5-931f-4c38-8e44-87c89d38f7d6?apiKey=12cdcbacd64a44978db653c66e993585&"
                        className="aspect-square object-contain object-center w-full fill-indigo-50 overflow-hidden max-md:mt-10"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="justify-between self-center bg-green-200 w-[631px] max-w-full mt-10 mb-10 px-10 py-8 rounded-3xl max-md:mb-10 max-md:px-5">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[54%] max-md:w-full max-md:ml-0">
                <div className="justify-center items-stretch self-stretch flex flex-col my-auto max-md:mt-10">
                  <div className="text-neutral-950 font-sora text-2xl font-semibold">
                    Engage
                  </div>
                  <div className="text-black text-opacity-90 font-quickSand text-sm mt-4">
                    Discuss your opinions, attend events all on this platforms
                    community
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[46%] ml-5 max-md:w-full max-md:ml-0">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6ccb8180-b425-4312-b0b0-b20155b693cf?apiKey=12cdcbacd64a44978db653c66e993585&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6ccb8180-b425-4312-b0b0-b20155b693cf?apiKey=12cdcbacd64a44978db653c66e993585&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6ccb8180-b425-4312-b0b0-b20155b693cf?apiKey=12cdcbacd64a44978db653c66e993585&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6ccb8180-b425-4312-b0b0-b20155b693cf?apiKey=12cdcbacd64a44978db653c66e993585&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6ccb8180-b425-4312-b0b0-b20155b693cf?apiKey=12cdcbacd64a44978db653c66e993585&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6ccb8180-b425-4312-b0b0-b20155b693cf?apiKey=12cdcbacd64a44978db653c66e993585&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6ccb8180-b425-4312-b0b0-b20155b693cf?apiKey=12cdcbacd64a44978db653c66e993585&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6ccb8180-b425-4312-b0b0-b20155b693cf?apiKey=12cdcbacd64a44978db653c66e993585&"
                  className="aspect-square object-contain object-center w-full overflow-hidden max-md:mt-8"
                />
              </div>
            </div>
          </div>
        </div>


        <svg
          className="w-screen"
          width="1440"
          height="214"
          viewBox="0 0 1440 214"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse cx="720" cy="-416.5" rx="1623.5" ry="630.5" fill="#F9F2FF" />
        </svg>
      </section>
    </TransitionElement>
  );
};

export default LandingPage;
