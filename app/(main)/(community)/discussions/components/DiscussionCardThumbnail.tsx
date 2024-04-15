import React, { useState } from "react";
import Image from "next/image";
import Icon from "@/components/Common/Icons/Icon";
import { Discussion } from "@/lib/types/discussion.types";
import useRelativeTime from "@/lib/utils/useRelativeTime";


const DiscussionCardThumbnail: React.FC<{ discussion: Discussion }> = ({
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

  const formattedDate = useRelativeTime(discussion?.createdAt);


  return (
    <div className="cursor-pointer" >
      <article onClick={() => window.location.href = `/discussions/${discussion.id}`} className="w-full my-2 grid grid-cols-8 border drop-shadow-sm gap-4 border-gray-500 hover:bg-primary/10 transform transition-all ease-in-out hover:scale-[99%] duration-75        cursor-pointer rounded-[0.5rem] p-2 items-center">
        <span className="col-span-1 w-[3rem] aspect-square rounded-full overflow-hidden">
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

        <div className="col-span-7 flex flex-col items-start justify-start gap-1">
          <h4 className="text-sm font-normal font-sora w-full block whitespace-nowrap truncate">{discussion?.title}</h4>
          <p className="font-quickSand text-xs text-gray-300">
            {truncatedText(discussion?.content, 100)}
            &nbsp;
            {/* {discussion.content.length > 100 && (
              <span className="text-info text-xs">See more</span>
            )} */}
            <span className="text-xs font-medium text-gray-200">
              - {discussion?.createdBy?.name || 'Anonymous'}
            </span>
          </p>
          <span className="w-full flex items-center justify-between text-xs font-sora">
            <span>{formattedDate}</span>
            <span className="text-primary flex space-x-2">
              <Icon name="comment-icon" className="w-4 aspect-square" /> <p>{discussion.commentsCount} comments</p>
            </span>
          </span>
        </div>
      </article>
    </div>
  );
};

export default DiscussionCardThumbnail;
