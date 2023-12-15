"use client";
import React, { useEffect } from "react";
import doddles from '@/public/images/img_circledoodle.png'
import maginify from '@/public/images/img_search.svg'
import womenInPower from '@/public/images/img_womeninpower1.svg'
import { TransitionElement } from "@/lib/utils/transition";
import db from '@/data/db.json'
import { Organization } from "@/components/LandingPage/Organization";
import { Events } from "@/components/LandingPage/EventsCard";
import { News } from "@/components/LandingPage/News";
import ellipse from "@/public/images/ellipse.svg"
import { CommunityCard } from "@/components/LandingPage/CommunityCard";
import EventCard from "./(community)/discussions/components/EventCard";

const LandingPage = () => {
  return (
    <TransitionElement>
      <section className=" w-screen mx-auto flex flex-col items-center justify-start">
        <div className="lg:-ml-[90%] z-10 lg:-mt-[3%]">
          <img src={doddles.src} alt="" className="lg:w-[208px] lg:max-w-w-[208px]" />
        </div>
        <div className="bg-primary w-[95.2%] -mt-[170px] rounded-xl flex justify-between items-center ">
          <div className="flex flex-col gap-4 pl-[160px]">
            <h1 className="text-4xl font-sora font-bold text-white-100 ">Together we are <i className="text-secondary">Able</i></h1>
            <p className="text-white-100 font-quickSand font-light text-base">
              Discover and learn about women organizations with only one click.
            </p>
            <div className="flex justify-center items-center">
              <input type="text" placeholder="search for organization" className="lg:w-[495px] rounded-tl-md rounded-bl-md px-5 py-3 focus:outline-none" />
              <button className="bg-btnWarning px-3 py-[10.5px] rounded-br-md rounded-tr-md"><img src={maginify.src} alt="" /></button>
            </div>
            <div className="flex gap-4 w-full font-quickSand">
              <p className="text-white-100 text-base font-light">Search for:</p>
              <button className="bg-white-200 px-2 py-1 rounded-sm text-sm hover:bg-btnWarning hover:text-white-100">Tech</button>
              <button className="bg-white-200 px-2 py-1 rounded-sm text-sm hover:bg-btnWarning hover:text-white-100">Gender Equity</button>
              <button className="bg-white-200 px-2 py-1 rounded-sm text-sm hover:bg-btnWarning hover:text-white-100">Sensitization</button>
              <button className="bg-white-200 px-2 py-1 rounded-sm text-sm hover:bg-btnWarning hover:text-white-100">Feminism</button>
            </div>
          </div>
          <div className="-mr-[55px] rounded-br-xl">
            <img src={womenInPower.src} className="w-[650px] rounded-br-xl" alt="" />
          </div>
        </div>

        <div className="py-[2rem] w-full p-4 mx-auto flex gap-2 relative">
          <div className="w-4/6 flex flex-col py-4">
            <div
              className="text-orange-500 text-3xl font-sora font-bold items-stretch justify-center px-5 mx-5 py-2.5 border-b-neutral-200 border-b border-solid max-md:max-w-full mb-5">
              TOP ORGANIZATIONS
            </div>
            {/* Organization feeds */}
            <section className=" flex flex-col gap-10 px-5">
              {db.communities.length === 0 ? (
                <p className="no-result">No Organization found</p>
              ) : (
                <>
                  {db.communities.map((item: any) => (
                    <CommunityCard organization={item} key={item} />
                  ))}

                </>
              )}
              <button
                className="text-orange-500 text-base justify-center items-stretch border self-center w-[255px] max-w-full mt-8 p-5 rounded-lg border-solid border-orange-500 mb-10">
                SEE ALL ORGANIZATIONS
              </button>
            </section>
          </div>

          <div className="w-2/6 flex flex-col space-y-10  border-none py-[5rem] sticky top-0 h-screen overflow-y-scroll scrollable-section ">
            <aside className="w-full p-6 rounded-[1.5rem]">
              <div className="text-orange-500 text-3xl font-bold items-stretch self-stretch justify-center px-5 py-2.5 border-b-neutral-200 border-b border-solid lg:-mt-[86.5px]">
                EVENTS
              </div>

              <section className="flex flex-col gap-[2.5rem]  py-12">
                {db.events.map(event => (
                  <EventCard key={event.id} event={event} />
                ))}
                <button
                  className="text-orange-500 text-base justify-center items-stretch border self-center w-[207px] max-w-full mt-6 p-5 rounded-lg border-solid border-orange-500">
                  SEE MORE EVENTS
                </button>
              </section>
            </aside>
            <aside className="w-full p-6 rounded-[1.5rem]">
              <div
                className="text-orange-500 text-3xl font-bold items-stretch self-stretch justify-center px-5 py-2.5 border-b-neutral-200 border-b border-solid -mt-[50px]">
                NEWS CENTER
              </div>
              <section className="flex flex-col gap-[0.5rem] py-8">
                {
                  db.news.map(item => (
                    <div key={item.id} className="items-stretch self-stretch flex flex-col px-5 py-2.5">
                      <div className="flex justify-between gap-4 items-start">
                        <div className="font-sora font-normal text-emerald-950 text-[20px] underline grow shrink basis-auto">
                          {item.heading}
                        </div>
                        <img loading="lazy"
                          srcSet={item.image}
                          className="aspect-square object-contain object-center w-[65px] overflow-hidden self-stretch shrink-0 max-w-full" />
                      </div>
                      <div className="font-quickSand text-zinc-600 text-xs mt-3">{item.length}</div>
                    </div>
                  ))
                }
                <button
                  className="text-orange-500 text-base justify-center items-stretch border shadow-sm self-center  max-w-full mt-10 p-5 rounded-lg border-solid border-orange-500 max-md:mt-10">
                  MORE FROM NEWS CENTER
                </button>
              </section>
            </aside>
          </div>

        </div>

        <div
          className="bg-[#F0EBD6] self-stretch z-[1] flex w-full flex-col mt-20 pt-12 px-16 max-md:max-w-full max-md:mt-10 max-md:px-5">
          <div
            className="font-sora text-green-800 text-5xl font-semibold max-w-[600px] self-center mt-9 max-md:max-w-full max-md:text-4xl">
            Community Discussions
          </div>
          <div
            className="text-black font-quickSand text-opacity-90 text-center text-base leading-6 self-center max-w-[736px] mt-3 max-md:max-w-full">
            A platform that seeks to help Women thrive in their own environment ,
            <br /> a free space to share with people who can relate, a community
            for all who want and ask for help.
          </div>
          <div className="self-stretch mt-11 max-md:max-w-full max-md:mt-10">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-3/12 max-md:w-full max-md:ml-0">
                <div
                  className="justify-center items-stretch bg-white flex grow flex-col w-full pt-6 pb-12 px-6 rounded-3xl max-md:mt-5 max-md:px-5">
                  <div className="justify-center items-stretch bg-slate-200 flex flex-col p-2.5">
                    <img loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/525b2f46-be25-4721-b43c-5cb642182b00?apiKey=12cdcbacd64a44978db653c66e993585&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/525b2f46-be25-4721-b43c-5cb642182b00?apiKey=12cdcbacd64a44978db653c66e993585&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/525b2f46-be25-4721-b43c-5cb642182b00?apiKey=12cdcbacd64a44978db653c66e993585&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/525b2f46-be25-4721-b43c-5cb642182b00?apiKey=12cdcbacd64a44978db653c66e993585&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/525b2f46-be25-4721-b43c-5cb642182b00?apiKey=12cdcbacd64a44978db653c66e993585&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/525b2f46-be25-4721-b43c-5cb642182b00?apiKey=12cdcbacd64a44978db653c66e993585&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/525b2f46-be25-4721-b43c-5cb642182b00?apiKey=12cdcbacd64a44978db653c66e993585&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/525b2f46-be25-4721-b43c-5cb642182b00?apiKey=12cdcbacd64a44978db653c66e993585&"
                      className="aspect-square object-contain object-center w-full overflow-hidden max-md:mr-0.5" />
                  </div>
                  <div className="text-green-800 font-sora text-2xl font-semibold leading-5 mt-5">
                    Sensitization
                  </div>
                  <div className="text-zinc-600 font-quickSand font-[400px] text-sm leading-7 tracking-tight mt-2.5 mb-4">
                    Women in power speaks louder that riots for our rights
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
                <div
                  className="justify-center items-stretch bg-white flex grow flex-col w-full pt-6 pb-11 px-6 rounded-3xl max-md:mt-5 max-md:px-5">
                  <div className="justify-center items-stretch bg-slate-200 flex flex-col px-2.5 py-2.5">
                    <img loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/afedf1c5-8a5d-487a-8a46-f5cde8be68a5?apiKey=12cdcbacd64a44978db653c66e993585&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/afedf1c5-8a5d-487a-8a46-f5cde8be68a5?apiKey=12cdcbacd64a44978db653c66e993585&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/afedf1c5-8a5d-487a-8a46-f5cde8be68a5?apiKey=12cdcbacd64a44978db653c66e993585&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/afedf1c5-8a5d-487a-8a46-f5cde8be68a5?apiKey=12cdcbacd64a44978db653c66e993585&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/afedf1c5-8a5d-487a-8a46-f5cde8be68a5?apiKey=12cdcbacd64a44978db653c66e993585&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/afedf1c5-8a5d-487a-8a46-f5cde8be68a5?apiKey=12cdcbacd64a44978db653c66e993585&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/afedf1c5-8a5d-487a-8a46-f5cde8be68a5?apiKey=12cdcbacd64a44978db653c66e993585&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/afedf1c5-8a5d-487a-8a46-f5cde8be68a5?apiKey=12cdcbacd64a44978db653c66e993585&"
                      className="aspect-[1.01] object-contain object-center w-full overflow-hidden max-md:mr-0.5" />
                  </div>
                  <div className="text-green-800 font-sora text-2xl font-semibold leading-5 mt-5">
                    Health
                  </div>
                  <div className="text-zinc-600 font-quickSand font-[400px] text-sm leading-7 tracking-tight mt-2.5">
                    Tips women will surely need to maintain the upper hand in
                    discussions.
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
                <div
                  className="justify-center items-stretch bg-white flex grow flex-col w-full pt-6 pb-11 px-6 rounded-3xl max-md:mt-5 max-md:px-5">
                  <div className="justify-center items-stretch bg-slate-200 flex flex-col px-2.5 py-2.5">
                    <img loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/fdbae476-32ff-4e3d-8589-a1630a88b08e?apiKey=12cdcbacd64a44978db653c66e993585&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/fdbae476-32ff-4e3d-8589-a1630a88b08e?apiKey=12cdcbacd64a44978db653c66e993585&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fdbae476-32ff-4e3d-8589-a1630a88b08e?apiKey=12cdcbacd64a44978db653c66e993585&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/fdbae476-32ff-4e3d-8589-a1630a88b08e?apiKey=12cdcbacd64a44978db653c66e993585&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/fdbae476-32ff-4e3d-8589-a1630a88b08e?apiKey=12cdcbacd64a44978db653c66e993585&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fdbae476-32ff-4e3d-8589-a1630a88b08e?apiKey=12cdcbacd64a44978db653c66e993585&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/fdbae476-32ff-4e3d-8589-a1630a88b08e?apiKey=12cdcbacd64a44978db653c66e993585&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/fdbae476-32ff-4e3d-8589-a1630a88b08e?apiKey=12cdcbacd64a44978db653c66e993585&"
                      className="aspect-[1.01] object-contain object-center w-full overflow-hidden max-md:mr-0.5" />
                  </div>
                  <div className="text-green-800 font-sora text-2xl font-semibold leading-5 mt-5">
                    Girl Power
                  </div>
                  <div className="text-zinc-600 font-quickSand font-[400px] text-sm leading-7 tracking-tight mt-2.5">
                    Creating a safe environment for ladies to share their pain and
                    not feel condemned
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
                <div
                  className="justify-center items-stretch bg-white flex grow flex-col w-full pt-6 pb-11 px-6 rounded-3xl max-md:mt-5 max-md:px-5">
                  <div className="justify-center items-stretch bg-slate-200 flex flex-col px-2.5 py-2.5">
                    <img loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e5961b25-f66c-4c2e-9680-e706dc3ea692?apiKey=12cdcbacd64a44978db653c66e993585&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e5961b25-f66c-4c2e-9680-e706dc3ea692?apiKey=12cdcbacd64a44978db653c66e993585&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e5961b25-f66c-4c2e-9680-e706dc3ea692?apiKey=12cdcbacd64a44978db653c66e993585&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e5961b25-f66c-4c2e-9680-e706dc3ea692?apiKey=12cdcbacd64a44978db653c66e993585&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e5961b25-f66c-4c2e-9680-e706dc3ea692?apiKey=12cdcbacd64a44978db653c66e993585&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e5961b25-f66c-4c2e-9680-e706dc3ea692?apiKey=12cdcbacd64a44978db653c66e993585&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e5961b25-f66c-4c2e-9680-e706dc3ea692?apiKey=12cdcbacd64a44978db653c66e993585&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e5961b25-f66c-4c2e-9680-e706dc3ea692?apiKey=12cdcbacd64a44978db653c66e993585&"
                      className="aspect-[1.01] object-contain object-center w-full overflow-hidden max-md:mr-0.5" />
                  </div>
                  <div className="text-green-800 font-sora text-2xl font-semibold leading-5 mt-5">
                    Growth
                  </div>
                  <div className="text-zinc-600 font-quickSand font-[400px] text-sm leading-7 tracking-tight mt-2.5">
                    Empowering women is all about helping women grow in their
                    field and become better humans
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="text-white-100 font-quickSand text-base font-medium justify-center items-center bg-green-800 self-center w-44 max-w-full mt-11 px-5 py-4 rounded-xl max-md:mt-10">
            Join Discussion
          </button>
          <svg className="-mb-[45px]" width="88" height="85" viewBox="0 0 88 85" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.17"
              d="M32.1321 11.2577C34.8218 14.1002 37.5062 16.9373 40.1959 19.7799C43.5488 23.3234 46.3554 23.3668 50.212 19.8433C56.1113 14.3868 61.9333 8.93036 67.652 3.34144C70.2023 0.834164 71.9506 0.320204 74.3576 3.27328C77.8685 7.55662 81.8361 11.481 85.7596 15.4053C87.8763 17.5138 87.6327 19.2088 85.4283 21.2632C79.3701 26.8909 73.3798 32.5903 67.4046 38.3173C63.7975 41.7303 63.6683 44.5517 66.8679 47.9683C72.1532 53.5541 77.362 59.2227 82.7693 64.7036C85.0513 67.0218 85.0507 68.8216 82.4608 71.1467C78.1947 74.974 73.9843 78.8951 69.9644 82.9708C67.3204 85.6714 65.5589 85.3296 63.2932 82.8181C58.4208 77.3647 53.2927 72.1322 48.2517 66.8279C44.225 62.5723 41.7069 62.6117 37.1106 66.9084C31.3907 72.3206 25.6191 77.6666 19.9566 83.1396C17.6293 85.4149 15.8958 85.4651 13.8193 83.1303C10.0404 78.8949 6.13905 74.7718 2.11537 70.761C-0.011776 68.6415 0.200145 67.0182 2.4442 64.9472C8.22621 59.6122 13.9148 54.1669 19.5924 48.7215C24.2617 44.3033 24.3725 41.6146 20.2583 37.2431C15.2289 31.9277 10.3046 26.513 5.12867 21.3467C2.80245 19.0286 2.74647 17.2508 5.30448 14.9036C9.74805 10.8665 14.0558 6.68583 18.3845 2.52725C20.4215 0.599831 22.077 0.163203 24.0321 2.59191C26.5725 5.73266 29.4425 8.41508 32.1321 11.2577Z"
              fill="#106840" />
          </svg>

        </div>

        <div
          className="justify-center items-center bg-[#F9F2FF] self-stretch flex mt-0 w-full flex-col px-16 py-12 max-md:max-w-full max-md:px-5">
          <div className="text-green-800 font-sora text-5xl font-semibold max-w-[379px] self-center mt-16 max-md:text-4xl max-md:mt-10">
            How this works
          </div>
          <div
            className="text-black font-quickSand text-opacity-90 text-center text-base leading-6 self-center max-w-[736px] mt-3 max-md:max-w-full">
            This platform serves as a comprehensive resource, bringing together
            all the organizations dedicated to supporting women in Nigeria.
          </div>
          <div className="self-stretch mt-16 max-md:max-w-full max-md:mt-10">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
                <div
                  className="justify-between self-stretch bg-pink-300 grow w-full px-10 py-11 rounded-3xl max-md:max-w-full max-md:mt-10 max-md:px-5">
                  <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <div className="flex flex-col items-stretch w-[54%] max-md:w-full max-md:ml-0">
                      <div className="justify-center items-stretch self-stretch flex flex-col my-auto max-md:mt-10">
                        <div className="text-neutral-950 font-sora text-2xl font-semibold">
                          Add organization
                        </div>
                        <div className="text-black text-opacity-90 font-quickSand text-sm mt-4">
                          You have an organization towards empowering women? join
                          the platform
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-stretch w-[46%] ml-5 max-md:w-full max-md:ml-0">
                      <img loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d0dec30b-9670-4956-8f75-9f6a66e82975?apiKey=12cdcbacd64a44978db653c66e993585&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d0dec30b-9670-4956-8f75-9f6a66e82975?apiKey=12cdcbacd64a44978db653c66e993585&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d0dec30b-9670-4956-8f75-9f6a66e82975?apiKey=12cdcbacd64a44978db653c66e993585&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d0dec30b-9670-4956-8f75-9f6a66e82975?apiKey=12cdcbacd64a44978db653c66e993585&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d0dec30b-9670-4956-8f75-9f6a66e82975?apiKey=12cdcbacd64a44978db653c66e993585&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d0dec30b-9670-4956-8f75-9f6a66e82975?apiKey=12cdcbacd64a44978db653c66e993585&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d0dec30b-9670-4956-8f75-9f6a66e82975?apiKey=12cdcbacd64a44978db653c66e993585&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d0dec30b-9670-4956-8f75-9f6a66e82975?apiKey=12cdcbacd64a44978db653c66e993585&"
                        className="aspect-[1.07] object-contain object-center w-full overflow-hidden max-md:mt-10" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
                <div
                  className="self-stretch bg-orange-200 grow w-full px-10 py-9 rounded-3xl max-md:max-w-full max-md:mt-10 max-md:px-5">
                  <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <div className="flex flex-col items-stretch w-[53%] max-md:w-full max-md:ml-0">
                      <div className="justify-center items-stretch self-stretch flex flex-col my-auto max-md:mt-10">
                        <div className="text-neutral-950 font-sora text-2xl font-semibold">
                          Share
                        </div>
                        <div className="text-black text-opacity-90 font-quickSand text-sm mt-4">
                          Help others become aware of evnets discussions and women
                          organiation .. share
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-stretch w-[47%] ml-5 max-md:w-full max-md:ml-0">
                      <img loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/87880df5-931f-4c38-8e44-87c89d38f7d6?apiKey=12cdcbacd64a44978db653c66e993585&"
                        className="aspect-square object-contain object-center w-full fill-indigo-50 overflow-hidden max-md:mt-10" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="justify-between self-center bg-green-200 w-[631px] max-w-full mt-10 mb-10 px-10 py-8 rounded-3xl max-md:mb-10 max-md:px-5">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[54%] max-md:w-full max-md:ml-0">
                <div className="justify-center items-stretch self-stretch flex flex-col my-auto max-md:mt-10">
                  <div className="text-neutral-950 font-sora text-2xl font-semibold">
                    Engage
                  </div>
                  <div className="text-black text-opacity-90 font-quickSand text-sm mt-4">
                    Discuss your opinions, attend events all on this platforms
                    community
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[46%] ml-5 max-md:w-full max-md:ml-0">
                <img loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6ccb8180-b425-4312-b0b0-b20155b693cf?apiKey=12cdcbacd64a44978db653c66e993585&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6ccb8180-b425-4312-b0b0-b20155b693cf?apiKey=12cdcbacd64a44978db653c66e993585&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6ccb8180-b425-4312-b0b0-b20155b693cf?apiKey=12cdcbacd64a44978db653c66e993585&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6ccb8180-b425-4312-b0b0-b20155b693cf?apiKey=12cdcbacd64a44978db653c66e993585&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6ccb8180-b425-4312-b0b0-b20155b693cf?apiKey=12cdcbacd64a44978db653c66e993585&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6ccb8180-b425-4312-b0b0-b20155b693cf?apiKey=12cdcbacd64a44978db653c66e993585&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6ccb8180-b425-4312-b0b0-b20155b693cf?apiKey=12cdcbacd64a44978db653c66e993585&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6ccb8180-b425-4312-b0b0-b20155b693cf?apiKey=12cdcbacd64a44978db653c66e993585&"
                  className="aspect-square object-contain object-center w-full overflow-hidden max-md:mt-8" />
              </div>
            </div>
          </div>
          {/* <img src={`${ellipse.src}`} alt="Ellipse image" /> */}

        </div>
        <svg className="w-screen" width="1440" height="214" viewBox="0 0 1440 214" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="720" cy="-416.5" rx="1623.5" ry="630.5" fill="#F9F2FF" />
        </svg>
      </section>
    </TransitionElement>
  );
};

export default LandingPage;
