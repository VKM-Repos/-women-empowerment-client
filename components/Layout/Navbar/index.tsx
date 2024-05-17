'use client';
import { useSideMenu } from '@/lib/context/sidemenu-context';
import * as Label from '@radix-ui/react-label';
import Link from 'next/link';
import React from 'react';
import MobileMenu from './MobileMenu';
import MenuIcon from '@/components/Common/Icons/MenuIcon';
import Image from 'next/image';
import Logo from '@/public/logo.svg';
import { NavLinks } from './NavLinks';
import { useAppContext } from '@/lib/context/app-context';
import { ProfileMenu } from './ProfileMenu';
import { OrganizationMenu } from './OrganizationMenu';



const NavBar = () => {
  const { isAuthenticated, user } = useAppContext();
  const { showSideMenu } = useSideMenu();

  const handleSideMenu = () => {
    showSideMenu(<MobileMenu />);
  };
  return (
    <header className="w-full border-b">
      <nav className={`fixed top-0 inset-x-0 z-[3000] font-sora flex items-center justify-between bg-primaryWhite px-2 md:px-8 py-1 shadow-sm`}>
        <div className="w-1/3 flex gap-4 items-center justify-start md:py-2">
          <Label.Root
            onClick={handleSideMenu}
            className={'block lg:hidden'}
            htmlFor="sidebarItemToggler"
          >
            <MenuIcon />
          </Label.Root>
          <Link className="" href="/" aria-label="Home">
            <Image
              src={Logo.src}
              alt=""
              className="aspect-auto w-[3rem] md:w-[4rem]"
              width={100}
              height={100}
            />
          </Link>
        </div>

        <div className="hidden lg:flex items-center justify-center w-1/3 mx-auto space-x-4">
          <NavLinks />
        </div>

        <div className="w-fit lg:w-1/3 place-content-end flex items-center gap-5 font-quickSand">
          {!isAuthenticated && !user?.userId ? (
           <div className="flex items-center gap-2 text-xs md:text-base">
              <Link
                href="/account/login"
                className="flex items-center gap-1 p-2 px-4 text-light "
              >
                {/* <Image
                  width={0.5}
                  height={0.5}
                  src={userAccount.src}
                  alt=""
                  className="w-[1.2rem] aspect-square object-contain"
                /> */}
                Log in
              </Link>
              <Link
                href="/account/sign-up"
                className="bg-btnWarning p-3 px-4 rounded-md font-normal text-white-100"
              >
                Sign up
              </Link>
            </div>) : (
            <div className='flex items-center gap-6 text-xs md:text-base'>
              <ProfileMenu user={user} />
              <OrganizationMenu user={user} />
            </div>)}
        </div>
        
      </nav>
    </header>
  );
};

export default NavBar;
