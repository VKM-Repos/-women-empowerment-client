"use client";
import React, { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";


import vhdoLogo from "@/public/icons/vhdo-logo.svg";
import womenAvatar from '@/public/images/womenAvatar.svg'
import building from '@/public/images/building.svg'
import userAccount from "@/public/icons/account-user.svg";
import { MenuContainer, MenuItem } from "./Menu";
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
    account: [
      { icon: '', text: 'Home', href: '/' },
      { icon: '', text: 'Profile', href: '/account/profile' },
      { icon: '', text: 'Logout', href: '/account/logout' }
    ],
    organisation: [
      { icon: '', text: 'View Organization', href: '/view-oraganization' },
      { icon: '', text: 'manage Organization', href: '/manage-oraganization' },
      { icon: '', text: 'Add Event', href: '/add-event' }
    ]
  };
  const pathname = usePathname();
  console.log(localStorage.getItem('user'));

  return (
    <header>
      <nav className="fixed top-0 inset-x-0 z-[250] flex items-center justify-between border-b border-gray-500 text-secondaryGreen bg-primaryWhite p-1 px-2 md:px-8">
        {/* Logo */}
        <Link href="/" className="w-1/3 flex items-center space-x-2">
          <Image src={vhdoLogo.src} alt="" className="w-[4rem] aspect-auto" width={100} height={100} />
        </Link>

        <div className="hidden lg:flex items-center justify-center w-1/3 mx-auto space-x-4 text-base font-light ">

          <MenuContainer>
            <MenuItem link="/about" subLinks={null} text="about" />
            <MenuItem link="/category" subLinks={null} text="category" />
            <MenuItem link="/events" subLinks={null} text="events" />
            <MenuItem link="#" subLinks={submenuLinks.community} text="community" />
          </MenuContainer>
        </div>

        <div className="w-1/2 lg:w-1/3 place-content-end flex items-center gap-5">
          {!localStorage.getItem('user')
            ? <div className="hidden md:flex items-center text-sm md:text-base">
              <Link href="/account/login" className="flex items-center gap-2 px-6 py-2" onClick={() => { }}>
                <Image width={0.5} height={0.5} src={userAccount.src} alt="" className="w-[1.5rem] aspect-square object-contain" />
                Log in
              </Link>
              <Link href="/account/sign-up" className="bg-btnWarning px-3 py-2 rounded-sm text-white-100">Sign up</Link>
            </div>
            :
            <MenuContainer>
              <MenuItem link="" subLinks={submenuLinks.account} text="" icon={<Image src={womenAvatar} alt="Women avatar" />} />
              <MenuItem link="" subLinks={submenuLinks.organisation} text="" icon={<div className="border w-[40px] h-[40px] flex justify-center items-center rounded-full"><Image src={building} alt="building icon" /></div>} showChevron={false} />
            </MenuContainer>


          }
          <button draggable={false} className="w-[3rem] lg:hidden flex">
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
