'use client';
import Icon from '@/components/Common/Icons/Icon';
import ThreeDots from '@/components/Common/Icons/ThreeDots';
import ImageWithFallback from '@/components/Common/ImageWithFallBack';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/UI/Popover';
import { Separator } from '@/components/UI/Separator';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/UI/Tooltip';
import { useAppContext } from '@/lib/context/app-context';
import { Organization } from '@/lib/types/organization.types';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React, { useState } from 'react';

type Props = {
  organization: Organization;
};

const CoverImage = ({ organization }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const currentPath = usePathname();
  const router = useRouter();
  const { user } = useAppContext();

  const menu = [
    {
      title: 'Manage Organization',
      blank: false,
      link: '/organization/manage/dashboard',
      icon: <Icon name='edit-org-icon' />,
      condition: user?.organizationId == organization?.id,
    },
    {
      title: 'Visit Site',
      blank: true,
      link: `${organization?.website}`,
      icon: <Icon name='website-www-icon' />,
    },
    {
      title: 'Share',
      blank: false,
      organizationId: organization?.id,
      icon: <Icon name='share-connect-icon' />, 
      isButton: true,
    },
  ];

  return (
    <div className="relative">
      <div className='absolute inset-0 bg-gradient-to-b from-black-100/10 to-black-100/80 z-20' />
      <span className=' w-full relative z-10'>
         <ImageWithFallback
            src={
              organization?.coverImage ||
              "https://placehold.co/400x400?text=Women\n Hub"
            }
            fallbackSrc={"https://placehold.co/400x400?text=Women\n Hub"}
            aspectRatio={{ width: 800, height: 300 }}
            alt={organization?.name}
            className="justify-center items-center overflow-hidden"
          />
      </span>
      <span className='absolute top-3 right-3 text-white-100 z-20 '>
        <Popover open={isOpen} onOpenChange={setIsOpen}>
          <PopoverTrigger>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <span className='w-12 aspect-square relative flex items-center justify-center rounded-full hover:bg-primary/20'><ThreeDots /></span>
                </TooltipTrigger>
                <TooltipContent
                  side="left"
                  className="text-primaryWhite bg-primary font-quickSand border-none"
                >
                  <p>options menu</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </PopoverTrigger>
          <PopoverContent
            align="end"
            className="bg-primaryWhite absolute right-7 -top-[24px] w-52 rounded shadow-md"
          >
            <ul className="font-quickSand text-gray-200 flex flex-col items-start justify-center gap-2">
              {menu.map((item, index) => {
                if (item.condition === false) return null;
                return (
                  <React.Fragment key={index}>
                    {item.isButton ? (
                     
                       <li className="flex items-center justify-start gap-4 whitespace-nowrap">
                        {item?.icon}
                        <button
                        onClick={() => {
                          alert('shared')
                        }}
                        className="font-quickSand hover:text-btnWarning relative text-sm font-medium transition duration-300 ease-in-out cursor-pointer hover:no-underline"
                      >
                        {item.title}
                      </button>
                      </li>
                    ) : (
                      <li className="flex items-center justify-start gap-4 whitespace-nowrap">
                        {item?.icon}
                        <Link
                        href={item?.link ? item?.link : ''}
                          onClick={() => {
                            setIsOpen(false);
                          }}
                          className={cn(
                            ' font-quickSand hover:text-btnWarning relative text-sm font-medium transition duration-300 ease-in-out hover:no-underline',
                          )}
                        >
                          {item.title}
                        </Link>
                      </li>
                    )}
                    {index !== menu.length - 1 && <Separator />}
                  </React.Fragment>
                );
              })}
            </ul>
          </PopoverContent>
        </Popover>
      </span>
    </div>
  );
};

export default CoverImage;

