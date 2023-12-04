"use client";
import React, { useState } from "react";
import { TransitionParent, TransitionFromBottom } from "@/lib/utils/transition";
import Image from "next/image";
import Rubik from "@/public/images/rubik.png";

import DateInput from "./components/DateInput";
import EventsTab from "./components/EventsTab";
import EventCard from "./components/EventCard";


interface EventTab {
  name: string;
  component: React.ReactNode;
}

const tabs: EventTab[] = [
  {
    name: 'Online',
    component: <TransitionFromBottom><EventCard /><EventCard /><EventCard /><EventCard /><EventCard /><EventCard /></TransitionFromBottom>
  },
  {
    name: 'Physical',
    component: <TransitionFromBottom><EventCard /><EventCard /><EventCard /><EventCard /><EventCard /><EventCard /></TransitionFromBottom>
  },
];

const EventsPage = () => {
  const [selectedEventType, setSelectedEventType] = useState<EventTab>(tabs[0]);
  const [ date, setDate] = useState({
    day: new Date().getDay(),
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear()
  })


  const fetchEvents = async ({ day, month, year }: { day: number; month: number; year: number }) => {
    // Fake API call to mimic response
    const response = await new Promise<{ data: any[] }>((resolve) =>
      setTimeout(() => resolve({ data: [] }), 1000)
    );

    return response.data;
  };

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
      <section className="w-[95vw] mx-auto flex flex-col items-center justify-start space-y-[5rem] py-[0.5rem] pb-[4rem] min-h-screen ">
        <div className="w-full bg-primary h-[50vh] rounded-[2rem] px-2 md:px-12 flex items-start pt-[3rem] justify-start relative overflow-hidden">
         <div className="w-full md:w-1/3 flex flex-col items-start justify-start space-y-6 text-left relative z-10">
          <h1 className="text-xl md:text-3xl font-semibold text-primaryWhite text-center md:text-left">The Best Women Illuminating Conferences</h1>
          <form  className="w-full">
            <fieldset>
              <legend className="text-primaryWhite py-2">Find an Event:</legend>
              <div className="w-full grid grid-cols-3 gap-4 ">
              <DateInput
                label="Day"
                color="#FFF200"
                value={date.day}
                min={1}
                max={31}
                onIncrease={increment}
                onDecrease={decrement}
                onChange={(field, value) => setDate({ ...date, [field]: value })}
              />
              <DateInput
                label="Month"
                color="#FF7400"
                value={date.month}
                min={1}
                max={12}
                onIncrease={increment}
                onDecrease={decrement}
                onChange={(field, value) => setDate({ ...date, [field]: value })}
              />
              <DateInput
                label="Year"
                color="#E7D6FF"
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
         <Image src={Rubik} alt="rubik" className="absolute bottom-0 right-10 w-4/5 md:w-1/4 opacity-20 md:opacity-100 aspect-square object-cover" />
        </div>

        <div className="w-full flex  gap-10">
          {tabs.map((tab) => (
            <EventsTab
              key={tab.name}
              name={tab.name}
              selectedEventType={selectedEventType === tab}
              setSelectedEventType={() => setSelectedEventType(tab)}
            />
          ))}
        </div>
        <div className="min-h-screen w-full">
            {selectedEventType.component}    
        </div>


      </section>
    </TransitionParent>
  );
};

export default EventsPage;
