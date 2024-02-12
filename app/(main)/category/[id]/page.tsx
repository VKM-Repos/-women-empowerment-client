"use client";

import React from "react";
import db from "@/data/db.json";
import { CommunityCard } from "@/components/LandingPage/CommunityCard";
import EventCard from "../../(community)/discussions/components/EventCard";
import NewsCard from "../../(community)/discussions/components/NewsCard";
import formatIdToTitle from "@/lib/utils/formatIdToTitle";
import { AnimatePresence, motion } from "framer-motion";
import Icon from "@/components/Common/Icons/Icon";
import Button from "@/components/Common/Button/Button";
import { useGET } from "@/lib/hooks/useGET.hook";
import { Organization } from "@/lib/types/organization.types";
import { Category } from "@/lib/types/category.types";
import { OrgCardLoader } from "../../organization/components/OrgCardLoader";
import { CategoryCard } from "../components/CategoryCard";
import EventCardLoader from "../../events/components/EventCardLoader";
import { Event } from "@/lib/types/events.types";

export default function CategoryDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const formattedId = params.id;

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
  const { data: organizations, isLoading: isOrganizationsLoading } = useGET({
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

  return (
    <AnimatePresence initial={false} mode="wait">
      <section className="w-screen flex flex-col items-center justify-start space-y-[2rem] min-h-screen">
        <div className="bg-primary w-[92%] md:w-[95%] lg:h-[26rem] h-[20rem] rounded-[1rem] grid grid-cols-1 lg:grid-cols-2 place-content-start md:place-content-center items-center p-4 md:p-16 relative overflow-hidden ">
          <div className="w-full flex flex-col gap-2 items-start relative z-10">
            <h6 className="md:text-[26px] text-sm text-center text-primaryWhite font-sora font-semibold">
              Find organizations based on:
            </h6>
            <h1 className="md:text-[45px] text-[29px] text-center text-primaryWhite font-sora font-semibold">
              {matchedCategory?.name}
            </h1>
            <div className="w-full flex justify-center items-center font-quickSand">
              <input
                type="text"
                name=""
                id=""
                placeholder={`Search for organizations under ${matchedCategory?.name}`}
                // value={searchTerm}
                // onChange={handleSearchInputChange}
                className="w-[95%] py-2 md:py-4 border border-primaryWhite bg-primaryWhite rounded-l text-sm md:text-base text-gray-100 focus:outline-btnWarning p-2"
              />
              <button
                // onClick={(e) => handleSearch(searchTerm, e)}
                className="bg-btnWarning p-2 md:p-4 rounded-br-md rounded-tr-md"
              >
                <Icon name="img_search" className="" />
              </button>
            </div>
          </div>
          <div className="md:col-span-1 absolute bottom-0 md:right-0 right-1/4 block z-1">
            <motion.img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1c43bb1d-5bd1-4831-872b-474116f3e3dc?apiKey=12cdcbacd64a44978db653c66e993585&"
              className="lg:w-[20rem] w-[8rem] mx-auto aspect-auto rounded-br-xl"
            />
          </div>
          <div className="w-fit absolute right-0 bottom-0"></div>
        </div>

        <div className="w-full md:w-[95%] mx-auto grid grid-cols-1 lg:grid-cols-6 gap-2 relative">
          <div className="lg:col-span-4 w-full flex flex-col py-4">
            {/* Organization feeds */}
            <section className=" flex flex-col gap-5 px-5">
              {isOrganizationsLoading ? (
                [1, 2, 3, 4, 5, 6].map((item: any) => (
                  <OrgCardLoader key={item?.id} />
                ))
              ) : organizations?.content?.length === 0 ? (
                <p className="no-result">{`No Organization(s) found under the ${matchedCategory.name} category`}</p>
              ) : (
                <>
                  {organizations?.content?.map((organization: Organization) => (
                    <CommunityCard
                      organization={organization}
                      key={organization.id}
                    />
                  ))}
                </>
              )}
              <div className="flex justify-center">
                <Button
                  label="View more"
                  variant="secondary"
                  fullWidth={false}
                  size="medium"
                />
              </div>
            </section>
          </div>

          <div className="lg:col-span-2 w-full hidden lg:flex flex-col space-y-8  border-none py-[5rem] relative lg:sticky top-0 lg:h-screen h-full overflow-y-scroll scrollable-section ">
            <aside className="w-full p-1 ">
              <div className="text-primary font-sora text-3xl font-bold items-stretch self-stretch justify-center px-5 py-2.5 border-b-neutral-200 border-b border-solid lg:-mt-[86.5px]">
                EVENTS
              </div>

              <section className="flex flex-col gap-[0.1rem] py-1">
                {isEventsLoading &&
                  [1, 2, 3, 4].map((event: any, id: number) => (
                    <EventCardLoader key={id} event={event} />
                  ))}

                {isEventsError && <p>Error fetching Events</p>}
                {!isEventsLoading &&
                  !isEventsError &&
                  events?.content.length === 0 && <p>No Events yet</p>}

                {!isEventsLoading && !isEventsError && (
                  <div className="w-full md:w-[95%] mx-auto flex justify-center gap-5 flex-wrap md:gap-y-16 pb-[8rem]">
                    {Array.isArray(events?.content) &&
                      events?.content.map((event: Event) => (
                        <EventCard key={event.id} event={event} />
                      ))}
                  </div>
                )}
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
            <aside className="w-full">
              <div className="text-primary font-sora text-3xl font-bold items-stretch self-stretch justify-center px-5 py-2.5 border-b-neutral-200 border-b border-solid -mt-[50px]">
                NEWS CENTER
              </div>
              <section className="flex flex-col gap-[0.1rem] py-2">
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

        <div className="py-[2rem] w-full  mx-auto flex flex-col gap-2 pb-[7rem] relative">
          <span className="w-[90%] mx-auto flex flex-col space-y-2">
            <h3 className="text-lg md:text-3xl font-bold text-primary text-sora">
              Other Categories{" "}
            </h3>
            <div className="w-[6rem] h-1 rounded bg-btnWarning" />
          </span>

          <div className="gap-5 py-6 flex items-start flex-nowrap scrollable-section no-scrollbar overflow-x-auto px-4 md:px-16 w-auto">
            {Array.isArray(categories?.content) &&
              categories?.content.map((category: Category) => (
                <div
                  key={category.id}
                  className="md:w-[20rem] w-[10rem] aspect-square"
                >
                  <CategoryCard category={category} />
                </div>
              ))}
          </div>
        </div>
      </section>
    </AnimatePresence>
  );
}
