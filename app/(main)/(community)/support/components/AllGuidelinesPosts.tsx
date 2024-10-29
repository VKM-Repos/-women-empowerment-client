import React from "react";
import GuidelineCard from "./GuidelineCard";

type Props = {
  data: any;
};

const AllGuidelinesPosts = ({ data }: Props) => {
  return (
    <section className="w-full space-y-8">
      {/* <h2 className="lg:text-large text-base font-semibold">All posts</h2> */}
      <div className="grid grid-cols-1 gap-[5rem] md:grid-cols-2 lg:grid-cols-3">
        {data.map((post: any) => (
          <GuidelineCard key={post.id} data={post} />
        ))}
      </div>
    </section>
  );
};

export default AllGuidelinesPosts;
