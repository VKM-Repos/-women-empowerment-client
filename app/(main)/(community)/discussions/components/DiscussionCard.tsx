import React, { useState } from 'react';
import Image from 'next/image';
import Icon from '@/components/Common/Icons/Icon';
import Link from 'next/link';
import DefaultDiscussionImg from '../../../../../public/images/avatar-thinking-svgrepo-com.svg';
import formatIdToTitle from '@/lib/utils/formatIdToTitle';
import { Discussion } from '@/lib/types/discussion.types';
import useRelativeTime from '@/lib/utils/useRelativeTime';
import ImageWithFallback from '@/components/Common/ImageWithFallBack';

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
    <Link
      href={`/discussions/${discussion.id}`}
      className="border-gray-500 hover:bg-primary/10 grid w-full transform cursor-pointer grid-cols-8 items-start gap-4 rounded-[0.8rem] border p-4 drop-shadow-sm transition-all duration-75 ease-in-out hover:scale-[99%] md:gap-10 md:p-6"
    >
      <span className="col-span-2 aspect-square w-[4rem] overflow-hidden rounded-full md:col-span-1 lg:w-[5rem]">
        <ImageWithFallback
          src={
            discussion?.createdBy.photoUrl
              ? discussion?.createdBy.photoUrl
              : 'https://placehold.co/500x500?text=Women\n Hub'
          }
          fallbackSrc={'https://placehold.co/500x500?text=Women\n Hub'}
          aspectRatio={{ width: 1, height: 1 }}
          alt={discussion.createdBy.name}
          className=""
        />
      </span>

      <div className="col-span-6 flex flex-col items-start justify-start gap-1 lg:col-span-7">
        <h4 className="text-gray-100 font-sora block w-full truncate whitespace-nowrap text-base font-normal md:text-lg">
          {discussion?.title}
        </h4>
        <p className="text-gray-200 font-normal font-quickSand h-[4rem] overflow-hidden text-sm md:h-[3rem] md:text-base">
          {truncatedText(discussion?.content, 150)}
          &nbsp;
          <span className="font-sora text-gray-200 text-xs font-medium md:text-sm">
            - {discussion.createdBy.name}
          </span>
        </p>
        <span className="font-sora flex w-full items-center justify-between text-xs md:text-sm">
          <span>{formattedDate}</span>
          <span className="text-primary flex items-center gap-2 text-xs md:text-sm">
            <Icon name="comment-icon" className="aspect-square w-4" />{' '}
            {discussion?.commentsCount} comments
          </span>
        </span>
      </div>
    </Link>
  );
};

export default DiscussionCard;
