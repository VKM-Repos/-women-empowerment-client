import { CameraIcon } from '@/components/Common/Icons/Camera.icon'
import { ChevronFilledIcon } from '@/components/Common/Icons/ChevronFilled.icon'
import Link from 'next/link'
import React from 'react'

type Props = {}

function EventCard({}: Props) {
  return (
    <Link href='#' className='w-full grid grid-cols-8 items-center border-t border-gray-500 py-2 md:py-4 p-2 hover:bg-primary/10 rounded'>
        <div className=' col-span-1'>
            {/* <Image /> */}
            <div className="w-2/3 aspect-square rounded-full bg-gray-500"></div>
        </div>
        <div className='col-span-6 flex flex-col gap-2'>
         <h5 className='text-gray-100 font-bold text-base md:text-xl'>Women agenda in Improving Politics</h5>   
         <p className='text-gray-300 font-light text-sm md:text-base'>Tue, Jan 17 -  Thurs, Dec 19, 2022</p> 
         <span className='text-xs md:text-sm text-btnWarning font-medium flex items-center'><CameraIcon /> Online By women in tech</span>  
        </div>
        <div className='col-span-1 flex justify-end'>
            <div className="w-6 aspect-square -rotate-90 border-2 border-gray-400 text-gray-400 rounded-full flex items-center justify-center">
                <ChevronFilledIcon />
            </div>
        </div>
    </Link>
  )
}

export default EventCard