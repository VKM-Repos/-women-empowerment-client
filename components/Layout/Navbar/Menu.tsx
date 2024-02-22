"use-client"
import React, { useEffect, useState } from "react";
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
  icon?: React.ReactNode | null;
  showChevron?: boolean;
};

type SubMenuProps = {
  subLinks: SubLink[];
  isOpen: boolean;
};

export const MenuContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <nav className="flex justify-center items-center space-x-8 px-8 py-6 capitalize">{children}</nav>;
};

export const MenuItem: React.FC<MenuItemProps> = ({ link, subLinks, text, icon, showChevron = true }) => {
  const pathname = usePathname();
  const isLinkActive = pathname.startsWith(link);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const handleShowMenu = () => {
    setIsSubMenuOpen((prevState) => !prevState);
  };

  return (
    <div className="relative" onClick={handleShowMenu}>
      <Link href={link} className={`flex items-center space-x-2 ${isLinkActive ? 'text-btnWarning ' : 'text-primaryBlack'}`}>
        <span className={`${icon ? '' : 'link'}`}>{text} {icon}</span>
        {subLinks && showChevron && <ChevronFilledIcon className={`transition-transform duration-150 ease-in-out ${isSubMenuOpen ? "rotate-90 text-btnWarning" : ""}`} />}
      </Link>
      {subLinks && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: isSubMenuOpen ? 1 : 0 }}>
            <SubMenu subLinks={subLinks} isOpen={isSubMenuOpen} />
          </motion.div>
      )}
    </div>
  );
};

const SubMenu: React.FC<SubMenuProps> = ({ subLinks, isOpen }) => {
  const pathname = usePathname();
console.log(subLinks);

  return (
    <div className={`absolute top-[calc(100%_+_1rem)]  transform -translate-x-1/2 ${isOpen ? '' : 'hidden'}`}>
      <div className="bg-primaryWhite backdrop-blur-sm rounded-lg overflow-hidden border border-gray-400 shadow-xl p-4 flex flex-col space-y-4">
        {subLinks.map((item, index) => {
          const isLinkActive = pathname.startsWith(item.text);
          return (
            <Link className={`flex items-center space-x-2 ${item.text == 'manage Organization' ? 'w-[165px]' : ''}  ${isLinkActive ? 'text-btnWarning ' : 'text-primaryBlack'}`} key={item.href} href={item.href}>
             <span>{item.icon}</span> <span className="text-xs">{item.text}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
