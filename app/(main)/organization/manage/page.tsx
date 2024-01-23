import React from 'react'

import orgProfile from '@/public/images/org_profile.svg'
import Image from 'next/image'
import orgProfile2 from '@/public/images/org_profile_2.svg'
export default function ManageOrganization() {
    return (
        <section className="self-stretch w-full mt-5 mb-[200px] px-16 max-md:max-w-full max-md:mt-10 max-md:px-5">
            <div className="self-stretch w-full mt-12 px-16 max-md:max-w-full max-md:mt-10 max-md:px-5">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <div className="flex flex-col items-stretch w-[31%] max-md:w-full max-md:ml-0">
                        <span className="items-stretch  bg-white flex grow flex-col w-full px-14 py-11 rounded-2xl border border-stone-800 border-solid border-black border-opacity-10 max-md:mt-5 max-md:px-5">
                            <div className="text-black text-xl tracking-wide whitespace-nowrap font-sora">
                                Manage Organization
                            </div>
                            <span className="justify-center flex flex-col mt-12 mb-[652px] py-2.5 items-start max-md:my-10 max-md:pr-5 font-quickSand w-full">
                                <div className="text-black text-opacity-70 text-base font-medium tracking-normal whitespace-nowrap cursor-pointer hover:bg-slate-400 hover:text-white-100 w-full px-5 py-2 rounded-md transition-all duration-300 ease-in-out transform-gpu">
                                    Add Images
                                </div>
                                <div className="text-black text-opacity-70 text-base font-medium tracking-normal whitespace-nowrap mt-7 max-md:mt-10 cursor-pointer hover:bg-slate-400 hover:text-white-100 w-full px-5 py-2 rounded-md transition-all duration-300 ease-in-out transform-gpu">
                                    Add Events
                                </div>
                            </span>
                        </span>
                    </div>
                    <div className="flex flex-col items-stretch w-[69%] ml-5 max-md:w-full max-md:ml-0">
                        <span className="relative bg-white flex grow flex-col w-full pb-7 rounded-2xl border border-stone-800 border-solid border-black      border-opacity-10 max-md:max-w-full max-md:mt-5">
                            <Image src={orgProfile2} layout='responsive' alt='bg' width={1000} height={1000} className='absolute inset-0' />
                            <div className='z-10 flex justify-end pt-10'>
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/19d801c02f8092496b1acf27f38e7cfe019c05eff9870b0e957c1b7ca6ad1566?"
                                    className="aspect-square object-contain object-center w-12 justify-center items-center overflow-hidden max-w-full mr-12 max-md:mr-2.5 cursor-pointer z-10 "
                                />
                            </div>
                            <span className="w-full h-[20rem] self-stretch flex flex-col pt-9 px-2  items-end max-md:max-w-full">

                                <div className="self-stretch z-[1]  max-md:max-w-full max-md:mt-10 max-md:mb-2.5">
                                    <div className="gap-5 flex mt-[40px] max-md:flex-col max-md:items-stretch max-md:gap-0">
                                        <div className="flex flex-col items-stretch w-[28%] max-md:w-full max-md:ml-0">
                                            <div className="bg-white flex flex-col justify-center items-center aspect-square w-full rounded-[105px] max-md:mt-7">
                                                <div className="flex-col shadow-sm overflow-hidden relative flex aspect-square w-[212px] justify-center items-center px-16 py-12 rounded-[50%] max-md:px-5">
                                                    <img
                                                        loading="lazy"
                                                        srcSet={orgProfile.src}
                                                        className="absolute h-full w-full object-cover object-center inset-0 hover:-z-10"
                                                    />
                                                    <img
                                                        loading="lazy"
                                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/19d801c02f8092496b1acf27f38e7cfe019c05eff9870b0e957c1b7ca6ad1566?"
                                                        className="w-10 h-10 object-contain object-center justify-center items-center overflow-hidden max-w-full my-8"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-stretch w-[72%] ml-5 max-md:w-full max-md:ml-0 text-white-100">
                                            <div className="text-white text-4xl font-sora font-bold tracking-wide my-auto max-md:max-w-full max-md:mt-10">
                                                Women Research Foundation
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </span>
                            <form action="">
                                <div className='flex flex-col gap-5 mt-[20px] px-[100px] font-quickSand'>
                                    <div className='flex items-center gap-5'>
                                        <label className='font-sora flex-[0.3]' htmlFor="">Org Name</label>
                                        <input type='text' className="font-quickSand flex-1 border border-stone-800 border-solid border-black border-opacity-10 px-10 py-3 focus:outline-none rounded-md w-full" placeholder='Women researchers foundation' />
                                    </div>
                                    <div className='flex items-center gap-5'>
                                        <label className='font-sora flex-[0.3]' htmlFor="">Website</label>
                                        <input type='text' className="font-quickSand flex-1 border border-stone-800 border-solid border-black border-opacity-10 px-10 py-3 focus:outline-none rounded-md w-full" placeholder='htttps://womenresearchersfoundation.com' />
                                    </div>
                                    <div className='flex items-center gap-5'>
                                        <label className='font-sora flex-[0.3]' htmlFor="">Facebook</label>
                                        <input type='text' className="font-quickSand flex-1 border border-stone-800 border-solid border-black border-opacity-10 px-10 py-3 focus:outline-none rounded-md w-full" placeholder='htttps://www.facebook.com/wrf' />
                                    </div>
                                    <div className='flex items-center gap-5'>
                                        <label className='font-sora flex-[0.3]' htmlFor="">Email</label>
                                        <input type='text' className="font-quickSand flex-1 border border-stone-800 border-solid border-black border-opacity-10 px-10 py-3 focus:outline-none rounded-md w-full" placeholder='contact@womenresearchersfoundation.org' />
                                    </div>
                                    <div className='flex items-center gap-5'>
                                        <label className='font-sora flex-[0.3]' htmlFor="">Location</label>
                                        <input type='text' className="font-quickSand flex-1 border border-stone-800 border-solid border-black border-opacity-10 px-10 py-3 focus:outline-none rounded-md w-full" placeholder='5th avenue, malcom X street, gwarinpa.' />
                                    </div>
                                    <div className='flex items-center gap-5'>
                                        <label className='font-sora flex-[0.3]' htmlFor="">Contact</label>
                                        <input type='text' className="font-quickSand flex-1 border border-stone-800 border-solid border-black border-opacity-10 px-10 py-3 focus:outline-none rounded-md w-full" placeholder='09045456578' />
                                    </div>

                                    <div className='flex gap-5'>
                                        <div className="text-black flex-[0.3]">Bio</div>
                                        <textarea className="font-quickSand flex-1 border border-stone-800 border-solid border-black border-opacity-10 rounded-md w-full px-9 py-3 h-[180px] focus:outline-none">
                                            Our community counts over 200.000 members across the world
                                            with chapters in all 6 continents. With our Head Office in
                                            Paris, we are a Global Movement with chapters in 6 continents,
                                            counting over 200.000 members.
                                        </textarea>
                                    </div>
                                    <button className="text-white-100 text-center text-base font-medium font-sora whitespace-nowrap justify-center items-stretch rounded bg-green-800 self-center mt-6 px-8 py-3.5 max-md:px-5">
                                        Update
                                    </button>
                                </div>
                            </form>
                        </span>
                    </div>
                </div>
            </div>
        </section>

    )
}
