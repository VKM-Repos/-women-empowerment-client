'use client'
import React, { useState } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from "@/components/UI/Popover";
import  Link  from "next/link";
import { siteNavigation } from "@/navigation";
import { ChevronFilledIcon } from '@/components/Common/Icons';
import { usePathname, useRouter } from 'next/navigation';
import cn from 'classnames';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/UI/Tooltip';
import { Badge } from '@/components/UI/Badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/UI/Avatar';
import Icon from '@/components/Common/Icons/Icon';
import { Separator } from '@/components/UI/Separator';

export function ProfileMenu({user}: any) {
  const [isOpen, setIsOpen] = useState(false);
  const currentPath = usePathname();
  const profileLink = `/profile/${user?.userId}`;
    const router = useRouter();

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger>
         <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <span className='relative flex gap-1 items-center'>
              <Badge className="absolute left-1 -bottom-3 bg-black-100 text-white-100 z-10">New</Badge>
              <Avatar>
                <AvatarImage
                  src={user?.photoUrl || ""}
                  alt={user?.name}
                />
                <AvatarFallback className='font-sora font-bold'>{getInitials(user?.name) || "W"}</AvatarFallback>
              </Avatar>
              <ChevronFilledIcon
                      className={cn(
                        'transition-transform duration-150 ease-in-out mt-2',
                        {'rotate-90': isOpen}
                      )}
                    />
              </span>
            </TooltipTrigger>
            <TooltipContent side='left' className='text-primaryWhite bg-primary font-quickSand border-none'>
              <p>profile</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </PopoverTrigger>
      <PopoverContent align='end' className="absolute top-full right-1/2 w-48 bg-primaryWhite shadow-md rounded">
        <ul className="flex flex-col items-start justify-center gap-2 font-quickSand text-gray-200">
          {Object.entries(siteNavigation.profileNav).map(([key, { label, link, icon, alt }]) => (
            <React.Fragment key={key}>
            <li className='flex gap-4 items-center justify-center relative' >
              <Icon name={icon} />
              <div
                  onClick={() => {setIsOpen(false); router.push(key === 'profile' ? profileLink : link)}}
                  className={cn(
                    ' relative text-sm font-quickSand font-medium transition duration-300 ease-in-out cursor-pointer hover:text-btnWarning hover:no-underline',
                    { ' link': !currentPath.startsWith(link) },
                    { 'text-btnWarning': currentPath.startsWith(key === 'profile' ? profileLink : link) }
                  )}
                >
                  {label}
                 
                  {!currentPath.startsWith(link) && (
                    <span className="absolute bottom-0 left-0 w-fit h-0.5 rounded-md bg-btnWarning transition duration-300 ease-in-out" />
                  )}
                </div>
             {key === 'notification' && (
                    <Badge className="absolute -right-12 bottom-0 bg-black-100 text-[10px] text-white-100 z-10">New</Badge>
                  )}
            </li>
            {key !== Object.keys(siteNavigation.profileNav).pop() && <Separator />}
            </React.Fragment>
          ))}
        </ul>
      </PopoverContent>
    </Popover>
  );
}

const getInitials = (name: string): string => {
  // Check if the name is provided
  if (!name) return '';

  // Get the first letter and convert it to uppercase
  return name.charAt(0).toUpperCase();
};