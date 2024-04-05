"use client";
import React, { useEffect, useState } from "react";
import { TransitionParent, TransitionFromBottom } from "@/lib/utils/transition";
import Image from "next/image";
import Rubik from "@/public/images/rubik.png";
import EventsTab from "./components/EventsTab";
import EventCard from "./components/EventCard";
import EventCardLoader from "./components/EventCardLoader";
import { useGET } from "@/lib/hooks/useGET.hook";
import { Event } from "@/lib/types/events.types";
import Button from "@/components/Common/Button/Button";
import { useRouter } from "next/navigation";
import { useAppContext } from "@/lib/context/app-context";
import FindEvent from "./components/FindEvent";
import { useModal } from "@/lib/context/modal-context";
import LoginFirstModal from "./components/LoginFirstModal";
import CreateOrgFirstModal from "./components/CreateOrgFirstModal";
type EventTab = {
  tabName: string;
};
const EventsPage = () => {
  const [selectedEventType, setSelectedEventType] = useState<EventTab>();
  const { showModal } = useModal();
  const router = useRouter();

  const { isAuthenticated, user } = useAppContext();
  const [eventDate, setEventDate] = useState("");
  const [filterEvent, setFilterEvent] = useState(false);
  const [redirectURL, setRedirectURL] = useState("");
  // fetch lists of events
  const {
    data: events,
    isPending: isEventsLoading,
    isError: isEventsError,
  } = useGET({
    url: `/events?type=${
      !selectedEventType?.tabName ? "PHYSICAL" : selectedEventType?.tabName
    }`,
    queryKey: ["EVENTS", selectedEventType?.tabName, eventDate, filterEvent],
    withAuth: false,
    enabled: true,
  });

  const {
    data: filteredEvent,
    isPending: filteredEventsLoading,
    isError: filteredEventsError,
  } = useGET({
    url: `/events?date=${eventDate}`,
    queryKey: [
      "FILTER_EVENTS",
      selectedEventType?.tabName,
      eventDate,
      filterEvent,
    ],
    withAuth: false,
    enabled: !filterEvent,
  });
  useEffect(() => {
    setRedirectURL(window.location.pathname);
  }, []);
  const eventsTab = [
    {
      tabName: "PHYSICAL",
    },
    {
      tabName: "ONLINE",
    },
  ];
  const handleCreateEvent = () => {
    if (!isAuthenticated) {
      showModal(<LoginFirstModal redirectURL={redirectURL} />);
    } else if (isAuthenticated && user?.role !== "ADMIN") {
      showModal(<CreateOrgFirstModal />);
    } else {
      // router.push('/events/create');
      window.location.href = "/events/create";
    }
  };
  const getEventDate = (date: any) => {
    const eventDate = `${date?.year}-${
      date?.month > 9 ? date?.month : `0${date?.month}`
    }-${date?.day > 9 ? date?.day : `0${date?.day}`}`;
    setEventDate(eventDate);
    setFilterEvent(true);
  };
  return (
    <main className="w-full">
      <TransitionParent>
        <header className="bg-primary mx-auto w-[92%] md:w-[95%] lg:h-[26rem] h-[22rem] rounded-[1rem] grid grid-cols-1 md:grid-cols-5 place-content-start md:place-content-center items-center p-4 md:p-16 relative overflow-hidden">
          <div className="w-full md:w-3/4 md:col-span-4 flex flex-col items-start justify-start gap-2 md:gap-4 relative left-0 z-20">
            <h1 className="text-xl md:text-3xl font-semibold text-primaryWhite font-sora text-left">
              The Best Women Illuminating Conferences
            </h1>
            <span className="w-full flex justify-start">
              <Button
                label="Add a new event"
                fullWidth={false}
                size="medium"
                variant="primary"
                state="active"
                onClick={handleCreateEvent}
              />
            </span>
            <FindEvent getEventDate={getEventDate} />
          </div>
          <div className="md:col-span-1 relative md:absolute bottom-0 right-0 block z-10">
            <Image
              src={Rubik}
              alt="rubik"
              width={1000}
              height={1000}
              className="lg:w-[25rem] w-[10rem] mx-auto aspect-auto rounded-br-xl"
            />
          </div>
        </header>
        <section className="w-full md:w-[95%] mx-auto space-y-4 mt-[100px]">
          <div className="w-fit flex  gap-10 relative px-4">
            {eventsTab?.length > 0 && (
              <div className="absolute w-0.5 h-8 my-1 md:my-0 md:h-12 -top-2 left-[55%] bg-black-100 rounded-full z-[1000]" />
            )}
            {eventsTab?.map((tab: any, id: number) => (
              <EventsTab
                key={id}
                name={tab.tabName}
                selectedEventType={selectedEventType?.tabName === tab?.tabName}
                setSelectedEventType={() => setSelectedEventType(tab)}
              />
            ))}
          </div>
          <div className="min-h-screen w-full px-1">
            {isEventsLoading &&
              [1, 2, 3, 4].map((event: any, id: number) => (
                <EventCardLoader key={id} event={event} />
              ))}
            {isEventsError && <p>Error fetching Events</p>}
            {!isEventsLoading &&
              !isEventsError &&
              events?.content.length === 0 && <p>No Events yet</p>}
            {!isEventsLoading && !isEventsError && (
              <div className="w-full md:w-[95%] mx-auto flex justify-center flex-wrap pb-[8rem]">
                {events?.content.map((event: Event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            )}
          </div>
        </section>
      </TransitionParent>
    </main>
  );
};

export default EventsPage;
