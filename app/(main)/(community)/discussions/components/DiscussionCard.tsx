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

const DiscussionCard: React.FC<{ discussion: DiscussionProps }> = ({
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
    <Link href={`/discussions/${discussion.id}`} as={`/discussions/${formatIdToTitle(discussion.title)}`} scroll={false} className="w-full grid grid-cols-8 border drop-shadow-sm gap-4 border-gray-500 hover:bg-primary/10 transform transition-all ease-in-out hover:scale-[99%] duration-75 cursor-pointer rounded-[0.8rem] p-4 md:p-6 items-start" >   
        <div className="col-span-2 md:col-span-1">
           <Image
          src={
            discussion?.image || "../../../../public/images/group-of-girls.png"
          }
          alt={`discussion post`}
          width={100}
          height={100}
          // layout="responsive"
          className=" w-full aspect-square rounded-full object-contain"
        />
        </div>

        <div className="col-span-6 lg:col-span-7 flex flex-col items-start justify-start gap-1">
          <h4 className="text-gray-100 font-bold font-sora text-base md:text-xl truncate whitespace-nowrap w-full block">{discussion?.title}</h4>
          <p className="text-gray-300 font-light font-quickSand text-sm md:text-base">
            {truncatedText(discussion?.description, 150)}
            &nbsp;
            {discussion.description.length > 100 && (
              // <span className="text-info text-xs">See more</span>
               <span className="text-xs md:text-sm font-sora font-medium text-gray-200">
              - {discussion.author}
            </span>
            )}
          </p>
          <span className="w-full flex items-center justify-between text-xs md:text-sm font-sora">
            <span>{discussion.createdAt}</span>
            <span className="text-primary flex space-x-2">
              <Icon name="" /> {discussion.comments} comments
            </span>
          </span>
        </div>
    
    </Link>
  );
};

export default DiscussionCard;
