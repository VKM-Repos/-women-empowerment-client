'use client'

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronFilledIcon } from "@/components/Common/Icons/chevronFilled.icon";

type SubLink = {
  icon?: React.ReactNode | null,
  text: string;
  href: string;
};

type MenuItemProps = {
  link: string;
  text: string;
  subLinks?: SubLink[] | null;
  icon?: React.ReactNode | null,
  showChevron?: boolean
};

type SubMenuProps = {
  subLinks: SubLink[];
};

export const MenuContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <nav className="flex justify-center items-center space-x-8 px-8 py-6 capitalize">{children}</nav>;
};

export const MenuItem: React.FC<MenuItemProps> = ({ link, subLinks, text, icon, showChevron = true }) => {
  const pathname = usePathname();
  const isLinkActive = pathname.startsWith(link);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsSubMenuOpen(true);
  };

  const handleShowMenu = ()=> {
    setIsSubMenuOpen(prevState => !prevState)
  }

  const handleMouseLeave = () => {
    setIsSubMenuOpen(false);
  };

  return (
    <div className="relative " onClick={handleShowMenu}>
      <Link href={link} className={`flex items-center space-x-2 ${isLinkActive ? 'text-btnWarning ' : 'text-primaryBlack'}`}>
        <span className="link">{text} {icon}</span>
        {subLinks
          && showChevron && <ChevronFilledIcon className={` transition-transform duration-150 ease-in-out ${isSubMenuOpen ? "rotate-90 text-btnWarning" : ""}`} />
        }
      </Link>
      {subLinks && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: isSubMenuOpen ? 1 : 0 }}>
          <SubMenu subLinks={subLinks} />
        </motion.div>
      )}
    </div>
  );
};

const SubMenu: React.FC<SubMenuProps> = ({ subLinks }) => {
  const pathname = usePathname();

  return (
    <div className="absolute top-[calc(100%_+_1.5rem)] left-1/2 transform -translate-x-1/2 ">
      <div className="bg-primaryWhite backdrop-blur-sm rounded-lg overflow-hidden border border-gray-400 shadow-xl p-4 flex flex-col space-y-4">
        {subLinks.map((item) => {
          const isLinkActive = pathname.startsWith(item.text);
          return (
            <Link className={`flex items-center space-x-2 ${isLinkActive ? 'text-btnWarning ' : 'text-primaryBlack'}`} key={item.href} href={item.href}>
              <span className="flex items-center gap-7 link">{item.icon} {item.text}</span>
              {/* <hr className="mt-2 text-slate-700" /> */}
            </Link>
          )
        }
        )}
      </div>
    </div>
  );
};
