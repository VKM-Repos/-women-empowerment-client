import React, { useState } from 'react';
import { Comment, Discussion } from '@/lib/types/discussion.types';
import useRelativeTime from '@/lib/utils/useRelativeTime';
import ImageWithFallback from '@/components/Common/ImageWithFallBack';

const CommentCard: React.FC<{
  comment: Comment;
}> = ({ comment }) => {
  const formattedDate = useRelativeTime(comment.createdAt);

  return (
    <div key={comment.id} className="grid w-full grid-cols-8 gap-4">
      <span className="border-btnWarning col-span-1 aspect-square w-[2rem] overflow-hidden rounded-full border-2 md:w-[2.5rem]">
        <ImageWithFallback
          src={
            comment?.user?.photoUrl
              ? comment?.user?.photoUrl
              : 'https://placehold.co/400x400?text=Women\n Hub'
          }
          fallbackSrc={'https://placehold.co/100x100?text=Women\n Hub'}
          aspectRatio={{ width: 100, height: 100 }}
          alt={comment?.user?.name}
          className=""
        />
      </span>
      <div className="col-span-7 flex flex-col items-start justify-center gap-1">
        <h6 className="font-sora text-gray-100 text-sm md:text-base">
          {comment.user?.name}
        </h6>
        <p className="font-quickSand text-gray-200 text-sm">
          {comment.content}
        </p>
        <div className="flex w-full items-center justify-start gap-4 font-semibold">
          <p className="font-quickSand text-gray-400 text-xs">
            {formattedDate}
          </p>
          {/* <button className="text-sm font-sora text-primary flex items-center justify-center gap-1">
            <Icon name="comment-icon" className="w-4 aspect-square" />
            <span className="text-xs">reply</span>
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
