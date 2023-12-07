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
    <article className="w-full grid grid-cols-8 items-center">
      <Image
        src={
          event?.image || "../../../../public/images/group-of-girls.png"
        }
        alt={`event post`}
        width={100}
        height={100}
        // layout="responsive"
        className="col-span-2  w-full md:w-1/2 mx-auto aspect-square rounded-full object-contain"
      />

      <div className="col-span-6 flex flex-col items-start justify-start gap-1">
        <h4 className="text-sm font-semibold">{event?.title}</h4>
        <p className="text-sm text-gray-300">{event.author}</p>
        <p className="text-xs text-info">{event.createdAt} ({event.status})</p>
      </div>
      
    </article>
  );
};

export default EventCard;
