'use client'
import Link from 'next/link'
import React, { useMemo } from 'react'

interface CardProps {
    catregory: {
        name: string,
        icon: string,
        bg: string
    }
}

export const Card: React.FC<CardProps> = ({ catregory }) => {
    console.log(catregory.bg);
    return (
        <Link href="/category/2212" className="flex flex-col w-[280px] max-md:w-full max-md:ml-0">
            <div className={`justify-center items-center bg-[${catregory?.bg}] flex grow flex-col w-full px-10 py-9 rounded-2xl max-md:mt-5 max-md:px-5`}>
                <img
                    loading="lazy"
                    srcSet={`${catregory.icon}`}
                    className="aspect-square object-contain object-center w-[118px] overflow-hidden max-w-full"
                />
                <div className="text-black-100 text-2xl font-medium self-stretch mt-9 flex justify-center">
                    {catregory.name}
                </div>
            </div>
        </Link>
    )
}
