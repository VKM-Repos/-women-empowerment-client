'use client';
import ImageWithFallback from '@/components/Common/ImageWithFallBack';
import React, { useRef, useState } from 'react';
import EditMenu from './EditMenu';

type Props = {
  organization: any;
  imagePreview: string | null;
  onUpdateProfileImage: (file: File) => void;
  onRemoveProfileImage: () => void;
};

const ProfileImage = ({
  organization,
  imagePreview,
  onUpdateProfileImage,
  onRemoveProfileImage,
}: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const handleChooseFile = () => {
    inputRef.current?.click();
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const imageFile = e.target.files?.[0];
    if (imageFile) {
      onUpdateProfileImage(imageFile);
    }
  };

  const menu = [
    {
      title: 'Remove profile image',
      blank: false,
      isButton: true,
      onClick: onRemoveProfileImage,
      condition: organization?.coverImage !== null,
    },
    {
      title: 'Change profile image',
      blank: false,
      isButton: true,
      onClick: handleChooseFile,
    },
  ];

  return (
    <div
      className="bg-white-100 flex items-center justify-center relative aspect-square w-[8rem] overflow-hidden rounded-full border-4 lg:w-[10rem]"
      onMouseEnter={() => setIsMenuVisible(true)}
      onMouseLeave={() => setIsMenuVisible(false)}
    >
      <ImageWithFallback
        src={
          imagePreview ||
          organization?.logo ||
          'https://placehold.co/400x400?text=Women\n Hub'
        }
        fallbackSrc={'https://placehold.co/400x400?text=Women\n Hub'}
        aspectRatio={{ width: 1, height: 1 }}
         alt={`${organization?.id} profile image`}
        className=""
      />
      <input
        ref={inputRef}
        type="file"
        onChange={handleImageChange}
        className="hidden"
        accept="image/*"
      />
      {isMenuVisible && (
        <span className="text-white-100 absolute w-fit h-fit mx-auto my-auto inset-0 z-20">
          <EditMenu menu={menu} label="options" />
        </span>
      )}
    </div>
  );
};

export default ProfileImage;
