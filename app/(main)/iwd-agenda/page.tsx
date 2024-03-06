'use client'
import React from "react";
import { TransitionParent } from "@/lib/utils/transition";
import Image from "next/image";
import WomenHubLogo from "@/public/images/wh-logo.png";
import Fmwa from "@/public/images/fmwa.png";
import Brochure1 from "@/public/images/Women hub brochure front page 1.png";
import Brochure2 from "@/public/images/Women hub brochure front page 2.png";
import Brochure3 from "@/public/images/Women hub brochure front page 3.png";
import Brochure4 from "@/public/images/Women hub brochure front page 4.png";
import Brochure5 from "@/public/images/Women hub brochure front page 5.png";
import Brochure6 from "@/public/images/Women hub brochure front page 6.png";



const IwdAgendaPage = () => {




  return (
    <section className="w-screen flex flex-col items-center justify-start space-y-[2rem] min-h-screen">
      <TransitionParent className="w-[90%] mx-auto">
        <div className="w-[90%] mx-auto grid grid-cols-8 gap-5 justify-items-stretch">
          <span className="col-span-1">
            <Image src={Fmwa} alt="fmwa-logo" width={150} height={150} />
          </span>
          <span className="col-span-6 flex flex-col gap-1 items-start justify-center">
            <h4 className="text-base lg:text-2xl font-bold font-quickSand ">Celebrate</h4>
            <span className="flex flex-col lg:flex-row items-start lg:items-center justify-start gap-2 lg:whitespace-nowrap"><h1 className="text-sm lg:text-3xl italic text-[#6629B7] font-bold">International Women&apos;s Day</h1> <h4 className="text-sm lg:text-xl font-sora font-semibold capitalize">with Women Hub</h4></span>
            <h5 className="font-quickSand text-sm lg:text-base"><span className="text-primary font-quickSand font-bold">VHDO</span> proudly partnering with the <span className="text-primary font-quickSand font-bold">Federal Ministry of Women Affairs</span> </h5>
          </span>
          <span className="col-span-1">
            <Image src={WomenHubLogo} alt="womenhub-logo" width={150} height={150} />
          </span>
        </div>

        <h2 className="w-[80%] italic font-bold font-sora text-base lg:text-2xl mt-[4rem]">8th March, 2024 IWD Agenda</h2>

        <div className="w-[90%] my-[4rem] mx-auto grid grid-cols-2  gap-0 items-center justify-items-stretch">
          <span className="col-span-1">
            <Image src={Brochure1} alt="fmwa-logo" layout="responsive" />
          </span>
          <span className="col-span-1">
            <Image src={Brochure2} alt="fmwa-logo" layout="responsive" />
          </span>
          <span className="col-span-1">
            <Image src={Brochure3} alt="fmwa-logo" layout="responsive" />
          </span>
          <span className="col-span-1">
            <Image src={Brochure4} alt="fmwa-logo" layout="responsive" />
          </span>
          <span className="col-span-1">
            <Image src={Brochure5} alt="fmwa-logo" layout="responsive" />
          </span>
          <span className="col-span-1">
            <Image src={Brochure6} alt="fmwa-logo" layout="responsive" />
          </span>

        </div>

      </TransitionParent>
    </section>
  );
};

export default IwdAgendaPage;
