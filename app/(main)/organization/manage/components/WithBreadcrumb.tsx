'use client'
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/UI/Breadcrumb';
import { menus } from './Sidebar/sidebar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/UI/Popover';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/UI/Tooltip';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';

export function BreadcrumbComponent() {
    const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname();
  const urls = menus.map(menu => menu.link);

  const activeBreadcrumb = menus.map(menu => menu.link.includes(pathname));
  const manageLink = `/organization/manage`;

  const breadcrumbItems = menus.map((menu, index) => {
    const isActive = pathname.startsWith(menu.link);
    const textColor = isActive ? 'text-btnWarning' : 'text-gray-300';

    return (
      <BreadcrumbItem key={menu.link}>
        {isActive ? (
          <BreadcrumbPage className={textColor}>{menu.title}</BreadcrumbPage>
        ) : (
          <BreadcrumbLink href={menu.link} className={textColor}>
            {menu.title}
          </BreadcrumbLink>
        )}
      </BreadcrumbItem>
    );
  });

  return (
    <Breadcrumb className='font-quickSand font-semibold block md:hidden'>
      <BreadcrumbList>
        <BreadcrumbLink href={manageLink}>Manage Organization</BreadcrumbLink>
        <BreadcrumbSeparator />
        {urls.length > 2 && (
          <BreadcrumbItem>
            <Popover open={isOpen} onOpenChange={setIsOpen}>
              <PopoverTrigger>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span className="hover:bg-primary/20 relative flex aspect-square w-12 items-center justify-center rounded-full">
                        <BreadcrumbEllipsis className="h-4 w-4" />
                      </span>
                    </TooltipTrigger>
                    <TooltipContent
                      side="left"
                      className="text-primaryWhite bg-primary font-quickSand border-none text-xs"
                    >
                      More
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </PopoverTrigger>
              <PopoverContent
                align="end"
                className="bg-primaryWhite absolute -top-[24px] right-7 w-48 rounded shadow-md"
              >
                <ul className="font-quickSand text-gray-200 flex flex-col items-start justify-center gap-2">
                  {breadcrumbItems.map((item, index) => (
                    <React.Fragment key={index}>
                      <li className="flex items-center justify-start gap-4 whitespace-nowrap">
                        {item}
                      </li>
                    </React.Fragment>
                  ))}
                </ul>
              </PopoverContent>
            </Popover>
          </BreadcrumbItem>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
