"use client";
import React, { useEffect } from "react";
import { TransitionElement, TransitionStart } from "@/lib/utils/transition";
import Image from "next/image";
import GroupFaces from "@/public/images/group-faces.png";
import ShootingArrow from "@/public/images/shootingArrow.png";
import Vkm from "@/public/images/vkm.png";
import Woclef from "@/public/images/woclef.png";
import Wtn from "@/public/images/wtn.png";
import vhdo from "@/public/images/vhdo.png";
import ncws from "@/public/images/ncws.png";



const AboutPage = () => {

  return (
    <TransitionElement>
      <section className="w-[95%] mx-auto flex flex-col items-center justify-start space-y-[5rem] py-[2rem] min-h-screen ">
        <div className="w-full bg-primary h-[35vh] md:h-[40vh] rounded-[2rem] flex items-center justify-center relative overflow-hidden">
         <span className=" max-w-2xl flex flex-col items-center justify-center space-y-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-primaryWhite">About Women-ally</h1>
          <p className="text-base font-light w-full md:w-2/3 mx-auto text-primaryWhite">A site to find all Nigeria based women organizations, creating awareness for general public</p>
         </span>
         <Image src={GroupFaces} alt="group Of Women" className="absolute bottom-0 left-0 w-1/3 aspect-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 p-4 gap-10 items-center">
          <div className="flex flex-col md:mt-[-5rem] mt-0 space-y-6 w-full">
            <span className="w-full md:w-3/4 flex flex-col space-y-2"><h3 className="text-lg md:text-3xl font-bold text-primary">Our statement of purpose </h3> <div className="w-[6rem] h-1 rounded bg-btnWarning"/></span>
            <p className="text-base md:text-lg w-full font-light">Create an environment that values Nigerian women&apos;s organizations. We need to raise awareness in order to address this problem, and one way we can do this is by developing a website that includes all organization. According to our study, there is currently no website that enables the general public to learn about or other women&apos;s organizations.</p>
            <p className="text-base md:text-lg w-full font-light">With this endeavor, it provides other women&apos;s organizations with the recognition they need to accomplish their objectives.</p>
          </div>
          <div className="">
            <Image src={ShootingArrow} alt="group Of Women" className="w-full object-contain" />
          </div>
        </div>

        
          <div className="flex flex-col md:mt-[-5rem] mt-0 space-y-6 w-full">
            <span className="w-full md:w-3/4 flex flex-col space-y-2"><h3 className="text-lg md:text-3xl font-bold text-primary">Patnership </h3> <div className="w-[6rem] h-1 rounded bg-btnWarning"/></span>
            <div className="w-full md:w-1/2 flex items-center justify-start gap-10">
                <Image src={Vkm} alt="Vkm logo" className=" h-[5rem] object-contain" />
                <Image src={vhdo} alt="vhdo logo" className=" h-[5rem] object-contain" />
                <Image src={Woclef} alt="woclef logo" className=" h-[5rem] object-contain" />
                <Image src={ncws} alt="ncws logo" className=" h-[5rem] object-contain" />
                <Image src={Wtn} alt="wtn logo" className=" h-[5rem] object-contain" />
            </div>
          </div>
          
       

      </section>
    </TransitionElement>
  );
};

export default AboutPage;
