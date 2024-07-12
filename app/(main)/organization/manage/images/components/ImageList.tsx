import ImageWithFallback from '@/components/Common/ImageWithFallBack';
import { Organization } from '@/lib/types/organization.types';
import React, { useState } from 'react';
import EditMenu from '../../components/EditMenu';

type Props = {
  image: Organization['images'][0];
  onRemoveImage: () => void;
};

const ImageList = ({ image, onRemoveImage }: Props) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const menu = [
    {
      title: 'Remove image',
      blank: false,
      isButton: true,
      onClick: onRemoveImage,
      condition: image !== null,
    },
  ];

  return (
    <div className="flex flex-wrap gap-4">
      <div
        className="relative aspect-square w-[10rem] overflow-hidden rounded shadow-md lg:w-[15rem]"
        onMouseEnter={() => setIsMenuVisible(true)}
        onMouseLeave={() => setIsMenuVisible(false)}
      >
        <ImageWithFallback
          src={image.url || 'https://placehold.co/400x400?text=Women\n Hub'}
          fallbackSrc={'https://placehold.co/400x400?text=Women\n Hub'}
          aspectRatio={{ width: 1, height: 1 }}
          alt={`Image ${image.id}`}
          className=""
        />
        {isMenuVisible && (
          <span className="text-white-100 absolute inset-0 z-20 mx-auto my-auto h-fit w-fit">
            <EditMenu menu={menu} label="options" />
          </span>
        )}
      </div>
    </div>
  );
};

export default ImageList;

export const Loader = () => {
  return (
    <div className="w-fit">
      <div className="bg-gray-400 relative aspect-square w-[10rem] animate-pulse overflow-hidden rounded shadow-md lg:w-[15rem]"></div>
    </div>
  );
};
