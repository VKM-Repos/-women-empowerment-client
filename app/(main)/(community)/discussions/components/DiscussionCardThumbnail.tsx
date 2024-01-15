import React, { useState } from "react";
import Image from "next/image";
import Icon from "@/components/Common/Icons/Icon";
import Link from "next/link";
import formatIdToTitle from "@/lib/utils/formatIdToTitle";

interface DiscussionProps {
  id: string;
  image?: string;
  title: string;
  author: string;
  description: string;
  createdAt: string;
  comments: string;
}

const DiscussionCardThumbnail: React.FC<{ discussion: DiscussionProps }> = ({
  discussion,
}) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const truncatedText = (text: string, maxLength: number) => {
    return text.length > maxLength && !expanded
      ? `${text.slice(0, maxLength)}...`
      : text;
  };

  return (
    <div className="cursor-pointer" >
      <article className="w-full my-2 grid grid-cols-8 border drop-shadow-sm gap-4 border-gray-500 hover:bg-primary/10 transform transition-all ease-in-out hover:scale-[99%] duration-75        cursor-pointer rounded-[0.5rem] p-2 items-center">
        <Image
          src={
            discussion?.image || "../../../../public/images/group-of-girls.png"
          }
          alt={`discussion post`}
          width={100}
          height={100}
          // layout="responsive"
          className="col-span-1 w-full aspect-square rounded-full object-contain"
        />

        <div className="col-span-7 flex flex-col items-start justify-start gap-1">
          <h4 className="text-sm font-normal">{discussion?.title}</h4>
          <p className="font-light text-xs text-gray-300">
            {truncatedText(discussion?.description, 150)}
            &nbsp;
            {discussion.description.length > 100 && (
              // <span className="text-info text-xs">See more</span>
               <span className="text-xs font-medium text-gray-200">
              - {discussion.author}
            </span>
            )}
          </p>
          <span className="w-full flex items-center justify-between text-xs">
            <span>{discussion.createdAt}</span>
            <span className="text-primary flex space-x-2">
              <Icon name="" /> {discussion.comments} comments
            </span>
          </span>
        </div>
      </article>
    </div>
  );
};

export default DiscussionCardThumbnail;
