"use client";
import React from "react";
import Button from "../Common/Button/Button";
import { useModal } from "@/lib/context/modal-context";
import { useRouter } from "next/navigation";
import Link from "next/link";

type Props = {
  title: string;
  message: string;
  redirectURL: string;
};

function LoginWarning({ title, message, redirectURL }: Props) {
  const { hideModal } = useModal();
  const router = useRouter();

  const handleRedirect = () => {
    localStorage.setItem("redirectUrl", redirectURL);
    router.push("/account/login");
  };
  return (
    <div className="lg:w-1/3 w-full mx-auto bg-[#F6F7F8] pt-8 rounded-[1rem] px-8 py-4 pb-8 flex flex-col relative">
      <nav className="w-full border-b border-gray-500 py-4 absolute top-0 left-0">
        <span className="capitalize text-lg font-normal font-sora flex items-center gap-5 px-4">
          <button onClick={hideModal}>
            <svg
              width="22"
              height="21"
              viewBox="0 0 22 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.49967 20.2333L0.699675 11.4333C0.566341 11.3 0.471674 11.1556 0.415674 11C0.360563 10.8444 0.333008 10.6778 0.333008 10.5C0.333008 10.3222 0.360563 10.1556 0.415674 10C0.471674 9.84444 0.566341 9.7 0.699675 9.56667L9.49967 0.766665C9.74412 0.52222 10.0494 0.394221 10.4157 0.382665C10.7828 0.371998 11.0997 0.499998 11.3663 0.766665C11.633 1.01111 11.7721 1.31644 11.7837 1.68266C11.7943 2.04978 11.6663 2.36666 11.3997 2.63333L4.86634 9.16667H19.7663C20.1441 9.16667 20.461 9.29422 20.717 9.54933C20.9721 9.80533 21.0997 10.1222 21.0997 10.5C21.0997 10.8778 20.9721 11.1942 20.717 11.4493C20.461 11.7053 20.1441 11.8333 19.7663 11.8333H4.86634L11.3997 18.3667C11.6441 18.6111 11.7721 18.9222 11.7837 19.3C11.7943 19.6778 11.6663 19.9889 11.3997 20.2333C11.1552 20.5 10.8441 20.6333 10.4663 20.6333C10.0886 20.6333 9.76634 20.5 9.49967 20.2333Z"
                fill="black"
                fillOpacity="0.6"
              />
            </svg>
          </button>
          {title}
        </span>
      </nav>
      <div className="w-full h-full flex flex-col mt-[15%] items-center justify-center gap-4">
        <p className="text-xl font-semibold text-gray-200 font-quickSand">
          {message}
        </p>
        <Button
          label="Login"
          variant="primary"
          size="medium"
          fullWidth={false}
          state="active"
          onClick={() => {
            handleRedirect();
            hideModal();
          }}
        />
        {/* <div className="w-full my-6 flex flex-col items-center justify-center gap-4">
          <div
            className="w-full flex items-center justify-center gap-5
                                before:content-[''] before:w-1/4 before:h-0.5 before:bg-gray-500 before:rounded
                                after:content-[''] after:w-1/4 after:h-0.5 after:bg-gray-500 after:rounded
                                "
          >
            <p className="text-base font-sora">or</p>
          </div>

          <button className=" shadow rounded border border-gray-500 flex items-center px-4 p-2 gap-4">
            <span>
              <svg
                className="w-6 aspect-square"
                viewBox="0 0 26 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1207_4641)">
                  <path
                    d="M25.9865 14.2526C25.9865 13.1464 25.8981 12.3392 25.7066 11.5021H13.2588V16.4948H20.5654C20.4181 17.7356 19.6227 19.6042 17.8549 20.8598L17.8301 21.0269L21.7659 24.1209L22.0386 24.1485C24.5428 21.8016 25.9865 18.3484 25.9865 14.2526Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M13.2589 27.4073C16.8386 27.4073 19.8437 26.2113 22.0387 24.1485L17.855 20.8598C16.7355 21.652 15.2329 22.2051 13.2589 22.2051C9.75295 22.2051 6.77727 19.8583 5.71652 16.6145L5.56104 16.6279L1.46856 19.8418L1.41504 19.9928C3.59523 24.3876 8.07352 27.4073 13.2589 27.4073Z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.71662 16.6145C5.43673 15.7774 5.27475 14.8804 5.27475 13.9536C5.27475 13.0268 5.43673 12.1299 5.7019 11.2928L5.69448 11.1145L1.55071 7.84895L1.41514 7.91439C0.516574 9.73813 0.000976562 11.7861 0.000976562 13.9536C0.000976562 16.1212 0.516574 18.169 1.41514 19.9928L5.71662 16.6145Z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M13.2589 5.70203C15.7485 5.70203 17.4278 6.79327 18.3854 7.70519L22.1271 3.99794C19.8291 1.83042 16.8386 0.5 13.2589 0.5C8.07352 0.5 3.59523 3.51957 1.41504 7.91439L5.7018 11.2928C6.77727 8.04897 9.75295 5.70203 13.2589 5.70203Z"
                    fill="#EB4335"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1207_4641">
                    <rect
                      width="26"
                      height="27"
                      fill="white"
                      transform="translate(0 0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </span>
            <span className="text-sm font-sora">Continue with google</span>
          </button>
        </div> */}
        <span className="text-sm font-quuckSand">
          Don&apos;t have an account?{" "}
          <Link
            className=" text-btnWarning underline"
            href="/account/sign-up"
            onClick={hideModal}
          >
            Sign up
          </Link>
        </span>
      </div>
    </div>
  );
}

export default LoginWarning;
