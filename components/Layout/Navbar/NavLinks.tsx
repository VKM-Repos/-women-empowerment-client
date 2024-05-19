'use client'
import React, { useState } from 'react'
import { Popover, PopoverContent, PopoverTrigger } from "@/components/UI/Popover";
import Link from "next/link";
import { siteNavigation } from "@/navigation";
import { ChevronFilledIcon } from '@/components/Common/Icons';
import { usePathname } from 'next/navigation';
import cn from 'classnames';

export function NavLinks() {
  const [isOpen, setIsOpen] = useState(false);
  const currentPath = usePathname();


  return (
    <nav className="w-full">
      <ul className="flex gap-6 justify-center font-quickSand">
        {Object.entries(siteNavigation.topNavigation).map(([key, value]) => {
          if ("items" in value) {
            return (
              <li key={key} className="relative">
                <Popover open={isOpen} onOpenChange={setIsOpen}>
                  <PopoverTrigger>
                    <span
                    className={cn(
                    'flex items-center gap-1 text-lg font-normal transition duration-300 ease-in-out hover:text-btnWarning hover:no-underline',
                    { 'link': !currentPath.startsWith(value.label) },
         
                  )}
                    >
                      {value.label}
                    <ChevronFilledIcon
                      className={cn(
                        'transition-transform duration-150 ease-in-out mt-2',
                        {
                          'group-hover:rotate-90': value.items,
                          'group-hover:text-btnWarning': value.items,
                          'text-white-100 group-hover:text-white-100': !value.items
                        },
                        {'rotate-90': isOpen}
                      )}
                    />
                    
                    </span>
                  </PopoverTrigger>
                  <PopoverContent align='start' className="absolute top-full left-0 w-48 bg-primaryWhite shadow-md rounded">
                    <ul className="flex flex-col items-start justify-center gap-4 font-quickSand text-gray-200">
                      {Object.entries(value.items).map(([key, item]) => (
                        <li key={key}>
                          <Link
                           onClick={() => setIsOpen(false)}
                            href={item.link}
                            className={cn(
                              ' relative text-sm font-medium transition duration-300 ease-in-out hover:text-btnWarning hover:no-underline',
                              { ' link': !currentPath.startsWith(item.link) },
                              { 'text-btnWarning': currentPath.startsWith(item.link) }
                            )}
                          >
                            {item.label}
                           {!currentPath.startsWith(item.label) && (
                            <span className="absolute bottom-0 left-0 w-fit h-0.5 rounded-md bg-btnWarning transition duration-300 ease-in-out" />
                  )}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </PopoverContent>
                </Popover>
              </li>
            );
          } else {
            return (
              <li key={key} className="relative">
                <Link
                  href={value.link}
                  className={cn(
                    'text-lg font-normal transition duration-300 ease-in-out hover:text-btnWarning hover:no-underline',
                    { 'link': !currentPath.startsWith(value.link) },
                    { 'text-btnWarning': currentPath.startsWith(value.link) }
                  )}
                >
                  {value.label}
                  {currentPath.startsWith(value.link) && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 rounded-md bg-btnWarning transition duration-300 ease-in-out" />
                  )}
                </Link>
              </li>
            );
          }
        })}
      </ul>
    </nav>
  );
}
