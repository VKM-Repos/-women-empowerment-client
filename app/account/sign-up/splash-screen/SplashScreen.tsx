import Image from 'next/image';
import React from 'react';
import splashPicture from '@/public/images/splash_screen.svg';
import { useModal } from '@/lib/context/modal-context';
import Button from '@/components/Common/Button/Button';

type Props = {};

const SplashScreen = (props: Props) => {
  const { hideModal } = useModal();
  return (
    <div className="bg-white-100 relative mx-auto w-[90%]  overflow-hidden rounded-[1rem] border-4 lg:w-[70%]">
      <button onClick={hideModal} className="absolute right-5 top-5 z-[100]">
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.8487 4.40176C21.3368 4.88991 21.3368 5.68137 20.8487 6.16952L6.84872 20.1695C6.36057 20.6576 5.56911 20.6576 5.08096 20.1695C4.5928 19.6813 4.5928 18.8899 5.08096 18.4017L19.0809 4.40176C19.5691 3.9136 20.3605 3.9136 20.8487 4.40176Z"
            fill="black"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.08096 4.40176C5.56911 3.9136 6.36057 3.9136 6.84872 4.40176L20.8487 18.4017C21.3368 18.8899 21.3368 19.6813 20.8487 20.1695C20.3605 20.6576 19.5691 20.6576 19.0809 20.1695L5.08096 6.16952C4.5928 5.68137 4.5928 4.88991 5.08096 4.40176Z"
            fill="black"
          />
        </svg>
      </button>

      <div className=" grid grid-cols-1 items-center justify-items-stretch lg:grid-cols-2">
        <div className="col-span-1 order-2 lg:order-1 mx-auto flex w-[90%] h-[60dvh] lg:h-full flex-col gap-2 md:gap-8">
          <div className="flex flex-col gap-1 items-center py-6">
            <h2 className="text-btnWarning my-2 text-lg font-semibold lg:text-2xl">
              Welcome to Women Hub
            </h2>
            <p className="font-quickSand text-sm md:text-base">
              We&apos;re excited to have you join our empowering community
              dedicated to fostering positive change for women.
            </p>
          </div>
          <p className="font-quickSand text-sm md:text-base">
            Just a few steps to be officially part of the <span>HUB</span>
          </p>
          <div className="font-quickSand text-gray-300 pb-12 pl-5 font-medium lg:text-[16px] text-base">
            <div className="z-50 flex items-center gap-5">
              <span className="bg-primary text-white-100 flex h-6 w-6 items-center justify-center rounded-full">
                1
              </span>{' '}
              Fill credentials : Let&apos;s get to know you{' '}
            </div>
            <div className="-gap-5 text-slate-400 flex flex-col pl-[10px]">
              <span className="-z-10 -mt-5">.</span>
              <span className="-mt-5">.</span>
              <span className="-mt-5">.</span>
              <span className="-mt-5">.</span>
              <span className="-mt-5">.</span>
              <span className="-mb-1 -mt-5">.</span>
            </div>
            <div className="z-50 flex items-center gap-5">
              <span className="bg-primary text-white-100 flex h-6 w-6 items-center justify-center rounded-full">
                2
              </span>{' '}
              Verify your email : To secure your account
            </div>
            <div className="-gap-5 text-slate-400 flex flex-col pl-[10px]">
              <span className="-z-10 -mt-5">.</span>
              <span className="-z-10 -mt-5">.</span>
              <span className="-mt-5">.</span>
              <span className="-mt-5">.</span>
              <span className="-mt-5">.</span>
              <span className="-mb-1 -mt-5">.</span>
            </div>
            <div className="flex items-center gap-5">
              <span className="bg-primary text-white-100 flex h-6 w-6 items-center justify-center rounded-full">
                <svg
                  width="12"
                  height="9"
                  viewBox="0 0 12 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.44531 4.24373L4.3492 7.14761L10.157 1.33984"
                    stroke="white"
                    strokeWidth="1.75993"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>{' '}
              That’s it! ✨
            </div>
          </div>
          <span className="absolute inset-x-0 bottom-5 mx-auto w-fit">
            <Button
              label="Let’s do this"
              variant="primary"
              size="medium"
              fullWidth={false}
              state="active"
              onClick={hideModal}
            />
          </span>
        </div>
        <div className="relative col-span-1 order-1 lg:order-2 h-[15rem] lg:h-[30rem] lg:block ">
          <Image
            src={splashPicture}
            alt="Splash Picture"
            fill
            className="aspect-square rounded-r-xl object-cover pl-12"
          />
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
