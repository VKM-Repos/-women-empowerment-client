"use client";
import type React from "react";
import { useEffect, useState } from "react";
import doddles from "@/public/images/img_circledoodle.png";
import womenInPower from "@/public/images/img_womeninpower1.svg";
import WomenHubProjects from "@/public/images/women-hub-projects.png";
import {
  TransitionElement,
  TransitionFromTopAlone,
  TransitionParent,
  TransitionSlideDown,
} from "@/lib/utils/transition";
import { OrganizationCard } from "@/components/LandingPage/OrganizationCard";
import Image from "next/image";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import Link from "next/link";
import {
  communityDiscussionTopics,
  featuredProjects,
  howItWorks,
  searchTerms,
} from "@/lib/utils/constants";
import Button from "@/components/Common/Button/Button";
import AnimatedTitle from "@/components/LandingPage/AnimatedTitle";
import { useGET } from "@/lib/hooks/useGET.hook";
import type { Organization } from "@/lib/types/organization.types";
import type { Event } from "@/lib/types/events.types";
import { OrgCardLoader } from "./organization/components/OrgCardLoader";
import EventCardLoader from "./events/components/EventCardLoader";
import SearchForm from "@/components/LandingPage/SearchForm";
import SearchTerm from "@/components/LandingPage/SearchTerm";
import { useRouter } from "next/navigation";
import NoContent from "@/components/EmptyStates/NoContent";
import { useAppContext } from "@/lib/context/app-context";
import { ProjectCardLoader } from "./projects/components/ProjectCardLoader";
import { Project } from "@/lib/types/project.types";
import { ProjectCard } from "./projects/components/ProjectCard";
import ProjectCarousel from "@/components/LandingPage/ProjectCarousel";
import EventCard from "./(community)/discussions/components/EventCard";
import Banner from "@/public/images/articles-banner.png";

