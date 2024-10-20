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
import ThreeDotsMenu from './ThreeDotsMenu';

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
       <ThreeDotsMenu menu={menu} label='options' />
      </span>
    </div>
  );
};

export default CoverImage;

