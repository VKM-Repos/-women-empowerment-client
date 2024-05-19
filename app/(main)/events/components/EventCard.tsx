import { CameraIcon } from "@/components/Common/Icons/Camera.icon";
import { LocationIcon } from "@/components/Common/Icons/Location.icon";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ChevronRightIcon } from "@/components/Common/Icons";
import formatIdToTitle from "@/lib/utils/formatIdToTitle";
import { Event } from "@/lib/types/events.types";
import { formatDateTime } from "@/lib/utils/helperFunctions";
import ImageWithFallback from "@/components/Common/ImageWithFallBack";

const EventCard: React.FC<{ event: Event }> = ({ event }) => {
  return (
    <Link
      href={`/events/${event.id}`}
      // scroll={false}
      className="w-full grid grid-cols-12 items-center border-t border-gray-500  p-2 drop-shadow-sm gap-4 hover:bg-primary/10 transform transition-all ease-in-out duration-75 hover:rounded"
    >
      <div className="col-span-2 md:col-span-1">
        <ImageWithFallback
            src={
              event?.image ||
              "https://placehold.co/200x200?text=Women\n Hub"
            }
            fallbackSrc={"https://placehold.co/200x200?text=Women\n Hub"}
            aspectRatio={{ width: 100, height: 100 }}
            alt={event?.name}
            className="w-full md:w-2/3  aspect-square rounded-full object-contain"
          />
      </div>
      <div className="w-full col-span-10 md:col-span-10 flex flex-col items-start gap-0 md:gap-1">
        <h5 className="text-gray-100 font-normal font-sora text-base md:text-xl truncate whitespace-nowrap w-full block capitalize">
          {event.name}
        </h5>
        <p className="text-gray-300 font-normal font-quickSand text-xs md:text-sm ">
          {formatDateTime(event?.startDate)}
        </p>
        <span className="text-xs md:text-sm font-sora capitalize text-btnWarning font-light flex items-center">
          {event.type === "ONLINE" ? (
            <span className="flex gap-1">
              <CameraIcon className="w-[20px] aspect-square" /> 
              <span> {event.type.toLowerCase()} </span>
            </span>
          ) : event.type === "PHYSICAL" ? (
            <span className="flex gap-1">
              <LocationIcon className="w-[20px] aspect-square" /> 
              <span>{event.location}</span>
            </span>
          ) : null}{" "}
        </span>
      </div>
      <div className="hidden col-span-1 md:flex justify-end">
        <div className="w-6 aspect-square text-gray-400 rounded-full flex items-center justify-center">
          <ChevronRightIcon />
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