const LandingPage = () => {
  const handleSearch = (
    selectedTerm: string,
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    router.push(`/results?query=${selectedTerm}`);
  };
  const router = useRouter();
  const { user, isAuthenticated } = useAppContext();

  const [activeIndex, setActiveIndex] = useState(0);

  const controls = useAnimation();

  const handlePrevClick = () => {
    const newIndex =
      (activeIndex - 1 + featuredProjects?.length) % featuredProjects?.length;
    setActiveIndex(newIndex);
  };

  const handleNextClick = () => {
    const newIndex = (activeIndex + 1) % featuredProjects?.length;
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    controls.start({ x: `-${activeIndex * 107}%` });
  }, [activeIndex, controls]);

  // fetch lists of organizations
  const {
    data: organizations,
    isLoading: isOrganizationLoading,
    isError: isOrganizationError,
    refetch: refetchOrganization,
  } = useGET({
    url: "organizations/top",
    queryKey: ["top_organizations"],
    withAuth: false,
    enabled: true,
  });

  useEffect(() => {
    refetchOrganization();
  }, [refetchOrganization]);

  // fetch lists of events
  const {
    data: events,
    isLoading: isEventsLoading,
    isError: isEventsError,
  } = useGET({
    url: "events",
    queryKey: ["events"],
    withAuth: false,
    enabled: true,
  });
  // fetch lists of projects
  const {
    data: projects,
    isLoading: isProjectsLoading,
    isError: isProjectsError,
    refetch: refetchProjects,
  } = useGET({
    url: "projects",
    queryKey: ["projects"],
    withAuth: false,
    enabled: false,
  });

  return (
    <main className="w-full">
      <TransitionParent>
        <section className="flex w-screen flex-col items-center justify-start">
          <div className="w-full relative">
            {/* <TransitionFromTopAlone>
              <Link href="/call-for-articles">
                <Image src={Banner} alt="banner" />
              </Link>
            </TransitionFromTopAlone> */}
            <TransitionSlideDown>
              <div className="absolute left-0 top-[-5%] z-10 block">
                <Image
                  src={doddles}
                  alt="doodles"
                  width={200}
                  height={200}
                  className="aspect-auto w-[6rem] lg:w-[10rem]"
                />
              </div>

              {/* Hero */}
              <section className=" mx-auto bg-primary relative grid h-[22rem] w-[92%] grid-cols-1 place-content-start items-center overflow-hidden rounded-[1rem] p-4 md:w-[95%] md:place-content-center md:p-16 lg:h-[26rem] lg:grid-cols-2">
                <div className="relative left-0 z-20 mt-[2.5rem] flex w-full flex-col items-start justify-center gap-2 md:col-span-1 md:gap-4 lg:left-[5%]">
                  <AnimatedTitle title="Together we are" />
                  <p className="text-white-100 font-light font-quickSand text-left text-sm md:text-base">
                    Discover and learn about women organizations with only one
                    click.
                  </p>
                  <SearchForm placeholder="Search for organization" />
                  <SearchTerm
                    searchTerms={searchTerms}
                    handleSearch={handleSearch}
                  />
                </div>
                <div className="relative bottom-0 right-0 z-10 mt-2 block md:col-span-1 lg:absolute">
                  <Image
                    src={womenInPower}
                    alt="group of women"
                    width={100}
                    height={100}
                    className="mx-auto aspect-auto w-[15rem] rounded-br-xl lg:w-[30rem]"
                  />
                </div>
              </section>
            </TransitionSlideDown>
          </div>

          {/* Organizations, events and news  */}
          <section className="relative mx-auto grid w-full grid-cols-1 gap-10 px-4 md:w-[95%] lg:grid-cols-6">
            <div className="flex w-full flex-col py-[5rem] lg:col-span-4">
              <h3 className="text-orange-500 font-sora max-md:max-w-full mb-5 items-stretch justify-center border-b border-solid border-b-neutral-200 py-1 text-lg font-semibold md:text-2xl">
                TOP ORGANIZATIONS
              </h3>
              {/* Organization feeds */}
              <section className=" flex flex-col gap-4">
                {isOrganizationError && <p>Error fetching Organization</p>}

                {isOrganizationLoading ? (
                  [1, 2, 3, 4, 5, 6].map((item: any) => (
                    <OrgCardLoader key={item.id} />
                  ))
                ) : !isOrganizationLoading &&
                  !isOrganizationError &&
                  organizations?.content?.length === 0 ? (
                  <NoContent
                    message="No organization yet."
                    buttonText={
                      isAuthenticated ? "Add organization" : "Login to add"
                    }
                    buttonLink={
                      isAuthenticated
                        ? () => router.push("/organization/create")
                        : () => router.push("/account/login")
                    }
                  />
                ) : (
                  <>
                    {organizations?.content
                      ?.slice(0, 5)
                      .map((organization: Organization) => (
                        <OrganizationCard
                          organization={organization}
                          key={organization.id}
                        />
                      ))}
                    <div className="mx-auto my-8 w-fit">
                      <Button
                        label="SEE ALL ORGANIZATIONS"
                        variant="outline"
                        fullWidth={false}
                        size="normal"
                        onClick={() =>
                          router.push("organization/all-organizations")
                        }
                      />
                    </div>
                  </>
                )}
              </section>
            </div>

            <div className="scrollable-section relative hidden h-full w-full flex-col  space-y-8 overflow-y-scroll border-none py-[5rem] lg:col-span-2 lg:flex ">
              <aside className="w-full rounded-[1.5rem] ">
                <h3 className="text-orange-500 font-sora max-md:max-w-full mb-5 items-stretch justify-center border-b border-solid border-b-neutral-200 py-1 text-lg font-semibold md:text-2xl">
                  EVENTS
                </h3>

                <section className="flex flex-col gap-[3rem] py-1  lg:gap-[0.1rem]">
                  {isEventsError && <p>Error fetching Events</p>}
                  {isEventsLoading ? (
                    [1, 2, 3, 4].map((event: any, id: number) => (
                      <EventCardLoader key={id} />
                    ))
                  ) : !isEventsLoading &&
                    !isEventsError &&
                    events?.content?.length === 0 ? (
                    <NoContent
                      message="No events yet."
                      buttonText={
                        isAuthenticated ? "Add events" : "Login to add"
                      }
                      buttonLink={
                        isAuthenticated
                          ? () => router.push("/events/create")
                          : () => router.push("/account/login")
                      }
                    />
                  ) : (
                    !isEventsLoading &&
                    !isEventsError && (
                      <>
                        <div className="] mx-auto flex w-full flex-wrap  justify-center md:w-[95%]">
                          {Array.isArray(events?.content) &&
                            events?.content
                              ?.slice(0, 5)
                              .map((event: Event) => (
                                <EventCard key={event.id} event={event} />
                              ))}
                        </div>
                        <div className="mx-auto my-8 w-fit">
                          <Button
                            label="SEE MORE EVENTS"
                            variant="outline"
                            fullWidth={false}
                            size="normal"
                            onClick={() => router.push("/events")}
                          />
                        </div>
                      </>
                    )
                  )}
                </section>
              </aside>

              <aside className="w-full rounded-[1.5rem] py-4 ">
                {/* <h3 className="text-orange-500 text-2xl font-sora font-bold items-stretch self-stretch justify-center px-5 py-2.5 border-b-neutral-200 border-b border-solid -mt-[50px]">
                  NEWS CENTER
                </h3> */}
                {/* <section className="flex flex-col lg:gap-[0.1rem] gap-[3rem] py-1">
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
              </section> */}
                {/* <NoContent
                  message="No blogs yet."
                  buttonText={"Visit blog"}
                  buttonLink={() => router.push("/blog")}
                /> */}
              </aside>
            </div>
          </section>

          {/* Discussions */}
          <section className="z-2 font-quickSand relative flex w-full flex-col self-stretch bg-[#F0EBD6]  pt-20">
            <div className="mx-auto w-[90%]">
              <h3 className="font-sora text-primary text-center text-2xl font-semibold md:text-5xl">
                Community Discussions
              </h3>
              <p className="text-gray-100 my-8 self-center text-left text-base md:text-center">
                A platform that seeks to help Women thrive in their own
                environment,
                <br /> a free space to share with people who can relate, a
                community for all who want and ask for help.
              </p>
            </div>

            <div className="scrollable-section no-scrollbar flex w-auto flex-nowrap items-start gap-5 overflow-x-scroll px-4 py-6 md:px-16 lg:overflow-x-hidden">
              {communityDiscussionTopics?.map((discussion) => (
                <div
                  key={discussion.id}
                  className="bg-primaryWhite aspect-square h-[25rem] w-full flex-col items-stretch justify-center space-y-4 rounded-3xl px-6 pt-6 shadow-lg md:w-1/2 lg:w-[25%] xl:w-[24%] "
                >
                  <div className="bg-slate-200 flex h-[60%] w-full items-start overflow-hidden">
                    <motion.img
                      loading="lazy"
                      srcSet={discussion.image}
                      className="aspect-square w-full"
                    />
                  </div>
                  <div className="flex h-[40%] flex-col gap-2">
                    <h6 className="font-sora text-lg font-semibold leading-5 text-green-800  md:text-xl lg:text-2xl">
                      {discussion.topic}
                    </h6>
                    <p className="text-gray-200 text-xs  md:text-sm">
                      {discussion.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={() => router.push("discussions")}
              className="text-white-100 font-quickSand max-md:mt-10 mt-11 w-44 max-w-full items-center justify-center self-center rounded-xl bg-green-800 px-5 py-4 text-base font-medium"
            >
              Join Discussion
            </button>

            {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
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
          </section>

          {/* Projects */}
          <section className="font-quickSand z-2 relative flex w-full flex-col  bg-[#EEEEED] pt-20">
            <div className="mx-auto w-[90%]">
              <h3 className="font-sora text-primary text-center text-2xl font-semibold md:text-5xl">
                Women Hub Projects
              </h3>
              <p className="text-gray-100 my-8 self-center text-left text-base md:text-center">
                A platform that seeks to help Women thrive in their own
                environment,
                <br /> a free space to share with people who can relate, a
                community for all who want and ask for help.
              </p>
            </div>

            <ProjectCarousel projects={projects} />

            {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
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
          </section>

          {/* How this works */}
          <div className="max-md:max-w-full max-md:px-5 mt-0 flex w-full flex-col items-center justify-center self-stretch bg-[#F9F2FF] px-16 py-12">
            <div className="font-sora max-md:text-4xl max-md:mt-10 mt-16 max-w-[379px] self-center text-5xl font-semibold text-green-800">
              How this works
            </div>
            <div className="text-black font-quickSand max-md:max-w-full mt-3 max-w-[736px] self-center text-center text-base leading-6 text-opacity-90">
              This platform serves as a comprehensive resource, bringing
              together all the organizations dedicated to supporting women in
              Nigeria.
            </div>

            <div className="mx-auto my-[4rem] flex w-full flex-wrap items-center justify-center gap-10 md:w-[90%]">
              {howItWorks.map((item) => (
                <div
                  style={{ backgroundColor: item.color }}
                  key={item.id}
                  className="grid h-[17rem] w-full grid-cols-1 place-content-center gap-4 overflow-hidden rounded-[1rem] p-8 md:w-[37rem] md:grid-cols-5"
                >
                  <div className="flex w-full flex-col items-start justify-start gap-2 text-left md:col-span-3">
                    <h3 className="font-sora text-left text-lg font-bold md:text-2xl">
                      {item.topic}
                    </h3>
                    <h3 className="text-gray-200 font-quickSand text-left text-sm md:text-base">
                      {item.desc}
                    </h3>
                  </div>
                  <div className="flex w-full items-center justify-center md:col-span-2">
                    <motion.img
                      src={item.image}
                      alt={item.topic}
                      className=" aspect-square w-[6rem] bg-contain object-contain md:w-[10rem] "
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
          <svg
            className="w-screen"
            width="1440"
            height="214"
            viewBox="0 0 1440 214"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse
              cx="720"
              cy="-416.5"
              rx="1623.5"
              ry="630.5"
              fill="#F9F2FF"
            />
          </svg>
        </section>
      </TransitionParent>
    </main>
  );
};

export default LandingPage;
