"use client";
import React, { useEffect } from "react";
import { TransitionParent } from "@/lib/utils/transition";
import Image from "next/image";
import GroupFaces from "@/public/images/group-faces.png";
import ShootingArrow from "@/public/images/shootingArrow.png";
import Vkm from "@/public/images/vkm.png";
import vhdo from "@/public/images/vhdo.png";
import Clip from "@/public/images/about-clip-path.png";
import Goal1 from "@/public/images/creative.png";
import Goal2 from "@/public/images/goal-2.png";
import Goal3 from "@/public/images/abt-2.png";
import Goal4 from "@/public/images/goal-4.png";


const AboutPage = () => {
  return (
    <TransitionParent>
      <section className=" w-[95%] mx-auto flex flex-col items-center justify-start gap-y-[4rem] min-h-screen relative">
        <div className="w-full bg-primary h-[23rem] rounded-[2rem] flex items-center justify-center relative overflow-hidden">
          <span className=" max-w-2xl flex flex-col items-center justify-start space-y-4 text-center relative z-10">
            <h1 className="text-3xl md:text-5xl font-bold font-sora text-primaryWhite">
              About Women Hub
            </h1>
            <p className="text-base font-quickSand font-light w-2/3 mx-auto text-primaryWhite">
              A site to find all Nigeria based women organizations, creating
              awareness for general public
            </p>
          </span>
          <Image
            src={GroupFaces}
            alt="group Of Women"
            className="absolute bottom-0 left-0 w-4/5 md:w-1/3 aspect-auto"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 p-4 gap-10 items-center lg:mt-0 md:mt-[4rem] ">
          <div className="flex flex-col md:mt-[-5rem] mt-0 space-y-6 w-full">
            <span className="w-full md:w-3/4 flex flex-col space-y-2">
              <h3 className="text-lg md:text-3xl font-bold text-primary font-sora">
                Genesis: The Women Hub Story{" "}
              </h3>{" "}
              <div className="w-[6rem] h-1 rounded bg-btnWarning" />
            </span>
            <p className="text-base md:text-lg w-full font-quickSand">
              During the 1st Gender and Inclusion Summit on November 16, 2022, a
              critical gap in information on women empowerment programs was
              revealed. Participants raised poignant questions concerning women
              empowerment programs. 
            </p>
            <p className="text-base md:text-lg w-full font-quickSand">
              Shockingly, the existence of implemented
              projects was doubted, and the effectiveness of communication
              strategies from the government, development partners, and civil
              society was brought into question. This led to the birth of Women
              Hub, envisioned as a transformative initiative to fill this
              crucial void, accessible to all.
            </p>
          </div>
          <div className="p-0 lg:p-12">
            <Image
              src={ShootingArrow}
              alt="arrow"
              className="w-full object-contain"
            />
          </div>
        </div>
         

        <div  className="w-screen h-[180vh] md:h-[130vh] flex md:items-start items-center justify-center clip-svg relative top-0 left-0 py-16 overflow-x-hidden" >
    
            <Image src={Clip} alt="" layout="fill" />
      
          <div className="w-full relative flex flex-col gap-5 items-center justify-center">
            <h5 className="text-[32px] mt-4 font-semibold text-primary">Our Goals</h5>
            <div className="w-full md:flex items-center justify-between md:absolute top-1/2 inset-x-0">
              <div className="md:w-1/3 text-center flex flex-col items-center justify-center gap-4">
                <Image src={Goal1} alt="" layout="intrinsic" className="w-[9rem] aspect-square"/>
                <h4 className="text-lg md:text-xl font-semibold text-primary">Information Accessiblity</h4>
                <p className="w-2/3 text-gray-200 text-sm">Providing easy and  accessible information on women empowerment programs.</p>
              </div>
              <div className="md:w-1/3 text-center flex flex-col items-center justify-center gap-4">
                <Image src={Goal2} alt="" layout="intrinsic" className="w-[9rem] aspect-square"/>
                <h4 className="text-lg md:text-xl font-semibold text-primary">Advocacy and Awareness</h4>
                <p className="w-2/3 text-gray-200 text-sm">Raise awareness and advocate by serving as a catalyst for informed conversations & sharing success stories</p>
              </div>
            </div>

            <div className="h-full flex flex-col items-center gap-10 md:absolute inset-y-[8rem] justify-between">
              <div className="w-1/2 text-center flex flex-col items-center justify-center gap-4">
                <Image src={Goal3} alt="" layout="intrinsic" className="w-[9rem] aspect-square"/>
                <h4 className="text-lg md:text-xl font-semibold text-primary">Community Engagement </h4>
                <p className="w-full text-gray-200 text-sm">Foster a vibrant and engaged community by providing a platform for productive interaction</p>
              </div>
              <div className="w-1/2 text-center flex flex-col items-center justify-center gap-4">
                <Image src={Goal4} alt="" layout="intrinsic" className="w-[9rem] aspect-square"/>
                <h4 className="text-lg md:text-xl font-semibold text-primary">Centralized Resource Hub</h4>
                <p className="w-full text-gray-200 text-sm">Establish Women Hub as the go-to centralized resource hub, consolidate women empowerment resources for easy access.</p>
              </div>
            </div>
          </div>
    
      </div>

        <div className="flex flex-col  py-[1rem] space-y-6 w-full">
          <span className="w-full md:w-3/4 flex flex-col space-y-2">
            <h3 className="text-lg md:text-3xl font-bold text-primary">
              Patnership{" "}
            </h3>{" "}
            <div className="w-[6rem] h-1 rounded bg-btnWarning" />
          </span>
          <div className="w-full md:w-1/2 flex items-center justify-start gap-2">
            <Image
              src={Vkm}
              alt="Vkm logo"
              className=" md:h-[5rem] h-10 object-contain"
            />
            <Image
              src={vhdo}
              alt="vhdo logo"
              className=" md:h-[5rem] h-10 object-contain"
            />
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </section>
    </TransitionParent>
  );
};

export default AboutPage;
