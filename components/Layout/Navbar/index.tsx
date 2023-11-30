"use client";
import React, { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

import Logo from "../../../public/icons/logo.svg";
import userAccount from "../../../public/icons/account-user.svg";
import Link from "next/link";
import { Avatar } from "@/components/Common/Avatar/Avatar";
import ButtonDrDown from '@/components/ButtonDropDown'
const Navbar = () => {

  const [profileImageUrl, setProfileImageUrl] = useState<string | undefined>(undefined);
  const pathname = usePathname();



  return (
    <header>
      <nav className="fixed top-0 inset-x-0 z-[250] flex items-center justify-between border-b border-gray-500 text-secondaryGreen bg-white-100 p-1 px-8">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <span>
            <img src={Logo.src} alt="" className="w-full aspect-auto" />
          </span>
        </div>

        <div className="flex items-center justify-center w-full mx-auto space-x-8 -bottom-0 w-fulll">
          <Link href='about'>
            About
          </Link>
          <Link href='about'>
            Category
          </Link>
          <Link href='about'>
            Event
          </Link>
          <ButtonDrDown />
        </div>

        <div className="w-[250px] flex items-center gap-5">
          <Link href='login' className="flex gap-2" onClick={() => { }}>
            <img src={userAccount.src} alt="" />
            Log in
          </Link>
          <Link href='signup' className="bg-btnWarning px-6 py-2 rounded text-white-100" onClick={() => { }}>
            Sign up
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
