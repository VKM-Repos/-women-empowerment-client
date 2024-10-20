"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  TransitionElement,
  TransitionParent,
  TransitionStart,
} from "@/lib/utils/transition";
import leftLoginImg from "@/public/images/left_login_img.svg";
import righGb from "@/public/images/right_login_bg.svg";
import righGbMobile from "@/public/images/right_login_bg_mobile.svg";
import Link from "next/link";
import { useRouter } from "next/navigation";

import Logo from "@/public/logo.svg";
import { usePOST } from "@/lib/hooks/usePOST.hook";
import LoadingThinkingWomen from "@/components/Common/Loaders/LoadingThinkingWomen";
import { useAppContext } from "@/lib/context/app-context";
import Image from "next/image";
import { useSideMenu } from "@/lib/context/sidemenu-context";
import SplashScreenModal from "./splash-screen/SplashScreenModal";
import { useModal } from "@/lib/context/modal-context";

let currentOtpIndex = 0;
const Signup: React.FC = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });
  const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));
  const [activeOtpIndex, setActiveOtpIndex] = useState<number>(0);
  const [showOtpForm, setShowOtpForm] = useState(false);
  const [url, setUrl] = useState<string>("");
  const [counter, setCounter] = useState(59);
  const inputRef = useRef<HTMLInputElement>(null);

  const { showModal, hideModal } = useModal();

  // create a useffect to showSidemenu of SplashScreenModal when the page is mounted
  useEffect(() => {
    showModal(<SplashScreenModal />);
    }, []);


  const { login, isAuthenticated, user } = useAppContext();
  const { mutate, isPending, isError } = usePOST(`auth/${url}`);
  const handleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };
  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setFormData((previouseFormData) => {
      return {
        ...previouseFormData,
        [name]: value,
      };
    });
  };
  const handleSignUp = async (event: any) => {
    setUrl("registration");
    event.preventDefault();
    mutate(formData, {
      onSuccess: (data) => {
        // login(data.user)
        setShowOtpForm(true);
        resetCounter();
      },
      onError: (err) => {
        console.log("On page Error", err);
      },
    });
  };
  const handleOtpChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = target;
    const newOtp: string[] = [...otp];
    newOtp[currentOtpIndex] = value.substring(value.length - 1);
    !value
      ? setActiveOtpIndex(currentOtpIndex - 1)
      : setActiveOtpIndex(currentOtpIndex + 1);
    setOtp(newOtp);
  };
  const handleVerifyOtp = async () => {
    setUrl("email_verification");
    const userOtp = otp.join("");

    mutate(
      { email: formData.email, code: userOtp },
      {
        onSuccess: (returnedeData) => {
          router.push("/account/login");
        },
        onError: (error) => {
          console.log(error);
        },
      }
    );
  };

  const handleKeyDown = (
    { key }: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    currentOtpIndex = index;
    if (key === "Backspace") setActiveOtpIndex(currentOtpIndex - 1);
  };

  const handleResendOtp = () => {
    // console.log('clicked');
    setUrl("email_verification_code_request");
    mutate(
      { email: formData.email },
      {
        onSuccess: () => {
          setCounter(59);
        },
        onError: (error) => {
          console.log(error);
        },
      }
    );
  };
  const resetCounter = () => {
    setCounter(59);
  };
  const resetOtpForm = () => {
    setOtp(new Array(6).fill(""));
  };
  useEffect(() => {
    inputRef.current?.focus();
  }, [activeOtpIndex]);
  useEffect(() => {
    const timer: any =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);
  return (
    <TransitionParent>
      <main>
   
        {showOtpForm && (
          <div className="absolute top-[20%] left-0 right-0 ml-auto mr-auto  lg:w-[500px] w-[380px] px-10  z-50  bg-[#F0EBD6] lg:pt-[80px] pt-[40px] pb-10 rounded-lg">
            <div className="flex justify-end mb-5">
              <button
                onClick={() => {
                  setShowOtpForm(false), resetCounter(), resetOtpForm();
                }}
              >
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
            </div>
            <div className="flex flex-col justify-center items-center">
              <p className="font-semibold"> Enter Your Verification Code</p>
              <p className="text-xs mt-1 lg:w-[400px] w-[220px] text-center">
                We have sent a verification code to{" "}
                <span className="font-semibold">{formData.email}</span>
              </p>
              <div className="flex gap-5 items-center mt-8">
                {otp?.map((_, index) => {
                  return (
                    <React.Fragment key={index}>
                      <input
                        type="number"
                        max={1}
                        maxLength={1}
                        ref={activeOtpIndex === index ? inputRef : null}
                        onChange={(e) => handleOtpChange(e)}
                        onKeyDown={(e) => handleKeyDown(e, index)}
                        value={otp[index]}
                        className="w-10 h-10 border rounded bg-transparent outline-none text-center border-[#65655E]"
                      />
                      {index === otp.length - 4 ? (
                        <p className="text-lg">-</p>
                      ) : null}
                    </React.Fragment>
                  );
                })}
              </div>
              <p className="text-xs mt-5 mb-10">
                haven’t received the code?{" "}
                {counter > 0 ? (
                  <span className="text-primary text-sm font-semibold">
                    00:{counter}
                  </span>
                ) : (
                  <button
                    className="text-primary underline font-bold"
                    disabled={isPending}
                    onClick={handleResendOtp}
                  >
                    resend here
                  </button>
                )}
              </p>
              <button
                disabled={otp[5] == ""}
                onClick={handleVerifyOtp}
                className={`px-12 py-2 rounded-md text-sm font-light ${
                  otp[5] == "" ? "bg-gray-500" : "bg-btnWarning"
                }  text-white-100`}
              >
                Verify
              </button>
            </div>
          </div>
        )}
        {isPending && <LoadingThinkingWomen />}
        <div
          className={` ${
            showOtpForm ? "inactive" : ""
          } h-screen w-screen lg:px-5  ${
            isPending || showOtpForm ? "bg-black-100 bg-opacity-40" : ""
          }`}
        >
          <button
            onClick={() => router.push("/")}
            className={`${
              showOtpForm ? "brightness-50" : ""
            } flex gap-2 items-center text-btnWarning font-bold md:text-xl text-sm w-fit absolute lg:top-10 top-2 lg:left-10 left-2`}
          >
            <svg
              className="cursor-pointer"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.4997 25.7334L5.69967 16.9334C5.56634 16.8 5.47167 16.6556 5.41567 16.5C5.36056 16.3445 5.33301 16.1778 5.33301 16C5.33301 15.8223 5.36056 15.6556 5.41567 15.5C5.47167 15.3445 5.56634 15.2 5.69967 15.0667L14.4997 6.2667C14.7441 6.02225 15.0494 5.89425 15.4157 5.8827C15.7828 5.87203 16.0997 6.00003 16.3663 6.2667C16.633 6.51114 16.7721 6.81647 16.7837 7.1827C16.7943 7.54981 16.6663 7.8667 16.3997 8.13336L9.86634 14.6667H24.7663C25.1441 14.6667 25.461 14.7943 25.717 15.0494C25.9721 15.3054 26.0997 15.6223 26.0997 16C26.0997 16.3778 25.9721 16.6943 25.717 16.9494C25.461 17.2054 25.1441 17.3334 24.7663 17.3334H9.86634L16.3997 23.8667C16.6441 24.1111 16.7721 24.4223 16.7837 24.8C16.7943 25.1778 16.6663 25.4889 16.3997 25.7334C16.1552 26 15.8441 26.1334 15.4663 26.1334C15.0886 26.1334 14.7663 26 14.4997 25.7334Z"
                fill="#FF7400"
              />
            </svg>
            Women Hub
          </button>
          <div className="flex lg:flex-row flex-col justify-center items-center w-full">
            <div className="lg:w-1/2 w-[80%]">
              <img
                src={leftLoginImg.src}
                alt="Left Login Image"
                className={`${
                  showOtpForm ? "brightness-50" : ""
                } lg:fixed z-10 lg:top-[10%] mt-[30px]`}
              />
            </div>
            <div className="lg:w-1/2 w-full  flex flex-col items-center lg:px-5  gap-[16px] lg:overflow-auto">
              <img
                src={righGb.src}
                className="fixed -z-10 h-full object-cover hidden lg:block"
                alt=""
              />
              <Image
                src={righGbMobile}
                alt="Right backround mobile"
                className="lg:hidden absolute object-cover h-full w-full top[20%]"
              />
              <div
                className={`${
                  showOtpForm ? "brightness-50" : ""
                } items-stretch w-[450px] flex flex-col lg:pt-10 pb-8 rounded-2xl h-full pt-[70px] z-10`}
              >
                <img
                  loading="lazy"
                  srcSet={`${Logo.src}`}
                  className="aspect-[0.99] object-contain object-center lg:w-[121px] w-[110px] overflow-hidden self-center max-w-full"
                />
                <div className="text-primary text-center text-xl font-semibold self-center whitespace-nowrap lg:mt-9 mt-5">
                  Signup
                </div>
                <div className="flex w-full flex-col mt-4 px-10 max-md:max-w-full">
                  <form onSubmit={handleSignUp} className="flex flex-col">
                    <div className="text-stone-500 text-sm whitespace-nowrap border border-stone-800 bg-white-100 self-stretch justify-center px-5 py-4 rounded-lg border-solid border-black border-opacity-10 items-start  max-md:px-5 mb-5">
                      <input
                        type="text"
                        name="name"
                        value={formData?.name}
                        onChange={handleInputChange}
                        placeholder="Name"
                        className="w-full focus:outline-none"
                        required
                      />
                    </div>
                    <div className="text-stone-500 text-sm whitespace-nowrap border border-stone-800 bg-white-100 self-stretch justify-center px-5 py-4 rounded-lg border-solid border-black border-opacity-10 items-start  max-md:px-5">
                      <input
                        type="email"
                        name="email"
                        value={formData?.email}
                        onChange={handleInputChange}
                        placeholder="Email"
                        className="w-full focus:outline-none"
                        required
                      />
                    </div>

                    <div className="text-stone-500 text-sm whitespace-nowrap border border-stone-800 bg-white-100 self-stretch justify-center px-5 py-4 rounded-lg border-solid border-black border-opacity-10 items-start max-md:max-w-full max-md:px-5 mt-5 flex gap-3">
                      <div className="text-stone-500 text-sm grow whitespace-nowrap">
                        <input
                          type={showPassword ? "text" : "password"}
                          name="password"
                          value={formData?.password}
                          onChange={handleInputChange}
                          placeholder="Password"
                          className="w-full focus:outline-none"
                          required
                        />
                      </div>
                      <div>
                        {showPassword ? (
                          <svg
                            onClick={handleShowPassword}
                            className="cursor-pointer"
                            width="19"
                            height="19"
                            viewBox="0 0 19 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M17.9643 8.78143C17.2789 6.85982 16.0838 5.19501 14.5262 3.99214L17.4002 0.906429L16.5542 0L0.599762 17.0936L1.44579 18L4.50587 14.7279C5.87177 15.5808 7.41927 16.0434 9 16.0714C10.9557 15.9926 12.8471 15.3016 14.4402 14.0837C16.0334 12.8657 17.2585 11.1744 17.9643 9.21857C18.0119 9.07733 18.0119 8.92267 17.9643 8.78143ZM9 13.1786C8.17294 13.1782 7.36768 12.8943 6.70193 12.3686L7.79997 11.205C8.25526 11.4723 8.77916 11.5742 9.29308 11.4954C9.807 11.4166 10.2832 11.1615 10.6503 10.7682C11.0174 10.3749 11.2556 9.86462 11.3291 9.31401C11.4026 8.76339 11.3075 8.20208 11.0581 7.71429L12.1441 6.55071C12.5668 7.17274 12.8207 7.90789 12.8778 8.67488C12.9349 9.44188 12.7928 10.2108 12.4675 10.8968C12.1421 11.5827 11.646 12.1588 11.0341 12.5615C10.4221 12.9642 9.71815 13.1778 9 13.1786ZM2.11781 12.735L5.11789 9.52071C5.10229 9.34768 5.09628 9.1738 5.09989 9C5.10148 7.8923 5.51289 6.83045 6.24396 6.04718C6.97503 5.26392 7.96611 4.82313 9 4.82143C9.15845 4.82233 9.31672 4.83306 9.47401 4.85357L11.7421 2.43C10.8594 2.10517 9.93331 1.93583 9 1.92857C7.04425 2.00737 5.15292 2.69843 3.55977 3.91634C1.96661 5.13425 0.741462 6.82563 0.0357458 8.78143C-0.0119153 8.92267 -0.0119153 9.07733 0.0357458 9.21857C0.496574 10.5317 1.20538 11.7288 2.11781 12.735Z"
                              fill="#0077B6"
                              fillOpacity="0.7"
                            />
                          </svg>
                        ) : (
                          <svg
                            onClick={handleShowPassword}
                            className="cursor-pointer"
                            width="19"
                            height="19"
                            viewBox="0 0 19 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9.5 11.875C10.8117 11.875 11.875 10.8117 11.875 9.5C11.875 8.18832 10.8117 7.125 9.5 7.125C8.18832 7.125 7.125 8.18832 7.125 9.5C7.125 10.8117 8.18832 11.875 9.5 11.875Z"
                              fill="#808080"
                            />
                            <path
                              d="M18.3706 9.29812C17.6723 7.49173 16.4599 5.92955 14.8834 4.80468C13.3069 3.6798 11.4353 3.04153 9.49999 2.96875C7.56467 3.04153 5.6931 3.6798 4.11658 4.80468C2.54006 5.92955 1.32771 7.49173 0.629367 9.29812C0.582203 9.42858 0.582203 9.57142 0.629367 9.70188C1.32771 11.5083 2.54006 13.0704 4.11658 14.1953C5.6931 15.3202 7.56467 15.9585 9.49999 16.0312C11.4353 15.9585 13.3069 15.3202 14.8834 14.1953C16.4599 13.0704 17.6723 11.5083 18.3706 9.70188C18.4178 9.57142 18.4178 9.42858 18.3706 9.29812ZM9.49999 13.3594C8.73668 13.3594 7.99051 13.133 7.35584 12.709C6.72117 12.2849 6.2265 11.6821 5.93439 10.9769C5.64229 10.2717 5.56586 9.49572 5.71477 8.74707C5.86369 7.99843 6.23126 7.31075 6.771 6.77101C7.31075 6.23127 7.99842 5.8637 8.74707 5.71478C9.49571 5.56587 10.2717 5.6423 10.9769 5.9344C11.6821 6.22651 12.2849 6.72118 12.7089 7.35585C13.133 7.99052 13.3594 8.73669 13.3594 9.5C13.3578 10.5231 12.9507 11.5038 12.2272 12.2273C11.5038 12.9507 10.5231 13.3578 9.49999 13.3594Z"
                              fill="#808080"
                            />
                          </svg>
                        )}
                      </div>
                    </div>

                    <button className="text-white-100 text-base whitespace-nowrap items-stretch bg-[#FF7400] self-center justify-center mt-4 px-12 py-2.5 rounded-lg max-md:px-5">
                      Continue
                    </button>
                  </form>
                  {/* <div className="items-stretch self-center flex gap-3.5 mt-5 max-md:justify-center">
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
                      <button className="text-black text-center text-sm font-medium self-center grow whitespace-nowrap my-auto">
                        Continue with Google
                      </button>
                    </div> */}
                  <div className="text-green-800 text-sm  self-center whitespace-nowrap mt-4">
                    <span className=" text-black">
                      Already have an account?{" "}
                    </span>
                    <Link
                      href="/account/login"
                      className="font-medium underline text-green-800"
                    >
                      Login
                    </Link>
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

export default Signup;
