"use client";
import React, { useEffect, useState } from "react";
import { TransitionParent } from "@/lib/utils/transition";
import Image from "next/image";
import DoodlesA from "@/public/images/doodles-a.png";
import DoodlesB from "@/public/images/doodles-b.png";
import Group from "@/public/images/group-of-girls.png";
import Button from "@/components/Common/Button/Button";
import DiscussionCard from "./components/DiscussionCard";
import EventCard from "./components/EventCard";
import NewsCard from "./components/NewsCard";

import db from "@/data/db.json";
import DiscussionCardLoader from "./components/DiscussionCardLoader";
import { useModal } from "@/lib/context/modal-context";
import CreateDiscussionModal from "./components/CreateDiscussionModal";
import { useGET } from "@/lib/hooks/useGET.hook";
import { Discussion } from "@/lib/types/discussion.types";
import EventCardLoader from "../../events/components/EventCardLoader";
import { Event } from "@/lib/types/events.types";

const DiscussionsPage = () => {
  const { showModal } = useModal();

    // fetch lists of discussions
  const {
    data: discussions,
    isLoading: isDiscussionLoading,
    isError: isDiscussionError,
  } = useGET({
    url: "/discussions",
    queryKey: ["discussions"],
    withAuth: false,
    enabled: false,
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


  const handleStartDiscussion = () => {
    showModal(<CreateDiscussionModal />);
  };

  return (
    <TransitionParent>
      <section className=" w-screen flex flex-col items-center justify-start">
        <div className="bg-primary w-[92%] md:w-[95%] lg:h-[22rem] h-[22rem] rounded-[1rem] grid grid-cols-1 lg:grid-cols-2 place-content-start md:place-content-center items-center p-4 md:p-16 relative overflow-hidden">
          <div className="w-full md:col-span-1 flex flex-col items-start justify-start gap-2 md:gap-4 relative left-0 z-[50]">
            <span className="pt-4 flex flex-col items-center justify-start gap-5 relative w-full z-[50] font-sora">
              <h1 className="text-xl md:text-3xl text-primaryWhite text-left">
                “A girl should not expect special privileges because of her sex
                but neither should she adjust to prejudice and discrimination.”
              </h1>
              <h1 className=" w-full text-xl md:text-3xl text-primaryWhite text-right italic">
                - Betty Friedan
              </h1>
            </span>
            <span className="w-full flex justify-start">
              <Button
                label="Start a new discussion"
                fullWidth={false}
                size="medium"
                variant="primary"
                state="default"
                onClick={handleStartDiscussion}
              />
            </span>
          </div>
          <div className="md:col-span-1 absolute bottom-0 right-0 block z-10">
            <Image
              src={Group}
              alt="group"
              width={1000}
              height={1000}
              className="lg:w-[15rem] w-[7rem] mx-auto aspect-auto rounded-br-xl"
            />
          </div>
          <Image
            src={DoodlesA}
            alt="doodles"
            className="absolute top-[25%] md:-top-[15%] opacity-60 md:opacity-100 right-0 w-4/5 md:w-1/2 aspect-square object-cover z-1"
          />
          <Image
            src={DoodlesB}
            alt="doodles"
            className="absolute top-0 left-0 w-0 md:w-1/4 opacity-20 md:opacity-100 aspect-square object-contain"
          />
        </div>

        <section className="w-full md:w-[95%] mx-auto grid grid-cols-1 lg:grid-cols-6 gap-10 relative px-4">
          <div className="lg:col-span-4 w-full flex flex-col py-[5rem]">
            <h3 className="uppercase text-orange-500 text-lg md:text-2xl font-sora font-semibold items-stretch justify-center py-1 border-b-neutral-200 border-b border-solid max-md:max-w-full mb-5">
              Latest Discussions
            </h3>
            {/* Discussion feeds */}
            <section className=" flex flex-col gap-4">
              {isDiscussionError && <p>Error fetching list</p>}

              {isDiscussionLoading ? (
                [1, 2, 3, 4, 5, 6].map((item: any) => (
                  <DiscussionCardLoader key={item?.id} />
                ))
              ) : !isDiscussionLoading &&
                !isDiscussionError &&
                discussions?.content?.length === 0 ? (
                <p className="no-result">No discussions yet</p>
              ) : (
                <>
                  {discussions?.content?.map((discussion: Discussion) => (
                    <DiscussionCard key={discussion?.id} discussion={discussion} comment={'10'} />
                  ))}
                 <div className="w-fit mx-auto my-8">
                      <Button
                        label="SEE MORE DISCUSSIONS"
                        variant="outline"
                        fullWidth={false}
                        size="normal"
                      />
                    </div>
                </>
)}
            </section>
          </div>

          <div className="lg:col-span-2 w-full hidden lg:flex flex-col space-y-8  border-none py-[5rem] relative lg:sticky top-0 lg:h-screen h-full overflow-y-scroll scrollable-section ">
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
                  <p>No Events yet</p>
                ) : (
                  !isEventsLoading &&
                  !isEventsError && (
                    <>
                      <div className="w-full md:w-[95%] mx-auto flex justify-center gap-5 flex-wrap md:gap-y-16 pb-[8rem]">
                        {Array.isArray(events?.content) &&
                          events?.content.map((event: Event) => (
                            <EventCard key={event.id} event={event} />
                          ))}
                      </div>
                      <div className="w-fit mx-auto my-8">
                        <Button
                          label="SEE MORE EVENTS"
                          variant="outline"
                          fullWidth={false}
                          size="normal"
                        />
                      </div>
                    </>
                  )
                )}
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
        </section>
      </section>
    </TransitionParent>
  );
};

export default DiscussionsPage;
