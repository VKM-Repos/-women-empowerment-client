"use client";

import React, { useEffect, useState } from "react";
import db from "@/data/db.json";
import { OrganizationCard } from "@/components/LandingPage/OrganizationCard";
import EventCard from "../../(community)/discussions/components/EventCard";
import NewsCard from "../../(community)/discussions/components/NewsCard";
import formatIdToTitle from "@/lib/utils/formatIdToTitle";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import Icon from "@/components/Common/Icons/Icon";
import Button from "@/components/Common/Button/Button";
import { useGET } from "@/lib/hooks/useGET.hook";
import { Organization } from "@/lib/types/organization.types";
import { Category } from "@/lib/types/category.types";
import { OrgCardLoader } from "../../organization/components/OrgCardLoader";
import { CategoryCard } from "../components/CategoryCard";
import EventCardLoader from "../../events/components/EventCardLoader";
import { Event } from "@/lib/types/events.types";
import SearchForm from "@/components/LandingPage/SearchForm";
import { useRouter } from "next/navigation";
import NoContent from "@/components/EmptyStates/NoContent";
import { useAppContext } from "@/lib/context/app-context";

export default function CategoryDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const formattedId = params.id;
  const router = useRouter()
  const { user, isAuthenticated } = useAppContext()

  // Use the useGET hook to fetch categories
  const { data: categories, isLoading: areCategoriesLoading } = useGET({
    url: "/categories",
    queryKey: ["categories"],
    withAuth: false,
    enabled: true,
  });

  console.log(categories);

  // Find the category that matches the formatted ID
  const matchedCategory = categories?.content?.find(
    (category: Category) => formatIdToTitle(category.name) === formattedId
  );

  // Use the matched category's ID to fetch organizations based on category
  const { data: organizations, isLoading: isOrganizationsLoading, isError: isOrganizationsError } = useGET({
    url: `/categories/${matchedCategory?.id}/organizations`,
    queryKey: ["organizations", matchedCategory?.id],
    withAuth: false,
    enabled: !!matchedCategory?.id,
  });

  // fetch lists of events
  const {
    data: events,
    isLoading: isEventsLoading,
    isError: isEventsError,
  } = useGET({
    url: "/events",
    queryKey: ["events"],
    withAuth: false,
    enabled: true,
  });

  const [activeIndex, setActiveIndex] = useState(0);

  const controls = useAnimation();

  const handlePrevClick = () => {
    if (!categories || !categories.content) return;

    const newIndex = (activeIndex - 1 + categories.content.length) % categories.content.length;
    setActiveIndex(newIndex);
  };

  const handleNextClick = () => {
    if (!categories || !categories.content) return;

    const newIndex = (activeIndex + 1) % categories.content.length;
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    controls.start({ x: `-${activeIndex * 107}%` });
  }, [activeIndex, controls]);

  return (
    <AnimatePresence initial={false} mode="wait">
      <section className="w-screen flex flex-col items-center justify-start space-y-[2rem] min-h-screen">
        <div className="bg-primary w-[92%] md:w-[95%] lg:h-[20rem] h-[20rem] rounded-[1rem] grid grid-cols-1 lg:grid-cols-2 place-content-start md:place-content-center items-center p-4 md:p-16 relative overflow-hidden ">
          <div className="w-full flex flex-col gap-2 items-start relative z-10">
            <h6 className="md:text-[26px] text-sm text-center text-primaryWhite font-sora font-semibold">
              Find organizations in:
            </h6>
            <h1 className="md:text-[45px] text-[29px] text-center text-primaryWhite font-sora font-semibold">
              {matchedCategory?.name}
            </h1>
            <SearchForm placeholder={`Search for organizations under ${matchedCategory?.name}`} />
          </div>
          <div className="md:col-span-1 absolute bottom-0 md:right-0 right-1/4 block z-1">
            <motion.img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1c43bb1d-5bd1-4831-872b-474116f3e3dc?apiKey=12cdcbacd64a44978db653c66e993585&"
              className="lg:w-[16rem] w-[7rem] mx-auto aspect-auto rounded-br-xl"
            />
          </div>
          <div className="w-fit absolute right-0 bottom-0"></div>
        </div>

        {/* Organizations, events and news  */}
        <section className="w-full md:w-[95%] mx-auto grid grid-cols-1 lg:grid-cols-6 gap-10 relative px-4">
          <div className="lg:col-span-4 w-full flex flex-col py-[2rem]">
            <h3 className="text-orange-500 text-lg md:text-2xl font-sora font-semibold items-stretch justify-center py-1 border-b-neutral-200 border-b border-solid max-md:max-w-full mb-5">
              Organizations in {matchedCategory?.name}
            </h3>
            {/* Organization feeds */}
            <section className=" flex flex-col gap-4">
              {isOrganizationsError && <p>Error fetching Organizations</p>}

              {isOrganizationsLoading ? (
                [1, 2, 3, 4, 5, 6].map((item: any) => (
                  <OrgCardLoader key={item?.id} />
                ))
              ) : !isOrganizationsLoading &&
                !isOrganizationsError &&
                organizations?.content?.length === 0 ? (
                <NoContent
                  message="No organization yet."
                  buttonText={isAuthenticated ? "Add organization" : 'Login to add'}
                  buttonLink={isAuthenticated ? () => router.push('/organization/create') : () => router.push('/account/login')}
                />
              ) : (
                <>
                  {organizations?.content?.map((organization: Organization) => (
                    <OrganizationCard
                      organization={organization}
                      key={organization.id}
                    />
                  ))}
                  <div className="w-fit mx-auto my-4">
                    <Button
                      label="SEE ALL ORGANIZATIONS"
                      variant="outline"
                      fullWidth={false}
                      size="normal"
                      onClick={() => router.push('/organization/all-organizations')}
                    />
                  </div>
                </>
              )}
            </section>
          </div>

          <div className="lg:col-span-2 w-full hidden lg:flex flex-col space-y-8  border-none py-[2rem] relative h-full overflow-y-scroll scrollable-section ">
            <aside className="w-full rounded-[1.5rem] ">
              <h3 className="text-orange-500 text-lg md:text-2xl font-sora font-semibold items-stretch justify-center py-1 border-b-neutral-200 border-b border-solid max-md:max-w-full mb-5">
                EVENTS
              </h3>

              <section className="flex flex-col lg:gap-[0.1rem] gap-[3rem]  py-1">
                {isEventsError && <p>Error fetching Events</p>}
                {isEventsLoading ? (
                  [1, 2, 3, 4].map((event: any, id: number) => (
                    <EventCardLoader key={id} event={event} />
                  ))
                ) : !isEventsLoading &&
                  !isEventsError &&
                  events?.content.length === 0 ? (
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
                      <div className="w-full md:w-[95%] mx-auto flex justify-center  flex-wrap ]">
                        {Array.isArray(events?.content) &&
                          events?.content?.slice(0, 5).map((event: Event) => (
                            <EventCard key={event.id} event={event} />
                          ))}
                      </div>
                      <div className="w-fit mx-auto my-8">
                        <Button
                          label="SEE MORE EVENTS"
                          variant="outline"
                          fullWidth={false}
                          size="normal"
                          onClick={() => router.push('/events')}
                        />
                      </div>
                    </>
                  )
                )}
              </section>
            </aside>

            <aside className="w-full py-4 rounded-[1.5rem] ">
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

        <div className="py-[2rem] w-full  mx-auto flex flex-col gap-2 pb-[7rem] relative">
          <div className="w-[95%] mx-auto flex items-center justify-between">
            <span className="w-[90%] mx-auto flex flex-col space-y-2">
              <h3 className="text-lg md:text-3xl font-bold text-primary text-sora">
                Other Categories{" "}
              </h3>
              <div className="w-[6rem] h-1 rounded bg-btnWarning" />
            </span>
            <span className="flex gap-5 items-center justify-center">
              <button
                onClick={handlePrevClick}
                className="w-[3rem] aspect-square rounded-full bg-primary flex items-center justify-center"
              >
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 32 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.34128 19H26.4402"
                    stroke="white"
                    stroke-width="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11.9341 26.6922C11.9341 26.6922 5.34067 21.027 5.34067 18.9999C5.34067 16.9728 11.9341 11.3076 11.9341 11.3076"
                    stroke="white"
                    stroke-width="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                onClick={handleNextClick}
                className="w-[3rem] aspect-square rounded-full bg-primary flex items-center justify-center"
              >
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M26.6587 16.1099H5.55981"
                    stroke="white"
                    stroke-width="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20.0659 22.7032C20.0659 22.7032 26.6593 17.8473 26.6593 16.1098C26.6593 14.3723 20.0659 9.51636 20.0659 9.51636"
                    stroke="white"
                    stroke-width="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </span>
          </div>

          <div className="gap-5 py-6 flex items-start flex-nowrap scrollable-section no-scrollbar overflow-x-hidden px-4 md:px-16 w-auto">
            {Array.isArray(categories?.content) &&
              categories?.content.map((category: Category) => (
                <motion.div
                  key={category.id}
                  animate={controls}
                  transition={{ ease: "easeInOut", duration: 0.5 }}
                  className="md:w-[20rem] w-[10rem] aspect-square"
                >
                  <CategoryCard category={category} />
                </motion.div>
              ))}
          </div>
        </div>
      </section>
    </AnimatePresence>
  );
}
