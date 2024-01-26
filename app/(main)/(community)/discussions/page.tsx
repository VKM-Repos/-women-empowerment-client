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

const DiscussionsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [discussions, setDiscussions] = useState<any>([]);
  const { showModal } = useModal();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      // Simulating API call with a timeout
      const response = await new Promise<{ data: any[] }>((resolve) =>
        setTimeout(() => resolve({ data: db.discussions }), 2000)
      );

      setDiscussions(response.data);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  const handleStartDiscussion = () => {
    showModal(<CreateDiscussionModal />);
  };

  return (
    <TransitionParent>
      <section className="w-screen mx-auto flex flex-col items-center justify-start space-y-[5rem] overflow-x-hidden">
        <div className="bg-primary w-[98%] md:w-[95%] lg:h-[25rem] h-[26rem] rounded-[1rem] grid grid-cols-1 lg:grid-cols-2 place-content-start lg:place-content-center items-center p-2 md:p-16 relative overflow-hidden">
          <div className="w-full md:col-span-1 flex flex-col items-start justify-start gap-2 md:gap-4 relative left-0 z-[50]">
            <div className="pt-4 flex flex-col items-center justify-start gap-5 relative w-full z-[50] font-sora">
              <p className="text-xl md:text-4xl text-primaryWhite text-left">
                “A girl should not expect special privileges because of her sex
                but neither should she adjust to prejudice and discrimination.”
              </p>
              <p className=" w-full text-xl md:text-4xl text-primaryWhite text-right italic">
                - Betty Friedan
              </p>
            </div>
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
              className="lg:w-[18rem] w-[10rem] mx-auto aspect-auto rounded-br-xl"
            />
          </div>
          <Image
            src={DoodlesA}
            alt="doodles"
            className="absolute top-[25%] md:-top-[15%] right-0 w-4/5 md:w-1/2 aspect-square object-cover z-1"
          />
          <Image
            src={DoodlesB}
            alt="doodles"
            className="absolute top-0 left-0 w-0 md:w-1/4 opacity-20 md:opacity-100 aspect-square object-contain"
          />
        </div>

        <div className="w-full md:w-[95%] mx-auto grid grid-cols-1 lg:grid-cols-6 gap-2 relative px-2 pb-[8rem]">
          <div className="lg:col-span-4 w-full flex flex-col py-4">
            <h3 className="text-2xl font-semibold font-sora text-primary pb-4 uppercase">
              Latest Discussions
            </h3>
            {/* Discussion feeds */}
            <section className=" flex flex-col gap-4">
              {discussions && isLoading
                ? [1, 2, 3, 4].map((item: any) => (
                    <DiscussionCardLoader key={item?.id} />
                  ))
                : discussions.map((item: any) => (
                    <DiscussionCard key={item?.id} discussion={item} />
                  ))}
            </section>
          </div>

          <div className="lg:col-span-2 w-full hidden lg:flex flex-col space-y-8  border-none pb-[5rem] relative lg:sticky top-0 lg:h-screen h-full overflow-y-scroll scrollable-section ">
            <aside className="w-full py-4 rounded-[1.5rem]">
              <h3 className="text-2xl font-semibold font-sora pb-4 text-primary uppercase">
                Events
              </h3>
              <section className="flex flex-col lg:gap-[0.1rem] gap-[3rem] border-t border-gray-500  py-1">
                {db.events.length === 0 ? null : (
                  <>
                    {db.events.map((items: any) => (
                      <EventCard key={items.id} event={items} />
                    ))}
                    <div className="py-4"></div>
                    <button className="font-quickSand text-orange-500 text-base justify-center items-stretch border self-center w-[207px] max-w-full mt-6 p-5 rounded-lg border-solid border-orange-500">
                      SEE MORE EVENTS
                    </button>
                  </>
                )}
              </section>
            </aside>
            <aside className="w-full  py-6 rounded-[1.5rem]">
              <h3 className="text-2xl font-sora font-semibold text-primary pb-4 uppercase">
                News Center
              </h3>
              <section className="flex flex-col gap-[0.1rem] border-t border-gray-500 py-1">
                {db.news.length === 0 ? null : (
                  <>
                    {db.news.map((items: any) => (
                      <NewsCard key={items.id} news={items} />
                    ))}
                    <div className="py-4"></div>
                    <button className=" font-quickSand text-orange-500 text-base justify-center items-stretch border shadow-sm self-center  max-w-full mt-10 p-5 rounded-lg border-solid border-orange-500 max-md:mt-10">
                      MORE FROM NEWS CENTER
                    </button>
                  </>
                )}
              </section>
            </aside>
          </div>
        </div>
      </section>
    </TransitionParent>
  );
};

export default DiscussionsPage;
