'use client';
import { useSideMenu } from '@/lib/context/sidemenu-context';
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
import userAccount from '@/public/icons/account-user.svg';
import { cn } from '@/lib/utils';

const NavBar = () => {
  const { user } = useAppContext();
  const { showSideMenu } = useSideMenu();

  const handleSideMenu = () => {
    showSideMenu(<MobileMenu />);
  };
  return (
    <header className="w-full border-b">
      <nav
        className={`font-sora bg-primaryWhite fixed inset-x-0 top-0 z-[2000] flex items-center justify-between px-2 py-2 shadow-sm md:px-8`}
      >
        <div className="flex w-1/3 items-center justify-start gap-4 py-2">
          <button onClick={handleSideMenu} className={'block lg:hidden'}>
            <MenuIcon />
          </button>
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

        <div className="mx-auto hidden w-1/3 items-center justify-center space-x-4 lg:flex">
          <NavLinks />
        </div>

        <div className="font-quickSand flex w-fit place-content-end items-center gap-5 lg:w-1/3">
          {user && (
            <div className="flex items-center gap-6 text-xs md:text-base">
              <ProfileMenu user={user} />
              <OrganizationMenu user={user} />
            </div>
          )}

          {!user && (
            <div className="flex items-center gap-2 text-xs md:text-base">
              <Link
                href="/account/login"
                className={cn(" text-light flex items-center gap-1 p-2 px-4 hover:text-btnWarning hover:no-underline relative link",
                )}
              >
                <Image
                  width={0.5}
                  height={0.5}
                  src={userAccount.src}
                  alt=""
                  className="aspect-square w-[1.2rem] object-contain"
                />
                Log in
              </Link>
              <Link
                href="/account/sign-up"
                className="bg-btnWarning font-normal text-white-100 rounded-md p-3 px-4"
              >
                Sign up
              </Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
