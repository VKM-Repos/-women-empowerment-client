"use client";
import React, { useEffect } from "react";
import doddles from '@/public/images/img_circledoodle.png'
import maginify from '@/public/images/img_search.svg'
import womenInPower from '@/public/images/img_womeninpower1.svg'
import { TransitionElement } from "@/lib/utils/transition";
const LandingPage = () => {

  return (
    <TransitionElement>
      <section className=" w-[95.8%] mx-auto flex flex-col items-center justify-start">
        <div className="lg:-ml-[90%] z-10 lg:-mt-[5%]">
          <img src={doddles.src} alt="" className="lg:w-[208px] lg:max-w-w-[208px]" />
        </div>
        <div className="bg-primary w-[95.2%] -mt-[170px] rounded-xl flex justify-between items-center ">
          <div className="flex flex-col gap-4 pl-[160px]">
            <h1 className="text-4xl font-bold text-white-100">Together we are <i className="text-secondary">Able</i></h1>
            <p className="text-white-100 font-light text-base">
              Discover and learn about women organizations with only one click.
            </p>
            <div className="flex justify-center items-center">
              <input type="text" placeholder="search for organization" className="lg:w-[495px] rounded-tl-md rounded-bl-md px-5 py-3" />
              <button className="bg-btnWarning px-3 py-[10.5px] rounded-br-md rounded-tr-md"><img src={maginify.src} alt="" /></button>
            </div>
            <div className="flex gap-4 w-full">
              <p className="text-white-100 text-base font-light">Search for:</p>
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
        <div className="self-center w-full max-w-[1292px] mt-20 max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[68%] max-md:w-full max-md:ml-0">
              <div className="items-stretch flex grow flex-col max-md:max-w-full max-md:mt-5">
                <div
                  className="text-orange-500 text-3xl font-bold items-stretch justify-center px-5 py-2.5 border-b-neutral-200 border-b border-solid max-md:max-w-full">
                  TOP ORGANIZATIONS
                </div>
                <div className="items-center flex flex-col mt-9 px-6 max-md:max-w-full max-md:px-5">
                  <div
                    className="border bg-white self-stretch p-8 rounded-3xl border-solid border-black border-opacity-10 max-md:max-w-full max-md:px-5">
                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                      <div className="flex flex-col items-stretch w-[82%] max-md:w-full max-md:ml-0">
                        <div className="items-stretch flex flex-col max-md:max-w-full max-md:mt-10">
                          <div className="text-green-800 text-base font-bold max-md:max-w-full">
                            Women in Tech
                          </div>
                          <div className="text-black text-opacity-60 text-sm leading-5 mt-5 max-md:max-w-full">
                            Women in Technology in Nigeria(WITIN) is a Leading
                            Community of Women in Tech. A registered non-profit
                            organization and association, dedicated to the
                            advancement of women and girls.
                          </div>
                          <div
                            className="justify-between items-stretch border-t-neutral-200 border-b-neutral-200 flex w-full gap-5 mt-5 p-2.5 border-t border-solid border-b max-md:max-w-full max-md:flex-wrap">
                            <div className="items-stretch flex justify-between gap-3">
                              <div className="items-stretch flex justify-between gap-1.5">
                                <img loading="lazy"
                                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/2f67cfee-e3eb-4fdd-b652-1358acdb1a5e?apiKey=12cdcbacd64a44978db653c66e993585&"
                                  className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full" />
                                <div className="text-neutral-500 text-center text-sm self-center my-auto">
                                  3.5K
                                </div>
                              </div>
                              <img loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b3b8b990-cbfb-404d-b4ac-400f46957ca8?apiKey=12cdcbacd64a44978db653c66e993585&"
                                className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full" />
                            </div>
                            <div className="items-stretch flex justify-between gap-1.5 px-px">
                              <img loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2c0ac05a-4f93-460c-be92-4615a52fcea7?apiKey=12cdcbacd64a44978db653c66e993585&"
                                className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full" />
                              <div className="text-neutral-500 text-center text-sm self-center my-auto">
                                visit website
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-stretch w-[18%] ml-5 max-md:w-full max-md:ml-0">
                        <img loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9fe7745d-156a-4294-acb9-0595384303ea?apiKey=12cdcbacd64a44978db653c66e993585&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9fe7745d-156a-4294-acb9-0595384303ea?apiKey=12cdcbacd64a44978db653c66e993585&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9fe7745d-156a-4294-acb9-0595384303ea?apiKey=12cdcbacd64a44978db653c66e993585&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9fe7745d-156a-4294-acb9-0595384303ea?apiKey=12cdcbacd64a44978db653c66e993585&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9fe7745d-156a-4294-acb9-0595384303ea?apiKey=12cdcbacd64a44978db653c66e993585&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9fe7745d-156a-4294-acb9-0595384303ea?apiKey=12cdcbacd64a44978db653c66e993585&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9fe7745d-156a-4294-acb9-0595384303ea?apiKey=12cdcbacd64a44978db653c66e993585&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9fe7745d-156a-4294-acb9-0595384303ea?apiKey=12cdcbacd64a44978db653c66e993585&"
                          className="aspect-square object-contain object-center w-[132px] justify-center items-center overflow-hidden shrink-0 max-w-full my-auto max-md:mt-10" />
                      </div>
                    </div>
                  </div>
                  <div
                    className="border bg-white self-stretch mt-4 p-8 rounded-3xl border-solid border-black border-opacity-10 max-md:max-w-full max-md:px-5">
                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                      <div className="flex flex-col items-stretch w-[82%] max-md:w-full max-md:ml-0">
                        <div className="items-stretch flex flex-col max-md:max-w-full max-md:mt-10">
                          <div className="text-green-800 text-base font-bold max-md:max-w-full">
                            National Council of Women Societies
                          </div>
                          <div className="text-black text-opacity-60 text-sm leading-5 mt-5 max-md:max-w-full">
                            National Council of Women's Societies (NCWS) is a
                            Nigerian non-governmental and non-partisan women's
                            organization composed of a network of independent
                            women organizations in Nigeria binding...
                          </div>
                          <div
                            className="justify-between items-stretch border-t-neutral-200 border-b-neutral-200 flex w-full gap-5 mt-5 p-2.5 border-t border-solid border-b max-md:max-w-full max-md:flex-wrap">
                            <div className="items-stretch flex justify-between gap-3">
                              <div className="items-stretch flex justify-between gap-1.5">
                                <img loading="lazy"
                                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/ece6e04e-6c97-4a9d-84ff-7e18923e61cd?apiKey=12cdcbacd64a44978db653c66e993585&"
                                  className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full" />
                                <div className="text-neutral-500 text-center text-sm self-center my-auto">
                                  3.5K
                                </div>
                              </div>
                              <img loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/34fbb3dd-6f72-4ec1-8e4f-1062eab182cb?apiKey=12cdcbacd64a44978db653c66e993585&"
                                className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full" />
                            </div>
                            <div className="items-stretch flex justify-between gap-1.5 px-px">
                              <img loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/fdc1e2b1-1297-4a83-8305-c6825c2a45c6?apiKey=12cdcbacd64a44978db653c66e993585&"
                                className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full" />
                              <div className="text-neutral-500 text-center text-sm self-center my-auto">
                                visit website
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-stretch w-[18%] ml-5 max-md:w-full max-md:ml-0">
                        <img loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/55302476-3554-490f-95cc-cbc3026442bb?apiKey=12cdcbacd64a44978db653c66e993585&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/55302476-3554-490f-95cc-cbc3026442bb?apiKey=12cdcbacd64a44978db653c66e993585&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/55302476-3554-490f-95cc-cbc3026442bb?apiKey=12cdcbacd64a44978db653c66e993585&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/55302476-3554-490f-95cc-cbc3026442bb?apiKey=12cdcbacd64a44978db653c66e993585&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/55302476-3554-490f-95cc-cbc3026442bb?apiKey=12cdcbacd64a44978db653c66e993585&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/55302476-3554-490f-95cc-cbc3026442bb?apiKey=12cdcbacd64a44978db653c66e993585&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/55302476-3554-490f-95cc-cbc3026442bb?apiKey=12cdcbacd64a44978db653c66e993585&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/55302476-3554-490f-95cc-cbc3026442bb?apiKey=12cdcbacd64a44978db653c66e993585&"
                          className="aspect-square object-contain object-center w-[132px] justify-center items-center overflow-hidden shrink-0 max-w-full my-auto max-md:mt-10" />
                      </div>
                    </div>
                  </div>
                  <div
                    className="border bg-white self-stretch mt-4 p-8 rounded-3xl border-solid border-black border-opacity-10 max-md:max-w-full max-md:px-5">
                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                      <div className="flex flex-col items-stretch w-[82%] max-md:w-full max-md:ml-0">
                        <div className="items-stretch flex flex-col max-md:max-w-full max-md:mt-10">
                          <div className="text-green-800 text-base font-bold max-md:max-w-full">
                            Women Trafficking and Child Labour Eradication
                            Foundation
                          </div>
                          <div className="text-black text-opacity-60 text-sm leading-5 mt-5 max-md:max-w-full">
                            Women Trafficking and Child Labor Eradication
                            Foundation is an anti-human trafficking organization
                            in Africa that attempts to stop human trafficking and
                            child labor in Nigeria. It is committed to building
                            an...
                          </div>
                          <div
                            className="justify-between items-stretch border-t-neutral-200 border-b-neutral-200 flex w-full gap-5 mt-5 p-2.5 border-t border-solid border-b max-md:max-w-full max-md:flex-wrap">
                            <div className="items-stretch flex justify-between gap-3">
                              <div className="items-stretch flex justify-between gap-1.5">
                                <img loading="lazy"
                                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/10e492cc-1ac2-403b-972f-e14ace50d1e6?apiKey=12cdcbacd64a44978db653c66e993585&"
                                  className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full" />
                                <div className="text-neutral-500 text-center text-sm self-center my-auto">
                                  3.5K
                                </div>
                              </div>
                              <img loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/75333a36-ecb6-4bc8-b26f-c37a3fa34ffa?apiKey=12cdcbacd64a44978db653c66e993585&"
                                className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full" />
                            </div>
                            <div className="items-stretch flex justify-between gap-1.5 px-px">
                              <img loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/74ad52b6-1f93-45e5-9552-65471fb1b710?apiKey=12cdcbacd64a44978db653c66e993585&"
                                className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full" />
                              <div className="text-neutral-500 text-center text-sm self-center my-auto">
                                visit website
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-stretch w-[18%] ml-5 max-md:w-full max-md:ml-0">
                        <img loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/affd4066-710e-4aa9-b074-50f7efd60217?apiKey=12cdcbacd64a44978db653c66e993585&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/affd4066-710e-4aa9-b074-50f7efd60217?apiKey=12cdcbacd64a44978db653c66e993585&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/affd4066-710e-4aa9-b074-50f7efd60217?apiKey=12cdcbacd64a44978db653c66e993585&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/affd4066-710e-4aa9-b074-50f7efd60217?apiKey=12cdcbacd64a44978db653c66e993585&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/affd4066-710e-4aa9-b074-50f7efd60217?apiKey=12cdcbacd64a44978db653c66e993585&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/affd4066-710e-4aa9-b074-50f7efd60217?apiKey=12cdcbacd64a44978db653c66e993585&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/affd4066-710e-4aa9-b074-50f7efd60217?apiKey=12cdcbacd64a44978db653c66e993585&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/affd4066-710e-4aa9-b074-50f7efd60217?apiKey=12cdcbacd64a44978db653c66e993585&"
                          className="aspect-square object-contain object-center w-[132px] justify-center items-center overflow-hidden shrink-0 max-w-full my-auto max-md:mt-10" />
                      </div>
                    </div>
                  </div>
                  <div
                    className="border bg-white self-stretch mt-4 p-8 rounded-3xl border-solid border-black border-opacity-10 max-md:max-w-full max-md:px-5">
                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                      <div className="flex flex-col items-stretch w-[82%] max-md:w-full max-md:ml-0">
                        <div className="items-stretch flex flex-col max-md:max-w-full max-md:mt-10">
                          <div className="text-green-800 text-base font-bold max-md:max-w-full">
                            United Nations Women
                          </div>
                          <div className="text-black text-opacity-60 text-sm leading-5 mt-5 max-md:max-w-full">
                            The United Nations Entity for Gender Equality and the
                            Empowerment of Women, also known as UN Women, is a
                            United Nations entity working for gender equality and
                            the empowerment of women.
                          </div>
                          <div
                            className="justify-between items-stretch border-t-neutral-200 border-b-neutral-200 flex w-full gap-5 mt-5 p-2.5 border-t border-solid border-b max-md:max-w-full max-md:flex-wrap">
                            <div className="items-stretch flex justify-between gap-3">
                              <div className="items-stretch flex justify-between gap-1.5">
                                <img loading="lazy"
                                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/0382f940-172d-441d-8826-ad27fa8ba761?apiKey=12cdcbacd64a44978db653c66e993585&"
                                  className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full" />
                                <div className="text-neutral-500 text-center text-sm self-center my-auto">
                                  3.5K
                                </div>
                              </div>
                              <img loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b6bd6bc4-08ce-49ee-90e0-56fb70689886?apiKey=12cdcbacd64a44978db653c66e993585&"
                                className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full" />
                            </div>
                            <div className="items-stretch flex justify-between gap-1.5 px-px">
                              <img loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f736da97-ff08-4bb2-8ced-889bb67f1af1?apiKey=12cdcbacd64a44978db653c66e993585&"
                                className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full" />
                              <div className="text-neutral-500 text-center text-sm self-center my-auto">
                                visit website
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-stretch w-[18%] ml-5 max-md:w-full max-md:ml-0">
                        <img loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f7d1c2d9-8e1f-4e8c-8cc5-61213db78829?apiKey=12cdcbacd64a44978db653c66e993585&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f7d1c2d9-8e1f-4e8c-8cc5-61213db78829?apiKey=12cdcbacd64a44978db653c66e993585&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f7d1c2d9-8e1f-4e8c-8cc5-61213db78829?apiKey=12cdcbacd64a44978db653c66e993585&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f7d1c2d9-8e1f-4e8c-8cc5-61213db78829?apiKey=12cdcbacd64a44978db653c66e993585&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f7d1c2d9-8e1f-4e8c-8cc5-61213db78829?apiKey=12cdcbacd64a44978db653c66e993585&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f7d1c2d9-8e1f-4e8c-8cc5-61213db78829?apiKey=12cdcbacd64a44978db653c66e993585&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f7d1c2d9-8e1f-4e8c-8cc5-61213db78829?apiKey=12cdcbacd64a44978db653c66e993585&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f7d1c2d9-8e1f-4e8c-8cc5-61213db78829?apiKey=12cdcbacd64a44978db653c66e993585&"
                          className="aspect-square object-contain object-center w-[132px] justify-center items-center overflow-hidden shrink-0 max-w-full my-auto max-md:mt-10" />
                      </div>
                    </div>
                  </div>
                  <div
                    className="border bg-white self-stretch mt-4 p-8 rounded-3xl border-solid border-black border-opacity-10 max-md:max-w-full max-md:px-5">
                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                      <div className="flex flex-col items-stretch w-[82%] max-md:w-full max-md:ml-0">
                        <div className="items-stretch flex flex-col max-md:max-w-full max-md:mt-10">
                          <div className="text-green-800 text-base font-bold max-md:max-w-full">
                            Girls Who Code
                          </div>
                          <div className="text-black text-opacity-60 text-sm leading-5 mt-5 max-md:max-w-full">
                            Girls Who Code is an international nonprofit
                            organization that aims to support and increase the
                            number of women in computer science. The organization
                            works toward closing the gender employment difference
                            in computing.
                          </div>
                          <div
                            className="justify-between items-stretch border-t-neutral-200 border-b-neutral-200 flex w-full gap-5 mt-5 p-2.5 border-t border-solid border-b max-md:max-w-full max-md:flex-wrap">
                            <div className="items-stretch flex justify-between gap-3">
                              <div className="items-stretch flex justify-between gap-1.5">
                                <img loading="lazy"
                                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/f22d3751-0ba4-4ce9-9d7e-c908e8cb9404?apiKey=12cdcbacd64a44978db653c66e993585&"
                                  className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full" />
                                <div className="text-neutral-500 text-center text-sm self-center my-auto">
                                  3.5K
                                </div>
                              </div>
                              <img loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/538a8742-bfa3-4a58-875f-11056d75c4ee?apiKey=12cdcbacd64a44978db653c66e993585&"
                                className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full" />
                            </div>
                            <div className="items-stretch flex justify-between gap-1.5 px-px">
                              <img loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/10fbb4ee-ae0c-496b-b82c-d5ccc1bad02b?apiKey=12cdcbacd64a44978db653c66e993585&"
                                className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full" />
                              <div className="text-neutral-500 text-center text-sm self-center my-auto">
                                visit website
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-stretch w-[18%] ml-5 max-md:w-full max-md:ml-0">
                        <img loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5d1c8c05-0e6f-478e-88c1-6c0970c00ffb?apiKey=12cdcbacd64a44978db653c66e993585&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d1c8c05-0e6f-478e-88c1-6c0970c00ffb?apiKey=12cdcbacd64a44978db653c66e993585&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d1c8c05-0e6f-478e-88c1-6c0970c00ffb?apiKey=12cdcbacd64a44978db653c66e993585&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d1c8c05-0e6f-478e-88c1-6c0970c00ffb?apiKey=12cdcbacd64a44978db653c66e993585&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d1c8c05-0e6f-478e-88c1-6c0970c00ffb?apiKey=12cdcbacd64a44978db653c66e993585&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d1c8c05-0e6f-478e-88c1-6c0970c00ffb?apiKey=12cdcbacd64a44978db653c66e993585&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d1c8c05-0e6f-478e-88c1-6c0970c00ffb?apiKey=12cdcbacd64a44978db653c66e993585&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d1c8c05-0e6f-478e-88c1-6c0970c00ffb?apiKey=12cdcbacd64a44978db653c66e993585&"
                          className="aspect-square object-contain object-center w-[132px] justify-center items-center overflow-hidden shrink-0 max-w-full my-auto max-md:mt-10" />
                      </div>
                    </div>
                  </div>
                  <div
                    className="border bg-white self-stretch mt-4 p-8 rounded-3xl border-solid border-black border-opacity-10 max-md:max-w-full max-md:px-5">
                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                      <div className="flex flex-col items-stretch w-[82%] max-md:w-full max-md:ml-0">
                        <div className="items-stretch flex flex-col max-md:max-w-full max-md:mt-10">
                          <div className="text-green-800 text-base font-bold max-md:max-w-full">
                            Girls Who Code
                          </div>
                          <div className="text-black text-opacity-60 text-sm leading-5 mt-5 max-md:max-w-full">
                            Girls Who Code is an international nonprofit
                            organization that aims to support and increase the
                            number of women in computer science. The organization
                            works toward closing the gender employment difference
                            in computing.
                          </div>
                          <div
                            className="justify-between items-stretch border-t-neutral-200 border-b-neutral-200 flex w-full gap-5 mt-5 p-2.5 border-t border-solid border-b max-md:max-w-full max-md:flex-wrap">
                            <div className="items-stretch flex justify-between gap-3">
                              <div className="items-stretch flex justify-between gap-1.5">
                                <img loading="lazy"
                                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/fe4b2a94-20a8-4ef7-a2ef-40cd3edca270?apiKey=12cdcbacd64a44978db653c66e993585&"
                                  className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full" />
                                <div className="text-neutral-500 text-center text-sm self-center my-auto">
                                  3.5K
                                </div>
                              </div>
                              <img loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/96de1a8d-a41a-4486-8937-09fc594588bc?apiKey=12cdcbacd64a44978db653c66e993585&"
                                className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full" />
                            </div>
                            <div className="items-stretch flex justify-between gap-1.5 px-px">
                              <img loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a49a627c-98e5-4043-bd66-a1bbee794865?apiKey=12cdcbacd64a44978db653c66e993585&"
                                className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full" />
                              <div className="text-neutral-500 text-center text-sm self-center my-auto">
                                visit website
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-stretch w-[18%] ml-5 max-md:w-full max-md:ml-0">
                        <img loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/973902e0-dec5-4b6c-9558-4dfc6a74ac0c?apiKey=12cdcbacd64a44978db653c66e993585&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/973902e0-dec5-4b6c-9558-4dfc6a74ac0c?apiKey=12cdcbacd64a44978db653c66e993585&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/973902e0-dec5-4b6c-9558-4dfc6a74ac0c?apiKey=12cdcbacd64a44978db653c66e993585&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/973902e0-dec5-4b6c-9558-4dfc6a74ac0c?apiKey=12cdcbacd64a44978db653c66e993585&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/973902e0-dec5-4b6c-9558-4dfc6a74ac0c?apiKey=12cdcbacd64a44978db653c66e993585&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/973902e0-dec5-4b6c-9558-4dfc6a74ac0c?apiKey=12cdcbacd64a44978db653c66e993585&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/973902e0-dec5-4b6c-9558-4dfc6a74ac0c?apiKey=12cdcbacd64a44978db653c66e993585&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/973902e0-dec5-4b6c-9558-4dfc6a74ac0c?apiKey=12cdcbacd64a44978db653c66e993585&"
                          className="aspect-square object-contain object-center w-[132px] justify-center items-center overflow-hidden shrink-0 max-w-full my-auto max-md:mt-10" />
                      </div>
                    </div>
                  </div>
                  <button
                    className="text-orange-500 text-base justify-center items-stretch border self-center w-[249px] max-w-full mt-8 p-5 rounded-lg border-solid border-orange-500 mb-10">
                    SEE ALL ORGANIZATIONS
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[32%] ml-5 max-md:w-full max-md:ml-0">
              <div className="items-start flex flex-col max-md:mt-5">
                <div
                  className="text-orange-500 text-3xl font-bold items-stretch self-stretch justify-center px-5 py-2.5 border-b-neutral-200 border-b border-solid">
                  EVENTS
                </div>
                <div className="justify-between items-center self-stretch flex gap-5 mt-11 px-4 py-3 max-md:mt-10">
                  <img loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/87f3426c-ae17-4152-a06f-fe242dcdd68d?apiKey=12cdcbacd64a44978db653c66e993585&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/87f3426c-ae17-4152-a06f-fe242dcdd68d?apiKey=12cdcbacd64a44978db653c66e993585&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/87f3426c-ae17-4152-a06f-fe242dcdd68d?apiKey=12cdcbacd64a44978db653c66e993585&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/87f3426c-ae17-4152-a06f-fe242dcdd68d?apiKey=12cdcbacd64a44978db653c66e993585&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/87f3426c-ae17-4152-a06f-fe242dcdd68d?apiKey=12cdcbacd64a44978db653c66e993585&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/87f3426c-ae17-4152-a06f-fe242dcdd68d?apiKey=12cdcbacd64a44978db653c66e993585&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/87f3426c-ae17-4152-a06f-fe242dcdd68d?apiKey=12cdcbacd64a44978db653c66e993585&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/87f3426c-ae17-4152-a06f-fe242dcdd68d?apiKey=12cdcbacd64a44978db653c66e993585&"
                    className="aspect-square object-contain object-center w-[45px] overflow-hidden shrink-0 max-w-full my-auto rounded-[50%]" />
                  <div className="justify-center items-stretch self-stretch flex grow basis-[0%] flex-col">
                    <div className="text-emerald-950 text-base">
                      Internet and safety with girls in ICT{" "}
                    </div>
                    <div className="text-neutral-400 text-sm font-semibold mt-1">
                      Women in Tech
                    </div>
                    <div className="text-sky-800 text-xs font-semibold mt-1">
                      23rd November 2022. 12:00 pm (online)
                    </div>
                  </div>
                </div>
                <div className="justify-between items-center self-stretch flex gap-5 mt-5 px-4 py-3">
                  <img loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/49cd6d31-9202-4b30-9d4c-82fe3b723dbf?apiKey=12cdcbacd64a44978db653c66e993585&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/49cd6d31-9202-4b30-9d4c-82fe3b723dbf?apiKey=12cdcbacd64a44978db653c66e993585&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/49cd6d31-9202-4b30-9d4c-82fe3b723dbf?apiKey=12cdcbacd64a44978db653c66e993585&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/49cd6d31-9202-4b30-9d4c-82fe3b723dbf?apiKey=12cdcbacd64a44978db653c66e993585&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/49cd6d31-9202-4b30-9d4c-82fe3b723dbf?apiKey=12cdcbacd64a44978db653c66e993585&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/49cd6d31-9202-4b30-9d4c-82fe3b723dbf?apiKey=12cdcbacd64a44978db653c66e993585&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/49cd6d31-9202-4b30-9d4c-82fe3b723dbf?apiKey=12cdcbacd64a44978db653c66e993585&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/49cd6d31-9202-4b30-9d4c-82fe3b723dbf?apiKey=12cdcbacd64a44978db653c66e993585&"
                    className="aspect-square object-contain object-center w-[45px] overflow-hidden shrink-0 max-w-full my-auto rounded-[50%]" />
                  <div className="justify-center items-stretch self-stretch flex grow basis-[0%] flex-col">
                    <div className="text-emerald-950 text-base">
                      Internet and safety with girls in ICT{" "}
                    </div>
                    <div className="text-neutral-400 text-sm font-semibold mt-1">
                      Women in Tech
                    </div>
                    <div className="text-sky-800 text-xs font-semibold mt-1">
                      23rd November 2022. 12:00 pm (online)
                    </div>
                  </div>
                </div>
                <div className="justify-between items-center self-stretch flex gap-5 mt-5 px-4 py-3">
                  <img loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e6ecdebb-628d-496d-920d-e0d7c73dd692?apiKey=12cdcbacd64a44978db653c66e993585&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e6ecdebb-628d-496d-920d-e0d7c73dd692?apiKey=12cdcbacd64a44978db653c66e993585&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e6ecdebb-628d-496d-920d-e0d7c73dd692?apiKey=12cdcbacd64a44978db653c66e993585&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e6ecdebb-628d-496d-920d-e0d7c73dd692?apiKey=12cdcbacd64a44978db653c66e993585&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e6ecdebb-628d-496d-920d-e0d7c73dd692?apiKey=12cdcbacd64a44978db653c66e993585&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e6ecdebb-628d-496d-920d-e0d7c73dd692?apiKey=12cdcbacd64a44978db653c66e993585&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e6ecdebb-628d-496d-920d-e0d7c73dd692?apiKey=12cdcbacd64a44978db653c66e993585&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e6ecdebb-628d-496d-920d-e0d7c73dd692?apiKey=12cdcbacd64a44978db653c66e993585&"
                    className="aspect-square object-contain object-center w-[45px] overflow-hidden shrink-0 max-w-full my-auto rounded-[50%]" />
                  <div className="justify-center items-stretch self-stretch flex grow basis-[0%] flex-col">
                    <div className="text-emerald-950 text-base">
                      Internet and safety with girls in ICT{" "}
                    </div>
                    <div className="text-neutral-400 text-sm font-semibold mt-1">
                      Women in Tech
                    </div>
                    <div className="text-sky-800 text-xs font-semibold mt-1">
                      23rd November 2022. 12:00 pm (online)
                    </div>
                  </div>
                </div>
                <div className="justify-between items-center self-stretch flex gap-5 mt-5 px-4 py-3">
                  <img loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f0c03cb3-ec5f-40ed-905e-da5d21a53f4e?apiKey=12cdcbacd64a44978db653c66e993585&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f0c03cb3-ec5f-40ed-905e-da5d21a53f4e?apiKey=12cdcbacd64a44978db653c66e993585&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f0c03cb3-ec5f-40ed-905e-da5d21a53f4e?apiKey=12cdcbacd64a44978db653c66e993585&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f0c03cb3-ec5f-40ed-905e-da5d21a53f4e?apiKey=12cdcbacd64a44978db653c66e993585&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f0c03cb3-ec5f-40ed-905e-da5d21a53f4e?apiKey=12cdcbacd64a44978db653c66e993585&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f0c03cb3-ec5f-40ed-905e-da5d21a53f4e?apiKey=12cdcbacd64a44978db653c66e993585&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f0c03cb3-ec5f-40ed-905e-da5d21a53f4e?apiKey=12cdcbacd64a44978db653c66e993585&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f0c03cb3-ec5f-40ed-905e-da5d21a53f4e?apiKey=12cdcbacd64a44978db653c66e993585&"
                    className="aspect-square object-contain object-center w-[45px] overflow-hidden shrink-0 max-w-full my-auto rounded-[50%]" />
                  <div className="justify-center items-stretch self-stretch flex grow basis-[0%] flex-col">
                    <div className="text-emerald-950 text-base">
                      Internet and safety with girls in ICT{" "}
                    </div>
                    <div className="text-neutral-400 text-sm font-semibold mt-1">
                      Women in Tech
                    </div>
                    <div className="text-sky-800 text-xs font-semibold mt-1">
                      23rd November 2022. 12:00 pm (online)
                    </div>
                  </div>
                </div>
                <div
                  className="text-orange-500 text-base justify-center items-stretch border self-center w-[207px] max-w-full mt-6 p-5 rounded-lg border-solid border-orange-500">
                  SEE MORE EVENTS
                </div>
                <div
                  className="text-orange-500 text-3xl font-bold items-stretch self-stretch justify-center mt-11 px-5 py-2.5 border-b-neutral-200 border-b border-solid max-md:mt-10">
                  NEWS CENTER
                </div>
                <div className="items-stretch self-stretch flex flex-col px-5 py-2.5">
                  <div className="flex justify-between gap-4 items-start">
                    <div className="text-emerald-950 text-xl underline grow shrink basis-auto">
                      Important Safety Concerns For Women In Gyms
                    </div>
                    <img loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/4310333e-3d8b-4e56-9d4c-a0201915f472?apiKey=12cdcbacd64a44978db653c66e993585&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4310333e-3d8b-4e56-9d4c-a0201915f472?apiKey=12cdcbacd64a44978db653c66e993585&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4310333e-3d8b-4e56-9d4c-a0201915f472?apiKey=12cdcbacd64a44978db653c66e993585&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4310333e-3d8b-4e56-9d4c-a0201915f472?apiKey=12cdcbacd64a44978db653c66e993585&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4310333e-3d8b-4e56-9d4c-a0201915f472?apiKey=12cdcbacd64a44978db653c66e993585&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4310333e-3d8b-4e56-9d4c-a0201915f472?apiKey=12cdcbacd64a44978db653c66e993585&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4310333e-3d8b-4e56-9d4c-a0201915f472?apiKey=12cdcbacd64a44978db653c66e993585&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4310333e-3d8b-4e56-9d4c-a0201915f472?apiKey=12cdcbacd64a44978db653c66e993585&"
                      className="aspect-square object-contain object-center w-[65px] overflow-hidden self-stretch shrink-0 max-w-full" />
                  </div>
                  <div className="text-zinc-600 text-xs mt-3">5 mins read</div>
                  <div className="flex justify-between gap-4 mt-5 items-start">
                    <div className="text-emerald-950 text-xl underline grow shrink basis-auto">
                      Push forward: 10 ways to end violence against women
                    </div>
                    <img loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/92ed1a2a-13b3-4708-b7a8-1b6db8202033?apiKey=12cdcbacd64a44978db653c66e993585&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/92ed1a2a-13b3-4708-b7a8-1b6db8202033?apiKey=12cdcbacd64a44978db653c66e993585&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/92ed1a2a-13b3-4708-b7a8-1b6db8202033?apiKey=12cdcbacd64a44978db653c66e993585&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/92ed1a2a-13b3-4708-b7a8-1b6db8202033?apiKey=12cdcbacd64a44978db653c66e993585&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/92ed1a2a-13b3-4708-b7a8-1b6db8202033?apiKey=12cdcbacd64a44978db653c66e993585&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/92ed1a2a-13b3-4708-b7a8-1b6db8202033?apiKey=12cdcbacd64a44978db653c66e993585&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/92ed1a2a-13b3-4708-b7a8-1b6db8202033?apiKey=12cdcbacd64a44978db653c66e993585&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/92ed1a2a-13b3-4708-b7a8-1b6db8202033?apiKey=12cdcbacd64a44978db653c66e993585&"
                      className="aspect-square object-contain object-center w-[65px] overflow-hidden self-stretch shrink-0 max-w-full" />
                  </div>
                  <div className="text-zinc-600 text-xs mt-3">3 mins read</div>
                  <div className="items-stretch flex justify-between gap-4 mt-5">
                    <div className="text-emerald-950 text-xl underline grow shrink basis-auto">
                      Fun Fact: Women-Founded Startups Generate More Money Than
                      Male-Founded Startups
                    </div>
                    <img loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/acfefcb2-7e50-4b3b-88e0-f7a2524ecfc3?apiKey=12cdcbacd64a44978db653c66e993585&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/acfefcb2-7e50-4b3b-88e0-f7a2524ecfc3?apiKey=12cdcbacd64a44978db653c66e993585&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/acfefcb2-7e50-4b3b-88e0-f7a2524ecfc3?apiKey=12cdcbacd64a44978db653c66e993585&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/acfefcb2-7e50-4b3b-88e0-f7a2524ecfc3?apiKey=12cdcbacd64a44978db653c66e993585&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/acfefcb2-7e50-4b3b-88e0-f7a2524ecfc3?apiKey=12cdcbacd64a44978db653c66e993585&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/acfefcb2-7e50-4b3b-88e0-f7a2524ecfc3?apiKey=12cdcbacd64a44978db653c66e993585&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/acfefcb2-7e50-4b3b-88e0-f7a2524ecfc3?apiKey=12cdcbacd64a44978db653c66e993585&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/acfefcb2-7e50-4b3b-88e0-f7a2524ecfc3?apiKey=12cdcbacd64a44978db653c66e993585&"
                      className="aspect-square object-contain object-center w-[65px] overflow-hidden shrink-0 max-w-full self-start" />
                  </div>
                  <div className="text-zinc-600 text-xs mt-3">2 mins read</div>
                  <div className="items-stretch flex justify-between gap-4 mt-5">
                    <div className="text-emerald-950 text-xl underline grow shrink basis-auto">
                      Our Reproductive Rights Will Not Be Decided By A Single Vote
                    </div>
                    <img loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b64c1d31-bad7-4bec-af0c-93c5943f5c3e?apiKey=12cdcbacd64a44978db653c66e993585&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b64c1d31-bad7-4bec-af0c-93c5943f5c3e?apiKey=12cdcbacd64a44978db653c66e993585&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b64c1d31-bad7-4bec-af0c-93c5943f5c3e?apiKey=12cdcbacd64a44978db653c66e993585&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b64c1d31-bad7-4bec-af0c-93c5943f5c3e?apiKey=12cdcbacd64a44978db653c66e993585&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b64c1d31-bad7-4bec-af0c-93c5943f5c3e?apiKey=12cdcbacd64a44978db653c66e993585&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b64c1d31-bad7-4bec-af0c-93c5943f5c3e?apiKey=12cdcbacd64a44978db653c66e993585&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b64c1d31-bad7-4bec-af0c-93c5943f5c3e?apiKey=12cdcbacd64a44978db653c66e993585&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b64c1d31-bad7-4bec-af0c-93c5943f5c3e?apiKey=12cdcbacd64a44978db653c66e993585&"
                      className="aspect-square object-contain object-center w-[65px] overflow-hidden shrink-0 max-w-full self-start" />
                  </div>
                  <div className="text-zinc-600 text-xs mt-3">7 mins read</div>
                </div>
                <button
                  className="text-orange-500 text-base justify-center items-stretch border shadow-sm self-center  max-w-full mt-10 p-5 rounded-lg border-solid border-orange-500 max-md:mt-10">
                  MORE FROM NEWS CENTER
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          className="bg-[#F0EBD6] self-stretch z-[1] flex w-full flex-col mt-20 pt-12 px-16 max-md:max-w-full max-md:mt-10 max-md:px-5">
          <div
            className="text-green-800 text-5xl font-semibold max-w-[600px] self-center mt-9 max-md:max-w-full max-md:text-4xl">
            Community Discussions
          </div>
          <div
            className="text-black text-opacity-90 text-center text-base leading-6 self-center max-w-[736px] mt-3 max-md:max-w-full">
            A platform that seeks to help Women thrive in their own environment ,
            <br /> a free space to share with people who can relate, a community
            for all who want and ask for help.
          </div>
          <div className="shadow-sm self-stretch mt-11 max-md:max-w-full max-md:mt-10">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-3/12 max-md:w-full max-md:ml-0">
                <div
                  className="justify-center items-stretch bg-white flex grow flex-col w-full pt-6 pb-12 px-6 rounded-3xl max-md:mt-5 max-md:px-5">
                  <div className="justify-center items-stretch bg-slate-200 flex flex-col p-2.5">
                    <img loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/525b2f46-be25-4721-b43c-5cb642182b00?apiKey=12cdcbacd64a44978db653c66e993585&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/525b2f46-be25-4721-b43c-5cb642182b00?apiKey=12cdcbacd64a44978db653c66e993585&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/525b2f46-be25-4721-b43c-5cb642182b00?apiKey=12cdcbacd64a44978db653c66e993585&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/525b2f46-be25-4721-b43c-5cb642182b00?apiKey=12cdcbacd64a44978db653c66e993585&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/525b2f46-be25-4721-b43c-5cb642182b00?apiKey=12cdcbacd64a44978db653c66e993585&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/525b2f46-be25-4721-b43c-5cb642182b00?apiKey=12cdcbacd64a44978db653c66e993585&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/525b2f46-be25-4721-b43c-5cb642182b00?apiKey=12cdcbacd64a44978db653c66e993585&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/525b2f46-be25-4721-b43c-5cb642182b00?apiKey=12cdcbacd64a44978db653c66e993585&"
                      className="aspect-square object-contain object-center w-full overflow-hidden max-md:mr-0.5" />
                  </div>
                  <div className="text-green-800 text-2xl font-semibold leading-5 mt-5">
                    Sensitization
                  </div>
                  <div className="text-zinc-600 text-sm leading-7 tracking-tight mt-2.5 mb-4">
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
                  <div className="text-green-800 text-2xl font-semibold leading-5 mt-5">
                    Health
                  </div>
                  <div className="text-zinc-600 text-sm leading-7 tracking-tight mt-2.5">
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
                  <div className="text-green-800 text-2xl font-semibold leading-5 mt-5">
                    Girl Power
                  </div>
                  <div className="text-zinc-600 text-sm leading-7 tracking-tight mt-2.5">
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
                  <div className="text-green-800 text-2xl font-semibold leading-5 mt-5">
                    Growth
                  </div>
                  <div className="text-zinc-600 text-sm leading-7 tracking-tight mt-2.5">
                    Empowering women is all about helping women grow in their
                    field and become better humans
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="text-white-100 text-base font-medium justify-center items-center bg-green-800 self-center w-44 max-w-full mt-11 px-5 py-4 rounded-xl max-md:mt-10">
            Join Discussion
          </button>
          <svg className="-mb-[45px]" width="88" height="85" viewBox="0 0 88 85" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.17"
              d="M32.1321 11.2577C34.8218 14.1002 37.5062 16.9373 40.1959 19.7799C43.5488 23.3234 46.3554 23.3668 50.212 19.8433C56.1113 14.3868 61.9333 8.93036 67.652 3.34144C70.2023 0.834164 71.9506 0.320204 74.3576 3.27328C77.8685 7.55662 81.8361 11.481 85.7596 15.4053C87.8763 17.5138 87.6327 19.2088 85.4283 21.2632C79.3701 26.8909 73.3798 32.5903 67.4046 38.3173C63.7975 41.7303 63.6683 44.5517 66.8679 47.9683C72.1532 53.5541 77.362 59.2227 82.7693 64.7036C85.0513 67.0218 85.0507 68.8216 82.4608 71.1467C78.1947 74.974 73.9843 78.8951 69.9644 82.9708C67.3204 85.6714 65.5589 85.3296 63.2932 82.8181C58.4208 77.3647 53.2927 72.1322 48.2517 66.8279C44.225 62.5723 41.7069 62.6117 37.1106 66.9084C31.3907 72.3206 25.6191 77.6666 19.9566 83.1396C17.6293 85.4149 15.8958 85.4651 13.8193 83.1303C10.0404 78.8949 6.13905 74.7718 2.11537 70.761C-0.011776 68.6415 0.200145 67.0182 2.4442 64.9472C8.22621 59.6122 13.9148 54.1669 19.5924 48.7215C24.2617 44.3033 24.3725 41.6146 20.2583 37.2431C15.2289 31.9277 10.3046 26.513 5.12867 21.3467C2.80245 19.0286 2.74647 17.2508 5.30448 14.9036C9.74805 10.8665 14.0558 6.68583 18.3845 2.52725C20.4215 0.599831 22.077 0.163203 24.0321 2.59191C26.5725 5.73266 29.4425 8.41508 32.1321 11.2577Z"
              fill="#106840" />
          </svg>

        </div>

        <div
          className="justify-center items-center bg-secondaryOffWhite self-stretch flex mt-0 w-full flex-col px-16 py-12 max-md:max-w-full max-md:px-5">
          <div className="text-green-800 text-5xl font-semibold max-w-[379px] self-center mt-16 max-md:text-4xl max-md:mt-10">
            How this works
          </div>
          <div
            className="text-black text-opacity-90 text-center text-base leading-6 self-center max-w-[736px] mt-3 max-md:max-w-full">
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
                        <div className="text-neutral-950 text-2xl font-semibold">
                          Add organization
                        </div>
                        <div className="text-black text-opacity-90 text-sm mt-4">
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
                        <div className="text-neutral-950 text-2xl font-semibold">
                          Share
                        </div>
                        <div className="text-black text-opacity-90 text-sm mt-4">
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
                  <div className="text-neutral-950 text-2xl font-semibold">
                    Engage
                  </div>
                  <div className="text-black text-opacity-90 text-sm mt-4">
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
        </div>
      </section>
    </TransitionElement>
  );
};

export default LandingPage;
