"use client"
import { TransitionParent } from "@/lib/utils/transition";
import Image from "next/image";
import React from "react";
import CallBannerDesktop from "@/public/images/call-banner-resized.jpg";
import CallBannerMobile from "@/public/images/call-banner-mobile.png";
import IdeaImg from "@/public/images/ideas-image.jpg";
import PencilImg from "@/public/images/pencil-image.png";
import ClockImg from "@/public/images/clock-image.png";
import PencilMobile from "@/public/images/pencil-mobile.png";
import ClockMobile from "@/public/images/clock-mobile.png";
import Pointing from "@/public/images/pointing-image.png";
import PointMobile from "@/public/images/pointing-mobile.png";
import { guidelines, notes, purpose, themes_of_interest } from "./utils";


const CallForArticlesPage = () => {
    return (
        <TransitionParent className="w-full cursor-default">
            <section className="w-full relative flex flex-col gap-10 font-sora">
                <header className="w-full max-w-[90%] mx-auto">
                    <Image 
                        layout="responsive"
                        src={CallBannerDesktop}
                        alt="call banner"
                        className="hidden md:block"/>
                    <Image 
                        layout="responsive"
                        src={CallBannerMobile}
                        alt="call banner"
                        className="md:hidden block"/>
                </header>
                <div className="w-full relative max-w-[85%] flex flex-col gap-10 mx-auto">
                    
                    <div className="flex flex-col gap-3 justify-center relative">
                        <h3 className="font-sora font-semibold text-primary text-2xl md:text-4xl">About the WomenHub Call for Articles</h3>
                        <p className="font-quickSand text-xs md:text-lg text-[#65655E]">The Women Hub serves as a centralized resource center and melting pot for diverse women’s issues. It is a platform for informed conversations, storytelling, and learning. We aim to amplify voices, share transformative stories, and drive impactful change for women globally."</p>
                    </div>
                    <div className="flex flex-col gap-3.5 justify-center relative">
                        <h3 className="font-sora font-semibold text-primary text-2xl md:text-4xl">Themes of Interest</h3>
                        <ul className="list-disc mx-6 font-quickSand">
                            {themes_of_interest.map((theme) => (
                                <li className="text-xs md:text-lg">{theme}</li>
                            ))}

                        </ul>
                        <div className="absolute w-[75%] right-[-55%] top-[-10%] md:right-[-15%] md:top-[15%]">
                            <Image src={PencilImg} alt="" className="hidden md:block"/>
                            <Image src={PencilMobile} alt="" className="block md:hidden"/>
                            <div className="absolute right-[10%]">
                                <Image src={IdeaImg} alt="" />
                            </div>
                        </div>
                        <div className="absolute bottom-[5%] left-[-10%]">
                            <Image src={ClockImg} alt="" className="hidden md:block"/>
                            <Image src={ClockMobile} alt="" className="block md:hidden"/>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 justify-center relative mb-6">
                        <h3 className="font-sora font-semibold text-primary text-2xl md:text-4xl">Submission and Guidelines</h3>
                        <ul className="font-quickSand">
                            {guidelines.map((section, index) => {
                               const [header, items] = Object.entries(section)[0];
                               return (
                                <div key={index}>
                                    <p className="font-quickSand text-xs md:text-lg">{header}</p>
                                    <ul className="list-disc mx-6">
                                        {items.map((item: any, idx: any) => (
                                        <li key={idx} className="text-xs md:text-lg">
                                            {header === "Submission Process"  && item.includes('social@womenhub.org') ? (
                                                item.split('social@womenhub.org').map((part: any, idx: any) => (
                                                <>
                                                    {part}
                                                    {idx === 0 ? (
                                                    <a className="text-blue-800 underline" href="mailto:articles@womenhub.org">articles@womenhub.org</a>
                                                    ) : null}
                                                </>
                                                ))
                                            ) : (
                                                item
                                            )}
                                        </li>
                                    ))}
                                    </ul>
                                </div>
                               )
                            })}
                        </ul>
                    </div>
                    <div className="flex flex-col gap-3 justify-center">
                        <h3 className="font-sora font-semibold text-primary text-2xl md:text-4xl">Why write for Women Hub?</h3>
                        <ul className="list-disc mx-6 font-quickSand">
                            {purpose.map((purp, index) => (
                                <li key={index} className="text-xs md:text-lg">{purp}</li>
                            ))}  
                        </ul>
                    </div>
                    <div className="flex flex-col gap-3 justify-center relative">
                        <div className="absolute top-[-20%] left-[80%] md:top-[-35%] md:left-[30%]">
                            <Image src={Pointing} alt="" className="hidden md:block"/>
                            <Image src={PointMobile} alt="" className="block md:hidden"/>
                        </div>
                        <h3 className="font-sora font-semibold text-primary text-2xl md:text-4xl">Additional Notes</h3>
                        <ul className="list-disc mx-5 font-quickSand">
                            {notes.map((note, index) => (
                                <li key={index} className="text-xs md:text-lg">{note}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="text-btnWarning  font-medium mb-20 md:mb-48 font-sora">
                        <h3 className="text-base md:text-2xl font-semibold font-sora">Terms and Conditions</h3>
                        <ul className="list-disc mx-5 text-xs italic font-sora">
                            <li>Women Hub reserves the right to select articles to feature.</li>
                            <li>All information captured are protected see <a href="" className="text-primary underline">privacy policy</a></li>
                        </ul>
                    </div> 
                </div> 
            </section>
        </TransitionParent>
    )
}

export default CallForArticlesPage;