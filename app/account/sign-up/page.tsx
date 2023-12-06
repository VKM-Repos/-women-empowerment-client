"use client";

import React, { useEffect, useState } from "react";
import { TransitionElement, TransitionStart } from "@/lib/utils/transition";
import leftLoginImg from "@/public/images/left_login_img.svg"
import righGb from "@/public/images/right_login_bg.svg"
import Logo from "@/public/icons/logo.svg";
import Link from "next/link";
const SignUp: React.FC = () => {
  return (
    <TransitionElement>
      <main >
        <TransitionStart>
          <div className="h-screen w-screen px-5 py-2">
            <div className="flex gap-5 items-center text-btnWarning fixed w-[500px]">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.4997 25.7334L5.69967 16.9334C5.56634 16.8 5.47167 16.6556 5.41567 16.5C5.36056 16.3445 5.33301 16.1778 5.33301 16C5.33301 15.8223 5.36056 15.6556 5.41567 15.5C5.47167 15.3445 5.56634 15.2 5.69967 15.0667L14.4997 6.2667C14.7441 6.02225 15.0494 5.89425 15.4157 5.8827C15.7828 5.87203 16.0997 6.00003 16.3663 6.2667C16.633 6.51114 16.7721 6.81647 16.7837 7.1827C16.7943 7.54981 16.6663 7.8667 16.3997 8.13336L9.86634 14.6667H24.7663C25.1441 14.6667 25.461 14.7943 25.717 15.0494C25.9721 15.3054 26.0997 15.6223 26.0997 16C26.0997 16.3778 25.9721 16.6943 25.717 16.9494C25.461 17.2054 25.1441 17.3334 24.7663 17.3334H9.86634L16.3997 23.8667C16.6441 24.1111 16.7721 24.4223 16.7837 24.8C16.7943 25.1778 16.6663 25.4889 16.3997 25.7334C16.1552 26 15.8441 26.1334 15.4663 26.1334C15.0886 26.1334 14.7663 26 14.4997 25.7334Z" fill="#FF7400" />
              </svg>
              Women  Cognizance
            </div>

            <div className="flex justify-center items-center w-full">
              <div className="w-1/2">
                <img src={leftLoginImg.src} alt="Left Login Image" className="fixed top-[10%]" />
              </div>
              <div className="w-1/2 flex flex-col items-center px-5 py-10 gap-[16px] overflow-auto">
                <img src={righGb.src} className="fixed -mt-[50px] -z-10 " alt="" />
                <div className="items-stretch border border-[color:var(--Primary-Colour,#106840)] w-[450px] flex flex-col pt-10 pb-8 rounded-2xl border-solid h-full">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0e2b3c4fd615c56824cfb5adbc59255f7781a0afed7e9ffccd68ce07e301ccf5?apiKey=12cdcbacd64a44978db653c66e993585&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e2b3c4fd615c56824cfb5adbc59255f7781a0afed7e9ffccd68ce07e301ccf5?apiKey=12cdcbacd64a44978db653c66e993585&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e2b3c4fd615c56824cfb5adbc59255f7781a0afed7e9ffccd68ce07e301ccf5?apiKey=12cdcbacd64a44978db653c66e993585&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e2b3c4fd615c56824cfb5adbc59255f7781a0afed7e9ffccd68ce07e301ccf5?apiKey=12cdcbacd64a44978db653c66e993585&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e2b3c4fd615c56824cfb5adbc59255f7781a0afed7e9ffccd68ce07e301ccf5?apiKey=12cdcbacd64a44978db653c66e993585&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e2b3c4fd615c56824cfb5adbc59255f7781a0afed7e9ffccd68ce07e301ccf5?apiKey=12cdcbacd64a44978db653c66e993585&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e2b3c4fd615c56824cfb5adbc59255f7781a0afed7e9ffccd68ce07e301ccf5?apiKey=12cdcbacd64a44978db653c66e993585&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e2b3c4fd615c56824cfb5adbc59255f7781a0afed7e9ffccd68ce07e301ccf5?apiKey=12cdcbacd64a44978db653c66e993585&"
                    className="aspect-[0.99] object-contain object-center w-[121px] overflow-hidden self-center max-w-full"
                  />
                  <div className="text-green-800 text-center text-xl font-semibold self-center whitespace-nowrap mt-5">
                    Signup
                  </div>
                  <div className="flex w-full flex-col mt-4 px-4 max-md:max-w-full">
                    <div className="text-stone-500 text-sm whitespace-nowrap border border-stone-800 bg-white-100 self-stretch justify-center px-5 py-4 rounded-lg border-solid border-black border-opacity-10 items-start max-md:max-w-full max-md:px-5">
                      <input type="email" placeholder="Email" className="w-full focus:outline-none" />
                    </div>
                    <div className="text-stone-500 text-sm whitespace-nowrap border border-stone-800 bg-white-100 self-stretch justify-center px-5 py-4 rounded-lg border-solid border-black border-opacity-10 items-start max-md:max-w-full max-md:px-5 mt-5">
                      <input type="text" placeholder="Username" className="w-full focus:outline-none" />
                    </div>

                    <div className="text-stone-500 text-sm whitespace-nowrap border border-stone-800 bg-white-100 self-stretch justify-center px-5 py-4 rounded-lg border-solid border-black border-opacity-10 items-start max-md:max-w-full max-md:px-5 mt-5 flex">
                      <div className="text-stone-500 text-sm grow whitespace-nowrap">
                        <input type="password" placeholder="Password" className="w-full focus:outline-none" />
                      </div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/49b1396c99168286d54bf322939b73cd61e4c34a2f0271eb6bd17fd0b409b61b?apiKey=12cdcbacd64a44978db653c66e993585&"
                        className="aspect-square object-contain object-center w-[19px] justify-center items-center overflow-hidden self-stretch shrink-0 max-w-full"
                      />
                    </div>
                    <div className="text-rose-500 text-center text-xs font-medium whitespace-nowrap mr-4 mt-1.5 self-end max-md:mr-2.5">
                      Forgot Password?
                    </div>
                    <button className="text-white-100 text-base whitespace-nowrap items-stretch bg-green-800 self-center justify-center mt-4 px-12 py-2.5 rounded-lg max-md:px-5">
                      Continue
                    </button>
                    <div className="items-stretch self-center flex gap-3.5 mt-5 max-md:justify-center">
                      <div className="bg-neutral-400 self-center w-[115px] shrink-0 h-px my-auto" />
                      <div className="text-neutral-400 text-center text-base font-medium">
                        or
                      </div>
                      <div className="bg-neutral-400 self-center w-[115px] shrink-0 h-px my-auto" />
                    </div>
                    <div className="items-stretch shadow-sm bg-white-100 self-center flex gap-2 mt-6 px-2.5 py-2 rounded-lg">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/7bd7745fc35593db68a0f87d7f297b46797bfe0dc0304ecf3f55bb27d59d7a23?apiKey=12cdcbacd64a44978db653c66e993585&"
                        className="aspect-[0.96] object-contain object-center w-[26px] overflow-hidden shrink-0 max-w-full"
                      />
                      <div className="text-black text-center text-sm font-medium self-center grow whitespace-nowrap my-auto">
                        Continue with Google
                      </div>
                    </div>
                    <Link href="/account/sign-up" className="text-green-800 text-sm underline self-center whitespace-nowrap mt-4">
                      <span className=" text-black">Don’t have an account? </span>
                      <span className="font-medium text-green-800">Sign Up</span>
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </TransitionStart>
      </main>
    </TransitionElement>
  );
};

export default SignUp;
