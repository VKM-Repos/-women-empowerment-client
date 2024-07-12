import React from 'react';

interface DiscussionContentProps {
  title: string;
  content: string;
  formattedDate: string;
  commentsCount: number;
}

const DiscussionContent: React.FC<DiscussionContentProps> = ({
  title,
  content,
  formattedDate,
  commentsCount,
}) => {
  return (
    <div className='space-y-2'>
      <h3 className="font-sora text-primaryBlack text-lg font-bold md:text-2xl">
        {title}
      </h3>
      <p className="font-quickSand text-gray-100 text-base font-semibold">
        {content}
      </p>
      <div className="flex items-center justify-between">
        <p className="font-quickSand text-gray-400 text-sm font-semibold">
          {formattedDate}
        </p>
        <p className="font-light font-sora text-primary flex items-center justify-center gap-1 text-sm">
          <span>{commentsCount} </span>
          <span>{commentsCount <= 1 ? 'comment' : 'comments'}</span>
        </p>
      </div>
    </div>
  );
};

export default DiscussionContent;
