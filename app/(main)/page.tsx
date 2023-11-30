"use client";
import React, { useEffect } from "react";
import doddles from '@/public/images/img_circledoodle.png'
import maginify from '@/public/images/img_search.svg'
import womenInPower from '@/public/images/img_womeninpower1.svg'
const LandingPage = () => {

  return (
    <>
      <div className="lg:-ml-[84.7%] z-10 lg:-mt-10">
        <img src={doddles.src} alt="" className="lg:w-[208px] lg:max-w-w-[208px]" />
      </div>
      <div className="bg-primary w-[95.2%] -mt-[170px] rounded-xl flex justify-between items-center ">
        <div className="flex flex-col gap-4 pl-[160px]">
          <p className="text-4xl font-semibold text-white-100">Together we are <i className="text-secondary">Able</i></p>
          <p className="text-white-100">
            Discover and learn about women organizations with only one click.
          </p>
          <div className="flex justify-center items-center">
            <input type="text" placeholder="search for organization" className="lg:w-[495px] rounded-tl-md rounded-bl-md px-5 py-3" />
            <button className="bg-btnWarning px-3 py-[10.5px] rounded-br-md rounded-tr-md"><img src={maginify.src} alt="" /></button>
          </div>
          <div className="flex gap-4 w-full">
            <p className="text-white-100">Search for:</p>
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
              <div className="text-orange-500 text-3xl font-bold items-stretch justify-center px-5 py-2.5 border-b-neutral-200 border-b border-solid max-md:max-w-full">
                TOP ORGANIZATIONS
              </div>
              <div className="items-center flex flex-col mt-9 px-6 max-md:max-w-full max-md:px-5">
                <div className="border bg-white self-stretch p-8 rounded-3xl border-solid border-black border-opacity-10 max-md:max-w-full max-md:px-5">
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
                        <div className="justify-between items-stretch border-t-neutral-200 border-b-neutral-200 flex w-full gap-5 mt-5 p-2.5 border-t border-solid border-b max-md:max-w-full max-md:flex-wrap">
                          <div className="items-stretch flex justify-between gap-3">
                            <div className="items-stretch flex justify-between gap-1.5">
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2f67cfee-e3eb-4fdd-b652-1358acdb1a5e?apiKey=12cdcbacd64a44978db653c66e993585&"
                                className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                              />
                              <div className="text-neutral-500 text-center text-sm self-center my-auto">
                                3.5K
                              </div>
                            </div>
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b3b8b990-cbfb-404d-b4ac-400f46957ca8?apiKey=12cdcbacd64a44978db653c66e993585&"
                              className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                            />
                          </div>
                          <div className="items-stretch flex justify-between gap-1.5 px-px">
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2c0ac05a-4f93-460c-be92-4615a52fcea7?apiKey=12cdcbacd64a44978db653c66e993585&"
                              className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                            />
                            <div className="text-neutral-500 text-center text-sm self-center my-auto">
                              visit website
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-stretch w-[18%] ml-5 max-md:w-full max-md:ml-0">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9fe7745d-156a-4294-acb9-0595384303ea?apiKey=12cdcbacd64a44978db653c66e993585&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9fe7745d-156a-4294-acb9-0595384303ea?apiKey=12cdcbacd64a44978db653c66e993585&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9fe7745d-156a-4294-acb9-0595384303ea?apiKey=12cdcbacd64a44978db653c66e993585&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9fe7745d-156a-4294-acb9-0595384303ea?apiKey=12cdcbacd64a44978db653c66e993585&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9fe7745d-156a-4294-acb9-0595384303ea?apiKey=12cdcbacd64a44978db653c66e993585&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9fe7745d-156a-4294-acb9-0595384303ea?apiKey=12cdcbacd64a44978db653c66e993585&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9fe7745d-156a-4294-acb9-0595384303ea?apiKey=12cdcbacd64a44978db653c66e993585&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9fe7745d-156a-4294-acb9-0595384303ea?apiKey=12cdcbacd64a44978db653c66e993585&"
                        className="aspect-square object-contain object-center w-[132px] justify-center items-center overflow-hidden shrink-0 max-w-full my-auto max-md:mt-10"
                      />
                    </div>
                  </div>
                </div>
                <div className="border bg-white self-stretch mt-4 p-8 rounded-3xl border-solid border-black border-opacity-10 max-md:max-w-full max-md:px-5">
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
                        <div className="justify-between items-stretch border-t-neutral-200 border-b-neutral-200 flex w-full gap-5 mt-5 p-2.5 border-t border-solid border-b max-md:max-w-full max-md:flex-wrap">
                          <div className="items-stretch flex justify-between gap-3">
                            <div className="items-stretch flex justify-between gap-1.5">
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ece6e04e-6c97-4a9d-84ff-7e18923e61cd?apiKey=12cdcbacd64a44978db653c66e993585&"
                                className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                              />
                              <div className="text-neutral-500 text-center text-sm self-center my-auto">
                                3.5K
                              </div>
                            </div>
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/34fbb3dd-6f72-4ec1-8e4f-1062eab182cb?apiKey=12cdcbacd64a44978db653c66e993585&"
                              className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                            />
                          </div>
                          <div className="items-stretch flex justify-between gap-1.5 px-px">
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/fdc1e2b1-1297-4a83-8305-c6825c2a45c6?apiKey=12cdcbacd64a44978db653c66e993585&"
                              className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                            />
                            <div className="text-neutral-500 text-center text-sm self-center my-auto">
                              visit website
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-stretch w-[18%] ml-5 max-md:w-full max-md:ml-0">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/55302476-3554-490f-95cc-cbc3026442bb?apiKey=12cdcbacd64a44978db653c66e993585&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/55302476-3554-490f-95cc-cbc3026442bb?apiKey=12cdcbacd64a44978db653c66e993585&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/55302476-3554-490f-95cc-cbc3026442bb?apiKey=12cdcbacd64a44978db653c66e993585&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/55302476-3554-490f-95cc-cbc3026442bb?apiKey=12cdcbacd64a44978db653c66e993585&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/55302476-3554-490f-95cc-cbc3026442bb?apiKey=12cdcbacd64a44978db653c66e993585&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/55302476-3554-490f-95cc-cbc3026442bb?apiKey=12cdcbacd64a44978db653c66e993585&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/55302476-3554-490f-95cc-cbc3026442bb?apiKey=12cdcbacd64a44978db653c66e993585&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/55302476-3554-490f-95cc-cbc3026442bb?apiKey=12cdcbacd64a44978db653c66e993585&"
                        className="aspect-square object-contain object-center w-[132px] justify-center items-center overflow-hidden shrink-0 max-w-full my-auto max-md:mt-10"
                      />
                    </div>
                  </div>
                </div>
                <div className="border bg-white self-stretch mt-4 p-8 rounded-3xl border-solid border-black border-opacity-10 max-md:max-w-full max-md:px-5">
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
                        <div className="justify-between items-stretch border-t-neutral-200 border-b-neutral-200 flex w-full gap-5 mt-5 p-2.5 border-t border-solid border-b max-md:max-w-full max-md:flex-wrap">
                          <div className="items-stretch flex justify-between gap-3">
                            <div className="items-stretch flex justify-between gap-1.5">
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/10e492cc-1ac2-403b-972f-e14ace50d1e6?apiKey=12cdcbacd64a44978db653c66e993585&"
                                className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                              />
                              <div className="text-neutral-500 text-center text-sm self-center my-auto">
                                3.5K
                              </div>
                            </div>
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/75333a36-ecb6-4bc8-b26f-c37a3fa34ffa?apiKey=12cdcbacd64a44978db653c66e993585&"
                              className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                            />
                          </div>
                          <div className="items-stretch flex justify-between gap-1.5 px-px">
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/74ad52b6-1f93-45e5-9552-65471fb1b710?apiKey=12cdcbacd64a44978db653c66e993585&"
                              className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                            />
                            <div className="text-neutral-500 text-center text-sm self-center my-auto">
                              visit website
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-stretch w-[18%] ml-5 max-md:w-full max-md:ml-0">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/affd4066-710e-4aa9-b074-50f7efd60217?apiKey=12cdcbacd64a44978db653c66e993585&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/affd4066-710e-4aa9-b074-50f7efd60217?apiKey=12cdcbacd64a44978db653c66e993585&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/affd4066-710e-4aa9-b074-50f7efd60217?apiKey=12cdcbacd64a44978db653c66e993585&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/affd4066-710e-4aa9-b074-50f7efd60217?apiKey=12cdcbacd64a44978db653c66e993585&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/affd4066-710e-4aa9-b074-50f7efd60217?apiKey=12cdcbacd64a44978db653c66e993585&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/affd4066-710e-4aa9-b074-50f7efd60217?apiKey=12cdcbacd64a44978db653c66e993585&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/affd4066-710e-4aa9-b074-50f7efd60217?apiKey=12cdcbacd64a44978db653c66e993585&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/affd4066-710e-4aa9-b074-50f7efd60217?apiKey=12cdcbacd64a44978db653c66e993585&"
                        className="aspect-square object-contain object-center w-[132px] justify-center items-center overflow-hidden shrink-0 max-w-full my-auto max-md:mt-10"
                      />
                    </div>
                  </div>
                </div>
                <div className="border bg-white self-stretch mt-4 p-8 rounded-3xl border-solid border-black border-opacity-10 max-md:max-w-full max-md:px-5">
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
                        <div className="justify-between items-stretch border-t-neutral-200 border-b-neutral-200 flex w-full gap-5 mt-5 p-2.5 border-t border-solid border-b max-md:max-w-full max-md:flex-wrap">
                          <div className="items-stretch flex justify-between gap-3">
                            <div className="items-stretch flex justify-between gap-1.5">
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0382f940-172d-441d-8826-ad27fa8ba761?apiKey=12cdcbacd64a44978db653c66e993585&"
                                className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                              />
                              <div className="text-neutral-500 text-center text-sm self-center my-auto">
                                3.5K
                              </div>
                            </div>
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b6bd6bc4-08ce-49ee-90e0-56fb70689886?apiKey=12cdcbacd64a44978db653c66e993585&"
                              className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                            />
                          </div>
                          <div className="items-stretch flex justify-between gap-1.5 px-px">
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f736da97-ff08-4bb2-8ced-889bb67f1af1?apiKey=12cdcbacd64a44978db653c66e993585&"
                              className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                            />
                            <div className="text-neutral-500 text-center text-sm self-center my-auto">
                              visit website
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-stretch w-[18%] ml-5 max-md:w-full max-md:ml-0">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f7d1c2d9-8e1f-4e8c-8cc5-61213db78829?apiKey=12cdcbacd64a44978db653c66e993585&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f7d1c2d9-8e1f-4e8c-8cc5-61213db78829?apiKey=12cdcbacd64a44978db653c66e993585&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f7d1c2d9-8e1f-4e8c-8cc5-61213db78829?apiKey=12cdcbacd64a44978db653c66e993585&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f7d1c2d9-8e1f-4e8c-8cc5-61213db78829?apiKey=12cdcbacd64a44978db653c66e993585&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f7d1c2d9-8e1f-4e8c-8cc5-61213db78829?apiKey=12cdcbacd64a44978db653c66e993585&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f7d1c2d9-8e1f-4e8c-8cc5-61213db78829?apiKey=12cdcbacd64a44978db653c66e993585&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f7d1c2d9-8e1f-4e8c-8cc5-61213db78829?apiKey=12cdcbacd64a44978db653c66e993585&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f7d1c2d9-8e1f-4e8c-8cc5-61213db78829?apiKey=12cdcbacd64a44978db653c66e993585&"
                        className="aspect-square object-contain object-center w-[132px] justify-center items-center overflow-hidden shrink-0 max-w-full my-auto max-md:mt-10"
                      />
                    </div>
                  </div>
                </div>
                <div className="border bg-white self-stretch mt-4 p-8 rounded-3xl border-solid border-black border-opacity-10 max-md:max-w-full max-md:px-5">
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
                        <div className="justify-between items-stretch border-t-neutral-200 border-b-neutral-200 flex w-full gap-5 mt-5 p-2.5 border-t border-solid border-b max-md:max-w-full max-md:flex-wrap">
                          <div className="items-stretch flex justify-between gap-3">
                            <div className="items-stretch flex justify-between gap-1.5">
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f22d3751-0ba4-4ce9-9d7e-c908e8cb9404?apiKey=12cdcbacd64a44978db653c66e993585&"
                                className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                              />
                              <div className="text-neutral-500 text-center text-sm self-center my-auto">
                                3.5K
                              </div>
                            </div>
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/538a8742-bfa3-4a58-875f-11056d75c4ee?apiKey=12cdcbacd64a44978db653c66e993585&"
                              className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                            />
                          </div>
                          <div className="items-stretch flex justify-between gap-1.5 px-px">
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/10fbb4ee-ae0c-496b-b82c-d5ccc1bad02b?apiKey=12cdcbacd64a44978db653c66e993585&"
                              className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                            />
                            <div className="text-neutral-500 text-center text-sm self-center my-auto">
                              visit website
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-stretch w-[18%] ml-5 max-md:w-full max-md:ml-0">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5d1c8c05-0e6f-478e-88c1-6c0970c00ffb?apiKey=12cdcbacd64a44978db653c66e993585&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d1c8c05-0e6f-478e-88c1-6c0970c00ffb?apiKey=12cdcbacd64a44978db653c66e993585&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d1c8c05-0e6f-478e-88c1-6c0970c00ffb?apiKey=12cdcbacd64a44978db653c66e993585&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d1c8c05-0e6f-478e-88c1-6c0970c00ffb?apiKey=12cdcbacd64a44978db653c66e993585&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d1c8c05-0e6f-478e-88c1-6c0970c00ffb?apiKey=12cdcbacd64a44978db653c66e993585&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d1c8c05-0e6f-478e-88c1-6c0970c00ffb?apiKey=12cdcbacd64a44978db653c66e993585&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d1c8c05-0e6f-478e-88c1-6c0970c00ffb?apiKey=12cdcbacd64a44978db653c66e993585&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d1c8c05-0e6f-478e-88c1-6c0970c00ffb?apiKey=12cdcbacd64a44978db653c66e993585&"
                        className="aspect-square object-contain object-center w-[132px] justify-center items-center overflow-hidden shrink-0 max-w-full my-auto max-md:mt-10"
                      />
                    </div>
                  </div>
                </div>
                <div className="border bg-white self-stretch mt-4 p-8 rounded-3xl border-solid border-black border-opacity-10 max-md:max-w-full max-md:px-5">
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
                        <div className="justify-between items-stretch border-t-neutral-200 border-b-neutral-200 flex w-full gap-5 mt-5 p-2.5 border-t border-solid border-b max-md:max-w-full max-md:flex-wrap">
                          <div className="items-stretch flex justify-between gap-3">
                            <div className="items-stretch flex justify-between gap-1.5">
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/fe4b2a94-20a8-4ef7-a2ef-40cd3edca270?apiKey=12cdcbacd64a44978db653c66e993585&"
                                className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                              />
                              <div className="text-neutral-500 text-center text-sm self-center my-auto">
                                3.5K
                              </div>
                            </div>
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/96de1a8d-a41a-4486-8937-09fc594588bc?apiKey=12cdcbacd64a44978db653c66e993585&"
                              className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                            />
                          </div>
                          <div className="items-stretch flex justify-between gap-1.5 px-px">
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a49a627c-98e5-4043-bd66-a1bbee794865?apiKey=12cdcbacd64a44978db653c66e993585&"
                              className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                            />
                            <div className="text-neutral-500 text-center text-sm self-center my-auto">
                              visit website
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-stretch w-[18%] ml-5 max-md:w-full max-md:ml-0">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/973902e0-dec5-4b6c-9558-4dfc6a74ac0c?apiKey=12cdcbacd64a44978db653c66e993585&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/973902e0-dec5-4b6c-9558-4dfc6a74ac0c?apiKey=12cdcbacd64a44978db653c66e993585&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/973902e0-dec5-4b6c-9558-4dfc6a74ac0c?apiKey=12cdcbacd64a44978db653c66e993585&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/973902e0-dec5-4b6c-9558-4dfc6a74ac0c?apiKey=12cdcbacd64a44978db653c66e993585&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/973902e0-dec5-4b6c-9558-4dfc6a74ac0c?apiKey=12cdcbacd64a44978db653c66e993585&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/973902e0-dec5-4b6c-9558-4dfc6a74ac0c?apiKey=12cdcbacd64a44978db653c66e993585&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/973902e0-dec5-4b6c-9558-4dfc6a74ac0c?apiKey=12cdcbacd64a44978db653c66e993585&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/973902e0-dec5-4b6c-9558-4dfc6a74ac0c?apiKey=12cdcbacd64a44978db653c66e993585&"
                        className="aspect-square object-contain object-center w-[132px] justify-center items-center overflow-hidden shrink-0 max-w-full my-auto max-md:mt-10"
                      />
                    </div>
                  </div>
                </div>
                <button className="text-orange-500 text-base justify-center items-stretch border self-center w-[249px] max-w-full mt-8 p-5 rounded-lg border-solid border-orange-500 mb-10">
                  SEE ALL ORGANIZATIONS
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[32%] ml-5 max-md:w-full max-md:ml-0">
            <div className="items-start flex flex-col max-md:mt-5">
              <div className="text-orange-500 text-3xl font-bold items-stretch self-stretch justify-center px-5 py-2.5 border-b-neutral-200 border-b border-solid">
                EVENTS
              </div>
              <div className="justify-between items-center self-stretch flex gap-5 mt-11 px-4 py-3 max-md:mt-10">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/87f3426c-ae17-4152-a06f-fe242dcdd68d?apiKey=12cdcbacd64a44978db653c66e993585&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/87f3426c-ae17-4152-a06f-fe242dcdd68d?apiKey=12cdcbacd64a44978db653c66e993585&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/87f3426c-ae17-4152-a06f-fe242dcdd68d?apiKey=12cdcbacd64a44978db653c66e993585&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/87f3426c-ae17-4152-a06f-fe242dcdd68d?apiKey=12cdcbacd64a44978db653c66e993585&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/87f3426c-ae17-4152-a06f-fe242dcdd68d?apiKey=12cdcbacd64a44978db653c66e993585&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/87f3426c-ae17-4152-a06f-fe242dcdd68d?apiKey=12cdcbacd64a44978db653c66e993585&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/87f3426c-ae17-4152-a06f-fe242dcdd68d?apiKey=12cdcbacd64a44978db653c66e993585&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/87f3426c-ae17-4152-a06f-fe242dcdd68d?apiKey=12cdcbacd64a44978db653c66e993585&"
                  className="aspect-square object-contain object-center w-[45px] overflow-hidden shrink-0 max-w-full my-auto rounded-[50%]"
                />
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
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/49cd6d31-9202-4b30-9d4c-82fe3b723dbf?apiKey=12cdcbacd64a44978db653c66e993585&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/49cd6d31-9202-4b30-9d4c-82fe3b723dbf?apiKey=12cdcbacd64a44978db653c66e993585&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/49cd6d31-9202-4b30-9d4c-82fe3b723dbf?apiKey=12cdcbacd64a44978db653c66e993585&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/49cd6d31-9202-4b30-9d4c-82fe3b723dbf?apiKey=12cdcbacd64a44978db653c66e993585&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/49cd6d31-9202-4b30-9d4c-82fe3b723dbf?apiKey=12cdcbacd64a44978db653c66e993585&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/49cd6d31-9202-4b30-9d4c-82fe3b723dbf?apiKey=12cdcbacd64a44978db653c66e993585&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/49cd6d31-9202-4b30-9d4c-82fe3b723dbf?apiKey=12cdcbacd64a44978db653c66e993585&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/49cd6d31-9202-4b30-9d4c-82fe3b723dbf?apiKey=12cdcbacd64a44978db653c66e993585&"
                  className="aspect-square object-contain object-center w-[45px] overflow-hidden shrink-0 max-w-full my-auto rounded-[50%]"
                />
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
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e6ecdebb-628d-496d-920d-e0d7c73dd692?apiKey=12cdcbacd64a44978db653c66e993585&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e6ecdebb-628d-496d-920d-e0d7c73dd692?apiKey=12cdcbacd64a44978db653c66e993585&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e6ecdebb-628d-496d-920d-e0d7c73dd692?apiKey=12cdcbacd64a44978db653c66e993585&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e6ecdebb-628d-496d-920d-e0d7c73dd692?apiKey=12cdcbacd64a44978db653c66e993585&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e6ecdebb-628d-496d-920d-e0d7c73dd692?apiKey=12cdcbacd64a44978db653c66e993585&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e6ecdebb-628d-496d-920d-e0d7c73dd692?apiKey=12cdcbacd64a44978db653c66e993585&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e6ecdebb-628d-496d-920d-e0d7c73dd692?apiKey=12cdcbacd64a44978db653c66e993585&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e6ecdebb-628d-496d-920d-e0d7c73dd692?apiKey=12cdcbacd64a44978db653c66e993585&"
                  className="aspect-square object-contain object-center w-[45px] overflow-hidden shrink-0 max-w-full my-auto rounded-[50%]"
                />
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
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f0c03cb3-ec5f-40ed-905e-da5d21a53f4e?apiKey=12cdcbacd64a44978db653c66e993585&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f0c03cb3-ec5f-40ed-905e-da5d21a53f4e?apiKey=12cdcbacd64a44978db653c66e993585&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f0c03cb3-ec5f-40ed-905e-da5d21a53f4e?apiKey=12cdcbacd64a44978db653c66e993585&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f0c03cb3-ec5f-40ed-905e-da5d21a53f4e?apiKey=12cdcbacd64a44978db653c66e993585&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f0c03cb3-ec5f-40ed-905e-da5d21a53f4e?apiKey=12cdcbacd64a44978db653c66e993585&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f0c03cb3-ec5f-40ed-905e-da5d21a53f4e?apiKey=12cdcbacd64a44978db653c66e993585&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f0c03cb3-ec5f-40ed-905e-da5d21a53f4e?apiKey=12cdcbacd64a44978db653c66e993585&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f0c03cb3-ec5f-40ed-905e-da5d21a53f4e?apiKey=12cdcbacd64a44978db653c66e993585&"
                  className="aspect-square object-contain object-center w-[45px] overflow-hidden shrink-0 max-w-full my-auto rounded-[50%]"
                />
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
              <div className="text-orange-500 text-base justify-center items-stretch border self-center w-[207px] max-w-full mt-6 p-5 rounded-lg border-solid border-orange-500">
                SEE MORE EVENTS
              </div>
              <div className="text-orange-500 text-3xl font-bold items-stretch self-stretch justify-center mt-11 px-5 py-2.5 border-b-neutral-200 border-b border-solid max-md:mt-10">
                NEWS CENTER
              </div>
              <div className="items-stretch self-stretch flex flex-col px-5 py-2.5">
                <div className="flex justify-between gap-4 items-start">
                  <div className="text-emerald-950 text-xl underline grow shrink basis-auto">
                    Important Safety Concerns For Women In Gyms
                  </div>
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/4310333e-3d8b-4e56-9d4c-a0201915f472?apiKey=12cdcbacd64a44978db653c66e993585&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4310333e-3d8b-4e56-9d4c-a0201915f472?apiKey=12cdcbacd64a44978db653c66e993585&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4310333e-3d8b-4e56-9d4c-a0201915f472?apiKey=12cdcbacd64a44978db653c66e993585&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4310333e-3d8b-4e56-9d4c-a0201915f472?apiKey=12cdcbacd64a44978db653c66e993585&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4310333e-3d8b-4e56-9d4c-a0201915f472?apiKey=12cdcbacd64a44978db653c66e993585&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4310333e-3d8b-4e56-9d4c-a0201915f472?apiKey=12cdcbacd64a44978db653c66e993585&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4310333e-3d8b-4e56-9d4c-a0201915f472?apiKey=12cdcbacd64a44978db653c66e993585&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4310333e-3d8b-4e56-9d4c-a0201915f472?apiKey=12cdcbacd64a44978db653c66e993585&"
                    className="aspect-square object-contain object-center w-[65px] overflow-hidden self-stretch shrink-0 max-w-full"
                  />
                </div>
                <div className="text-zinc-600 text-xs mt-3">5 mins read</div>
                <div className="flex justify-between gap-4 mt-5 items-start">
                  <div className="text-emerald-950 text-xl underline grow shrink basis-auto">
                    Push forward: 10 ways to end violence against women
                  </div>
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/92ed1a2a-13b3-4708-b7a8-1b6db8202033?apiKey=12cdcbacd64a44978db653c66e993585&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/92ed1a2a-13b3-4708-b7a8-1b6db8202033?apiKey=12cdcbacd64a44978db653c66e993585&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/92ed1a2a-13b3-4708-b7a8-1b6db8202033?apiKey=12cdcbacd64a44978db653c66e993585&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/92ed1a2a-13b3-4708-b7a8-1b6db8202033?apiKey=12cdcbacd64a44978db653c66e993585&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/92ed1a2a-13b3-4708-b7a8-1b6db8202033?apiKey=12cdcbacd64a44978db653c66e993585&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/92ed1a2a-13b3-4708-b7a8-1b6db8202033?apiKey=12cdcbacd64a44978db653c66e993585&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/92ed1a2a-13b3-4708-b7a8-1b6db8202033?apiKey=12cdcbacd64a44978db653c66e993585&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/92ed1a2a-13b3-4708-b7a8-1b6db8202033?apiKey=12cdcbacd64a44978db653c66e993585&"
                    className="aspect-square object-contain object-center w-[65px] overflow-hidden self-stretch shrink-0 max-w-full"
                  />
                </div>
                <div className="text-zinc-600 text-xs mt-3">3 mins read</div>
                <div className="items-stretch flex justify-between gap-4 mt-5">
                  <div className="text-emerald-950 text-xl underline grow shrink basis-auto">
                    Fun Fact: Women-Founded Startups Generate More Money Than
                    Male-Founded Startups
                  </div>
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/acfefcb2-7e50-4b3b-88e0-f7a2524ecfc3?apiKey=12cdcbacd64a44978db653c66e993585&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/acfefcb2-7e50-4b3b-88e0-f7a2524ecfc3?apiKey=12cdcbacd64a44978db653c66e993585&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/acfefcb2-7e50-4b3b-88e0-f7a2524ecfc3?apiKey=12cdcbacd64a44978db653c66e993585&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/acfefcb2-7e50-4b3b-88e0-f7a2524ecfc3?apiKey=12cdcbacd64a44978db653c66e993585&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/acfefcb2-7e50-4b3b-88e0-f7a2524ecfc3?apiKey=12cdcbacd64a44978db653c66e993585&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/acfefcb2-7e50-4b3b-88e0-f7a2524ecfc3?apiKey=12cdcbacd64a44978db653c66e993585&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/acfefcb2-7e50-4b3b-88e0-f7a2524ecfc3?apiKey=12cdcbacd64a44978db653c66e993585&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/acfefcb2-7e50-4b3b-88e0-f7a2524ecfc3?apiKey=12cdcbacd64a44978db653c66e993585&"
                    className="aspect-square object-contain object-center w-[65px] overflow-hidden shrink-0 max-w-full self-start"
                  />
                </div>
                <div className="text-zinc-600 text-xs mt-3">2 mins read</div>
                <div className="items-stretch flex justify-between gap-4 mt-5">
                  <div className="text-emerald-950 text-xl underline grow shrink basis-auto">
                    Our Reproductive Rights Will Not Be Decided By A Single Vote
                  </div>
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b64c1d31-bad7-4bec-af0c-93c5943f5c3e?apiKey=12cdcbacd64a44978db653c66e993585&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b64c1d31-bad7-4bec-af0c-93c5943f5c3e?apiKey=12cdcbacd64a44978db653c66e993585&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b64c1d31-bad7-4bec-af0c-93c5943f5c3e?apiKey=12cdcbacd64a44978db653c66e993585&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b64c1d31-bad7-4bec-af0c-93c5943f5c3e?apiKey=12cdcbacd64a44978db653c66e993585&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b64c1d31-bad7-4bec-af0c-93c5943f5c3e?apiKey=12cdcbacd64a44978db653c66e993585&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b64c1d31-bad7-4bec-af0c-93c5943f5c3e?apiKey=12cdcbacd64a44978db653c66e993585&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b64c1d31-bad7-4bec-af0c-93c5943f5c3e?apiKey=12cdcbacd64a44978db653c66e993585&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b64c1d31-bad7-4bec-af0c-93c5943f5c3e?apiKey=12cdcbacd64a44978db653c66e993585&"
                    className="aspect-square object-contain object-center w-[65px] overflow-hidden shrink-0 max-w-full self-start"
                  />
                </div>
                <div className="text-zinc-600 text-xs mt-3">7 mins read</div>
              </div>
              <button className="text-orange-500 text-base justify-center items-stretch border shadow-sm self-center  max-w-full mt-10 p-5 rounded-lg border-solid border-orange-500 max-md:mt-10">
                MORE FROM NEWS CENTER
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
