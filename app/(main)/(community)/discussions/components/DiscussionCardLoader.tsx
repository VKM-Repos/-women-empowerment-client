import React from "react";

const DiscussionCardLoader: React.FC<{}> = ({}) => {

  return (

      <div className="w-full grid grid-cols-8 border drop-shadow-sm gap-4 border-gray-500 rounded-[0.8rem] p-4 md:p-6 items-center">
        <div className="w-full aspect-square rounded-full border bg-gray-500 animate-pulse" />

        <div className="col-span-6 lg:col-span-7 flex flex-col items-start justify-start gap-1">
          <span className="w-full h-4 bg-gray-400  animate-pulse"></span>
          <span className="w-full flex flex-col gap-4 items-start">
            <p className="w-1/2 h-2 bg-gray-400  animate-pulse"></p>
            <p className="w-2/3 h-2 bg-gray-400  animate-pulse"></p>
          
          </span>
          <span className="w-full flex items-center justify-between text-base">
            <p className="w-1/4 h-2 bg-gray-400  animate-pulse"></p>
            <p className="w-1/4 h-2 bg-gray-400  animate-pulse"></p>
          </span>
        </div>
      </div>

  );
};

export default DiscussionCardLoader;
