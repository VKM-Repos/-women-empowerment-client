'use-client';
import Image from 'next/image';
import React, { useState } from 'react';

import { formatDateTime } from '@/lib/utils/helperFunctions';
import ThreeDotsMenu from '../../../components/ThreeDotsMenu';
import Icon from '@/components/Common/Icons/Icon';
import ImageWithFallback from '@/components/Common/ImageWithFallBack';
import { CameraIcon } from '@/components/Common/Icons/Camera.icon';
import { LocationIcon } from '@/components/Common/Icons/Location.icon';
type EventCardProps = {
  event: {
    id: number;
    image: string;
    name: string;
    organization: {
      name: string;
    };
    startDate: string;
    location: string;
    type: string;
  };
  eventStatus: string;
};
export default function Event({ event, eventStatus }: EventCardProps) {

  const menu = [
    {
      title: 'Edit',
      link: `/organization/manage/events/edit/${event?.id}`,
      blank: false,
      icon: <Icon name="edit-org-icon" />,
    },
    {
      title: 'View',
      link: `/events/${event?.id}?query=preview`,
      blank: false,
      icon: <Icon name="eye-icon" />,
    },
    {
      title: 'Delete',
      link: `/events/${event?.id}?query=delete`,
      blank: false,
      icon: <Icon name="trash-icon" />,
      condition: eventStatus === 'Drafts',
    },
  ];

  return (
    <div className=" w-full md:max-w-3xl flex items-center justify-between border gap-5 rounded-xl p-2 drop-shadow-sm relative overflow-hidden">
      <div className="flex items-start justify-start gap-5">
        <div className="relative aspect-square w-[4rem] lg:w-[7rem] overflow-hidden rounded">
          <ImageWithFallback
            src={event?.image || 'https://placehold.co/400x400?text=Women\n Hub'}
            fallbackSrc={'https://placehold.co/400x400?text=Women\n Hub'}
            aspectRatio={{ width: 1, height: 1 }}
            alt={`Image ${event?.id}`}
            className=""
          />
        </div>
        <div className="my-auto flex grow basis-[0%] flex-col items-stretch self-start">
          <div className="text-black text-base text-opacity-40"> 
            <h5 className="text-gray-100 font-sora block w-full truncate whitespace-nowrap text-base font-semibold">
              {event.name}
            </h5>
            <span className=" text-gray-300 font-normal font-quickSand text-sm">
              {formatDateTime(event?.startDate)}
            </span>
          </div>
          <div className="mt-1 flex lg:flex-row flex-col items-start justify-start flex-wrap gap-0  text-xs w-full">
            <span className="text-primary font-quickSand text-xs w-[90%] truncate">
              By {event.organization?.name}
            </span>
            <span className="text-btnWarning flex items-center">
              {event.type === 'ONLINE' && (
                <span className="flex gap-1">
                  <CameraIcon className="aspect-square w-5" />{' '}
                  <p className="font-quickSand w-full text-xs capitalize">
                    {event.type.toLowerCase()}
                  </p>{' '}
                </span>
              )}
              {event.type === 'PHYSICAL' && (
                <span className="flex gap-1">
                  <LocationIcon className="aspect-square w-4" />
                  <p className="font-quickSand w-full text-xs">
                    {event.location}
                  </p>
                </span>
              )}
            </span>
            
          </div>
        </div>
      </div>

      <div className='absolute lg:right-2 right-[2px] my-auto'>
        <ThreeDotsMenu menu={menu} label="Quick action" />
      </div>
    </div>
  );
}


export const Loader = () => {
  return(
      <div className="max-w-3xl flex items-center justify-between border gap-5 rounded-xl p-2 drop-shadow-sm animate-pulse">
      <div className="w-full min-h-full flex items-start justify-start gap-5">
        <div className="relative aspect-square w-[4rem] lg:w-[7rem] overflow-hidden rounded bg-gray-500"></div>
        <div className="w-full h-full flex-grow flex flex-col items-stretch self-center">
          <div className="w-full h-full">
            <div className="bg-gray-500 h-4 w-2/4 mb-2 rounded"></div>
            <div className="bg-gray-500 h-2 w-1/4 rounded block"></div>
          </div>
          <div className="mt-1 flex items-start justify-start gap-2 text-xs">
            <div className="bg-gray-500 h-2 w-1/6 rounded"></div>
            <div className="bg-gray-500 h-2 w-1/6 rounded flex items-center justify-center text-xs font-medium md:text-sm"></div>
          </div>
        </div>
      </div>

      <div className="bg-gray-500 h-8 w-8 rounded-full"></div>
    </div>
  )
}
