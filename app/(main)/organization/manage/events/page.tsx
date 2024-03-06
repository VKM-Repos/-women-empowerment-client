"use client";
import React, { useEffect, useState } from "react";
import Tab from "./components/Tab";
import Event from "./components/Event";
import orgLogo from "@/public/images/wtn.svg";
import Link from "next/link";
import { useGET } from "@/lib/hooks/useGET.hook";
import { useAppContext } from "@/lib/context/app-context";
import { TransitionParent } from "@/lib/utils/transition";
import LoadingThinkingWomen from "@/components/Common/Loaders/LoadingThinkingWomen";
interface EventTab {
  name: string;
}

const tabs: EventTab[] = [{ name: "All Events" }, { name: "Drafts" }];
export default function Events() {
  const [selectedEventType, setSelectedEventType] = useState<EventTab>(tabs[0]);
  const [fetchCount, setFetchCount] = useState(0);
  const { user } = useAppContext();

  const {
    data: events,
    isPending,
    refetch,
  } = useGET({
    url: `organizations/${user?.organizationId}/events${
      selectedEventType?.name == "Drafts" ? "/drafts" : ""
    }`,
    queryKey: ["GET_ALL_EVENTS", selectedEventType?.name, fetchCount],
    withAuth: true,
    enabled: true,
  });
  useEffect(() => {
    setFetchCount(fetchCount + 1);
    refetch();
  }, [selectedEventType.name]);

  return (
    <TransitionParent>
      {isPending ? (
        <LoadingThinkingWomen />
      ) : (
        <div>
          <div className="w-full flex justify-between my-10">
            <div className="flex items-center gap-10">
              <div className="flex gap-10">
                {tabs?.map((tab) => (
                  <Tab
                    key={tab.name}
                    name={tab.name}
                    selectedEventType={selectedEventType === tab}
                    setSelectedEventType={() => setSelectedEventType(tab)}
                  />
                ))}
              </div>
            </div>
            <div>
              <Link
                href={"/events/create"}
                className="px-5 py-2 bg-btnWarning rounded-md font-light font-sora text-white-100"
              >
                Add Event
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            {events?.content?.map((event: any) => (
              <Event
                key={event?.name}
                event={event}
                eventStatus={selectedEventType.name}
              />
            ))}
          </div>
        </div>
      )}
    </TransitionParent>
  );
}
