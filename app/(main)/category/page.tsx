"use client";
import React, { useEffect } from "react";
import { TransitionElement, TransitionStart } from "@/lib/utils/transition";



const CategoryPage = () => {

  return (
    <TransitionElement>
      <section className="bg-white flex flex-col items-stretch">
        <div className="flex w-full flex-col mt-9 px-16 max-md:max-w-full max-md:px-5">
          <div className="text-green-800 text-5xl font-semibold max-w-[968px] self-center ml-5 max-md:max-w-full max-md:text-4xl">
            Get Familiar with Women organizations
          </div>
          <div className="text-black text-opacity-80 text-base max-w-[400px] self-center ml-3.5 mt-3">
            Please select any of the category below to begin
          </div>
          <div className="self-stretch mt-32 max-md:max-w-full max-md:mt-10 max-md:pr-5">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-3/12 max-md:w-full max-md:ml-0">
                <div className="justify-center items-center bg-amber-600 bg-opacity-30 flex grow flex-col w-full pl-16 pr-20 py-9 rounded-2xl max-md:mt-5 max-md:px-5">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f50f22d4-5b91-4bd3-abce-ff495ed65ca3?apiKey=12cdcbacd64a44978db653c66e993585&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f50f22d4-5b91-4bd3-abce-ff495ed65ca3?apiKey=12cdcbacd64a44978db653c66e993585&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f50f22d4-5b91-4bd3-abce-ff495ed65ca3?apiKey=12cdcbacd64a44978db653c66e993585&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f50f22d4-5b91-4bd3-abce-ff495ed65ca3?apiKey=12cdcbacd64a44978db653c66e993585&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f50f22d4-5b91-4bd3-abce-ff495ed65ca3?apiKey=12cdcbacd64a44978db653c66e993585&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f50f22d4-5b91-4bd3-abce-ff495ed65ca3?apiKey=12cdcbacd64a44978db653c66e993585&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f50f22d4-5b91-4bd3-abce-ff495ed65ca3?apiKey=12cdcbacd64a44978db653c66e993585&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f50f22d4-5b91-4bd3-abce-ff495ed65ca3?apiKey=12cdcbacd64a44978db653c66e993585&"
                    className="aspect-square object-contain object-center w-[118px] overflow-hidden max-w-full"
                  />
                  <div className="text-black text-2xl font-medium self-stretch mt-9">
                    Human Rights
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
                <div className="justify-center bg-blue-200 flex grow flex-col w-full px-20 py-9 rounded-2xl items-start max-md:mt-5 max-md:px-5">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a1bd5453-8f9e-417e-b72f-be184fca30eb?apiKey=12cdcbacd64a44978db653c66e993585&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a1bd5453-8f9e-417e-b72f-be184fca30eb?apiKey=12cdcbacd64a44978db653c66e993585&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a1bd5453-8f9e-417e-b72f-be184fca30eb?apiKey=12cdcbacd64a44978db653c66e993585&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a1bd5453-8f9e-417e-b72f-be184fca30eb?apiKey=12cdcbacd64a44978db653c66e993585&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a1bd5453-8f9e-417e-b72f-be184fca30eb?apiKey=12cdcbacd64a44978db653c66e993585&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a1bd5453-8f9e-417e-b72f-be184fca30eb?apiKey=12cdcbacd64a44978db653c66e993585&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a1bd5453-8f9e-417e-b72f-be184fca30eb?apiKey=12cdcbacd64a44978db653c66e993585&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a1bd5453-8f9e-417e-b72f-be184fca30eb?apiKey=12cdcbacd64a44978db653c66e993585&"
                    className="aspect-square object-contain object-center w-[118px] overflow-hidden max-w-full max-md:ml-1.5"
                  />
                  <div className="text-black text-2xl font-medium mt-9 max-md:ml-1.5">
                    Activism
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
                <div className="justify-center bg-lime-100 flex grow flex-col w-full px-20 py-9 rounded-2xl items-start max-md:mt-5 max-md:px-5">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/fadf5829-67db-43f3-8f18-358ed75962ab?apiKey=12cdcbacd64a44978db653c66e993585&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/fadf5829-67db-43f3-8f18-358ed75962ab?apiKey=12cdcbacd64a44978db653c66e993585&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fadf5829-67db-43f3-8f18-358ed75962ab?apiKey=12cdcbacd64a44978db653c66e993585&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/fadf5829-67db-43f3-8f18-358ed75962ab?apiKey=12cdcbacd64a44978db653c66e993585&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/fadf5829-67db-43f3-8f18-358ed75962ab?apiKey=12cdcbacd64a44978db653c66e993585&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fadf5829-67db-43f3-8f18-358ed75962ab?apiKey=12cdcbacd64a44978db653c66e993585&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/fadf5829-67db-43f3-8f18-358ed75962ab?apiKey=12cdcbacd64a44978db653c66e993585&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/fadf5829-67db-43f3-8f18-358ed75962ab?apiKey=12cdcbacd64a44978db653c66e993585&"
                    className="aspect-square object-contain object-center w-[118px] overflow-hidden max-w-full max-md:ml-1.5"
                  />
                  <div className="text-black text-2xl font-medium mt-9 max-md:ml-1.5">
                    Education
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
                <div className="justify-center bg-zinc-400 flex grow flex-col w-full px-20 py-9 rounded-2xl items-start max-md:mt-5 max-md:px-5">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b9198505-afca-4f10-a5bc-8cb08829bd1d?apiKey=12cdcbacd64a44978db653c66e993585&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b9198505-afca-4f10-a5bc-8cb08829bd1d?apiKey=12cdcbacd64a44978db653c66e993585&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b9198505-afca-4f10-a5bc-8cb08829bd1d?apiKey=12cdcbacd64a44978db653c66e993585&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b9198505-afca-4f10-a5bc-8cb08829bd1d?apiKey=12cdcbacd64a44978db653c66e993585&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b9198505-afca-4f10-a5bc-8cb08829bd1d?apiKey=12cdcbacd64a44978db653c66e993585&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b9198505-afca-4f10-a5bc-8cb08829bd1d?apiKey=12cdcbacd64a44978db653c66e993585&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b9198505-afca-4f10-a5bc-8cb08829bd1d?apiKey=12cdcbacd64a44978db653c66e993585&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b9198505-afca-4f10-a5bc-8cb08829bd1d?apiKey=12cdcbacd64a44978db653c66e993585&"
                    className="aspect-square object-contain object-center w-[118px] overflow-hidden max-w-full max-md:ml-1.5"
                  />
                  <div className="text-black text-2xl font-medium self-center mt-9">
                    Health
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[1241px] pl-0 pr-0 mt-32 self-end max-md:max-w-full max-md:mt-10">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-3/12 max-md:w-full max-md:ml-0">
                <div className="justify-center bg-pink-300 flex grow flex-col w-full px-20 py-9 rounded-2xl items-start max-md:mt-5 max-md:px-5">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/8ec138f4-7422-48ca-85c8-c06d55de5d91?apiKey=12cdcbacd64a44978db653c66e993585&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/8ec138f4-7422-48ca-85c8-c06d55de5d91?apiKey=12cdcbacd64a44978db653c66e993585&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8ec138f4-7422-48ca-85c8-c06d55de5d91?apiKey=12cdcbacd64a44978db653c66e993585&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/8ec138f4-7422-48ca-85c8-c06d55de5d91?apiKey=12cdcbacd64a44978db653c66e993585&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/8ec138f4-7422-48ca-85c8-c06d55de5d91?apiKey=12cdcbacd64a44978db653c66e993585&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8ec138f4-7422-48ca-85c8-c06d55de5d91?apiKey=12cdcbacd64a44978db653c66e993585&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/8ec138f4-7422-48ca-85c8-c06d55de5d91?apiKey=12cdcbacd64a44978db653c66e993585&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/8ec138f4-7422-48ca-85c8-c06d55de5d91?apiKey=12cdcbacd64a44978db653c66e993585&"
                    className="aspect-[0.99] object-contain object-center w-[117px] overflow-hidden max-w-full"
                  />
                  <div className="text-black text-2xl font-medium ml-5 mt-9 max-md:ml-2.5">
                    Sports
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
                <div className="justify-center items-center bg-rose-200 flex grow flex-col w-full pl-14 pr-20 py-9 rounded-2xl max-md:mt-5 max-md:px-5">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ae6f1c96-4fd2-4829-9c58-fac57971b0ca?apiKey=12cdcbacd64a44978db653c66e993585&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ae6f1c96-4fd2-4829-9c58-fac57971b0ca?apiKey=12cdcbacd64a44978db653c66e993585&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ae6f1c96-4fd2-4829-9c58-fac57971b0ca?apiKey=12cdcbacd64a44978db653c66e993585&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ae6f1c96-4fd2-4829-9c58-fac57971b0ca?apiKey=12cdcbacd64a44978db653c66e993585&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ae6f1c96-4fd2-4829-9c58-fac57971b0ca?apiKey=12cdcbacd64a44978db653c66e993585&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ae6f1c96-4fd2-4829-9c58-fac57971b0ca?apiKey=12cdcbacd64a44978db653c66e993585&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ae6f1c96-4fd2-4829-9c58-fac57971b0ca?apiKey=12cdcbacd64a44978db653c66e993585&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ae6f1c96-4fd2-4829-9c58-fac57971b0ca?apiKey=12cdcbacd64a44978db653c66e993585&"
                    className="aspect-[0.99] object-contain object-center w-[117px] overflow-hidden max-w-full"
                  />
                  <div className="text-black text-2xl font-medium self-stretch mt-9">
                    Women in tech
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
                <div className="justify-center bg-purple-300 bg-opacity-50 flex grow flex-col w-full px-20 py-9 rounded-2xl items-start max-md:mt-5 max-md:px-5">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/83ceb0f1-5398-4e0f-abf3-c32a8c61c278?apiKey=12cdcbacd64a44978db653c66e993585&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/83ceb0f1-5398-4e0f-abf3-c32a8c61c278?apiKey=12cdcbacd64a44978db653c66e993585&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/83ceb0f1-5398-4e0f-abf3-c32a8c61c278?apiKey=12cdcbacd64a44978db653c66e993585&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/83ceb0f1-5398-4e0f-abf3-c32a8c61c278?apiKey=12cdcbacd64a44978db653c66e993585&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/83ceb0f1-5398-4e0f-abf3-c32a8c61c278?apiKey=12cdcbacd64a44978db653c66e993585&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/83ceb0f1-5398-4e0f-abf3-c32a8c61c278?apiKey=12cdcbacd64a44978db653c66e993585&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/83ceb0f1-5398-4e0f-abf3-c32a8c61c278?apiKey=12cdcbacd64a44978db653c66e993585&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/83ceb0f1-5398-4e0f-abf3-c32a8c61c278?apiKey=12cdcbacd64a44978db653c66e993585&"
                    className="aspect-[0.99] object-contain object-center w-[117px] overflow-hidden max-w-full"
                  />
                  <div className="text-black text-2xl font-medium mt-9">
                    Girl Child
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
                <div className="justify-center bg-lime-50 z-[1] flex grow flex-col w-full pl-16 pr-20 py-9 rounded-2xl items-start max-md:mt-5 max-md:px-5">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d31d2eb3-c5dc-421e-a2c1-26347c909dba?apiKey=12cdcbacd64a44978db653c66e993585&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d31d2eb3-c5dc-421e-a2c1-26347c909dba?apiKey=12cdcbacd64a44978db653c66e993585&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d31d2eb3-c5dc-421e-a2c1-26347c909dba?apiKey=12cdcbacd64a44978db653c66e993585&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d31d2eb3-c5dc-421e-a2c1-26347c909dba?apiKey=12cdcbacd64a44978db653c66e993585&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d31d2eb3-c5dc-421e-a2c1-26347c909dba?apiKey=12cdcbacd64a44978db653c66e993585&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d31d2eb3-c5dc-421e-a2c1-26347c909dba?apiKey=12cdcbacd64a44978db653c66e993585&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d31d2eb3-c5dc-421e-a2c1-26347c909dba?apiKey=12cdcbacd64a44978db653c66e993585&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d31d2eb3-c5dc-421e-a2c1-26347c909dba?apiKey=12cdcbacd64a44978db653c66e993585&"
                    className="aspect-[0.99] object-contain object-center w-[117px] overflow-hidden max-w-full ml-5 max-md:ml-2.5"
                  />
                  <div className="text-black text-2xl font-medium mt-9">
                    Law & Politics
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[1241px] pl-0 pr-0 mt-32 self-end max-md:max-w-full max-md:mt-10">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-3/12 max-md:w-full max-md:ml-0">
                <div className="justify-center items-center bg-purple-100 flex grow flex-col w-full pl-10 pr-14 py-9 rounded-2xl max-md:mt-5 max-md:px-5">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/902f0a93-52f9-4941-8b0e-b2847dd2e88f?apiKey=12cdcbacd64a44978db653c66e993585&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/902f0a93-52f9-4941-8b0e-b2847dd2e88f?apiKey=12cdcbacd64a44978db653c66e993585&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/902f0a93-52f9-4941-8b0e-b2847dd2e88f?apiKey=12cdcbacd64a44978db653c66e993585&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/902f0a93-52f9-4941-8b0e-b2847dd2e88f?apiKey=12cdcbacd64a44978db653c66e993585&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/902f0a93-52f9-4941-8b0e-b2847dd2e88f?apiKey=12cdcbacd64a44978db653c66e993585&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/902f0a93-52f9-4941-8b0e-b2847dd2e88f?apiKey=12cdcbacd64a44978db653c66e993585&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/902f0a93-52f9-4941-8b0e-b2847dd2e88f?apiKey=12cdcbacd64a44978db653c66e993585&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/902f0a93-52f9-4941-8b0e-b2847dd2e88f?apiKey=12cdcbacd64a44978db653c66e993585&"
                    className="aspect-[0.99] object-contain object-center w-[117px] overflow-hidden max-w-full"
                  />
                  <div className="text-black text-2xl font-medium self-stretch mt-9">
                    Sexual Orientation
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
                <div className="justify-center items-center bg-amber-600 bg-opacity-30 flex grow flex-col w-full pl-6 pr-7 py-9 rounded-2xl max-md:mt-5 max-md:px-5">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9f38769b-bcbb-40ab-a9f0-26642445ef32?apiKey=12cdcbacd64a44978db653c66e993585&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9f38769b-bcbb-40ab-a9f0-26642445ef32?apiKey=12cdcbacd64a44978db653c66e993585&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9f38769b-bcbb-40ab-a9f0-26642445ef32?apiKey=12cdcbacd64a44978db653c66e993585&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9f38769b-bcbb-40ab-a9f0-26642445ef32?apiKey=12cdcbacd64a44978db653c66e993585&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9f38769b-bcbb-40ab-a9f0-26642445ef32?apiKey=12cdcbacd64a44978db653c66e993585&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9f38769b-bcbb-40ab-a9f0-26642445ef32?apiKey=12cdcbacd64a44978db653c66e993585&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9f38769b-bcbb-40ab-a9f0-26642445ef32?apiKey=12cdcbacd64a44978db653c66e993585&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9f38769b-bcbb-40ab-a9f0-26642445ef32?apiKey=12cdcbacd64a44978db653c66e993585&"
                    className="aspect-[0.99] object-contain object-center w-[117px] overflow-hidden max-w-full"
                  />
                  <div className="text-black text-2xl font-medium self-stretch mt-9">
                    Science & Engineering
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
                <div className="justify-center items-center bg-slate-500 bg-opacity-40 flex grow flex-col w-full pl-14 pr-20 py-9 rounded-2xl max-md:mt-5 max-md:px-5">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/56f6d2dc-0011-4110-81d1-7328ff2664d4?apiKey=12cdcbacd64a44978db653c66e993585&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/56f6d2dc-0011-4110-81d1-7328ff2664d4?apiKey=12cdcbacd64a44978db653c66e993585&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/56f6d2dc-0011-4110-81d1-7328ff2664d4?apiKey=12cdcbacd64a44978db653c66e993585&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/56f6d2dc-0011-4110-81d1-7328ff2664d4?apiKey=12cdcbacd64a44978db653c66e993585&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/56f6d2dc-0011-4110-81d1-7328ff2664d4?apiKey=12cdcbacd64a44978db653c66e993585&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/56f6d2dc-0011-4110-81d1-7328ff2664d4?apiKey=12cdcbacd64a44978db653c66e993585&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/56f6d2dc-0011-4110-81d1-7328ff2664d4?apiKey=12cdcbacd64a44978db653c66e993585&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/56f6d2dc-0011-4110-81d1-7328ff2664d4?apiKey=12cdcbacd64a44978db653c66e993585&"
                    className="aspect-[0.99] object-contain object-center w-[117px] overflow-hidden max-w-full"
                  />
                  <div className="text-black text-2xl font-medium mt-9 max-md:mr-1">
                    Art & LIfestyle{" "}
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
                <div className="justify-center items-center bg-amber-600 bg-opacity-30 z-[1] flex grow flex-col w-full pl-11 pr-16 py-9 rounded-2xl max-md:mt-5 max-md:px-5">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/da52ab0c-59e8-4639-a0ea-1841b468b21f?apiKey=12cdcbacd64a44978db653c66e993585&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/da52ab0c-59e8-4639-a0ea-1841b468b21f?apiKey=12cdcbacd64a44978db653c66e993585&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/da52ab0c-59e8-4639-a0ea-1841b468b21f?apiKey=12cdcbacd64a44978db653c66e993585&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/da52ab0c-59e8-4639-a0ea-1841b468b21f?apiKey=12cdcbacd64a44978db653c66e993585&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/da52ab0c-59e8-4639-a0ea-1841b468b21f?apiKey=12cdcbacd64a44978db653c66e993585&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/da52ab0c-59e8-4639-a0ea-1841b468b21f?apiKey=12cdcbacd64a44978db653c66e993585&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/da52ab0c-59e8-4639-a0ea-1841b468b21f?apiKey=12cdcbacd64a44978db653c66e993585&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/da52ab0c-59e8-4639-a0ea-1841b468b21f?apiKey=12cdcbacd64a44978db653c66e993585&"
                    className="aspect-[0.99] object-contain object-center w-[117px] overflow-hidden max-w-full"
                  />
                  <div className="text-black text-2xl font-medium self-stretch mt-9">
                    Entrepreneurship
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[1241px] pl-0 pr-0 mt-32 self-end max-md:max-w-full max-md:mt-10">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-3/12 max-md:w-full max-md:ml-0">
                <div className="justify-center items-center bg-orange-100 flex grow flex-col w-full pl-9 pr-12 py-9 rounded-2xl max-md:mt-5 max-md:px-5">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1f979501-ba17-46bf-ab23-659977216fae?apiKey=12cdcbacd64a44978db653c66e993585&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1f979501-ba17-46bf-ab23-659977216fae?apiKey=12cdcbacd64a44978db653c66e993585&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1f979501-ba17-46bf-ab23-659977216fae?apiKey=12cdcbacd64a44978db653c66e993585&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1f979501-ba17-46bf-ab23-659977216fae?apiKey=12cdcbacd64a44978db653c66e993585&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1f979501-ba17-46bf-ab23-659977216fae?apiKey=12cdcbacd64a44978db653c66e993585&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1f979501-ba17-46bf-ab23-659977216fae?apiKey=12cdcbacd64a44978db653c66e993585&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1f979501-ba17-46bf-ab23-659977216fae?apiKey=12cdcbacd64a44978db653c66e993585&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1f979501-ba17-46bf-ab23-659977216fae?apiKey=12cdcbacd64a44978db653c66e993585&"
                    className="aspect-[0.99] object-contain object-center w-[117px] overflow-hidden max-w-full"
                  />
                  <div className="text-black text-2xl font-medium self-stretch mt-9">
                    Business & Finance
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
                <div className="justify-center bg-blue-100 flex grow flex-col w-full px-20 py-9 rounded-2xl items-start max-md:mt-5 max-md:px-5">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a00ba8b3-c6af-4f9a-bfe6-a5cabc01c832?apiKey=12cdcbacd64a44978db653c66e993585&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a00ba8b3-c6af-4f9a-bfe6-a5cabc01c832?apiKey=12cdcbacd64a44978db653c66e993585&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a00ba8b3-c6af-4f9a-bfe6-a5cabc01c832?apiKey=12cdcbacd64a44978db653c66e993585&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a00ba8b3-c6af-4f9a-bfe6-a5cabc01c832?apiKey=12cdcbacd64a44978db653c66e993585&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a00ba8b3-c6af-4f9a-bfe6-a5cabc01c832?apiKey=12cdcbacd64a44978db653c66e993585&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a00ba8b3-c6af-4f9a-bfe6-a5cabc01c832?apiKey=12cdcbacd64a44978db653c66e993585&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a00ba8b3-c6af-4f9a-bfe6-a5cabc01c832?apiKey=12cdcbacd64a44978db653c66e993585&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a00ba8b3-c6af-4f9a-bfe6-a5cabc01c832?apiKey=12cdcbacd64a44978db653c66e993585&"
                    className="aspect-[0.99] object-contain object-center w-[117px] overflow-hidden max-w-full"
                  />
                  <div className="text-black text-2xl font-medium ml-6 mt-9 max-md:ml-2.5">
                    Grants
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
                <div className="justify-center items-center bg-purple-100 flex grow flex-col w-full px-2.5 py-9 rounded-2xl max-md:mt-5">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e2bf3781-af56-47c3-abd9-a45fada723e7?apiKey=12cdcbacd64a44978db653c66e993585&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e2bf3781-af56-47c3-abd9-a45fada723e7?apiKey=12cdcbacd64a44978db653c66e993585&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e2bf3781-af56-47c3-abd9-a45fada723e7?apiKey=12cdcbacd64a44978db653c66e993585&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e2bf3781-af56-47c3-abd9-a45fada723e7?apiKey=12cdcbacd64a44978db653c66e993585&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e2bf3781-af56-47c3-abd9-a45fada723e7?apiKey=12cdcbacd64a44978db653c66e993585&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e2bf3781-af56-47c3-abd9-a45fada723e7?apiKey=12cdcbacd64a44978db653c66e993585&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e2bf3781-af56-47c3-abd9-a45fada723e7?apiKey=12cdcbacd64a44978db653c66e993585&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e2bf3781-af56-47c3-abd9-a45fada723e7?apiKey=12cdcbacd64a44978db653c66e993585&"
                    className="aspect-[0.99] object-contain object-center w-[117px] overflow-hidden max-w-full"
                  />
                  <div className="text-black text-2xl font-medium self-stretch mt-9">
                    Economic Empowerment
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
                <div className="justify-center items-center bg-green-200 z-[1] flex grow flex-col w-full pl-14 pr-20 py-5 rounded-2xl max-md:mt-5 max-md:px-5">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0e00d200-a387-4cdb-9403-30bf674a19df?apiKey=12cdcbacd64a44978db653c66e993585&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e00d200-a387-4cdb-9403-30bf674a19df?apiKey=12cdcbacd64a44978db653c66e993585&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e00d200-a387-4cdb-9403-30bf674a19df?apiKey=12cdcbacd64a44978db653c66e993585&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e00d200-a387-4cdb-9403-30bf674a19df?apiKey=12cdcbacd64a44978db653c66e993585&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e00d200-a387-4cdb-9403-30bf674a19df?apiKey=12cdcbacd64a44978db653c66e993585&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e00d200-a387-4cdb-9403-30bf674a19df?apiKey=12cdcbacd64a44978db653c66e993585&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e00d200-a387-4cdb-9403-30bf674a19df?apiKey=12cdcbacd64a44978db653c66e993585&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e00d200-a387-4cdb-9403-30bf674a19df?apiKey=12cdcbacd64a44978db653c66e993585&"
                    className="aspect-[0.99] object-contain object-center w-[117px] overflow-hidden max-w-full"
                  />
                  <div className="text-black text-2xl font-medium mt-9">
                    Leadership & <br />
                    development
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="justify-center items-center flex w-full flex-col mt-28 mb-16 px-5 py-10 rounded-lg max-md:max-w-full max-md:mt-10">
          <div className="flex w-[978px] max-w-full flex-col items-stretch">
            <div className="text-green-800 text-center text-5xl font-semibold max-md:max-w-full max-md:text-4xl">
              Join the growing community and create awareness
            </div>
            <button className="text-white-100 text-center text-base font-medium justify-center items-center rounded bg-orange-500 self-center w-[145px] max-w-full mt-7 px-5 py-3.5">
              Get started
            </button>
          </div>
        </div>
      </section>
    </TransitionElement>
  );
};

export default CategoryPage;
