import React, { useState } from "react";
import Image from "next/image";
import Icon from "@/components/Common/Icons/Icon";
import { Comment, Discussion } from "@/lib/types/discussion.types";
import useRelativeTime from "@/lib/utils/useRelativeTime";


const CommentCard: React.FC<{
  comment: Comment;
}> = ({ comment }) => {


  const formattedDate = useRelativeTime(comment.createdAt);

  return (
    <div key={comment.id} className="w-full grid grid-cols-8 gap-2 p-2">
      <Image
        src={comment.createdBy?.photoUrl || "https://placehold.co/300x300/png"}
        alt={`discussion post`}
        width={100}
        height={100}
        className="col-span-1 h-full aspect-square rounded-full object-contain"
      />
      <div className="col-span-7 flex flex-col items-start justify-center gap-1">
        <p className="text-sm font-sora text-gray-100">
          {comment.content}
        </p>
        <div className="w-full flex items-center justify-start gap-4 font-semibold">
          <p className="text-xs font-quickSand text-gray-400">
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
