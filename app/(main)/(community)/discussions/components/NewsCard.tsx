import React, { useState } from "react";
import Image from "next/image";

interface NewsProps {
  id: string;
  image?: string;
  heading: string;
  length: string;

}

const NewsCard: React.FC<{ news: NewsProps }> = ({
  news,
}) => {

  return (
    <article className="w-full h-[4rem] md:h-[7rem] grid grid-cols-8 items-center cursor-pointer hover:bg-primary/10 drop-shadow-sm gap-4 md:gap-0 border-gray-500 transform transition-all ease-in-out hover:scale-[99%] duration-75 rounded-[0.5rem] p-1 md:p-2">
      <div className="col-span-6 flex flex-col items-start justify-start gap-1">
        <h4 className="text-sm font-semibold underline">{news?.heading}</h4>
        <p className="text-sm text-gray-300">{news.length}</p>
      </div>
            <Image
                src={
                news?.image || "../../../../public/images/group-of-girls.png"
                }
                alt={`news post`}
                width={100}
                height={100}
                // layout="responsive"
                className="col-span-2 w-full md:w-2/3 place-self-center justify-self-end aspect-square rounded-xl object-cover"
            />
      
    </article>
  );
};

export default NewsCard;
