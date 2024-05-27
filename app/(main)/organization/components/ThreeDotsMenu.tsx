import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/UI/Popover';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/UI/Tooltip';
import ThreeDots from '@/components/Common/Icons/ThreeDots';


type MenuItem = {
  title: string;
  icon?: React.ReactNode;
  link?: string;
  isButton?: boolean;
  condition?: boolean;
  onClick?: () => void;
};

type ThreeDotsMenuProps = {
  menu: MenuItem[];
  label?: React.ReactNode;
};

const ThreeDotsMenu: React.FC<ThreeDotsMenuProps> = ({ menu, label = "options menu" }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <span className='w-12 aspect-square relative flex items-center justify-center rounded-full hover:bg-primary/20'>
                <ThreeDots />
              </span>
            </TooltipTrigger>
            <TooltipContent
              side="left"
              className="text-primaryWhite bg-primary font-quickSand border-none text-xs"
            >
              {label}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </PopoverTrigger>
      <PopoverContent
        align="end"
        className="bg-primaryWhite absolute right-7 -top-[24px] w-48 overflow-hidden rounded shadow-md"
      >
        <ul className="font-quickSand text-gray-200 flex flex-col items-start justify-center gap-2">
          {menu.map((item, index) => {
            if (item.condition === false) return null;
            return (
              <React.Fragment key={index}>
                {item.isButton ? (
                  <li className="w-full flex items-center justify-start gap-2 whitespace-nowrap">
                    {item.icon}
                    <button
                      onClick={() => {
                        item.onClick && item.onClick();
                        setIsOpen(false);
                      }}
                      className="font-quickSand hover:text-btnWarning relative text-xs font-medium transition duration-300 ease-in-out cursor-pointer hover:no-underline"
                    >
                      {item.title}
                    </button>
                  </li>
                ) : (
                  <li className="w-full flex items-center justify-start gap-2 whitespace-nowrap">
                    {item.icon}
                    <Link
                      href={item.link || ''}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        ' font-quickSand hover:text-btnWarning relative text-xs font-medium transition duration-300 ease-in-out hover:no-underline'
                      )}
                    >
                      {item.title}
                    </Link>
                  </li>
                )}
              </React.Fragment>
            );
          })}
        </ul>
      </PopoverContent>
    </Popover>
  );
};

export default ThreeDotsMenu;
