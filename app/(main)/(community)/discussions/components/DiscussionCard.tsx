import React, { useState } from "react";
import Image from "next/image";
import Icon from "@/components/Common/Icons/Icon";
import Link from "next/link";

interface DiscussionProps {
  id: string;
  image?: string;
  title: string;
  author: string;
  description: string;
  createdAt: string;
  comments: number;
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
    <Link href={`/discussions/${discussion.id}`} passHref>
      <article className="w-full grid grid-cols-8 border-2 gap-5 border-gray-500 hover:bg-secondaryOffWhite cursor-pointer rounded-[0.8rem] p-4 md:p-8 items-center">
        <Image
          src={
            discussion?.image || "../../../../public/images/group-of-girls.png"
          }
          alt={`discussion post`}
          width={100}
          height={100}
          // layout="responsive"
          className="col-span-2 lg:col-span-1 w-full aspect-square rounded-full object-contain"
        />

        <div className="col-span-6 lg:col-span-7 flex flex-col items-start justify-start gap-3">
          <h4 className="text-lg font-semibold">{discussion?.title}</h4>
          <p className="text-base text-gray-300">
            {truncatedText(discussion?.description, 80)}
            &nbsp;
            {discussion.description.length > 100 && (
              <span className="text-info text-xs">See more</span>
            )}
            <br />
            <span className="font-bold text-gray-200">
              - {discussion.author}
            </span>
          </p>
          <span className="w-full flex items-center justify-between text-base">
            <span>{discussion.createdAt}</span>
            <span className="text-primary flex space-x-2">
              <Icon name="" /> {discussion.comments} comments
            </span>
          </span>
        </div>
      </article>
    </Link>
  );
};

export default DiscussionCard;
