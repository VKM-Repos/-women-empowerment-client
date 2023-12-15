import React from 'react'
import organizationHeader from '@/public/images/organization_header.svg'

export default function OrganizationDetails() {
    return (
        <section className="bg-white flex flex-col items-stretch">
            <div className="w-full mt-9 px-14 max-md:max-w-full max-md:px-5">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <div className="flex flex-col items-stretch w-[66%] max-md:w-full max-md:ml-0">
                        <div className="items-start flex grow flex-col  max-md:max-w-full max-md:mt-8">
                            <div className='w-full'>
                                <img
                                    loading="lazy"
                                    src={organizationHeader.src}
                                    className="w-full"
                                />
                            </div>
                            <div className="z-[1] w-[526px] max-w-full ml-9 -mt-[150px] self-start max-md:mt-10">
                                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                                    <div className="flex flex-col items-stretch w-[42%] max-md:w-full max-md:ml-0">
                                        <img
                                            loading="lazy"
                                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/586127c89a4967874c4f2dfd60d73adbd0b76430a3a80f8c5a9dbea9fb5687f9?apiKey=12cdcbacd64a44978db653c66e993585&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/586127c89a4967874c4f2dfd60d73adbd0b76430a3a80f8c5a9dbea9fb5687f9?apiKey=12cdcbacd64a44978db653c66e993585&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/586127c89a4967874c4f2dfd60d73adbd0b76430a3a80f8c5a9dbea9fb5687f9?apiKey=12cdcbacd64a44978db653c66e993585&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/586127c89a4967874c4f2dfd60d73adbd0b76430a3a80f8c5a9dbea9fb5687f9?apiKey=12cdcbacd64a44978db653c66e993585&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/586127c89a4967874c4f2dfd60d73adbd0b76430a3a80f8c5a9dbea9fb5687f9?apiKey=12cdcbacd64a44978db653c66e993585&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/586127c89a4967874c4f2dfd60d73adbd0b76430a3a80f8c5a9dbea9fb5687f9?apiKey=12cdcbacd64a44978db653c66e993585&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/586127c89a4967874c4f2dfd60d73adbd0b76430a3a80f8c5a9dbea9fb5687f9?apiKey=12cdcbacd64a44978db653c66e993585&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/586127c89a4967874c4f2dfd60d73adbd0b76430a3a80f8c5a9dbea9fb5687f9?apiKey=12cdcbacd64a44978db653c66e993585&"
                                            className="aspect-square object-contain object-center w-[212px] shadow-sm overflow-hidden shrink-0 max-w-full rounded-[50%] max-md:mt-7"
                                        />
                                    </div>
                                    <div className="flex flex-col items-stretch w-[58%] ml-5 max-md:w-full max-md:ml-0">
                                        <div className="text-white-100 font-sora text-4xl font-bold tracking-wide whitespace-nowrap my-auto max-md:mt-10">
                                            Women in Tech
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="border  rounded-lg border-t-0 bg-white self-stretch flex flex-col py-10 -mt-[50px] items-end max-md:max-w-full">
                                <div className="items-start flex justify-between gap-5 mr-16 max-md:justify-center max-md:mr-2.5">
                                    <div className="text-black font-quickSand text-opacity-60 text-center text-base tracking-normal self-center my-auto">
                                        Follow us:
                                    </div>
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/abce849794dda183fd45fa5521042c17bc79420d3659f4eb5e28dc5eda375573?apiKey=12cdcbacd64a44978db653c66e993585&"
                                        className="aspect-square object-contain object-center w-6 overflow-hidden self-stretch shrink-0 max-w-full"
                                    />
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c96d60d7fa6857b2f5a19eed2c499199a72e0c354b908409249d5aedff7bc773?apiKey=12cdcbacd64a44978db653c66e993585&"
                                        className="aspect-square object-contain object-center w-6 overflow-hidden self-stretch shrink-0 max-w-full"
                                    />
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/6b8ba7a75a4769ac3c7bd1c9fa32e3c4284005ef2934d6ae315caff2253fa819?apiKey=12cdcbacd64a44978db653c66e993585&"
                                        className="aspect-square object-contain object-center w-6 fill-sky-600 overflow-hidden self-stretch shrink-0 max-w-full"
                                    />
                                </div>
                                <div className="self-stretch flex flex-col mt-7 px-12 items-start max-md:max-w-full max-md:px-5">
                                    <div className="text-green-400 font-sora text-2xl tracking-wide whitespace-nowrap">
                                        About
                                    </div>
                                    <div className="text-black font-quickSand text-opacity-80 text-base tracking-normal self-stretch mt-7 max-md:max-w-full">
                                        Women in Tech is the world’s leading organization for
                                        Inclusion, Diversity & Equity in STEAM. Our community counts
                                        over 200.000 members across the world with chapters in all 6
                                        continents. With our Head Office in Paris, we are a Global
                                        Movement with chapters in 6 continents, counting over
                                        200.000 members.
                                        <br />
                                        <br />
                                        Our community is represented by persons of all abilities –
                                        regardless of gender, race, ethnicity, class, age or sexual
                                        orientation.
                                    </div>
                                    <div className="self-stretch flex w-[80%] items-stretch justify-between gap-5 mt-12 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
                                        <div className="flex  justify-between gap-5  max-md:max-w-full max-md:flex-wrap max-md:pr-5">
                                            <div className="items-center flex grow basis-[0%] flex-col">
                                                <img
                                                    loading="lazy"
                                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/fe855fcb572283e4eadd53dce8006539c57e6a12eafb2e323cc4a06312ab4e10?apiKey=12cdcbacd64a44978db653c66e993585&"
                                                    className="aspect-square object-contain object-center w-6 overflow-hidden max-w-full"
                                                />
                                                <div className="text-black text-opacity-60 text-center text-sm tracking-normal self-stretch mt-4">
                                                    Road 17, 1st avenue gwarinpa, <br />
                                                    FCT, Abuja.
                                                </div>
                                            </div>
                                            <div className="bg-neutral-200 self-center w-px shrink-0 h-[31px] my-auto" />
                                            {/*  */}
                                        </div>

                                        <div className="flex items-center justify-between gap-5 pr-6 self-start max-md:pr-5">
                                            <div className="items-center self-stretch flex flex-col">
                                                <img
                                                    loading="lazy"
                                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/5c5797671bbfcf56da0e2d3a278b42ea250363c208432483a2e75edf7f0edb96?apiKey=12cdcbacd64a44978db653c66e993585&"
                                                    className="aspect-square object-contain object-center w-6 overflow-hidden max-w-full"
                                                />
                                                <div className="text-black text-opacity-60 text-sm tracking-normal self-stretch whitespace-nowrap mt-4">
                                                    contact@womenintech.org
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between gap-5 pr-6 self-start max-md:pr-5">
                                            <div className="bg-neutral-200 w-px shrink-0 h-[31px] my-auto" />
                                            <div className="items-center self-stretch flex flex-col">
                                                <img
                                                    loading="lazy"
                                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/3c626735b6b0c9477b5b357937dd2772719655ba3defd6ec7dbae27affe114e1?apiKey=12cdcbacd64a44978db653c66e993585&"
                                                    className="aspect-square object-contain object-center w-6 overflow-hidden max-w-full"
                                                />
                                                <div className="text-black text-opacity-60 text-sm tracking-normal self-stretch whitespace-nowrap mt-4">
                                                    +234 90 732 732
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="items-stretch flex gap-2.5 mt-10 self-start">
                                <button className="text-white-100 text-2xl tracking-wide whitespace-nowrap items-stretch bg-[#65B891] grow justify-center px-8 py-4 rounded-lg max-md:px-5">
                                    Images
                                </button>
                                <button className="text-green-400 text-2xl tracking-wide whitespace-nowrap items-stretch border border-[color:var(--sc2,#65B891)] bg-white grow justify-center px-8 py-4 rounded-lg border-solid max-md:px-5">
                                    Events
                                </button>
                            </div>
                            <div className="self-stretch border border-[color:var(--sc2,#65B891)] rounded-lg  bg-white flex flex-col p-8 border-solid items-start max-md:max-w-full max-md:px-5">
                                <div className="text-green-400 text-2xl whitespace-nowrap">
                                    Latest images
                                </div>
                                <div className="items-stretch self-stretch overflow-x-auto flex justify-between gap-5 mt-12 max-md:max-w-full max-md:flex-wrap max-md:justify-center max-md:mt-10">
                                    <img
                                        loading="lazy"
                                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1e3d6abe2b776471e75924a638c6db41732563874cb3a0ae5267e3110922a0f0?apiKey=12cdcbacd64a44978db653c66e993585&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1e3d6abe2b776471e75924a638c6db41732563874cb3a0ae5267e3110922a0f0?apiKey=12cdcbacd64a44978db653c66e993585&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1e3d6abe2b776471e75924a638c6db41732563874cb3a0ae5267e3110922a0f0?apiKey=12cdcbacd64a44978db653c66e993585&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1e3d6abe2b776471e75924a638c6db41732563874cb3a0ae5267e3110922a0f0?apiKey=12cdcbacd64a44978db653c66e993585&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1e3d6abe2b776471e75924a638c6db41732563874cb3a0ae5267e3110922a0f0?apiKey=12cdcbacd64a44978db653c66e993585&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1e3d6abe2b776471e75924a638c6db41732563874cb3a0ae5267e3110922a0f0?apiKey=12cdcbacd64a44978db653c66e993585&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1e3d6abe2b776471e75924a638c6db41732563874cb3a0ae5267e3110922a0f0?apiKey=12cdcbacd64a44978db653c66e993585&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1e3d6abe2b776471e75924a638c6db41732563874cb3a0ae5267e3110922a0f0?apiKey=12cdcbacd64a44978db653c66e993585&"
                                        className="aspect-[1.2] object-contain object-center w-full items-center overflow-hidden grow basis-[0%]"
                                    />
                                    <img
                                        loading="lazy"
                                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/dd1650329bae83b903deedd6cfc5c684220ecaac3bad32afefcd28e612d3cca8?apiKey=12cdcbacd64a44978db653c66e993585&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/dd1650329bae83b903deedd6cfc5c684220ecaac3bad32afefcd28e612d3cca8?apiKey=12cdcbacd64a44978db653c66e993585&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/dd1650329bae83b903deedd6cfc5c684220ecaac3bad32afefcd28e612d3cca8?apiKey=12cdcbacd64a44978db653c66e993585&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/dd1650329bae83b903deedd6cfc5c684220ecaac3bad32afefcd28e612d3cca8?apiKey=12cdcbacd64a44978db653c66e993585&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/dd1650329bae83b903deedd6cfc5c684220ecaac3bad32afefcd28e612d3cca8?apiKey=12cdcbacd64a44978db653c66e993585&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/dd1650329bae83b903deedd6cfc5c684220ecaac3bad32afefcd28e612d3cca8?apiKey=12cdcbacd64a44978db653c66e993585&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/dd1650329bae83b903deedd6cfc5c684220ecaac3bad32afefcd28e612d3cca8?apiKey=12cdcbacd64a44978db653c66e993585&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/dd1650329bae83b903deedd6cfc5c684220ecaac3bad32afefcd28e612d3cca8?apiKey=12cdcbacd64a44978db653c66e993585&"
                                        className="aspect-[1.2] object-contain object-center w-full items-center overflow-hidden grow basis-[0%]"
                                    />
                                    <img
                                        loading="lazy"
                                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/299f38c4a2c7458ee4ceffe0a283eb7d4da4fd71346b34275ecf3f050f1197a4?apiKey=12cdcbacd64a44978db653c66e993585&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/299f38c4a2c7458ee4ceffe0a283eb7d4da4fd71346b34275ecf3f050f1197a4?apiKey=12cdcbacd64a44978db653c66e993585&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/299f38c4a2c7458ee4ceffe0a283eb7d4da4fd71346b34275ecf3f050f1197a4?apiKey=12cdcbacd64a44978db653c66e993585&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/299f38c4a2c7458ee4ceffe0a283eb7d4da4fd71346b34275ecf3f050f1197a4?apiKey=12cdcbacd64a44978db653c66e993585&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/299f38c4a2c7458ee4ceffe0a283eb7d4da4fd71346b34275ecf3f050f1197a4?apiKey=12cdcbacd64a44978db653c66e993585&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/299f38c4a2c7458ee4ceffe0a283eb7d4da4fd71346b34275ecf3f050f1197a4?apiKey=12cdcbacd64a44978db653c66e993585&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/299f38c4a2c7458ee4ceffe0a283eb7d4da4fd71346b34275ecf3f050f1197a4?apiKey=12cdcbacd64a44978db653c66e993585&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/299f38c4a2c7458ee4ceffe0a283eb7d4da4fd71346b34275ecf3f050f1197a4?apiKey=12cdcbacd64a44978db653c66e993585&"
                                        className="aspect-[1.2] object-contain object-center w-full items-center overflow-hidden z-[1] grow basis-[0%]"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-stretch w-[34%] ml-5 max-md:w-full max-md:ml-0">
                        <div className="items-stretch border bg-white flex flex-col w-full px-5 py-8 rounded-2xl border-solid border-black border-opacity-10 max-md:max-w-full max-md:mt-8">
                            <div className="text-green-400 text-2xl tracking-wide">
                                Upcoming Events
                            </div>
                            <div className="items-center flex justify-between gap-5 mt-7 pl-3 pr-8 py-2 max-md:pr-5">
                                <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/91652ae4e51ac79c84d903b145cd7c633d25b489c366606fa246cbf482d19b0b?apiKey=12cdcbacd64a44978db653c66e993585&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/91652ae4e51ac79c84d903b145cd7c633d25b489c366606fa246cbf482d19b0b?apiKey=12cdcbacd64a44978db653c66e993585&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/91652ae4e51ac79c84d903b145cd7c633d25b489c366606fa246cbf482d19b0b?apiKey=12cdcbacd64a44978db653c66e993585&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/91652ae4e51ac79c84d903b145cd7c633d25b489c366606fa246cbf482d19b0b?apiKey=12cdcbacd64a44978db653c66e993585&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/91652ae4e51ac79c84d903b145cd7c633d25b489c366606fa246cbf482d19b0b?apiKey=12cdcbacd64a44978db653c66e993585&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/91652ae4e51ac79c84d903b145cd7c633d25b489c366606fa246cbf482d19b0b?apiKey=12cdcbacd64a44978db653c66e993585&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/91652ae4e51ac79c84d903b145cd7c633d25b489c366606fa246cbf482d19b0b?apiKey=12cdcbacd64a44978db653c66e993585&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/91652ae4e51ac79c84d903b145cd7c633d25b489c366606fa246cbf482d19b0b?apiKey=12cdcbacd64a44978db653c66e993585&"
                                    className="aspect-square object-contain object-center w-[45px] overflow-hidden shrink-0 max-w-full my-auto rounded-[50%]"
                                />
                                <div className="justify-center items-stretch self-stretch flex grow basis-[0%] flex-col">
                                    <div className="text-black text-opacity-80 text-base">
                                        <span className="text-black text-opacity-90">
                                            Internet and safety with girls in ICT
                                        </span>
                                        <span className="text-black text-opacity-80"> </span>
                                    </div>
                                    <div className="text-black text-opacity-40 text-sm font-bold whitespace-nowrap mt-1">
                                        Women in Tech
                                    </div>
                                    <div className="text-sky-800 text-xs font-medium whitespace-nowrap mt-1">
                                        WED 23rd November 2022. 12:00 pm (online)
                                    </div>
                                </div>
                            </div>
                            <div className="items-center flex justify-between gap-5 mt-4 pl-3 pr-8 py-2 max-md:pr-5">
                                <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/91652ae4e51ac79c84d903b145cd7c633d25b489c366606fa246cbf482d19b0b?apiKey=12cdcbacd64a44978db653c66e993585&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/91652ae4e51ac79c84d903b145cd7c633d25b489c366606fa246cbf482d19b0b?apiKey=12cdcbacd64a44978db653c66e993585&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/91652ae4e51ac79c84d903b145cd7c633d25b489c366606fa246cbf482d19b0b?apiKey=12cdcbacd64a44978db653c66e993585&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/91652ae4e51ac79c84d903b145cd7c633d25b489c366606fa246cbf482d19b0b?apiKey=12cdcbacd64a44978db653c66e993585&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/91652ae4e51ac79c84d903b145cd7c633d25b489c366606fa246cbf482d19b0b?apiKey=12cdcbacd64a44978db653c66e993585&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/91652ae4e51ac79c84d903b145cd7c633d25b489c366606fa246cbf482d19b0b?apiKey=12cdcbacd64a44978db653c66e993585&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/91652ae4e51ac79c84d903b145cd7c633d25b489c366606fa246cbf482d19b0b?apiKey=12cdcbacd64a44978db653c66e993585&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/91652ae4e51ac79c84d903b145cd7c633d25b489c366606fa246cbf482d19b0b?apiKey=12cdcbacd64a44978db653c66e993585&"
                                    className="aspect-square object-contain object-center w-[45px] overflow-hidden shrink-0 max-w-full my-auto rounded-[50%]"
                                />
                                <div className="justify-center items-stretch self-stretch flex grow basis-[0%] flex-col">
                                    <div className="text-black text-opacity-80 text-base">
                                        <span className="text-black text-opacity-90">
                                            Internet and safety with girls in ICT
                                        </span>
                                        <span className="text-black text-opacity-80"> </span>
                                    </div>
                                    <div className="text-black text-opacity-40 text-sm font-bold whitespace-nowrap mt-1">
                                        Women in Tech
                                    </div>
                                    <div className="text-sky-800 text-xs font-medium whitespace-nowrap mt-1">
                                        WED 23rd November 2022. 12:00 pm (online)
                                    </div>
                                </div>
                            </div>
                            <div className="items-center flex justify-between gap-5 mt-4 pl-3 pr-8 py-2 max-md:pr-5">
                                <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/91652ae4e51ac79c84d903b145cd7c633d25b489c366606fa246cbf482d19b0b?apiKey=12cdcbacd64a44978db653c66e993585&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/91652ae4e51ac79c84d903b145cd7c633d25b489c366606fa246cbf482d19b0b?apiKey=12cdcbacd64a44978db653c66e993585&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/91652ae4e51ac79c84d903b145cd7c633d25b489c366606fa246cbf482d19b0b?apiKey=12cdcbacd64a44978db653c66e993585&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/91652ae4e51ac79c84d903b145cd7c633d25b489c366606fa246cbf482d19b0b?apiKey=12cdcbacd64a44978db653c66e993585&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/91652ae4e51ac79c84d903b145cd7c633d25b489c366606fa246cbf482d19b0b?apiKey=12cdcbacd64a44978db653c66e993585&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/91652ae4e51ac79c84d903b145cd7c633d25b489c366606fa246cbf482d19b0b?apiKey=12cdcbacd64a44978db653c66e993585&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/91652ae4e51ac79c84d903b145cd7c633d25b489c366606fa246cbf482d19b0b?apiKey=12cdcbacd64a44978db653c66e993585&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/91652ae4e51ac79c84d903b145cd7c633d25b489c366606fa246cbf482d19b0b?apiKey=12cdcbacd64a44978db653c66e993585&"
                                    className="aspect-square object-contain object-center w-[45px] overflow-hidden shrink-0 max-w-full my-auto rounded-[50%]"
                                />
                                <div className="justify-center items-stretch self-stretch flex grow basis-[0%] flex-col">
                                    <div className="text-black text-opacity-80 text-base">
                                        <span className="text-black text-opacity-90">
                                            Internet and safety with girls in ICT
                                        </span>
                                        <span className="text-black text-opacity-80"> </span>
                                    </div>
                                    <div className="text-black text-opacity-40 text-sm font-bold whitespace-nowrap mt-1">
                                        Women in Tech
                                    </div>
                                    <div className="text-sky-800 text-xs font-bold whitespace-nowrap mt-1">
                                        WED 23rd November 2022. 12:00 pm (online)
                                    </div>
                                </div>
                            </div>
                            <div className="items-center flex justify-between gap-5 mt-4 pl-3 pr-8 py-2 max-md:pr-5">
                                <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/91652ae4e51ac79c84d903b145cd7c633d25b489c366606fa246cbf482d19b0b?apiKey=12cdcbacd64a44978db653c66e993585&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/91652ae4e51ac79c84d903b145cd7c633d25b489c366606fa246cbf482d19b0b?apiKey=12cdcbacd64a44978db653c66e993585&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/91652ae4e51ac79c84d903b145cd7c633d25b489c366606fa246cbf482d19b0b?apiKey=12cdcbacd64a44978db653c66e993585&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/91652ae4e51ac79c84d903b145cd7c633d25b489c366606fa246cbf482d19b0b?apiKey=12cdcbacd64a44978db653c66e993585&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/91652ae4e51ac79c84d903b145cd7c633d25b489c366606fa246cbf482d19b0b?apiKey=12cdcbacd64a44978db653c66e993585&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/91652ae4e51ac79c84d903b145cd7c633d25b489c366606fa246cbf482d19b0b?apiKey=12cdcbacd64a44978db653c66e993585&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/91652ae4e51ac79c84d903b145cd7c633d25b489c366606fa246cbf482d19b0b?apiKey=12cdcbacd64a44978db653c66e993585&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/91652ae4e51ac79c84d903b145cd7c633d25b489c366606fa246cbf482d19b0b?apiKey=12cdcbacd64a44978db653c66e993585&"
                                    className="aspect-square object-contain object-center w-[45px] overflow-hidden shrink-0 max-w-full my-auto rounded-[50%]"
                                />
                                <div className="justify-center items-stretch self-stretch flex grow basis-[0%] flex-col">
                                    <div className="text-black text-opacity-80 text-base">
                                        <span className="text-black text-opacity-90">
                                            Internet and safety with girls in ICT
                                        </span>
                                        <span className="text-black text-opacity-80"> </span>
                                    </div>
                                    <div className="text-black text-opacity-40 text-sm font-bold whitespace-nowrap mt-1">
                                        Women in Tech
                                    </div>
                                    <div className="text-sky-800 text-xs font-medium whitespace-nowrap mt-1">
                                        WED 23rd November 2022. 12:00 pm (online)
                                    </div>
                                </div>
                            </div>
                            <div className="items-center flex justify-between gap-5 mt-4 pl-3 pr-8 py-2 max-md:pr-5">
                                <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/91652ae4e51ac79c84d903b145cd7c633d25b489c366606fa246cbf482d19b0b?apiKey=12cdcbacd64a44978db653c66e993585&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/91652ae4e51ac79c84d903b145cd7c633d25b489c366606fa246cbf482d19b0b?apiKey=12cdcbacd64a44978db653c66e993585&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/91652ae4e51ac79c84d903b145cd7c633d25b489c366606fa246cbf482d19b0b?apiKey=12cdcbacd64a44978db653c66e993585&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/91652ae4e51ac79c84d903b145cd7c633d25b489c366606fa246cbf482d19b0b?apiKey=12cdcbacd64a44978db653c66e993585&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/91652ae4e51ac79c84d903b145cd7c633d25b489c366606fa246cbf482d19b0b?apiKey=12cdcbacd64a44978db653c66e993585&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/91652ae4e51ac79c84d903b145cd7c633d25b489c366606fa246cbf482d19b0b?apiKey=12cdcbacd64a44978db653c66e993585&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/91652ae4e51ac79c84d903b145cd7c633d25b489c366606fa246cbf482d19b0b?apiKey=12cdcbacd64a44978db653c66e993585&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/91652ae4e51ac79c84d903b145cd7c633d25b489c366606fa246cbf482d19b0b?apiKey=12cdcbacd64a44978db653c66e993585&"
                                    className="aspect-square object-contain object-center w-[45px] overflow-hidden shrink-0 max-w-full my-auto rounded-[50%]"
                                />
                                <div className="justify-center items-stretch self-stretch flex grow basis-[0%] flex-col">
                                    <div className="text-black text-opacity-80 text-base">
                                        <span className="text-black text-opacity-90">
                                            Internet and safety with girls in ICT
                                        </span>
                                        <span className="text-black text-opacity-80"> </span>
                                    </div>
                                    <div className="text-black text-opacity-40 text-sm font-bold whitespace-nowrap mt-1">
                                        Women in Tech
                                    </div>
                                    <div className="text-sky-800 text-xs font-medium whitespace-nowrap mt-1">
                                        WED 23rd November 2022. 12:00 pm (online)
                                    </div>
                                </div>
                            </div>
                            <div className="items-center flex justify-between gap-5 mt-4 pl-3 pr-8 py-2 max-md:pr-5">
                                <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/91652ae4e51ac79c84d903b145cd7c633d25b489c366606fa246cbf482d19b0b?apiKey=12cdcbacd64a44978db653c66e993585&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/91652ae4e51ac79c84d903b145cd7c633d25b489c366606fa246cbf482d19b0b?apiKey=12cdcbacd64a44978db653c66e993585&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/91652ae4e51ac79c84d903b145cd7c633d25b489c366606fa246cbf482d19b0b?apiKey=12cdcbacd64a44978db653c66e993585&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/91652ae4e51ac79c84d903b145cd7c633d25b489c366606fa246cbf482d19b0b?apiKey=12cdcbacd64a44978db653c66e993585&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/91652ae4e51ac79c84d903b145cd7c633d25b489c366606fa246cbf482d19b0b?apiKey=12cdcbacd64a44978db653c66e993585&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/91652ae4e51ac79c84d903b145cd7c633d25b489c366606fa246cbf482d19b0b?apiKey=12cdcbacd64a44978db653c66e993585&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/91652ae4e51ac79c84d903b145cd7c633d25b489c366606fa246cbf482d19b0b?apiKey=12cdcbacd64a44978db653c66e993585&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/91652ae4e51ac79c84d903b145cd7c633d25b489c366606fa246cbf482d19b0b?apiKey=12cdcbacd64a44978db653c66e993585&"
                                    className="aspect-square object-contain object-center w-[45px] overflow-hidden shrink-0 max-w-full my-auto rounded-[50%]"
                                />
                                <div className="justify-center items-stretch self-stretch flex grow basis-[0%] flex-col">
                                    <div className="text-black text-opacity-80 text-base">
                                        <span className="text-black text-opacity-90">
                                            Internet and safety with girls in ICT
                                        </span>
                                        <span className="text-black text-opacity-80"> </span>
                                    </div>
                                    <div className="text-black text-opacity-40 text-sm font-bold whitespace-nowrap mt-1">
                                        Women in Tech
                                    </div>
                                    <div className="text-sky-800 text-xs font-medium whitespace-nowrap mt-1">
                                        WED 23rd November 2022. 12:00 pm (online)
                                    </div>
                                </div>
                            </div>
                            <div className="items-center border-[color:var(--txt-h1,#65B891)] bg-white flex flex-col mt-10 px-10 py-6 rounded-2xl border-2 border-solid max-md:px-5">
                                <div className="text-green-400 text-2xl whitespace-nowrap">
                                    -IMPORTANT-
                                </div>
                                <div className="text-sm font-sora self-stretch mt-6">
                                    <span className="text-black text-opacity-60">
                                        Volunteers needed for upcoming inform the street 2022 agenda{" "}
                                    </span>
                                    <a
                                        href="https://women-in-tech.org/"
                                        className="text-orange-500 underline"
                                        target="_blank"
                                    >
                                        Join us
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
