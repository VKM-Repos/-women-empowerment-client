'use client';
import ImageWithFallback from '@/components/Common/ImageWithFallBack';
import { Organization } from '@/lib/types/organization.types';
import React, { useRef, useState } from 'react';
import EditMenu from './EditMenu';


type Props = {
  organization: Organization;
  onUpdateCoverImage: (file: File) => void;
  onRemoveCoverImage: () => void;
};


const CoverImage = ({ organization, onUpdateCoverImage, onRemoveCoverImage }: Props) => {
  const inputCoverRef = useRef<HTMLInputElement>(null);

  const handleChangeCoverPhoto = () => {

    inputCoverRef.current?.click();
  };

  const handleCoverImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const imageFile = e.target.files?.[0];
    if (imageFile) {
      onUpdateCoverImage(imageFile);
    }
  };
  
    const menu = [
    {
      title: 'Remove cover image',
      blank: false,
      isButton: true,
      onClick: onRemoveCoverImage,
      condition: organization?.coverImage !== null,
    },
    {
      title: 'Change cover image',
      blank: false,
      isButton: true,
      onClick: handleChangeCoverPhoto,
    },
  ];

  return (
     <div className="relative">
      <div className='absolute inset-0 bg-gradient-to-b from-black-100/10 to-black-100/80 z-20' />
      <span className='md:hidden block w-full relative z-10'>
         <ImageWithFallback
            src={organization?.coverImage || "https://placehold.co/400x400?text=Women\n Hub"}
            fallbackSrc={"https://placehold.co/400x400?text=Women\n Hub"}
            aspectRatio={{ width: 2, height: 1 }}
            alt={`${organization?.id} cover image`}
            className="justify-center items-center overflow-hidden"
          />
      </span>
      <span className='hidden md:block w-full relative z-10'>
         <ImageWithFallback
            src={organization?.coverImage || "https://placehold.co/400x400?text=Women\n Hub"}
            fallbackSrc={"https://placehold.co/400x400?text=Women\n Hub"}
            aspectRatio={{ width: 3, height: 1 }}
            alt={`${organization?.id} cover image`}
            className="justify-center items-center overflow-hidden"
          />
      </span>
      <span className='absolute top-3 right-3 text-white-100 z-20 '>
       <EditMenu menu={menu} label='options' />
      </span>
      <input
        ref={inputCoverRef}
        type="file"
        onChange={handleCoverImageChange}
        className="hidden"
        accept="image/*"
      />
    </div>
  );
};

export default CoverImage;

