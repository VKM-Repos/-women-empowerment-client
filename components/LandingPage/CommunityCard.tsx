'use client'
import Link from 'next/link'
import React, { useState } from 'react'

interface CommProps {
    organization: { id: number; name: String, description: String, image: String }
}
export const CommunityCard: React.FC<CommProps> = ({ organization = {} }) => {
    const [fav, setFav] = useState(false)
    const handleFavorite = () => {
        setFav(prevState => !prevState)
    }
    return (
        <div
            className="border bg-white self-stretch p-8 rounded-3xl border-solid border-black border-opacity-10 max-md:max-w-full max-md:px-5">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-[82%] max-md:w-full max-md:ml-0">
                    <div className="items-stretch flex flex-col max-md:max-w-full max-md:mt-10">
                        <div className="text-green-800 text-base font-sora font-bold max-md:max-w-full">
                            {organization.name}
                        </div>
                        <div className="text-opacity-60 text-sm font-quickSand leading-5 mt-5 max-md:max-w-full">
                            {organization.description}
                        </div>
                        <div
                            className="justify-between items-stretch border-t-neutral-200 border-b-neutral-200 flex w-full gap-5 mt-5 p-2.5 border-t border-solid border-b max-md:max-w-full max-md:flex-wrap">
                            <div className="items-stretch flex justify-between gap-3">
                                <div className="items-stretch flex justify-between gap-1.5">
                                    <svg onClick={handleFavorite} className='cursor-pointer' width="25" height="24" viewBox="0 0 25 24" fill={fav ? 'red' : 'none'} xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.7504 21.1975L10.7496 21.1969C7.60326 18.3438 5.03218 16.0116 3.24167 13.8225C1.45691 11.6405 0.5 9.66166 0.5 7.52391C0.5 4.04866 3.22366 1.325 6.69891 1.325C8.66681 1.325 10.5634 2.24354 11.7992 3.69476L12.1798 4.14179L12.5605 3.69476C13.7963 2.24354 15.6929 1.325 17.6608 1.325C21.136 1.325 23.8597 4.04866 23.8597 7.52391C23.8597 9.66166 22.9028 11.6405 21.1179 13.8242C19.3314 16.0099 16.7679 18.3394 13.6312 21.1898L13.6107 21.2084L13.6096 21.2094L12.1811 22.5L10.7504 21.1975Z" stroke="black" stroke-opacity="0.4" />
                                    </svg>

                                    <div className="text-neutral-500 text-center text-sm self-center my-auto">
                                        3.5K
                                    </div>
                                </div>
                                <img loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/b3b8b990-cbfb-404d-b4ac-400f46957ca8?apiKey=12cdcbacd64a44978db653c66e993585&"
                                    className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full" />
                            </div>
                            <Link href={`/organization/${organization.id}`} className="items-stretch flex justify-between gap-1.5 px-px">
                                <img loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2c0ac05a-4f93-460c-be92-4615a52fcea7?apiKey=12cdcbacd64a44978db653c66e993585&"
                                    className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full" />
                                <div className="text-neutral-500 font-sora text-center text-sm self-center my-auto">
                                    visit website
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-stretch w-[18%] ml-5 max-md:w-full max-md:ml-0">
                    <img loading="lazy"
                        src={`${organization.image}`}
                        className="aspect-square object-contain object-center w-[132px] justify-center items-center overflow-hidden shrink-0 max-w-full my-auto max-md:mt-10" />
                </div>
            </div>
        </div>
    )
}
