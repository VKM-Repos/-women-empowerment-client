import Image from 'next/image'
import React from 'react'
import Banner from '@/public/images/nav-banner.png'
import BannerMob from '@/public/images/nav-banner-mob.png'
import Link from 'next/link'

type Props = {
    toggleBanner: () => void
}

function NavBanner({ toggleBanner }: Props) {
    return (
        <div className='w-screen h-[100px] relative top-5 inset-x-0 z-[200]'>
            <button onClick={toggleBanner} className='flex items-center justify-center absolute right-5 top-0 w-[2rem] aspect-square rounded-full text-2xl bg-primaryBlack text-white-100 z-[300]'>x</button>
            <Link href='/iwd-agenda'>
                <Image src={Banner} alt='banner' layout='fill' className='hidden md:block' />
                <Image src={BannerMob} alt='banner' layout='fill' className='block md:hidden' />
            </Link>
        </div>
    )
}

export default NavBanner