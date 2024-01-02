"use client";
import React, { useState } from "react";
import { TransitionParent, TransitionFromBottom } from "@/lib/utils/transition";
import Image from "next/image";
import Rubik from "@/public/images/rubik.png";
import DateInput from "./components/DateInput";
import EventsTab from "./components/EventsTab";
import EventCard from "./components/EventCard";

import db from '@/data/db.json'

interface EventTab {
  name: string;
}


const tabs: EventTab[] = [
  {
    name: 'Online',
  },
  {
    name: 'Physical',
  },
];

const EventsPage = () => {
  const [selectedEventType, setSelectedEventType] = useState<EventTab>(tabs[0]);
  const [ date, setDate] = useState({
    day: new Date().getDay(),
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear()
  })


   const filteredEvents = db.events.filter(
    (event) =>
      (selectedEventType.name === 'Online' && event.status.toLowerCase() === 'online') ||
      (selectedEventType.name === 'Physical' && event.status.toLowerCase() === 'physical')
  );


  // const fetchEvents = async ({ day, month, year }: { day: number; month: number; year: number }) => {
  //   // Fake API call to mimic response
  //   const response = await new Promise<{ data: any[] }>((resolve) =>
  //     setTimeout(() => resolve({ data: [] }), 1000)
  //   );

  //   return response.data;
  // };

 const increment = (field: string, event: React.MouseEvent<HTMLButtonElement>) => {
  event.preventDefault();
  setDate((prevDate: any) => ({
    ...prevDate,
    [field]: prevDate[field] + 1,
  }));
};

const decrement = (field: string, event: React.MouseEvent<HTMLButtonElement>) => {
  event.preventDefault();
  setDate((prevDate: any) => ({
    ...prevDate,
    [field]: prevDate[field] - 1,
  }));
};



  

  return (
    <TransitionParent>
      <section className="w-[95vw] mx-auto flex flex-col items-start justify-start space-y-[3rem] py-[0.5rem] pb-[4rem] min-h-screen ">
        <div className="w-full bg-primary md:h-[25rem] h-[20rem] rounded-[2rem] px-2 md:px-12 flex items-start pt-[3rem] justify-start relative overflow-hidden">
         <div className="w-full lg:w-1/3 flex flex-col items-start justify-start space-y-6 text-left relative z-10">
          <h1 className="text-xl md:text-3xl font-semibold text-primaryWhite text-center md:text-left">The Best Women Illuminating Conferences</h1>
          <form  className="w-full">
            <fieldset>
              <legend className="text-primaryWhite py-2">Find an Event:</legend>
              <div className="w-full grid grid-cols-3 gap-4 ">
              <DateInput
                label="Day"
                bgClassName="bg-[#FFF200]"
                textClassName="text-[#FFF200]"
                value={date.day}
                min={1}
                max={31}
                onIncrease={increment}
                onDecrease={decrement}
                onChange={(field, value) => setDate({ ...date, [field]: value })}
              />
              <DateInput
                label="Month"
                 bgClassName="bg-[#FF7400]"
                textClassName="text-[#FF7400]"
                value={date.month}
                min={1}
                max={12}
                onIncrease={increment}
                onDecrease={decrement}
                onChange={(field, value) => setDate({ ...date, [field]: value })}
              />
              <DateInput
                label="Year"
                bgClassName="bg-[#E7D6FF]"
                textClassName=" text-[#E7D6FF]"
                value={date.year}
                min={2000}
                max={3000}
                onIncrease={increment}
                onDecrease={decrement}
                onChange={(field, value) => setDate({ ...date, [field]: value })}
              />
            </div>
            </fieldset>
          </form>
         </div>
         <Image src={Rubik} alt="rubik" className="absolute bottom-0 right-10 w-4/5 md:w-2/4 lg:w-1/4  opacity-20 lg:opacity-100 aspect-square object-cover" />
        </div>

        <div className="w-fit flex  gap-10 relative px-4">
          {/* <div className="absolute w-0.5 h-12 -top-2 left-[45%] bg-gray-200 rounded-full z-10" /> */}
          {tabs.map((tab) => (
            <EventsTab
              key={tab.name}
              name={tab.name}
              selectedEventType={selectedEventType === tab}
              setSelectedEventType={() => setSelectedEventType(tab)}
            />
          ))}
        </div>
        <div className="min-h-screen w-full px-4">
            {filteredEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}  
        </div>
      </section>
    </TransitionParent>
  );
};

export default EventsPage;


