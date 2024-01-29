"use client";
import React, { useEffect, useState } from "react";
import doddles from "@/public/images/img_circledoodle.png";
import womenInPower from "@/public/images/img_womeninpower1.svg";
import { TransitionElement, TransitionParent } from "@/lib/utils/transition";
import db from "@/data/db.json";
import { CommunityCard } from "@/components/LandingPage/CommunityCard";
import EventCard from "./(community)/discussions/components/EventCard";
import Image from "next/image";
import Icon from "@/components/Common/Icons/Icon";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import NewsCard from "./(community)/discussions/components/NewsCard";
import Link from "next/link";
import {
  communityDiscussionTopics,
  featuredProjects,
  howItWorks,
  searchTerms,
} from "@/lib/utils/constants";
import Button from "@/components/Common/Button/Button";

const LandingPage = () => {
 

  const handleSearch = (
    selectedTerm: string,
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
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
        delay: 0.5, 
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



  const [activeIndex, setActiveIndex] = useState(0);

  const controls = useAnimation();

  const handlePrevClick = () => {
    const newIndex = (activeIndex - 1 + featuredProjects.length) % featuredProjects.length;
    setActiveIndex(newIndex);
  };

  const handleNextClick = () => {
    const newIndex = (activeIndex + 1) % featuredProjects.length;
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    controls.start({ x: `-${activeIndex * 107}%` });
  }, [activeIndex, controls])
  

  return (
    <TransitionParent>
      <section className=" w-screen flex flex-col items-center justify-start">
        <div className="z-10 absolute top-5 left-0 block">
          <Image
            src={doddles}
            alt="doodles"
            width={200}
            height={200}
            className="lg:w-[10rem] w-[6rem] aspect-auto"
          />
        </div>

        {/* Hero */}
        <div className="bg-primary w-[92%] md:w-[95%] lg:h-[26rem] h-[22rem] rounded-[1rem] grid grid-cols-1 lg:grid-cols-2 place-content-start md:place-content-center items-center p-4 md:p-16 relative overflow-hidden">
          <div className="w-full md:col-span-1 flex flex-col items-start justify-center mt-[2.5rem] gap-2 md:gap-4 relative left-0 lg:left-[5%] z-20">
            <h1 className="md:text-[45px] text-[24px] text-center text-primaryWhite font-sora font-semibold flex flex-nowrap items-start justify-center gap-1">
              Together we are
              <AnimatePresence mode="wait" initial={false}>
                <span className="inline-block overflow-hidden">
                  <motion.span
                    style={{ display: "inline-block" }}
                    key={words[currentWordIndex]}
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
            <p className="text-white-100 font-light text-sm md:text-base font-quickSand text-left">
              Discover and learn about women organizations with only one click.
            </p>
            <div className="w-full mx-auto flex justify-center items-center font-quickSand">
              <input
                type="text"
                name=""
                id=""
                placeholder="Search for organization"
                // value={searchTerm}
                // onChange={handleSearchInputChange}
                className="w-[95%] py-2 md:py-4 border border-primaryWhite bg-primaryWhite rounded-l text-sm md:text-base text-gray-100 focus:outline-btnWarning p-2 "
              />
              <button
                // onClick={(e) => handleSearch(searchTerm, e)}
                className="bg-btnWarning p-2 md:p-4 rounded-br-md rounded-tr-md"
              >
                <Icon name="img_search" className="" />
              </button>
            </div>
            <div className="hidden lg:flex w-full items-start justify-start space-x-4 font-quickSand">
              <span className="text-primaryWhite text-sm md:text-base md:whitespace-nowrap">
                Popular questions:{" "}
              </span>
              <span className="flex flex-wrap items-center justify-start gap-1 md:gap-5">
                {searchTerms.map((term) => (
                  <button
                    className="w-fit p-1 px-2 bg-secondaryOffWhite/80  text-xs md:text-sm rounded hover:bg-btnWarning hover:text-primaryWhite transition-colors"
                    key={term}
                    onClick={(e) => handleSearch(term, e)}
                  >
                    {term}
                  </button>
                ))}
              </span>
            </div>
          </div>
          <div className="md:col-span-1 relative lg:absolute bottom-0 right-0 block z-10">
            <Image
              src={womenInPower}
              alt="group of women"
              width={100}
              height={100}
              className="lg:w-[40rem] w-[15rem] mx-auto aspect-auto rounded-br-xl"
            />
          </div>
        </div>

        {/* Organizations, events and news  */}
        <div className="w-full md:w-[95%] mx-auto grid grid-cols-1 lg:grid-cols-6 gap-2 relative px-4">
          <div className="lg:col-span-4 w-full flex flex-col py-4">
            <h3 className="text-orange-500 text-lg md:text-2xl font-sora font-semibold items-stretch justify-center py-2.5 border-b-neutral-200 border-b border-solid max-md:max-w-full mb-5">
              TOP ORGANIZATIONS
            </h3>
            {/* Organization feeds */}
            <section className=" flex flex-col gap-4">
              {db.communities.length === 0 ? (
                <p className="no-result">No Organization found</p>
              ) : (
                <>
                  {db.communities.map((item: any) => (
                    <CommunityCard organization={item} key={item.id} />
                  ))}
                </>
              )}
              <div className="w-fit mx-auto my-8">
                      <Button
                        label="SEE ALL ORGANIZATIONS"
                        variant="outline"
                        fullWidth={false}
                        size="normal"
                      />
                    </div>
            </section>
          </div>

          <div className="lg:col-span-2 w-full hidden lg:flex flex-col space-y-8  border-none py-[5rem] relative lg:sticky top-0 lg:h-screen h-full overflow-y-scroll scrollable-section ">
            <aside className="w-full py-4 rounded-[1.5rem] ">
              <h3 className="text-orange-500 font-sora text-2xl font-bold items-stretch self-stretch justify-center px-5 py-3 border-b-neutral-200 border-b border-solid lg:-mt-[86.5px]">
                EVENTS
              </h3>

              <section className="flex flex-col lg:gap-[0.1rem] gap-[3rem]  py-1">
                {db.events.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
                <div className="w-fit mx-auto my-8">
                      <Button
                        label="SEE MORE EVENTS"
                        variant="outline"
                        fullWidth={false}
                        size="normal"
                      />
                    </div>
              </section>
            </aside>

            <aside className="w-full py-4 rounded-[1.5rem] ">
              <h3 className="text-orange-500 text-2xl font-sora font-bold items-stretch self-stretch justify-center px-5 py-2.5 border-b-neutral-200 border-b border-solid -mt-[50px]">
                NEWS CENTER
              </h3>
              <section className="flex flex-col lg:gap-[0.1rem] gap-[3rem] py-1">
                {db.news.map((item) => (
                  <NewsCard key={item.id} news={item} />
                ))}
                <div className="w-fit mx-auto my-8">
                      <Button
                        label="MORE FROM NEWS CENTER"
                        variant="outline"
                        fullWidth={false}
                        size="normal"
                      />
                    </div>
              </section>
            </aside>
          </div>
        </div>

        {/* Discussions */}
        <div className="bg-[#F0EBD6] self-stretch z-2 flex w-full flex-col pt-20  relative">
          <div className="w-[90%] mx-auto">
            <h3 className="font-sora text-center text-primary md:text-5xl text-2xl font-semibold">
              Community Discussions
            </h3>
            <p className="text-gray-100 my-8 md:text-center text-left text-base self-center">
              A platform that seeks to help Women thrive in their own
              environment,
              <br /> a free space to share with people who can relate, a
              community for all who want and ask for help.
            </p>
          </div>

          <div className="gap-5 py-6 flex items-start flex-nowrap scrollable-section no-scrollbar overflow-x-scroll lg:overflow-x-hidden px-4 md:px-16 w-auto">
            {communityDiscussionTopics.map((discussion) => (
              <div
                key={discussion.id}
                className="justify-center items-stretch bg-primaryWhite flex-col space-y-4 aspect-square w-full md:w-1/2 lg:w-[25%] xl:w-[24%] h-[25rem] shadow-lg pt-6 px-6 rounded-3xl "
              >
                <div className="w-full bg-slate-200 h-[60%] overflow-hidden flex items-start">
                  <motion.img
                    loading="lazy"
                    srcSet={discussion.image}
                    className="w-full aspect-square"
                  />
                </div>
                <div className="flex flex-col gap-2 h-[40%]">
                  <h6 className="text-green-800 font-sora text-lg md:text-xl lg:text-2xl  font-semibold leading-5">
                    {discussion.topic}
                  </h6>
                  <p className="text-xs md:text-sm  text-gray-200">
                    {discussion.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button className="text-white-100 font-quickSand text-base font-medium justify-center items-center bg-green-800 self-center w-44 max-w-full mt-11 px-5 py-4 rounded-xl max-md:mt-10">
            Join Discussion
          </button>

          <svg
            className=" relative -bottom-10 z-20"
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
        <div className="bg-[#EEEEED] self-stretch flex w-full flex-col pt-20  relative z-2">
          <div className="w-[90%] mx-auto">
            <h3 className="font-sora text-center text-primary md:text-5xl text-2xl font-semibold">
              Women Hub Projects
            </h3>
            <p className="text-gray-100 my-8 md:text-center text-left text-base self-center">
              A platform that seeks to help Women thrive in their own
              environment,
              <br /> a free space to share with people who can relate, a
              community for all who want and ask for help.
            </p>
          </div>

          <div className="gap-5 py-6 flex items-start flex-nowrap scrollable-section no-scrollbar overflow-x-hidden px-4 md:px-16 w-auto">
            {featuredProjects.map((project) => (
              <motion.div
                key={project.id}
                animate={controls}
                transition={{ ease: 'easeInOut', duration: 0.5 }}
                className="justify-center items-stretch bg-primaryWhite flex-col space-y-4 aspect-square w-full md:w-1/2 lg:w-1/3 xl:w-1/3 h-[25rem] lg:h-[30rem] shadow-lg pt-6 px-6 rounded-3xl "
              >
                <div className="w-full bg-slate-200 h-[60%] overflow-hidden flex items-center justify-center relative">
                  <div className="bg-gradient-to-t from-primaryBlack/40 to-transparent absolute inset-0 "></div>
                  <motion.img
                    loading="lazy"
                    srcSet={project.image}
                    className=" aspect-auto object-contain object-center h-[15rem] overflow-hidden max-md:mr-0.5"
                  />
                  <span className="w-fit text-xs bg-btnWarning text-primaryWhite p-1 px-2 rounded-md absolute bottom-2 left-2">
                    completed
                  </span>
                </div>
                <div className="flex flex-col gap-2 h-[40%]">
                  <h6 className="text-green-800 font-sora text-lg md:text-xl lg:text-2xl  font-semibold leading-5">
                    {project.topic}
                  </h6>
                  <p className="text-xs md:text-sm  text-gray-200">
                    {project.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="w-[90%] mx-auto flex items-center justify-between py-4">
            <span className="flex gap-5 items-center justify-center">
              <button onClick={handlePrevClick} className="w-[3.5rem] aspect-square rounded-full bg-primary flex items-center justify-center">
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
              <button onClick={handleNextClick} className="w-[3.5rem] aspect-square rounded-full bg-primary flex items-center justify-center">
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

          <div className="w-full my-[4rem] md:w-[90%] mx-auto flex flex-wrap items-center justify-center gap-10">
            {howItWorks.map((item) => (
              <div
                style={{ backgroundColor: item.color }}
                key={item.id}
                className="w-full md:w-[37rem] h-[17rem] p-8 grid grid-cols-1 md:grid-cols-5 gap-4 place-content-center rounded-[1rem] overflow-hidden"
              >
                <div className="w-full md:col-span-3 flex flex-col gap-6 items-center justify-center">
                  <h3 className="text-lg md:text-2xl font-bold text-center font-sora">
                    {item.topic}
                  </h3>
                  <h3 className="text-sm md:text-base text-left text-gray-200 font-quickSand">
                    {item.desc}
                  </h3>
                </div>
                <div className="w-full md:col-span-2 flex items-center justify-center">
                  <motion.img
                    src={item.image}
                    alt={item.topic}
                    className=" w-[6rem] md:w-[10rem] aspect-square object-contain bg-contain "
                  />
                </div>
              </div>
            ))}
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
    </TransitionParent>
  );
};

export default LandingPage;
