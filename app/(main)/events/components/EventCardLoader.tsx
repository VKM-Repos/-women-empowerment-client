import { ChevronRightIcon } from '@/components/Common/Icons'
import { CameraIcon } from '@/components/Common/Icons/Camera.icon'
import { LocationIcon } from '@/components/Common/Icons/Location.icon'
import React from 'react'

type Props = {
    event: any
}

export default function EventCardLoader({event}: Props) {
  return (
     <div  className='w-full grid grid-cols-8 items-center border-t border-gray-500 py-2 p-2 hover:bg-primary/10 rounded'>
      <div className='col-span-1'>
        <div  className="w-full md:w-2/3 animate-pulse aspect-square rounded-full object-contain bg-gray-400"
        />
      </div>
      <div className='col-span-6 flex flex-col gap-2'>
        <span className='bg-gray-400 w-1/2 rounded h-5 animate-pulse'></span>
        <span className='bg-gray-400 w-1/3 rounded h-2 animate-pulse'></span>
        <span className='text-xs md:text-sm text-btnWarning font-medium flex items-center'>
              <div className="w-4 aspect-square bg-gray-500 animate-pulse rounded-full px-4"></div> &nbsp; <span className='bg-gray-400 w-[4rem] rounded h-2 animate-pulse'></span> &nbsp; <span className='bg-gray-400 w-[4rem] rounded h-2 animate-pulse'></span>
        </span>
      </div>
      <div className='col-span-1 flex justify-end'>
        <div className="w-6 aspect-square text-gray-400 rounded-full flex items-center justify-center">
          <ChevronRightIcon />
        </div>
      </div>
    </div>
  )
}