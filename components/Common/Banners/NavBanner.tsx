import Image from 'next/image'
import React from 'react'
import Banner from '@/public/images/nav-banner.png'
import Link from 'next/link'

type Props = {
    toggleBanner: () => void
}

function NavBanner({ toggleBanner }: Props) {
    return (
        <div className='w-screen h-[100px] relative top-0 inset-x-0 z-[200]'>
            <button onClick={toggleBanner} className='flex items-center justify-center absolute right-5 top-0 w-[2rem] aspect-square rounded-full text-2xl bg-primaryBlack text-white-100 z-[300]'>x</button>
            <Link href='/iwd-agenda'>
                <Image src={Banner} alt='banner' layout='fill' />
            </Link>
        </div>
    )
}

export default NavBanner