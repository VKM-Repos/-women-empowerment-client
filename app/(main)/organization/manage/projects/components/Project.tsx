"use-client"
import Image from 'next/image'
import React, { useState } from 'react'

import { Menu } from '@/components/Common/ModalMenu/Menu'
type EventCardProps ={
    image: string,
    name: string,
    organization: string,
    status: string,
    popMenu: any[]
}
export default function Event({image, name, organization, status, popMenu}: EventCardProps) {
    const [showPopMenu, setShowPopMenu] = useState(false)


    const handleShowPopUpMenu = () => {
        setShowPopMenu(!showPopMenu)
    }
  return (
    <div className='flex justify-between items-center border border-gray-500 p-2 rounded-md w-[700px]'>
        
        <div className='flex items-start gap-5'>
            <div>
                <Image src={image} alt='organization logo' className='w-[150px]' />
            </div>
            <div className='flex flex-col items-start'>
                <h3 className='text-md font-semibold font-sora text-gray-300'>{name}</h3>
                <p className='text-sm  font-quickSand text-black-100 w-[350px]'>{organization}</p>
                <button className='text-xs bg-white-100 shadow-md mt-3 px-2 py-1 rounded-md text-primary font-light'>{status} </button>
            </div>
        </div>
        <div>
            <div className='relative'>
                <Menu showMenu={showPopMenu} menuItems={popMenu} />
            </div>
            <span>
                <svg onClick={handleShowPopUpMenu} className='cursor-pointer' width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_5731_24673)">
                    <path d="M13.334 16.4596C13.334 17.1669 13.6149 17.8452 14.115 18.3453C14.6151 18.8453 15.2934 19.1263 16.0007 19.1263C16.7079 19.1263 17.3862 18.8453 17.8863 18.3453C18.3864 17.8452 18.6673 17.1669 18.6673 16.4596C18.6673 15.7524 18.3864 15.0741 17.8863 14.574C17.3862 14.0739 16.7079 13.793 16.0007 13.793C15.2934 13.793 14.6151 14.0739 14.115 14.574C13.6149 15.0741 13.334 15.7524 13.334 16.4596ZM13.334 8.45964C13.334 9.16688 13.6149 9.84516 14.115 10.3453C14.6151 10.8453 15.2934 11.1263 16.0007 11.1263C16.7079 11.1263 17.3862 10.8453 17.8863 10.3453C18.3864 9.84516 18.6673 9.16688 18.6673 8.45964C18.6673 7.75239 18.3864 7.07411 17.8863 6.57402C17.3862 6.07392 16.7079 5.79297 16.0007 5.79297C15.2934 5.79297 14.6151 6.07392 14.115 6.57402C13.6149 7.07411 13.334 7.75239 13.334 8.45964ZM13.334 24.4596C13.334 25.1669 13.6149 25.8452 14.115 26.3452C14.6151 26.8453 15.2934 27.1263 16.0007 27.1263C16.7079 27.1263 17.3862 26.8453 17.8863 26.3452C18.3864 25.8452 18.6673 25.1669 18.6673 24.4596C18.6673 23.7524 18.3864 23.0741 17.8863 22.574C17.3862 22.0739 16.7079 21.793 16.0007 21.793C15.2934 21.793 14.6151 22.0739 14.115 22.574C13.6149 23.0741 13.334 23.7524 13.334 24.4596Z" fill="#65655E"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_5731_24673">
                    <rect width="32" height="32" fill="white" transform="translate(0 0.458984)"/>
                    </clipPath>
                    </defs>
                </svg>
            </span>
        </div>
    </div>
  )
}
