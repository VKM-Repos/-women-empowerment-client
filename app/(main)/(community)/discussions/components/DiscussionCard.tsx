import React, { useState } from "react";
import Image from "next/image";
import Icon from "@/components/Common/Icons/Icon";
import Link from "next/link";
import DefaultDiscussionImg from "../../../../../public/images/avatar-thinking-svgrepo-com.svg";
import formatIdToTitle from "@/lib/utils/formatIdToTitle";
import { Discussion } from "@/lib/types/discussion.types";
import useRelativeTime from "@/lib/utils/useRelativeTime";

const DiscussionCard: React.FC<{ discussion: Discussion }> = ({
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

  const formattedDate = useRelativeTime(discussion.createdAt);

  return (
    <Link href={`/discussions/${discussion.id}`} className="w-full grid grid-cols-8 border drop-shadow-sm gap-4 border-gray-500 hover:bg-primary/10 transform transition-all ease-in-out hover:scale-[99%] duration-75 cursor-pointer rounded-[0.8rem] p-4 md:p-6 items-start" >
      <span className="col-span-2 md:col-span-1 w-[6rem] aspect-square rounded-full overflow-hidden">
        <Image
          src={
            discussion?.createdBy.photoUrl
              ? discussion?.createdBy.photoUrl
              : "https://placehold.co/400x400/png"
          }
          alt={`profile image`}
          width={100}
          height={100}
          objectFit="cover"
          layout="responsive"
          className=""
        />
      </span>

      <div className="col-span-6 lg:col-span-7 flex flex-col items-start justify-start gap-1">
        <h4 className="text-gray-100 text-base md:text-lg font-sora font-bold truncate whitespace-nowrap w-full block">{discussion?.title}</h4>
        <p className="text-gray-300 font-light font-quickSand text-sm md:text-base">
          {truncatedText(discussion?.content, 150)}
          &nbsp;
          {/* {discussion.content.length > 100 && (
            // <span className="text-info text-xs">See more</span>
          )} */}
          <span className="text-xs md:text-sm font-sora font-medium text-gray-200">
            - {discussion.createdBy.name}
          </span>
        </p>
        <span className="w-full flex items-center justify-between text-xs md:text-sm font-sora">
          <span>{formattedDate}</span>
          <span className="text-primary text-xs md:text-sm flex items-center gap-2">
            <Icon name="comment-icon" className="w-4 aspect-square" /> {discussion?.commentsCount} comments
          </span>
        </span>
      </div>

    </Link>
  );
};

export default DiscussionCard;
