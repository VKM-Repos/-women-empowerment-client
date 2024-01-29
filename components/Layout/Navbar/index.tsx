"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

import Logo from "@/public/logo.svg";
import womenAvatar from "@/public/images/womenAvatar.svg";
import building from "@/public/images/building.svg";
import userAccount from "@/public/icons/account-user.svg";
import { MenuContainer, MenuItem } from "./Menu";
import { useAppContext } from "@/lib/context/app-context";
const Navbar = () => {
  const [profileImageUrl, setProfileImageUrl] = useState<string | undefined>(
    undefined
  );
  const { isAuthenticated } = useAppContext();
  const submenuLinks = {
    community: [
      { text: "Discussions", href: "/discussions" },
      { text: "Support", href: "/support" },
    ],
    account: [
      {
        icon: (
          <svg
            width="24"
            height="18"
            viewBox="0 0 16 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 16H5V10H11V16H14V7L8 2.5L2 7V16ZM0 18V6L8 0L16 6V18H9V12H7V18H0Z"
              fill="black"
            />
          </svg>
        ),
        text: "Home",
        href: "/",
      },
      {
        icon: (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.14 12.936C19.176 12.636 19.2 12.324 19.2 12C19.2 11.676 19.176 11.364 19.128 11.064L21.156 9.48002C21.336 9.33602 21.384 9.07202 21.276 8.86802L19.356 5.54402C19.236 5.32802 18.984 5.25602 18.768 5.32802L16.38 6.28802C15.876 5.90402 15.348 5.59202 14.76 5.35202L14.4 2.80802C14.364 2.56802 14.16 2.40002 13.92 2.40002H10.08C9.83998 2.40002 9.64799 2.56802 9.61199 2.80802L9.25199 5.35202C8.66398 5.59202 8.12399 5.91602 7.63199 6.28802L5.24398 5.32802C5.02798 5.24402 4.77598 5.32802 4.65598 5.54402L2.73598 8.86802C2.61598 9.08402 2.66398 9.33602 2.85598 9.48002L4.88398 11.064C4.83598 11.364 4.79998 11.688 4.79998 12C4.79998 12.312 4.82398 12.636 4.87198 12.936L2.84398 14.52C2.66398 14.664 2.61598 14.928 2.72398 15.132L4.64398 18.456C4.76398 18.672 5.01598 18.744 5.23198 18.672L7.61998 17.712C8.12398 18.096 8.65198 18.408 9.23998 18.648L9.59999 21.192C9.64798 21.432 9.83998 21.6 10.08 21.6H13.92C14.16 21.6 14.364 21.432 14.388 21.192L14.748 18.648C15.336 18.408 15.876 18.084 16.368 17.712L18.756 18.672C18.972 18.756 19.224 18.672 19.344 18.456L21.264 15.132C21.384 14.916 21.336 14.664 21.144 14.52L19.14 12.936ZM12 15.6C10.02 15.6 8.39998 13.98 8.39998 12C8.39998 10.02 10.02 8.40002 12 8.40002C13.98 8.40002 15.6 10.02 15.6 12C15.6 13.98 13.98 15.6 12 15.6Z"
              fill="#191D21"
            />
          </svg>
        ),
        text: "Profile",
        href: "/profile",
      },
      {
        icon: (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.56 5.44L15.11 6.89C15.9912 7.42057 16.7203 8.16984 17.2266 9.06515C17.733 9.96046 17.9994 10.9714 18 12C18 13.5913 17.3679 15.1174 16.2426 16.2426C15.1174 17.3679 13.5913 18 12 18C10.4087 18 8.88258 17.3679 7.75736 16.2426C6.63214 15.1174 6 13.5913 6 12C6 9.83 7.16 7.94 8.88 6.88L7.44 5.44C6.3779 6.17279 5.50984 7.15277 4.91058 8.29555C4.31132 9.43832 3.99882 10.7096 4 12C4 14.1217 4.84286 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.28 18.64 6.88 16.56 5.44ZM13 3H11V13H13"
              fill="black"
            />
          </svg>
        ),
        text: "Logout",
        href: "/account/logout",
      },
    ],
    organisation: [
      { icon: "", text: "View Organization", href: "/view-oraganization" },
      { icon: "", text: "manage Organization", href: "/organization/manage" },
      { icon: "", text: "Add Event", href: "/add-event" },
    ],
  };
  const pathname = usePathname();
  const router = useRouter();

  const handleSideMenu = () => {

  }

  return (
    <header>
      <nav className="fixed top-0 inset-x-0 z-[250] font-sora flex items-center justify-between border-b border-gray-500 text-secondaryGreen bg-primaryWhite px-2 md:px-8 py-3 md:py-0">
        <div className="w-1/3 flex gap-4 items-center justify-between md:py-2">
          {/*side menu button */}
        <button className="lg:hidden block" onClick={handleSideMenu}>
          <svg width="35" height="31" viewBox="0 0 35 31" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 7.96732H28.6667" stroke="currentColor" strokeWidth="2.125" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6 15.9673H28.6667" stroke="currentColor" strokeWidth="2.125" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6 23.9673H28.6667" stroke="currentColor" strokeWidth="2.125" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        
        {/* Logo */}
        <div className="w-full">
          <Link href="/" className="w-fit flex items-center space-x-2">
            <Image
              src={Logo.src}
              alt=""
              className="w-[3rem] md:w-[4rem] aspect-auto"
              width={100}
              height={100}
            />
          </Link>
        </div>
        </div>

        <div className="hidden lg:flex items-center justify-center w-1/3 mx-auto space-x-4 text-base font-light ">
          <MenuContainer>
            <MenuItem link="/about" subLinks={null} text="about" />
            <MenuItem link="/category" subLinks={null} text="category" />
            <MenuItem link="/events" subLinks={null} text="events" />
            <MenuItem
              link="#"
              subLinks={submenuLinks.community}
              text="community"
            />
            <MenuItem link="/projects" subLinks={null} text="projects" />
            <MenuItem link="/blog" subLinks={null} text="blog" />
          </MenuContainer>
        </div>

        <div className="w-fit lg:w-1/3 place-content-end flex items-center gap-5">
          {!isAuthenticated ? (
            <div className="flex items-center text-xs md:text-base">
              <Link
                href="/account/login"
                className="flex items-center gap-2 px-4 py-2 text-light"
                onClick={() => {}}
              >
                <Image
                  width={0.5}
                  height={0.5}
                  src={userAccount.src}
                  alt=""
                  className="w-[1.5rem] aspect-square object-contain"
                />
                Log in
              </Link>
              <Link
                href="/account/sign-up"
                className="bg-btnWarning px-4 py-2 rounded-md font-light text-white-100"
              >
                Sign up
              </Link>
            </div>
          ) : (
            <MenuContainer>
              <MenuItem
                link=""
                subLinks={submenuLinks.account}
                text=""
                icon={<Image src={womenAvatar} alt="Women avatar" />}
              />
              <MenuItem
                link=""
                subLinks={submenuLinks.organisation}
                text=""
                icon={
                  <div className="border w-[40px] h-[40px] flex justify-center items-center rounded-full">
                    <Image src={building} alt="building icon" />
                  </div>
                }
                showChevron={false}
              />
            </MenuContainer>
          )}
        
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
