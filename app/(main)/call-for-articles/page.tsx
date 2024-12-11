"use client"
import { TransitionParent } from "@/lib/utils/transition";

import Image from "next/image";
import React from "react";
import CallBanner from "@/public/images/call-image.png"
import IdeaImg from "@/public/images/idea-image.png"
import PencilImg from "@/public/images/pencil-image.png"
import ClockImg from "@/public/images/clock-image.png"
import YenImg from "@/public/images/yen-image.png"
import Pointing from "@/public/images/pointing-image.png"
import { guidelines, notes, purpose, themes_of_interest } from "./utils";


const CallForArticlesPage = () => {
    return (
        <TransitionParent className="w-full cursor-default">
            <section className="w-full relative flex flex-col gap-10 font-sora">
                <header className="w-full max-w-[90%] mx-auto">
                    <Image 
                        layout="responsive"
                        src={CallBanner}
                        alt="call banner"/>
                </header>
                <div className="w-full relative max-w-[85%] flex flex-col gap-10 mx-auto">
                    
                    <div className="flex flex-col gap-3 justify-center relative">
                        <div className="absolute right-0 top-0">
                            <Image src={IdeaImg} alt=""/>
                        </div>
                        <h3 className="font-sora font-semibold text-[#106840] text-4xl">About the WomenHub Call for Writers</h3>
                        <p className="font-quickSand text-lg text-[#65655E]">The Women Hub serves as a centralized resource center and melting pot for diverse women’s issues. It is a platform for informed conversations, storytelling, and learning. We aim to amplify voices, share transformative stories, and drive impactful change for women globally."</p>
                    </div>
                    <div className="flex flex-col gap-3.5 justify-center relative">
                        <h3 className="font-sora font-semibold text-[#106840] text-4xl">Themes of Interest</h3>
                        <ul className="list-disc mx-6 font-quickSand">
                            {themes_of_interest.map((theme) => (
                                <li className="text-lg">{theme}</li>
                            ))}

                        </ul>
                        <div className="absolute w-[75%] right-[-15%] top-[15%]">
                            <Image src={PencilImg} alt="" />
                            <div className="absolute right-[10%]">
                                <Image src={YenImg} alt="" />
                            </div>
                        </div>
                        <div className="absolute bottom-[5%] left-[-10%]">
                            <Image src={ClockImg} alt="" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 justify-center relative mb-6">
                        <h3 className="font-sora font-semibold text-[#106840] text-4xl">Submission and Guidelines</h3>
                        <ul className="font-quickSand">
                            {guidelines.map((section, index) => {
                               const [header, items] = Object.entries(section)[0];
                               return (
                                <div key={index}>
                                    <p className="font-quickSand text-lg">{header}</p>
                                    <ul className="list-disc mx-6">
                                        {items.map((item: string[], index: number) => (
                                            <li key={index} className="text-lg">{item}</li>
                                        ))}
                                    </ul>
                                </div>
                               )
                            })}
                        </ul>
                    </div>
                    <div className="flex flex-col gap-3 justify-center">
                        <h3 className="font-sora font-semibold text-[#106840] text-4xl">Why write for Women Hub?</h3>
                        <ul className="list-disc mx-6 font-quickSand">
                            {purpose.map((purp, index) => (
                                <li key={index} className="text-lg">{purp}</li>
                            ))}  
                        </ul>
                    </div>
                    <div className="flex flex-col gap-3 justify-center relative">
                        <div className="absolute top-[-20%] left-[60%] md:top-[-35%] md:left-[30%]">
                            <Image src={Pointing} alt="" />
                        </div>
                        <h3 className="font-sora font-semibold text-[#106840] text-4xl">Additional Notes</h3>
                        <ul className="list-disc mx-5 font-quickSand">
                            {notes.map((note, index) => (
                                <li key={index} className="text-lg">{note}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="text-center mt-10 mb-20 md:mb-48">
                        <h3 className="text-2xl font-montserrat text-[#FF7400] font-medium italic">Women Hub reserves the right to select articles to feature.</h3>
                    </div> 
                </div> 
            </section>
        </TransitionParent>
    )
}

export default CallForArticlesPage;