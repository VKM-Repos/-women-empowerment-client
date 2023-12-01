"use client";
import React, { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

import Logo from "@/public/icons/logo.svg";
import userAccount from "@/public/icons/account-user.svg";
import Link from "next/link";
import {  MenuContainer, MenuItem } from "./Menu";
import Button from "@/components/Common/Button/Button";
const Navbar = () => {
  const [profileImageUrl, setProfileImageUrl] = useState<string | undefined>(
    undefined
  );


  const submenuLinks = {
    community: [
      { text: "Discussions", href: "/discussions" },
      { text: "Support", href: "/support" },
    ],
  };
  const pathname = usePathname();

  return (
    <header>
      <nav className="fixed top-0 inset-x-0 z-[250] flex items-center justify-between border-b border-gray-500 text-secondaryGreen bg-primaryWhite p-1 px-2 md:px-8">
        {/* Logo */}
        <Link href="/" className="w-1/3 flex items-center space-x-2">
            <Image src={Logo.src} alt="" className="w-[4rem] aspect-auto" width={100} height={100} />    
        </Link>

        <div className="hidden lg:flex items-center justify-center w-1/3 mx-auto space-x-4 text-base font-light ">

       <MenuContainer>
            <MenuItem link="/about" subLinks={null} text="about"/>
            <MenuItem link="/category" subLinks={null} text="category" />
            <MenuItem link="/events" subLinks={null} text="events" />
            <MenuItem link="/community" subLinks={submenuLinks.community} text="community" />
          </MenuContainer>
        </div>

        <div className="w-1/2 lg:w-1/3 place-content-end flex items-center gap-5">
         <div className="hidden md:flex text-sm md:text-base">
           <Link href="login" className="flex items-center gap-2 px-6 py-2" onClick={() => {}}>
            <Image  width={0.5} height={0.5} src={userAccount.src} alt="" className="w-[1.5rem] aspect-square object-contain" />
            Log in
          </Link>
          <Button label="Sign up" fullWidth={false} size="medium" state="active" variant="primary" onClick={() => {}} />
         </div>
          <button draggable={false}  className="w-[3rem] lg:hidden flex">
            <svg
              viewBox="-7.04 -7.04 78.08 78.08"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="#FF7400"
              strokeWidth="1.5"
              transform="matrix(1, 0, 0, 1, 0, 0)"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke="#CCCCCC"
                strokeWidth="0.128"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <line x1="16" y1="20" x2="48" y2="20"></line>
                <line x1="16" y1="44" x2="48" y2="44"></line>
                <line x1="48" y1="32" x2="16" y2="32"></line>
                <rect x="8" y="8" width="48" height="48"></rect>
              </g>
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
