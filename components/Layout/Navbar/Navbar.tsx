"use client";
import React, { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

import Logo from "../../../public/icons/default-avatar-male-three.svg";
import Link from "next/link";
import { Avatar } from "@/components/Common/Avatar/Avatar";

const Navbar = () => {

  const [profileImageUrl, setProfileImageUrl] = useState<string | undefined>(undefined);
  const pathname = usePathname();



  return (
    <header>
      <nav className="fixed top-0 inset-x-0 z-[250] flex items-center justify-between border-b-2 border-gray-500 text-secondaryGreen bg-white-100 p-3 px-8">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <span>
            <Image src={Logo} alt="" className="w-full aspect-auto" />
          </span>
        </div>

        <div className="absolute flex items-center justify-center w-full mx-auto space-x-8 -bottom-0">
         navbar links
        </div>

        {/* Avatar */}
        <div className="relative flex items-center space-x-8">
          <button onClick={() => {}}>
            <Avatar
              className="w-[1.5rem] aspect-square rounded-full"
              imageUrl={profileImageUrl}
              altText="User's Profile Picture"
            />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
