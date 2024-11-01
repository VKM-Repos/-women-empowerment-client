"use client";
import React from "react";
import { TransitionParent } from "@/lib/utils/transition";
import { useRouter } from "next/navigation";
import guidelineImage1 from "../../mockupData/guidelineImag 1.png";

export default function FAQs() {
  const router = useRouter();

  return (
    <TransitionParent>
      <section className=" w-screen mx-auto flex flex-col items-center justify-start space-y-[3rem] pb-[14rem] ">
        <div className="w-full mt-10 pl-16">
          <button
            onClick={router.back}
            className="flex gap-2 items-center text-btnWarning font-bold md:text-xl text-sm "
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
            Go back
          </button>
        </div>

        <div className="flex flex-col justify-center items-center gap-y-6 ">
          <h1 className="font-sora text-[24px] font-[600]">
            How to Create an organization on WomenHu
          </h1>
          <span className="text-center font-quickSand text-[14px] font-[500] text-[#515151] ">
            Last updated 22 May 2024. 3 min read
          </span>
          {/* <img src={guidelineImage1} alt="" className="w-[639px] h-[360px]" /> */}
        </div>

        <article className=" mx-auto mt-[5rem] w-[95%] max-w-[80%] space-y-10">
          <div
            className="tiptap font-quicksand space-y-6 overflow-hidden text-base font-medium md:text-lg"
            dangerouslySetInnerHTML={{
              __html: "test",
              // __html: data.content ? data.content : editData?.content,
            }}
          />
        </article>
      </section>
    </TransitionParent>
  );
}
