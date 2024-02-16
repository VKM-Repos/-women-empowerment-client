"use client";
import React, { useEffect, useState } from "react";
import { TransitionElement, TransitionParent, TransitionStart } from "@/lib/utils/transition";
import leftLoginImg from "@/public/images/left_login_img.svg"
import righGb from "@/public/images/right_login_bg.svg"
import righGbMobile from "@/public/images/right_login_bg_mobile.svg"
import Link from "next/link";
import { useRouter } from "next/navigation";

import Logo from "@/public/logo.svg"
import { usePOST } from "@/lib/hooks/usePOST.hook";
import LoadingThinkingWomen from "@/components/Common/Loaders/LoadingThinkingWomen";
import Image from "next/image";

const ForgotPassword: React.FC = () => {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: ''
  })
  const { mutate, isPending, isError } = usePOST('/login')
  const handleShowPassword = () => {
    setShowPassword(prevState => !prevState)
  }
  const handleInputChange = (event: any) => {
    const { name, value } = event.target
    setFormData(previouseFormData => {
      return {
        ...previouseFormData,
        [name]: value
      }
    })
  }
  const handleForgotPassword = (event: any) => {
    event.preventDefault()
    mutate(formData, {
      onSuccess: (data) => {
        router.push('/')
      },
      onError: () => {
        console.log('On page Error');
      }
    })

  }
  return (
    <TransitionParent>
      <main >

          {isPending && <LoadingThinkingWomen />}
          <div className={`h-screen w-screen lg:px-5  ${isPending ? 'bg-black-100 bg-opacity-40' : ''}`}>
             <button onClick={() => router.push('/')} className="flex gap-2 items-center text-btnWarning font-bold md:text-xl text-sm w-fit absolute lg:top-10 top-2 lg:left-10 left-2">
              <svg className="cursor-pointer"  width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.4997 25.7334L5.69967 16.9334C5.56634 16.8 5.47167 16.6556 5.41567 16.5C5.36056 16.3445 5.33301 16.1778 5.33301 16C5.33301 15.8223 5.36056 15.6556 5.41567 15.5C5.47167 15.3445 5.56634 15.2 5.69967 15.0667L14.4997 6.2667C14.7441 6.02225 15.0494 5.89425 15.4157 5.8827C15.7828 5.87203 16.0997 6.00003 16.3663 6.2667C16.633 6.51114 16.7721 6.81647 16.7837 7.1827C16.7943 7.54981 16.6663 7.8667 16.3997 8.13336L9.86634 14.6667H24.7663C25.1441 14.6667 25.461 14.7943 25.717 15.0494C25.9721 15.3054 26.0997 15.6223 26.0997 16C26.0997 16.3778 25.9721 16.6943 25.717 16.9494C25.461 17.2054 25.1441 17.3334 24.7663 17.3334H9.86634L16.3997 23.8667C16.6441 24.1111 16.7721 24.4223 16.7837 24.8C16.7943 25.1778 16.6663 25.4889 16.3997 25.7334C16.1552 26 15.8441 26.1334 15.4663 26.1334C15.0886 26.1334 14.7663 26 14.4997 25.7334Z" fill="#FF7400" />
              </svg>
              Womenh Hub
            </button>

            <div className="flex lg:flex-row flex-col justify-center items-center w-full">
              <div className="lg:w-1/2 w-[80%]">
                <img src={leftLoginImg.src} alt="Left Login Image" className="lg:fixed lg:top-[10%] mt-[30px] " />
              </div>
              <div className="lg:w-1/2 w-full  flex flex-col items-center lg:px-5  gap-[16px] lg:overflow-auto">
                <img src={righGb.src} className="fixed -z-10 h-full object-cover hidden lg:block" alt="" />
                <Image src={righGbMobile} alt="Right backround mobile" className="lg:hidden absolute object-cover h-full w-full top[20%]" />
                <div className="items-stretch w-[450px] flex flex-col lg:pt-10 pb-8 rounded-2xl h-full pt-[70px] z-10">

                  <img
                    loading="lazy"
                    srcSet={`${Logo.src}`}
                    className="aspect-[0.99] object-contain object-center lg:w-[121px] w-[110px] overflow-hidden self-center max-w-full"
                  />
                  <div className="text-primary text-center text-xl flex flex-col gap-3 font-semibold self-center whitespace-nowrap lg:mt-9 mt-5">
                  <p className="font-sora">Trouble logging in?</p>
                  <p className="font-quickSand text-center text-sm">
                  Enter your email and we will send you a link to reset your<br/> password
                  </p>
                  </div>
                  <div className="flex w-full flex-col mt-4 px-10 max-md:max-w-full">
                    <form onSubmit={handleForgotPassword} className="flex flex-col">
                      <div className="text-black-100 text-sm whitespace-nowrap border border-stone-800 bg-white-100 self-stretch justify-center px-5 py-4 rounded-lg border-solid border-black border-opacity-10 items-start  max-md:px-5">
                        <input type="email" name="email" value={formData?.email} onChange={handleInputChange} placeholder="Email" className="w-full focus:outline-none" autoComplete="off" required />
                      </div>
                      <button className="text-white-100 text-base whitespace-nowrap items-stretch bg-[#FF7400] self-center justify-center mt-4 px-12 py-2.5 rounded-lg max-md:px-5">
                      Send reset link
                      </button>
                    </form>
                    <div className="items-stretch self-center flex gap-3.5 mt-5 max-md:justify-center">
                      <div className="bg-neutral-400 self-center w-[115px] shrink-0 h-px my-auto" />
                      <div className="text-neutral-400 text-center text-base font-medium">
                        or
                      </div>
                      <div className="bg-neutral-400 self-center w-[115px] shrink-0 h-px my-auto" />
                    </div>
                 
                    <div  className="text-green-800 text-sm  self-center whitespace-nowrap mt-4">
                      <span className=" text-black">Return to  </span>
                      <Link href="/account/sign-up" className="font-medium underline text-green-800">Log in</Link>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
      </main>
    </TransitionParent>
  );
};

export default ForgotPassword;
