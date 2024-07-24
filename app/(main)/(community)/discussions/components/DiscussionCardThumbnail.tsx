import React, { useState } from 'react';
import Image from 'next/image';
import Icon from '@/components/Common/Icons/Icon';
import { Discussion } from '@/lib/types/discussion.types';
import useRelativeTime from '@/lib/utils/useRelativeTime';
import ImageWithFallback from '@/components/Common/ImageWithFallBack';

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
    <div className="cursor-pointer">
      <article
        onClick={() => (window.location.href = `/discussions/${discussion.id}`)}
        className="border-gray-500 hover:bg-primary/10 my-2 grid w-full transform cursor-pointer grid-cols-8 items-center gap-4 rounded-[0.5rem] border p-2 drop-shadow-sm        transition-all duration-75 ease-in-out hover:scale-[99%]"
      >
        <span className="col-span-1 aspect-square w-[2rem] border overflow-hidden rounded-full md:w-[3rem]">
          <ImageWithFallback
            src={
              discussion?.createdBy.photoUrl
                ? discussion?.createdBy.photoUrl
                : 'https://placehold.co/400x400?text=Women\n Hub'
            }
            fallbackSrc={'https://placehold.co/100x100?text=Women\n Hub'}
            aspectRatio={{ width: 100, height: 100 }}
            alt={discussion.createdBy.name}
            className=""
          />
        </span>

        <div className="col-span-7 flex flex-col items-start justify-start gap-1">
          <h4 className="font-normal font-sora block w-full truncate whitespace-nowrap text-sm">
            {discussion?.title}
          </h4>
          <p className="font-quickSand text-gray-300 text-xs">
            {truncatedText(discussion?.content, 100)}
            &nbsp;
            <span className="text-gray-200 text-xs font-medium">
              - {discussion?.createdBy?.name || 'Anonymous'}
            </span>
          </p>
          <span className="font-sora flex w-full items-center justify-between text-xs">
            <span>{formattedDate}</span>
            <span className="text-primary flex space-x-2">
              <Icon name="comment-icon" className="aspect-square w-4" />{' '}
              <p>{discussion.commentsCount} comments</p>
            </span>
          </span>
        </div>
      </article>
    </div>
  );
};

export default DiscussionCardThumbnail;
