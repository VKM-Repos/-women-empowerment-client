"use client";
import React, { useState } from "react";
import { TransitionParent, TransitionFromBottom } from "@/lib/utils/transition";
import Image from "next/image";
import DoodlesA from "@/public/images/doodles-a.png";
import DoodlesB from "@/public/images/doodles-b.png";
import Group from "@/public/images/group-of-girls.png";
import Button from "@/components/Common/Button/Button";
import DiscussionCard from "./components/DiscussionCard";
import { discussionData, eventData, newsData } from "./sampledata";
import EventCard from "./components/EventCard";
import NewsCard from "./components/NewsCard";


const DiscussionsPage = () => {

  return (
    <TransitionParent>
      <section className="w-[95vw] mx-auto flex flex-col items-center justify-start space-y-[5rem] py-[0.5rem] pb-[4rem] min-h-screen">
        <div className="w-full bg-primary h-[50vh] rounded-[2rem] px-2 md:px-12 flex items-start pt-[3rem] justify-start relative overflow-hidden">
          <div className="w-full md:w-1/2 flex flex-col items-start justify-start space-y-6 text-left relative z-[50]">
            
            <div className="flex flex-col items-center justify-start gap-5 relative w-full z-[50]">
            <p className="text-xl md:text-3xl font-light tracking-wide text-primaryWhite text-center md:text-left">
             “A girl should not expect special privileges because of her sex but neither should she adjust to prejudice and discrimination.”
            </p>
            <p className=" w-full text-xl md:text-3xl font-light tracking-wide text-primaryWhite text-center md:text-right italic">
             - Betty Friedan
            </p>
            </div>
            <span className="w-full flex justify-center md:justify-start">
            <Button label="Start a new discussion" fullWidth={false} size="medium" variant="primary" state="default" onClick={() => {}} />
            </span>
          </div>
          <Image
            src={Group}
            alt="group"
            className="absolute bottom-0 right-10 w-4/5 md:w-1/4 opacity-20 md:opacity-100 aspect-square object-contain z-[20]"
          />
          <Image
            src={DoodlesA}
            alt="doodles"
            className="absolute -top-[25%] right-0 w-4/5 md:w-1/2 aspect-square object-cover z-1"
          />
          <Image
            src={DoodlesB}
            alt="doodles"
            className="absolute top-0 left-0 w-0 md:w-1/4 opacity-20 md:opacity-100 aspect-square object-contain"
          />
        </div>

        <div className="py-[2rem] w-full p-4 mx-auto flex gap-2 relative">
            <div className="w-4/6 flex flex-col py-4">  
            <h3 className="text-2xl font-semibold text-primary pb-4 uppercase">Latest Discussions</h3>       
              {/* Discussion feeds */}
              <section className=" flex flex-col gap-10 ">
                {discussionData.length === 0 ? (
                  <p className="no-result">No discussion found</p>
                ) : (
                  <>
                    {discussionData.map((item: any) => (
                      <DiscussionCard key={item.id} discussion={item} />
                    ))}
                    
                  </>
                )}
              </section>
            </div>

            <div className="w-2/6 flex flex-col space-y-8 border-none py-[5rem] sticky top-0 -mt-[5rem] h-screen overflow-y-scroll scrollable-section ">
              <aside className="w-full p-6 rounded-[1.5rem]">
                <h3 className="text-2xl font-semibold text-primary pb-4 uppercase">Events</h3>

                <section className="flex flex-col gap-[2.5rem] border-t border-gray-400 py-12">
                  {eventData.length === 0 ? null : (
                    <>
                      {eventData.map((items: any) => (
                        <EventCard key={items.id} event={items} />
                      ))}
                      <Button variant="outline" fullWidth label="SEE MORE EVENTS" size="medium" onClick={() => {}}/>
                    </>
                  )}
                </section>
              </aside>
              <aside className="w-full  p-6 rounded-[1.5rem]">
                <h3 className="text-2xl font-semibold text-primary pb-4 uppercase">News Center</h3>
                <section className="flex flex-col gap-[0.5rem] border-t border-gray-400 py-8">
                  {newsData.length === 0 ? null : (
                    <>
                      {newsData.map((items: any) => (
                        <NewsCard key={items.id} news={items} />
                      ))}
                         <Button variant="outline" fullWidth label="MORE FROM NEWS CENTER" size="medium" onClick={() => {}}/>
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
