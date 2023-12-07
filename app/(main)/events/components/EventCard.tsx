import { CameraIcon } from '@/components/Common/Icons/Camera.icon';
import { ChevronFilledIcon } from '@/components/Common/Icons/ChevronFilled.icon';
import { LocationIcon } from '@/components/Common/Icons/Location.icon';
import EventImage from '../../../../public/images/img_womanpowersitting.png';
import NewsImage from '../../../../public/images/img_womanpowerfitness.png';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type EventProps = {
  id: string;
  image?: string;
  title: string;
  author: string;
  period: string;
  status: string;
  location?: string;

};

const onlineEvents: EventProps[] = Array.from({ length: 5 }, (_, index) => ({
  id: `online-${index + 1}`,
  image: NewsImage.src,
  title: `Women agenda in Improving Politics`,
  author: `women in tech`,
  period: 'Tue, Jan 17 - Thurs, Dec 19, 2022',
  status: 'online',

}));

const physicalEvents: EventProps[] = Array.from({ length: 5 }, (_, index) => ({
  id: `physical-${index + 1}`,
  image: EventImage.src,
  title: `WEP SPONSORSHIP DECK DECEMBER 2022 EDITION`,
  author: `Women in power`,
  period: 'Tue, Jan 17 - Thurs, Dec 19, 2022',
  status: 'physical',
  location: `FCTA, Abuja`,

}));

const allEvents: EventProps[] = [...onlineEvents, ...physicalEvents];

const EventCard: React.FC<{ event: EventProps }> = ({ event }) => {
  return (
    <Link href='#' className='w-full grid grid-cols-8 items-center border-t border-gray-500 py-2 md:py-4 p-2 hover:bg-primary/10 rounded'>
      <div className='col-span-1'>
        <Image
          src={event?.image || "../../../../public/images/group-of-girls.png"}
          alt={`author`}
          width={100}
          height={100}
          className="w-full md:w-2/3  aspect-square rounded-full object-contain"
        />
      </div>
      <div className='col-span-6 flex flex-col gap-2'>
        <h5 className='text-gray-100 font-bold text-base md:text-xl'>{event.title}</h5>
        <p className='text-gray-300 font-light text-sm md:text-base'>{event.period}</p>
        <span className='text-xs md:text-sm text-btnWarning font-medium flex items-center'>
          {event.status === 'online' ? (
            <>
              <CameraIcon /> &nbsp; {event.status} &nbsp; {event.author}
            </>
          ) : (
            <>
              {' '}
              <LocationIcon /> &nbsp; {event.location}
            </>
          )}{' '}
        </span>
      </div>
      <div className='col-span-1 flex justify-end'>
        <div className="w-6 aspect-square -rotate-90 border-2 border-gray-400 text-gray-400 rounded-full flex items-center justify-center">
          <ChevronFilledIcon />
        </div>
      </div>
    </Link>
  );
};

export { allEvents, onlineEvents, physicalEvents };
export default EventCard;
