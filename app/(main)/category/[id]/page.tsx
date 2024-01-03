import React from 'react'
import { Organization } from '@/components/LandingPage/Organization'
import db from '@/data/db.json'
import { CommunityCard } from '@/components/LandingPage/CommunityCard'
import NewsCard from '@/components/LandingPage/NewsCard'
import EventCard from '../../(community)/discussions/components/EventCard'
export default function Categrydetails() {
    return (
        <section className='w-screen px-14 my-10'>
            <div className="bg-green-800 flex gap-[300px] justify-between px-14 py-14 rounded-md">
                <div className='flex flex-col gap-5 w-full px-5'>
                    <p className='text-white-100 text-base font-medium whitespace-nowrap text-quickSand'>Select organization based on:</p>
                    <p className='text-white-100 text-5xl font-semibold whitespace-nowrap mt-3.5 text-sora'>Human Rights</p>
                    <div className="justify-between items-center flex gap-5 bg-white-100 px-[32px] py-[16px] rounded-md w-full">
                        <input type='text' placeholder='Search' className="text-stone-500 text-sm grow whitespace-nowrap focus:outline-none" />
                        <svg width="13" height="16" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.92653 8.11023H8.36237L8.16242 7.91742C8.86226 7.10332 9.28359 6.04641 9.28359 4.89668C9.28359 2.33298 7.20549 0.254883 4.6418 0.254883C2.0781 0.254883 0 2.33298 0 4.89668C0 7.46038 2.0781 9.53847 4.6418 9.53847C5.79153 9.53847 6.84843 9.11714 7.66253 8.4173L7.85535 8.61726V9.18141L11.426 12.7449L12.49 11.6808L8.92653 8.11023ZM4.6418 8.11023C2.86363 8.11023 1.42824 6.67484 1.42824 4.89668C1.42824 3.11851 2.86363 1.68313 4.6418 1.68313C6.41996 1.68313 7.85535 3.11851 7.85535 4.89668C7.85535 6.67484 6.41996 8.11023 4.6418 8.11023Z" fill="black" />
                        </svg>

                    </div>
                </div>
                <div className='w-1/3'>
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1c43bb1d-5bd1-4831-872b-474116f3e3dc?apiKey=12cdcbacd64a44978db653c66e993585&"
                        className=""
                    />
                </div>
            </div>
            <div className="py-[2rem] w-full p-4 mx-auto flex gap-2 relative">
                <div className="w-4/6 flex flex-col py-4">

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
                        <div className='flex justify-end'>
                            <button
                                className="text-[#65B891] text-[20px] justify-center items-stretch  self-center w-[255px] max-w-full mt-8 p-5 rounded-lg  mb-10">
                                View more...
                            </button>
                        </div>
                    </section>
                </div>

                <div className="w-2/6 flex flex-col space-y-10  border-none py-[5rem] sticky top-0 h-screen overflow-y-scroll scrollable-section ">
                    <aside className="w-full p-6 rounded-[1.5rem]">
                        <div className="text-[#65B891] text-3xl font-bold items-stretch self-stretch justify-center px-5 py-2.5 border-b-neutral-200 border-b border-solid lg:-mt-[86.5px]">
                            EVENTS
                        </div>

                        <section className="flex flex-col gap-[2.5rem]  py-12">
                            {db.events.map(event => (
                                <EventCard key={event.id} event={event} />
                            ))}
                            <button
                                className="text-orange-500 text-base justify-center items-stretch border self-center w-full max-w-full mt-6 px-5 py-3 rounded-lg border-solid border-orange-500">
                                SEE MORE EVENTS
                            </button>
                        </section>
                    </aside>
                    <aside className="w-full p-6 rounded-[1.5rem]">
                        <div
                            className="text-[#65B891] text-3xl font-bold items-stretch self-stretch justify-center px-5 py-2.5 border-b-neutral-200 border-b border-solid -mt-[50px]">
                            NEWS CENTER
                        </div>
                        <section className="flex flex-col gap-[0.5rem] py-8">
                            {
                                db.news.map(item => (
                                    <NewsCard item={item} />
                                ))
                            }
                            <button
                                className="text-orange-500 text-base justify-center items-stretch border shadow-sm self-center w-full  max-w-full mt-10 px-5 py-3  rounded-lg border-solid border-orange-500 max-md:mt-10">
                                MORE FROM NEWS CENTER
                            </button>
                        </section>
                    </aside>
                </div>

            </div>

            <span className="w-full md:w-3/4 flex flex-col space-y-2 mt-[100px]">
                <h3 className="text-lg md:text-3xl font-bold text-primary text-sora">Other Categories </h3>
                <div className="w-[6rem] h-1 rounded bg-btnWarning" /></span>
            <div className="no-scrollbar items-stretch mx-10 overflow-x-scroll mb-[300px] w-[95%] self-stretch flex gap-5 mt-8 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
                <div className="justify-center items-center bg-purple-100 flex basis-[0%] flex-col px-12 py-9 rounded-2xl max-md:px-5">
                    <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/48785ef6-4f28-4e3c-afb7-45cd01c6efa7?apiKey=12cdcbacd64a44978db653c66e993585&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/48785ef6-4f28-4e3c-afb7-45cd01c6efa7?apiKey=12cdcbacd64a44978db653c66e993585&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/48785ef6-4f28-4e3c-afb7-45cd01c6efa7?apiKey=12cdcbacd64a44978db653c66e993585&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/48785ef6-4f28-4e3c-afb7-45cd01c6efa7?apiKey=12cdcbacd64a44978db653c66e993585&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/48785ef6-4f28-4e3c-afb7-45cd01c6efa7?apiKey=12cdcbacd64a44978db653c66e993585&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/48785ef6-4f28-4e3c-afb7-45cd01c6efa7?apiKey=12cdcbacd64a44978db653c66e993585&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/48785ef6-4f28-4e3c-afb7-45cd01c6efa7?apiKey=12cdcbacd64a44978db653c66e993585&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/48785ef6-4f28-4e3c-afb7-45cd01c6efa7?apiKey=12cdcbacd64a44978db653c66e993585&"
                        className="aspect-square object-contain object-center w-[118px] overflow-hidden max-w-full"
                    />
                    <div className="text-black text-2xl self-stretch whitespace-nowrap mt-9">
                        Sexual Orientation
                    </div>
                </div>
                <div className="justify-center items-center bg-amber-600 bg-opacity-30 flex basis-[0%] flex-col px-7 py-9 rounded-2xl max-md:px-5">
                    <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a069a73e-cbe3-4788-bc4b-235668d74d1d?apiKey=12cdcbacd64a44978db653c66e993585&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a069a73e-cbe3-4788-bc4b-235668d74d1d?apiKey=12cdcbacd64a44978db653c66e993585&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a069a73e-cbe3-4788-bc4b-235668d74d1d?apiKey=12cdcbacd64a44978db653c66e993585&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a069a73e-cbe3-4788-bc4b-235668d74d1d?apiKey=12cdcbacd64a44978db653c66e993585&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a069a73e-cbe3-4788-bc4b-235668d74d1d?apiKey=12cdcbacd64a44978db653c66e993585&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a069a73e-cbe3-4788-bc4b-235668d74d1d?apiKey=12cdcbacd64a44978db653c66e993585&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a069a73e-cbe3-4788-bc4b-235668d74d1d?apiKey=12cdcbacd64a44978db653c66e993585&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a069a73e-cbe3-4788-bc4b-235668d74d1d?apiKey=12cdcbacd64a44978db653c66e993585&"
                        className="aspect-square object-contain object-center w-[118px] overflow-hidden max-w-full"
                    />
                    <div className="text-black text-2xl self-stretch whitespace-nowrap mt-9">
                        Science & Engineering
                    </div>
                </div>
                <div className="justify-center max-md:max-w-full">
                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                        <div className="flex flex-col items-stretch w-3/12 max-md:w-full max-md:ml-0">
                            <div className="justify-center items-center bg-pink-300 flex grow flex-col w-full px-20 py-9 rounded-2xl max-md:mt-5 max-md:px-5">
                                <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/26dd28ea-22dc-48d0-bc22-ec6a08696432?apiKey=12cdcbacd64a44978db653c66e993585&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/26dd28ea-22dc-48d0-bc22-ec6a08696432?apiKey=12cdcbacd64a44978db653c66e993585&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/26dd28ea-22dc-48d0-bc22-ec6a08696432?apiKey=12cdcbacd64a44978db653c66e993585&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/26dd28ea-22dc-48d0-bc22-ec6a08696432?apiKey=12cdcbacd64a44978db653c66e993585&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/26dd28ea-22dc-48d0-bc22-ec6a08696432?apiKey=12cdcbacd64a44978db653c66e993585&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/26dd28ea-22dc-48d0-bc22-ec6a08696432?apiKey=12cdcbacd64a44978db653c66e993585&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/26dd28ea-22dc-48d0-bc22-ec6a08696432?apiKey=12cdcbacd64a44978db653c66e993585&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/26dd28ea-22dc-48d0-bc22-ec6a08696432?apiKey=12cdcbacd64a44978db653c66e993585&"
                                    className="aspect-square object-contain object-center w-[118px] overflow-hidden max-w-full"
                                />
                                <div className="text-black text-2xl whitespace-nowrap mt-9">
                                    Sports
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
                            <div className="justify-center items-center bg-rose-200 flex grow flex-col w-full px-16 py-9 rounded-2xl max-md:mt-5 max-md:px-5">
                                <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6dbf173e-a954-4576-adb9-9a585b32582e?apiKey=12cdcbacd64a44978db653c66e993585&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6dbf173e-a954-4576-adb9-9a585b32582e?apiKey=12cdcbacd64a44978db653c66e993585&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6dbf173e-a954-4576-adb9-9a585b32582e?apiKey=12cdcbacd64a44978db653c66e993585&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6dbf173e-a954-4576-adb9-9a585b32582e?apiKey=12cdcbacd64a44978db653c66e993585&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6dbf173e-a954-4576-adb9-9a585b32582e?apiKey=12cdcbacd64a44978db653c66e993585&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6dbf173e-a954-4576-adb9-9a585b32582e?apiKey=12cdcbacd64a44978db653c66e993585&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6dbf173e-a954-4576-adb9-9a585b32582e?apiKey=12cdcbacd64a44978db653c66e993585&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6dbf173e-a954-4576-adb9-9a585b32582e?apiKey=12cdcbacd64a44978db653c66e993585&"
                                    className="aspect-square object-contain object-center w-[118px] overflow-hidden max-w-full"
                                />
                                <div className="text-black text-2xl self-stretch whitespace-nowrap mt-9">
                                    Women in tech
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
                            <div className="justify-center items-center bg-purple-300 bg-opacity-50 flex grow flex-col w-full px-20 py-9 rounded-2xl max-md:mt-5 max-md:px-5">
                                <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/857c1a42-dc92-4687-99db-c28fee45a6df?apiKey=12cdcbacd64a44978db653c66e993585&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/857c1a42-dc92-4687-99db-c28fee45a6df?apiKey=12cdcbacd64a44978db653c66e993585&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/857c1a42-dc92-4687-99db-c28fee45a6df?apiKey=12cdcbacd64a44978db653c66e993585&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/857c1a42-dc92-4687-99db-c28fee45a6df?apiKey=12cdcbacd64a44978db653c66e993585&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/857c1a42-dc92-4687-99db-c28fee45a6df?apiKey=12cdcbacd64a44978db653c66e993585&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/857c1a42-dc92-4687-99db-c28fee45a6df?apiKey=12cdcbacd64a44978db653c66e993585&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/857c1a42-dc92-4687-99db-c28fee45a6df?apiKey=12cdcbacd64a44978db653c66e993585&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/857c1a42-dc92-4687-99db-c28fee45a6df?apiKey=12cdcbacd64a44978db653c66e993585&"
                                    className="aspect-square object-contain object-center w-[118px] overflow-hidden max-w-full"
                                />
                                <div className="text-black text-2xl mt-9">Girl Child</div>
                            </div>
                        </div>
                        <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
                            <div className="justify-center items-center bg-lime-50 flex grow flex-col w-full px-20 py-9 rounded-2xl max-md:mt-5 max-md:px-5">
                                <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1cf29732-573e-48f7-9ac8-339841c7dd25?apiKey=12cdcbacd64a44978db653c66e993585&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1cf29732-573e-48f7-9ac8-339841c7dd25?apiKey=12cdcbacd64a44978db653c66e993585&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1cf29732-573e-48f7-9ac8-339841c7dd25?apiKey=12cdcbacd64a44978db653c66e993585&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1cf29732-573e-48f7-9ac8-339841c7dd25?apiKey=12cdcbacd64a44978db653c66e993585&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1cf29732-573e-48f7-9ac8-339841c7dd25?apiKey=12cdcbacd64a44978db653c66e993585&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1cf29732-573e-48f7-9ac8-339841c7dd25?apiKey=12cdcbacd64a44978db653c66e993585&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1cf29732-573e-48f7-9ac8-339841c7dd25?apiKey=12cdcbacd64a44978db653c66e993585&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1cf29732-573e-48f7-9ac8-339841c7dd25?apiKey=12cdcbacd64a44978db653c66e993585&"
                                    className="aspect-square object-contain object-center w-[118px] overflow-hidden max-w-full"
                                />
                                <div className="text-black text-2xl self-stretch mt-9">
                                    Law & Politics
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="justify-center items-center bg-slate-500 bg-opacity-40 flex basis-[0%] flex-col px-20 py-9 rounded-2xl max-md:px-5">
                    <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3748ed63-d456-4bfa-aefd-ce68f537856a?apiKey=12cdcbacd64a44978db653c66e993585&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3748ed63-d456-4bfa-aefd-ce68f537856a?apiKey=12cdcbacd64a44978db653c66e993585&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3748ed63-d456-4bfa-aefd-ce68f537856a?apiKey=12cdcbacd64a44978db653c66e993585&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3748ed63-d456-4bfa-aefd-ce68f537856a?apiKey=12cdcbacd64a44978db653c66e993585&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3748ed63-d456-4bfa-aefd-ce68f537856a?apiKey=12cdcbacd64a44978db653c66e993585&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3748ed63-d456-4bfa-aefd-ce68f537856a?apiKey=12cdcbacd64a44978db653c66e993585&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3748ed63-d456-4bfa-aefd-ce68f537856a?apiKey=12cdcbacd64a44978db653c66e993585&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3748ed63-d456-4bfa-aefd-ce68f537856a?apiKey=12cdcbacd64a44978db653c66e993585&"
                        className="aspect-square object-contain object-center w-[118px] overflow-hidden max-w-full"
                    />
                    <div className="text-black text-2xl self-stretch mt-9">
                        Art & LIfestyle{" "}
                    </div>
                </div>
                <div className="justify-center items-center bg-amber-600 bg-opacity-30 z-[1] flex basis-[0%] flex-col px-14 py-9 rounded-2xl max-md:px-5">
                    <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/44ba4de1-1e7e-4bcb-a08d-1aa043a2ff5e?apiKey=12cdcbacd64a44978db653c66e993585&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/44ba4de1-1e7e-4bcb-a08d-1aa043a2ff5e?apiKey=12cdcbacd64a44978db653c66e993585&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/44ba4de1-1e7e-4bcb-a08d-1aa043a2ff5e?apiKey=12cdcbacd64a44978db653c66e993585&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/44ba4de1-1e7e-4bcb-a08d-1aa043a2ff5e?apiKey=12cdcbacd64a44978db653c66e993585&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/44ba4de1-1e7e-4bcb-a08d-1aa043a2ff5e?apiKey=12cdcbacd64a44978db653c66e993585&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/44ba4de1-1e7e-4bcb-a08d-1aa043a2ff5e?apiKey=12cdcbacd64a44978db653c66e993585&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/44ba4de1-1e7e-4bcb-a08d-1aa043a2ff5e?apiKey=12cdcbacd64a44978db653c66e993585&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/44ba4de1-1e7e-4bcb-a08d-1aa043a2ff5e?apiKey=12cdcbacd64a44978db653c66e993585&"
                        className="aspect-square object-contain object-center w-[118px] overflow-hidden max-w-full"
                    />
                    <div className="text-black text-2xl self-stretch mt-9">
                        Entrepreneurship
                    </div>
                </div>
            </div>
        </section>
    )
}
