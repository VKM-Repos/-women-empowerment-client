import { CameraIcon } from "@/components/Common/Icons/Camera.icon";
import { LocationIcon } from "@/components/Common/Icons/Location.icon";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ChevronRightIcon } from "@/components/Common/Icons";
import formatIdToTitle from "@/lib/utils/formatIdToTitle";
import { Event } from "@/lib/types/events.types";
import { formatDateTime } from "@/lib/utils/helperFunctions";

const EventCard: React.FC<{ event: Event }> = ({ event }) => {
  return (
    <Link
      href={`/events/${event.id}`}
      // scroll={false}
      className="w-full grid grid-cols-8 items-center border-t border-gray-500 md:p-4 p-2 drop-shadow-sm gap-4 hover:bg-primary/10 transform transition-all ease-in-out duration-75 hover:rounded"
    >
      <div className="col-span-2 md:col-span-1">
        <Image
          src={event?.image || "../../../../public/images/group-of-girls.png"}
          alt={`author`}
          width={100}
          height={100}
          className="w-full md:w-2/3  aspect-square rounded-full object-contain"
        />
      </div>
      <div className="w-full col-span-6 md:col-span-6 flex flex-col items-start gap-0 md:gap-2">
        <h5 className="text-gray-100 font-bold font-sora text-base md:text-xl truncate whitespace-nowrap w-full block">
          {event.name}
        </h5>
        <p className="text-gray-300 font-normal font-quickSand text-xs md:text-sm">
          {formatDateTime(event?.startDate)}
        </p>
        <span className="text-xs md:text-sm font-sora text-btnWarning font-medium flex items-center">
          {event.type === "ONLINE" ? (
            <>
              <CameraIcon className="w-6 aspect-square" /> &nbsp; {event.type}{" "}
              &nbsp;
            </>
          ) : event.type === "PHYSICAL" ? (
            <>
              {" "}
              <LocationIcon className="w-6 aspect-square" /> &nbsp;{" "}
              {event.location}
            </>
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
