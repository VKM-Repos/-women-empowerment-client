"use client";
import React from "react";

export const ProjectCardLoader = () => {
  return (
    <div className="justify-center items-stretch bg-gray-500/50 animate-pulse flex-col space-y-4 lg:min-w-[302px] min-w-[250px] h-[420px] lg:h-[460px] shadow-lg pt-6 px-6 rounded-3xl">
      <div>
        <div className=" bg-slate-200 h-[60%] overflow-hidden flex items-center justify-center relative">
          <div className="bg-gradient-to-t from-primaryBlack/20 to-transparent absolute inset-0 "></div>
          <div className=" object-contain object-center h-[20rem] overflow-hidden max-md:mr-0.5" />
          <span className="w-3/4 h-1.5 bg-gray-400 p-1 px-2 rounded-md absolute bottom-5 left-2"></span>
        </div>
        <div className="w-full flex flex-col gap-2 h-[40%] py-4 p-2">
          <span className="w-2/4 h-2 bg-gray-400"></span>
          <span className="w-3/4 h-1.5 bg-gray-400"></span>
          <p className="w-3/4 h-1.5 bg-gray-400"></p>
          <p className="w-full h-1.5 bg-gray-400"></p>
          <p className="w-3/4 h-1.5 bg-gray-400"></p>
          <div className="w-full grid grid-cols-8 items-center">
            <span className="col-span-2 md:col-span-1">
              <div className="w-full md:w-2/3  aspect-square rounded-full object-contain bg-gray-400" />
            </span>
            <span className="w-3/4 h-2 bg-gray-400"></span>
          </div>
        </div>
      </div>
    </div>
  );
};
