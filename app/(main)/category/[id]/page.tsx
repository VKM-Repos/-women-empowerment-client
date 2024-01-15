"use client";

import React, { useEffect, useState } from "react";
import { Organization } from "@/components/LandingPage/Organization";
import db from "@/data/db.json";
import { CommunityCard } from "@/components/LandingPage/CommunityCard";

import EventCard from "../../(community)/discussions/components/EventCard";
import NewsCard from "../../(community)/discussions/components/NewsCard";
import formatIdToTitle from "@/lib/utils/formatIdToTitle";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import LoadingThinkingWomen from "@/components/Common/Loaders/LoadingThinkingWomen";
import Icon from "@/components/Common/Icons/Icon";
import Button from "@/components/Common/Button/Button";
import { CategoryCard } from "../components/CategoryCard";

export default function CategoryDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const [category, setCategory] = useState<any | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);

  // Use the hook to format the ID
  const formattedId = formatIdToTitle(params.id);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        // Simulating an asynchronous API call
        const response = await new Promise<{ data: any[] }>((resolve) =>
          setTimeout(() => resolve({ data: db.categories }), 1000)
        );

        // Find the event based on the formatted ID
        const foundCategory = response.data.find(
          (category) =>
            formatIdToTitle(category.title).toLowerCase() === formattedId
        );

        // Set the event and loading state
        setCategory(foundCategory);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching event:", error);
        setIsLoading(false);
      }
    };

    fetchEvent();
  }, [formattedId]);

  return (
    <>
      {isLoading || !category ? (
        <div className="mt-8 mb-[7rem]">
          <LoadingThinkingWomen />
        </div>
      ) : (
        <AnimatePresence initial={false} mode="wait">
          <section className="w-screen flex flex-col items-center justify-start space-y-[4rem] min-h-screen">
            <div className="bg-primary w-[95%] lg:h-[20rem] h-15rem] rounded-[1.5rem] flex justify-start items-center p-2 md:p-8 relative overflow-hidden">
              <div className="w-full md:w-2/3 flex flex-col gap-5 px-5">
                <p className="text-white-100 text-base font-medium whitespace-nowrap text-quickSand">
                  Find organizations based on:
                </p>
                <p className="text-white-100 text-5xl font-semibold whitespace-nowrap mt-3.5 text-sora">
                  {category.title}
                </p>
                <div className="w-full flex justify-center items-center">
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder={`Search for organizations under ${category.title}`}
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
              </div>
              <div className="w-fit absolute right-0 bottom-0">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/1c43bb1d-5bd1-4831-872b-474116f3e3dc?apiKey=12cdcbacd64a44978db653c66e993585&"
                  className=""
                />
              </div>
            </div>

            <div className="py-[2rem] w-full p-4 mx-auto flex gap-2 relative">
              <div className="w-4/6 flex flex-col py-4">
                {/* Organization feeds */}
                <section className=" flex flex-col gap-5 px-5">
                  {db.communities.length === 0 ? (
                    <p className="no-result">No Organization found</p>
                  ) : (
                    <>
                      {db.communities.map((item: any) => (
                        <CommunityCard organization={item} key={item} />
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

              <div className="w-2/6 flex flex-col space-y-16  border-none py-[5rem] sticky top-0 h-screen overflow-y-scroll scrollable-section ">
                <aside className="w-full p-1 ">
                  <div className="text-[#65B891] text-3xl font-bold items-stretch self-stretch justify-center px-5 py-2.5 border-b-neutral-200 border-b border-solid lg:-mt-[86.5px]">
                    EVENTS
                  </div>

                  <section className="flex flex-col gap-[0.1rem] py-1">
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
                <aside className="w-full">
                  <div className="text-[#65B891] text-3xl font-bold items-stretch self-stretch justify-center px-5 py-2.5 border-b-neutral-200 border-b border-solid -mt-[50px]">
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

              <div className="relative left-0 no-scrollbar items-stretch overflow-x-scroll self-stretch flex gap-5 my-12 py-4 px-10">
                
                        {db.categories.map((category) => (
                  <div key={category.id}  className="w-1/4 aspect-square">
                    <CategoryCard  category={category} />
                  </div>
                ))}
             
             
              </div>
            </div>
          </section>
        </AnimatePresence>
      )}
    </>
  );
}
