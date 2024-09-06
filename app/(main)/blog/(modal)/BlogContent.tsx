import React from 'react';

interface BlogContentProps {
  title: string;
  date: string;
  commentsCount: number;
}

const BlogContent: React.FC<BlogContentProps> = ({
  title,
  date,
  commentsCount,
}) => {
  return (
    <div className="w-full space-y-2">
      <h3 className="font-sora text-primaryBlack/80 text-lg font-bold md:text-2xl">
        {title}
      </h3>
      <div className="flex items-center justify-between">
        <p className="font-quickSand text-gray-300 text-sm">{date}</p>
        <p className="font-light font-sora text-primary flex items-center justify-center gap-1 text-sm">
          <span>{commentsCount} </span>
          <span>{commentsCount <= 1 ? 'comment' : 'comments'}</span>
        </p>
      </div>
    </div>
  );
};

export default BlogContent;
