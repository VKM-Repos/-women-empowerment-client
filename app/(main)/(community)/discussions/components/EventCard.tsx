'use client'
import React, { useState } from "react";
import Image from "next/image";
import { Event } from "@/lib/types/events.types";
import { formatDateTime } from "@/lib/utils/helperFunctions";
import Link from "next/link";
import ImageWithFallback from "@/components/Common/ImageWithFallBack";

const EventCard: React.FC<{ event: Event }> = ({ event }) => {
  return (
    <Link
      href={`/events/${event.id}`}
      className="w-full font-sora grid grid-cols-8 items-center my-1 cursor-pointer hover:bg-primary/10 drop-shadow-sm gap-4 md:gap-0 border-gray-500 transform transition-all ease-in-out hover:scale-[99%] duration-75 rounded-[0.5rem] p-1 md:p-2"
    >
      <span className="col-span-2  w-full md:w-2/3  aspect-square rounded-full overflow-hidden relative">
        {/* <Image
          src={
            event?.image
              ? event?.image
              : "../../../../public/images/group-of-girls.png"
          }
          alt={`event image`}
          objectFit="cover"
          layout="fill"
          className=""
        /> */}
         <ImageWithFallback
            src={
              event?.image ||
              "https://placehold.co/200x200?text=Women\n Hub"
            }
            fallbackSrc={"https://placehold.co/200x200?text=Women\n Hub"}
            aspectRatio={{ width: 200, height: 200 }}
            alt={event?.name}
            className="w-full"
          />
      </span>


      <div className="col-span-6 flex flex-col items-start justify-start gap-1">
        <h4 className="text-sm font-semibold truncate whitespace-nowrap w-full block">
          {event?.name}
        </h4>
        <p className="text-sm text-gray-300 font-quickSand">
          {event.organization?.name}
        </p>
        <p className="text-xs text-primary">
          {formatDateTime(event.startDate)} <span className="capitalize">({event.type.toLocaleLowerCase()})</span>
        </p>
      </div>
    </Link>
  );
};

export default EventCard;
