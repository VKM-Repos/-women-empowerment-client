import React, { useState } from "react";
import Image from "next/image";
import { Event } from "@/lib/types/events.types";
import { formatDateTime } from "@/lib/utils/helperFunctions";
import Link from "next/link";

const EventCard: React.FC<{ event: Event }> = ({ event }) => {
  return (
    <Link
      href={`/events/${event.id}`}
      className="w-full font-sora grid grid-cols-8 items-center my-1 cursor-pointer hover:bg-primary/10 drop-shadow-sm gap-4 md:gap-0 border-gray-500 transform transition-all ease-in-out hover:scale-[99%] duration-75 rounded-[0.5rem] p-1 md:p-2"
    >
      <Image
        src={event?.image || "../../../../public/images/group-of-girls.png"}
        alt={`event post`}
        width={100}
        height={100}
        // layout="responsive"
        className="col-span-2  w-full md:w-2/3 place-self-center justify-self-center aspect-square rounded-full object-contain"
      />

      <div className="col-span-6 flex flex-col items-start justify-start gap-1">
        <h4 className="text-sm font-semibold truncate whitespace-nowrap w-full block">
          {event?.name}
        </h4>
        <p className="text-sm text-gray-300 font-quickSand">
          {event.organization?.name}
        </p>
        <p className="text-xs text-info">
          {formatDateTime(event.startDate)} ({event.type})
        </p>
      </div>
    </Link>
  );
};

export default EventCard;
