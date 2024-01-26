import Button from "@/components/Common/Button/Button";
import Link from "next/link";
import React from "react";


export default function DiscussionDetailsLoader() {
  return (
    <div className="lg:w-3/4 w-full mx-auto bg-[#F6F7F8] py-4 pt-8 rounded-[1rem] relative">
      <div className="w-full mx-auto flex flex-col gap-10 items-center h-[90vh] my-auto px-4  overflow-y-scroll">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 justify-start">
        <div className="w-full col-span-1 flex flex-col items-start justify-start gap-4">
          <span className="w-full h-4 bg-gray-400  animate-pulse"></span>
          <span className="w-1/4 h-4 bg-gray-400  animate-pulse"></span>

          <span className="w-full flex flex-col gap-2 items-start">
            <p className="w-1/2 h-2 bg-gray-400  animate-pulse"></p>
            <p className="w-2/3 h-2 bg-gray-400  animate-pulse"></p>
            <p className="w-1/4 h-2 bg-gray-400  animate-pulse"></p>
          </span>
          <div className="flex items-center justify-start gap-4">
            <p className="w-1/2 h-2 bg-gray-400  animate-pulse"></p>
            <p className="text-sm font-light text-primary flex items-center justify-center gap-1">
              <p className="w-full h-2 bg-gray-400  animate-pulse"></p>
            </p>
          </div>
          <div className="w-full grid grid-cols-8 gap-2">
            <div className="w-[3rem] aspect-square rounded-full border bg-gray-500 animate-pulse" />
            <input
              type="text"
              placeholder=""
              className=" col-span-7 py-3 border border-gray-500 bg-primaryWhite rounded-l text-base text-gray-100 focus:outline-btnWarning p-2 "
            />
          </div>
          <div className="w-full flex justify-end">
            <Button
              label="Add"
              variant="primary"
              size="medium"
              state="disabled"
              fullWidth={false}
              onClick={() => {}}
            />
          </div>

          <p className="w-1/2 h-2 bg-gray-400  animate-pulse"></p>
          <div className="w-full">
            {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="w-full grid grid-cols-8 gap-x-5 p-2">
              <div className="w-[3rem] col-span-2 aspect-square rounded-full border bg-gray-500 animate-pulse" />
              <div className="col-span-6 flex flex-col gap-1">
                <p className="w-1/2 h-2 bg-gray-400  animate-pulse"></p>
                <p className="w-1/2 h-2 bg-gray-400  animate-pulse"></p>
                <div className="w-full flex items-center justify-start gap-4">
                  <p className="w-1/3 h-2 bg-gray-400  animate-pulse"></p>
                  <p className="w-1/3 h-2 bg-gray-400  animate-pulse"></p>
                  <p className="text-sm font-light text-primary flex items-center justify-center gap-1">
                    <p className="w-full h-2 bg-gray-400  animate-pulse"></p>
                  </p>
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>

        <div className="w-full col-span-1 flex flex-col items-start justify-start gap-5">
          <div className="w-full flex items-center gap-4">
            <div className="w-[3rem] aspect-square rounded-full border bg-gray-500 animate-pulse" />
            <p className="w-1/2 h-2 bg-gray-400  animate-pulse"></p>
          </div>
          <p className="w-1/2 h-2 bg-gray-400  animate-pulse"></p>
          <div className="flex  items-center justify-center w-auto gap-2 text-primaryWhite">
            <Link href="#">
              <svg
                className="w-8 aspect-square rounded-full bg-info"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.6571 20.3648H25.3793L25.9637 16.5605H21.6563V14.4813C21.6563 12.901 22.1696 11.4996 23.6389 11.4996H26V8.17974C25.5852 8.12338 24.7078 8 23.05 8C19.5882 8 17.5587 9.8393 17.5587 14.0297V16.5605H14V20.3648H17.5587V30.821C18.2634 30.9276 18.9773 31 19.7101 31C20.3724 31 21.0189 30.9391 21.6571 30.8522V20.3648Z"
                  fill="currentColor"
                />
              </svg>
            </Link>

            <Link href="#">
              <svg
                className="w-8 aspect-square rounded-full bg-info"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30.6 14.9C29.9 15.2 29.1 15.4 28.3 15.5C29.1 15 29.8 14.2 30.1 13.3C29.3 13.8 28.5 14.1 27.5 14.3C26.8 13.5 25.7 13 24.6 13C22.4 13 20.6 14.8 20.6 17C20.6 17.3 20.6 17.6 20.7 17.9C17.4 17.7 14.4 16.1 12.4 13.7C12.1 14.3 11.9 15 11.9 15.7C11.9 17.1 12.6 18.3 13.7 19C13 19 12.4 18.8 11.9 18.5C11.9 20.4 13.3 22.1 15.1 22.4C14.8 22.5 14.4 22.5 14 22.5C13.7 22.5 13.5 22.5 13.2 22.4C13.7 24 15.2 25.2 17 25.2C15.6 26.3 13.9 26.9 12 26.9C11.7 26.9 11.4 26.9 11 26.8C12.8 27.9 14.9 28.6 17.2 28.6C24.6 28.6 28.6 22.5 28.6 17.2V16.7C29.4 16.4 30.1 15.7 30.6 14.9Z"
                  fill="currentColor"
                />
              </svg>
            </Link>

            <Link href="#">
              <svg
                className="w-8 aspect-square rounded-full bg-info"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M28 20.7444V26.2601H24.7713V21.0807C24.7713 19.8027 24.3004 18.9283 23.157 18.9283C22.2825 18.9283 21.7444 19.5336 21.5426 20.0718C21.4753 20.2735 21.4081 20.5426 21.4081 20.8789V26.2601H18.1794C18.1794 26.2601 18.2466 17.5157 18.1794 16.6413H21.4081V17.9865C21.8117 17.3139 22.6188 16.3722 24.3004 16.3722C26.3856 16.3722 28 17.7848 28 20.7444ZM14.8161 12C13.7399 12 13 12.7399 13 13.6816C13 14.6233 13.6726 15.3632 14.7489 15.3632C15.8924 15.3632 16.565 14.6233 16.565 13.6816C16.6323 12.6726 15.9596 12 14.8161 12ZM13.2018 26.2601H16.4305V16.6413H13.2018V26.2601Z"
                  fill="currentColor"
                />
              </svg>
            </Link>
          </div>
          <p className="w-1/2 h-2 bg-gray-400  animate-pulse"></p>
          <div className="w-full">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="w-full grid grid-cols-8 gap-2 border my-2 border-gray-500 rounded-lg p-2"
              >
                <div className="w-[3rem] aspect-square rounded-full border bg-gray-500 animate-pulse" />
                <div className="col-span-7 flex flex-col gap-1">
                  <p className="w-1/2 h-2 bg-gray-400  animate-pulse"></p>
                  <div className="w-full flex items-center justify-start gap-4">
                    <p className="w-full h-2 bg-gray-400  animate-pulse"></p>
                    <p className="w-1/3 h-2 bg-gray-400  animate-pulse"></p>
                    <p className="text-sm font-light text-primary flex items-center justify-center gap-1">
                      <p className="w-1/2 h-2 bg-gray-400  animate-pulse"></p>
                      <p className="w-1/2 h-2 bg-gray-400  animate-pulse"></p>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
      
    </div>
  );
}
