import React, { useState } from "react";
import Image from "next/image";

interface NewsProps {
  id: string;
  image?: string;
  title: string;
  readTime: string;
}

const NewsCard: React.FC<{ news: NewsProps }> = ({
  news,
}) => {

  return (
    <article className="w-full grid grid-cols-8 items-center p-4">
      <div className="col-span-6 flex flex-col items-start justify-start gap-1">
        <h4 className="text-sm font-semibold underline">{news?.title}</h4>
        <p className="text-base text-gray-300">{news.readTime}</p>
      </div>
            <Image
                src={
                news?.image || "../../../../public/images/group-of-girls.png"
                }
                alt={`news post`}
                width={100}
                height={100}
                // layout="responsive"
                className="col-span-2 w-full md:w-1/2 mx-auto aspect-square rounded-xl object-cover"
            />
      
    </article>
  );
};

export default NewsCard;
