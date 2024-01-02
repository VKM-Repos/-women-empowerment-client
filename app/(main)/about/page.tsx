"use client";
import React, { useEffect } from "react";
import { TransitionParent } from "@/lib/utils/transition";
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
    <TransitionParent>
      <section className="w-[95vw] mx-auto flex flex-col items-center justify-start space-y-[5rem] py-[0.5rem] pb-[3rem] min-h-screen ">
        <div className="w-full bg-primary h-[20rem] rounded-[2rem] flex items-start pt-[3rem] justify-center relative overflow-hidden">
          <span className=" max-w-2xl flex flex-col items-center justify-start space-y-4 text-center relative z-10">
            <h1 className="text-3xl md:text-5xl font-bold text-primaryWhite">About Women Hub</h1>
            <p className="text-base font-light w-2/3 mx-auto text-primaryWhite">A site to find all Nigeria based women organizations, creating awareness for general public</p>
          </span>
          <Image src={GroupFaces} alt="group Of Women" className="absolute bottom-0 left-0 w-4/5 md:w-1/3 aspect-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 p-4 gap-10 items-center">
          <div className="flex flex-col md:mt-[-5rem] mt-0 space-y-6 w-full">
            <span className="w-full md:w-3/4 flex flex-col space-y-2"><h3 className="text-lg md:text-3xl font-bold text-primary">Our statement of purpose </h3> <div className="w-[6rem] h-1 rounded bg-btnWarning" /></span>
            <p className="text-base md:text-lg w-full font-light">Create an environment that values Nigerian women&apos;s organizations. We need to raise awareness in order to address this problem, and one way we can do this is by developing a website that includes all organization. According to our study, there is currently no website that enables the general public to learn about or other women&apos;s organizations.</p>
            <p className="text-base md:text-lg w-full font-light">With this endeavor, it provides other women&apos;s organizations with the recognition they need to accomplish their objectives.</p>
          </div>
          <div className="">
            <Image src={ShootingArrow} alt="arrow" className="w-full object-contain" />
          </div>
        </div>


        <div className="flex flex-col  py-[1rem] space-y-6 w-full">
          <span className="w-full md:w-3/4 flex flex-col space-y-2"><h3 className="text-lg md:text-3xl font-bold text-primary">Patnership </h3> <div className="w-[6rem] h-1 rounded bg-btnWarning" /></span>
          <div className="w-full md:w-1/2 flex items-center justify-start gap-2">
            <Image src={Vkm} alt="Vkm logo" className=" md:h-[5rem] h-10 object-contain" />
            <Image src={vhdo} alt="vhdo logo" className=" md:h-[5rem] h-10 object-contain" />
            {/* <Image src={Woclef} alt="woclef logo" className=" md:h-[5rem] h-10 object-contain" />
                <Image src={ncws} alt="ncws logo" className=" md:h-[5rem] h-10 object-contain" />
                <Image src={Wtn} alt="wtn logo" className=" md:h-[5rem] h-10 object-contain" /> */}
          </div>
        </div>
        <br /><br /><br /><br /><br /><br />
      </section>
    </TransitionParent>
  );
};

export default AboutPage;
