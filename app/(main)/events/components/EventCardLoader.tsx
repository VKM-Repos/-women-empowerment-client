import { ChevronRightIcon } from '@/components/Common/Icons'
import { CameraIcon } from '@/components/Common/Icons/Camera.icon'
import { LocationIcon } from '@/components/Common/Icons/Location.icon'
import React from 'react'

type Props = {
    
}

export default function EventCardLoader({}: Props) {
  return (
     <div  className='w-full grid grid-cols-8 gap-4 items-center border-t border-gray-500 py-2 p-2 hover:bg-primary/10 rounded'>
      <div className='col-span-2 md:col-span-1'>
        <div className="w-full md:w-2/3 animate-pulse aspect-square rounded-full object-contain bg-gray-400"
        />
      </div>
      <div className='w-full col-span-6 flex flex-col gap-1 md:gap-2'>
        <span className='bg-gray-400 lg:w-1/2 w-full rounded h-3 animate-pulse'></span>
        <span className='bg-gray-400 w-1/3 rounded h-2 animate-pulse'></span>
        <span className='text-xs md:text-sm text-btnWarning font-medium flex items-center'>
              <div className="w-4 aspect-square bg-gray-500 animate-pulse rounded-full"></div> &nbsp; <span className='bg-gray-400 w-[4rem] rounded h-2 animate-pulse'></span> &nbsp; <span className='bg-gray-400 w-[4rem] rounded h-2 animate-pulse'></span>
        </span>
      </div>
    </div>
  )
}