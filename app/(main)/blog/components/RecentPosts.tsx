import React from 'react';
import PostCardVertical from './PostCardVertical';
import PostCardHorizontal from './PostCardHorizontal';

type Props = {
  data: any;
};

const RecentPosts = ({ data }: Props) => {
  return (
    <section className="w-full space-y-2">
      <h2 className="lg:text-large text-base font-semibold">
        Recent blog posts
      </h2>
      <div className="grid w-full grid-cols-1 gap-12 md:grid-cols-2">
        <div className="col-span-1">
          <PostCardVertical data={data[0]} />
        </div>
        <div className="col-span-1 w-full space-y-12">
          <PostCardHorizontal data={data[1]} />
          <PostCardHorizontal data={data[2]} />
        </div>
      </div>
    </section>
  );
};

export default RecentPosts;
