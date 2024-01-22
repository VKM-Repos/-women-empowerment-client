import React, { useState } from "react";
import Image from "next/image";

interface EventProps {
  id: string;
  image?: string;
  title: string;
  author: string;
  createdAt: string;
  status: string;
}

const EventCard: React.FC<{ event: EventProps }> = ({
  event,
}) => {

  return (
    <article className="w-full font-sora h-[4rem] md:h-[7rem] grid grid-cols-8 items-center my-1 cursor-pointer hover:bg-primary/10 drop-shadow-sm gap-4 md:gap-0 border-gray-500 transform transition-all ease-in-out hover:scale-[99%] duration-75 rounded-[0.5rem] p-1 md:p-2">
      <Image
        src={
          event?.image || "../../../../public/images/group-of-girls.png"
        }
        alt={`event post`}
        width={100}
        height={100}
        // layout="responsive"
        className="col-span-2  w-full md:w-2/3 place-self-center justify-self-center aspect-square rounded-full object-contain"
      />

      <div className="col-span-6 flex flex-col items-start justify-start gap-1">
        <h4 className="text-sm font-semibold">{event?.title}</h4>
        <p className="text-sm text-gray-300 font-quickSand">{event.author}</p>
        <p className="text-xs text-info">{event.createdAt} ({event.status})</p>
      </div>

    </article>
  );
};

export default EventCard;
