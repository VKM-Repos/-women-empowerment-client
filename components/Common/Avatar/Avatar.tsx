'use client'
import React from 'react';
import Image, { StaticImageData } from 'next/image';
import defaultAvatarUrl from '../../../public/icons/default-avatar-male-three.svg';

interface AvatarProps {
  imageUrl?: string | StaticImageData;
  altText?: string;
  className?: string;
}

interface AvatarGroupProps {
  avatars: AvatarProps[];
}

const Avatar: React.FC<AvatarProps> = ({ imageUrl, altText, className }) => {
  return (
    <div className={`avatar ${className}`}>
      <Image
        src={imageUrl || defaultAvatarUrl}
        alt={altText || 'User Avatar'}
        className={className}
      />
    </div>
  );
};

const AvatarGroup: React.FC<AvatarGroupProps> = ({ avatars }) => {
  return (
    <div className="flex">
      {avatars?.map((avatar, index) => (
        <Avatar
          key={index}
          imageUrl={avatar.imageUrl}
          altText={avatar.altText}
          className={`w-[2rem] aspect-square -mr-2 ${avatar.className}`}
        />
      ))}
    </div>
  );
};

export { Avatar, AvatarGroup };
