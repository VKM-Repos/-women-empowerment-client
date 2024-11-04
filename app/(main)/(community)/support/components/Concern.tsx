"use client";
import Image from "next/image";
import Button from "@/components/Common/Button/Button";
import concern from "@/public/images/concern.png";
import Modal from "@/components/Common/Modal/Modal";
import { useModal } from "@/lib/context/modal-context";
import { AnimatePresence } from "framer-motion";
import React from "react";
import { UploadFile } from "@/components/Common/Icons/UploadFile";

type Props = {};

export default function Concern({}: Props) {
  const { hideModal } = useModal();

  return (
    <Modal onClose={hideModal} isOpen={true}>
      <AnimatePresence initial={false} mode="wait">
        <div className=" h-[678px] w-[849px] mx-auto bg-[#F6F7F8]  rounded-[1rem] p-[24px]  flex flex-col">
          <div className="flex flex-col items-center">
            <div>
              <Image
                src={concern}
                alt="connect"
                className="w-[154.7px] h-[93.98px] aspect-square mx-auto object-contain"
              />
            </div>
            <div className="w-[369px] text-center pt-8">
              <span className="text-[#65655E]">
                We're here to help! Please provide the necessary details so we
                can assist you promptly.
              </span>
            </div>
          </div>
          <div className="w-full h-full flex flex-col mt-6 items-center justify-center gap-4">
            <form
              // onSubmit={handleSubmit(handleCreatePost)}
              className="w-full font-quickSand"
            >
              <fieldset className="w-full flex flex-col gap-5 text-sm">
                <div className="flex flex-row gap-x-10">
                  <input
                    className="w-full border border-gray-400 rounded p-2 focus:outline-btnWarning placeholder:text-gray-200"
                    type="email"
                    placeholder="Email"
                    name="email"
                  />
                  <input
                    className="w-full border border-gray-400 rounded p-2 focus:outline-btnWarning placeholder:text-gray-200"
                    type="text"
                    placeholder="Subject of mail"
                  />
                </div>

                <textarea
                  placeholder="Ask a question"
                  className="w-full h-[4rem] border border-gray-400 rounded p-2 focus:outline-btnWarning placeholder:text-gray-200"
                  name="question"
                />
                <label className="font-[600] text-[12px] font-inter">
                  Attach file
                </label>
                <div className="bg-gray-400 h-[200px] rounded-md flex justify-center items-center ">
                  {/* <img
                    src={"https://placehold.co/"}
                    alt=""
                    className="h-[200px] max-h-[200px] w-full object-cover rounded-md aspect-auto"
                  /> */}
                  <input
                    // ref={coverInputRef}
                    type="file"
                    // onChange={(e) => handleImageChange(e, "cover")}
                    name="image"
                    className="hidden"
                    accept="image/*"
                  />

                  <button
                    // variant="outline"
                    className="flex items-center gap-2 absolute bg-[#FCFCFC] py-[10px] px-[16px] border-2 rounded-[9.83px]"
                    // onClick={() => handleChooseFile("cover")}
                    type="button"
                  >
                    <UploadFile /> Click or drop files
                  </button>
                </div>

                <div className="flex justify-center">
                  <Button
                    label="send"
                    variant="primary"
                    size="medium"
                    fullWidth={false}
                    state="active"
                    // onClick={handleCreatePost}
                  />
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </AnimatePresence>
    </Modal>
  );
}
