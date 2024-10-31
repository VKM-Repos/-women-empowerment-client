"use client";

import Button from "@/components/Common/Button/Button";
import Modal from "@/components/Common/Modal/Modal";
import { useModal } from "@/lib/context/modal-context";
import { AnimatePresence } from "framer-motion";

import React from "react";

type Props = {};

export default function Concern({}: Props) {
  const { hideModal } = useModal();

  return (
    <Modal onClose={hideModal} isOpen={true}>
      <AnimatePresence initial={false} mode="wait">
        <div className="lg:w-1/3 w-full mx-auto bg-[#F6F7F8] pt-8 rounded-[1rem] px-8 py-4 pb-8 flex flex-col relative">
          <nav className="w-full border-b border-gray-500 py-4 absolute top-0 left-0">
            <span className="capitalize text-lg font-sora font-normal flex items-center gap-5 px-4">
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
              Type your post
            </span>
          </nav>
          <div className="w-full h-full flex flex-col mt-[15%] items-center justify-center gap-4">
            <form
              // onSubmit={handleSubmit(handleCreatePost)}
              className="w-full font-quickSand"
            >
              <fieldset className="w-full flex flex-col gap-5 text-sm">
                <label htmlFor="title">
                  <input
                    className="w-full border border-gray-400 rounded p-2 focus:outline-btnWarning placeholder:text-gray-200"
                    type="text"
                    placeholder="Title"
                    // {...register("title", {
                    //   required: "This field is required",
                    // })}
                  />
                  {/* {errors?.title?.message && (
                      <p className="text-error text-sm mt-1">
                        {errors?.title?.message}
                      </p>
                    )} */}
                </label>

                <label htmlFor="content">
                  <textarea
                    placeholder="Write your discussion"
                    className="w-full h-[8rem] border border-gray-400 rounded p-2 focus:outline-btnWarning placeholder:text-gray-200"
                    // {...register("content", {
                    //   required: "This field is required",
                    // })}
                    name="content"
                  />
                  {/* {errors.content && (
                      <span className="text-error text-xs">
                        {errors.content.message}
                      </span> */}
                  {/* )} */}
                </label>
              </fieldset>
            </form>

            <div className="w-full flex items-center justify-between">
              <Button
                label="post"
                variant="primary"
                size="medium"
                fullWidth={false}
                state="active"
                // onClick={handleCreatePost}
              />

              <button
                className="text-btnWarning text-sm font-quickSand"
                onClick={hideModal}
              >
                cancel
              </button>
            </div>
          </div>
        </div>
      </AnimatePresence>
    </Modal>
  );
}
