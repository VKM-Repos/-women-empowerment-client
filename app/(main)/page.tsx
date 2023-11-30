"use client";
import React, { useEffect } from "react";
import doddles from '@/public/images/img_circledoodle.png'
import maginify from '@/public/images/img_search.svg'
import womenInPower from '@/public/images/img_womeninpower1.svg'
const LandingPage = () => {

  return (
    <>
      <div className="lg:-ml-[84.7%] z-10 lg:-mt-10">
        <img src={doddles.src} alt="" className="lg:w-[208px] lg:max-w-w-[208px]" />
      </div>
      <div className="bg-primary w-[95.2%] -mt-[170px] rounded-xl flex justify-between items-center ">
        <div className="flex flex-col gap-4 pl-[160px]">
          <p className="text-4xl font-semibold text-white-100">Together we are <i className="text-secondary">Able</i></p>
          <p className="text-white-100">
            Discover and learn about women organizations with only one click.
          </p>
          <div className="flex justify-center items-center">
            <input type="text" placeholder="search for organization" className="lg:w-[495px] rounded-tl-md rounded-bl-md px-5 py-3" />
            <button className="bg-btnWarning px-3 py-[10.5px] rounded-br-md rounded-tr-md"><img src={maginify.src} alt="" /></button>
          </div>
          <div className="flex gap-4 w-full">
            <p className="text-white-100">Search for:</p>
            <button className="bg-white-200 px-3 py-1 rounded-sm text-sm">Tech</button>
            <button className="bg-white-200 px-3 py-1 rounded-sm text-sm">Gender Equity</button>
            <button className="bg-white-200 px-3 py-1 rounded-sm text-sm">Sensitization</button>
            <button className="bg-white-200 px-3 py-1 rounded-sm text-sm">Feminism</button>
          </div>
        </div>
        <div className="-mr-[55px] rounded-br-xl">
          <img src={womenInPower.src} className="w-[650px] rounded-br-xl" alt="" />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
