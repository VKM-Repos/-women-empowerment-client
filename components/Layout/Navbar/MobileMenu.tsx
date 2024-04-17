"use client";

import SideMenu from "@/components/Layout/SideMenu/SideMenu";
import { useSideMenu } from "@/lib/context/sidemenu-context";

import Logo from "@/public/logo.svg";
import Link from "next/link";
import Image from "next/image";
import { MenuItem } from "./Menu";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type MobileMenuProps = {};

const MobileMenu: React.FC<MobileMenuProps> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { hideSideMenu } = useSideMenu();
  const handleSubMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <SideMenu onClose={hideSideMenu} isOpen={true}>
      <div className="absolute bg-white-100 w-[70%] h-screen z-10 top-0 px-8 py-5 ">
        <div className="flex justify-between">
          <Link href="/" className="w-fit flex items-center space-x-2">
            <Image
              src={Logo.src}
              alt=""
              className="w-[3rem] md:w-[4rem] aspect-auto"
              width={80}
              height={80}
            />
          </Link>
        </div>

        <div className="flex flex-col gap-5 mt-[100px] text-lg">
          <MenuItem
            link="/about"
            subLinks={null}
            text="About"
            onclick={hideSideMenu}
          />
          <MenuItem
            link="/category"
            subLinks={null}
            text="Category"
            onclick={hideSideMenu}
          />
         
          <MenuItem
            link="/events"
            subLinks={null}
            text="Events"
            onclick={hideSideMenu}
          />
          <MenuItem
            link="#"
            subLinks={null}
            text="Community"
            onclick={() => {
              handleSubMenu();
            }}
          />
           {isOpen && (
            <AnimatePresence initial={isOpen}>
              <motion.ul
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: 2 }}
                exit={{ opacity: 0, y: 0 }}
                className="w-full px-8 text-gray-300 flex flex-col gap-2 border-l border-l-gray-400 -mt-2"
              >
                <MenuItem
                  link="/discussions"
                  subLinks={null}
                  text="Discussions"
                  onclick={hideSideMenu}
                />
                <MenuItem
                  link="/support"
                  subLinks={null}
                  text="Support"
                  onclick={hideSideMenu}
                />
              </motion.ul>
            </AnimatePresence>
          )}
          <MenuItem
            link="/projects"
            subLinks={null}
            text="Projects"
            onclick={hideSideMenu}
          />
          <MenuItem link="/blog" subLinks={null} text="Blog" />
        </div>
        <div className="absolute bottom-3 w-full whitespace-nowrap text-xs">
          <p>© Copyright 2024. VHDO</p>
        </div>
      </div>
    </SideMenu>
  );
};

export default MobileMenu;
