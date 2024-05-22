import React, { useState } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from "@/components/UI/Popover";
import  Link  from "next/link";
import  OrgAvatar  from '@/public/images/org-avatar.svg';
import { usePathname, useRouter } from 'next/navigation';
import cn from 'classnames';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/UI/Tooltip';
import { Avatar, AvatarImage } from '@/components/UI/Avatar';
import Icon from '@/components/Common/Icons/Icon';
import { Separator } from '@/components/UI/Separator';

export function OrganizationMenu({ user }: any) {
  const [isOpen, setIsOpen] = useState(false);
  const currentPath = usePathname();
  const router = useRouter();


  const organizationId = user?.organizationId;
  const isAdmin = user?.role.includes('ADMIN');

  let organizationLinks;
  if (isAdmin) {
    organizationLinks = [
      { key: 'manage-organization', label: 'Manage Organization', link: '/organization/manage/dashboard', icon: 'manage-org-icon' },
      { key: 'view-organization', label: 'View Organization', link: `/organization/${organizationId}`, icon: 'view-org-icon' },
      { key: 'add-event', label: 'Add Event', link: '/events/create', icon: 'add-event-icon' }
    ];
  } else {
    organizationLinks = [
      { key: 'add-organization', label: 'Add Organization', link: '/organization/create', icon: 'add-org-icon' },
      { key: 'add-event', label: 'Add Event', link: '/events/create', icon: 'add-event-icon' }
    ];
  }

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <span className='relative flex gap-2 items-center'>
                <Avatar>
                  <AvatarImage
                    src={OrgAvatar.src}
                    alt={user?.name}
                  />
                </Avatar>
              </span>
            </TooltipTrigger>
            <TooltipContent side='left' className='text-primaryWhite bg-primary border-none font-quickSand'>
              <p>Organization</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </PopoverTrigger>
      <PopoverContent align='end' className="absolute top-full right-1/2 w-[15rem] bg-primaryWhite shadow-md rounded">
        <ul className="flex flex-col items-start justify-center gap-2 font-quickSand text-gray-200">
          {organizationLinks.map(({ key, label, link, icon }, index) => (
            <React.Fragment key={key}>
            <li className='flex gap-4 items-center justify-center' >
              <Icon name={icon} />
              <div
               onClick={() => {setIsOpen(false); router.push(link)}}
                className={cn(
                  'relative text-sm font-quickSand font-medium transition duration-300 ease-in-out hover:text-btnWarning hover:no-underline cursor-pointer',
                  { ' link': !currentPath.startsWith(link) },
                  { 'text-btnWarning': currentPath.startsWith(link) }
                )}
              >
                {label}
                {!currentPath.startsWith(link) && (
                  <span className="absolute bottom-0 left-0 w-fit h-0.5 rounded-md bg-btnWarning transition duration-300 ease-in-out" />
                )}
              </div>
            </li>
            {index !== organizationLinks.length - 1 && <Separator />}
            </React.Fragment>
          ))}
        </ul>
      </PopoverContent>
    </Popover>
  );
}

