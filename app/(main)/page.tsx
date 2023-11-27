"use client";
import React, { useEffect } from "react";
import { TransitionElement, TransitionStart } from "@/lib/utils/transition";
import heroImg from '@/public/img/hero-img.svg'


const LandingPage = () => {

  return (
    <>
      <div className="bg-primary w-[92.5%] rounded-md flex justify-center items-center">
        <div className="flex flex-col gap-5 justify-center">
          <p className="text-3xl font-[400] text-white-100">Together we are <i className="text-secondary">Able</i> </p>
          <p className="text-sm text-white-100">Discover and learn about women organizations with only one click.</p>
          <div className="flex items-center">
            <input type="text" className="px-2 py-3 focus:outline-none rounded-tl-md rounded-bl-md w-[400px]" placeholder="search for organization" />
            <button className="bg-btnWarning px-3 py-[10.5px] focus:outline-none rounded-tr-md rounded-br-md">
              <svg width="26" height="27" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.9322 17.4154H17.7357L17.3116 17.0064C18.7959 15.2798 19.6895 13.0382 19.6895 10.5998C19.6895 5.16243 15.2821 0.755005 9.84477 0.755005C4.40743 0.755005 0 5.16243 0 10.5998C0 16.0371 4.40743 20.4445 9.84477 20.4445C12.2832 20.4445 14.5248 19.5509 16.2514 18.0667L16.6604 18.4907V19.6873L24.2333 27.245L26.49 24.9883L18.9322 17.4154ZM9.84477 17.4154C6.07346 17.4154 3.02916 14.3711 3.02916 10.5998C3.02916 6.82847 6.07346 3.78416 9.84477 3.78416C13.6161 3.78416 16.6604 6.82847 16.6604 10.5998C16.6604 14.3711 13.6161 17.4154 9.84477 17.4154Z" fill="white" />
              </svg>
            </button>
          </div>
          <div className="flex gap-5 text-white-100">
            Search for:
            <div className="flex gap-5 text-sm">
              <button className="bg-secondaryOffWhite text-black-100 text-xs px-1 py-1 rounded-md">Tech</button>
              <button className="bg-secondaryOffWhite text-black-100 text-xs px-1 py-1 rounded-md">Gender Equity</button>
              <button className="bg-secondaryOffWhite text-black-100 text-xs px-1 py-1 rounded-md">Sensitization</button>
              <button className="bg-secondaryOffWhite text-black-100 text-xs px-1 py-1 rounded-md">Feminism</button>
            </div>
          </div>
        </div>
        <div>
          <img src={heroImg.src} className="w-[500px]" alt="women in tech" />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
