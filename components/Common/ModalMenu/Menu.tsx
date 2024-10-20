'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import ShareDropdown from '@/components/LandingPage/ShareDropDown';
import { siteConfig } from '@/lib/config/siteConfig';

interface MenuProps {
  menuItems: any[];
  showMenu: boolean;
}

export const Menu: React.FC<MenuProps> = ({ menuItems, showMenu }) => {
  if (!showMenu) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: showMenu ? 1 : 0 }}
    >
      <div
        className={`absolute ${
          menuItems.length > 2 ? '-right-5' : 'right-[2%]'
        } mt-1 -translate-x-1/2 transform`}
      >
        <div className="bg-primaryWhite cursor-pointer rounded-md px-5 py-2 text-sm">
          {menuItems?.map((item, index) => {
            if (item?.title == 'Share') {
              return (
                <button
                  key={index}
                  className="text-primary -ml-1 flex items-center"
                >
                  <ShareDropdown
                    text={''}
                    urlToShare={`${typeof window !== 'undefined' ? window.location.origin : siteConfig.url}/organization/${item?.organizationId}`}
                  />
                  Share
                </button>
              );
            } else {
              return (
                <Link
                  key={index}
                  className={`text-primary flex items-center gap-2 py-3 px-2${
                    index !== menuItems.length - 1
                      ? ' border-stone-800 border-b border-solid border-opacity-10'
                      : ''
                  }`}
                  href={`${item.link}`}
                  target={item?.blank ? '_blank' : ''}
                >
                  <span>{item.icon}</span> {item.title}
                </Link>
              );
            }
          })}
        </div>
      </div>
    </motion.div>
  );
};
