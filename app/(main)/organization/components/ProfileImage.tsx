import ImageWithFallback from '@/components/Common/ImageWithFallBack';
import React from 'react'

type Props = {
    withTitle?: boolean;
    logo: string;
    alt: string;
    title?: string;
}

const ProfileImage = ({withTitle, title, logo, alt}: Props) => {
  return (
    <div className='flex justify-start items-start gap-2 p-4'>
        <div className='border-2 relative w-[8rem] lg:w-[10rem] aspect-square rounded-full bg-white-100 overflow-hidden'>
            <ImageWithFallback
                src={ logo ||
                "https://placehold.co/400x400?text=Women\n Hub"
                }
                fallbackSrc={"https://placehold.co/400x400?text=Women\n Hub"}
                aspectRatio={{ width: 1, height: 1 }}
                alt={alt}
                className=""
            />
        </div>
        {withTitle && <h3 className=' lg:text-3xl text-lg leading-tight font-semibold font-sora w-4/5 lg:w-3/5 text-primaryWhite'>{title}</h3>}
    </div>
  )
}

export default ProfileImage