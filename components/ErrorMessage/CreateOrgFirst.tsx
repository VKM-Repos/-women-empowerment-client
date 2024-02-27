"use client";
import React from "react";
import Button from "../Common/Button/Button";
import { useModal } from "@/lib/context/modal-context";
import { useRouter } from "next/navigation";
import Oops from "@/public/images/oops-image.png";
import Image from "next/image";

type Props = {
  title: string;
  message: string;
};

function CreateOrgFirst({ title, message }: Props) {
  const { hideModal } = useModal();
  const router = useRouter();
  return (
    <div className="md:w-2/5 w-full mx-auto bg-[#F6F7F8] pt-8 rounded-[1rem] px-8 py-4 pb-8 flex flex-col relative">
      <nav className="w-full border-b border-gray-500 py-4 absolute top-0 left-0">
        <span className="w-full capitalize text-lg font-normal font-sora flex items-center justify-between gap-5 px-4">
          {title}
          <button onClick={hideModal}>
            <svg
              className="cursor-pointer"
              width="20"
              height="21"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.8839 4.61612C20.372 5.10427 20.372 5.89573 19.8839 6.38388L5.88388 20.3839C5.39573 20.872 4.60427 20.872 4.11612 20.3839C3.62796 19.8957 3.62796 19.1043 4.11612 18.6161L18.1161 4.61612C18.6043 4.12796 19.3957 4.12796 19.8839 4.61612Z"
                fill="black"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.11612 4.61612C4.60427 4.12796 5.39573 4.12796 5.88388 4.61612L19.8839 18.6161C20.372 19.1043 20.372 19.8957 19.8839 20.3839C19.3957 20.872 18.6043 20.872 18.1161 20.3839L4.11612 6.38388C3.62796 5.89573 3.62796 5.10427 4.11612 4.61612Z"
                fill="black"
              />
            </svg>
          </button>
        </span>
      </nav>
      <div className="w-full h-full flex flex-col mt-[15%] items-center justify-center gap-10">
        <Image
          src={Oops}
          alt="oops"
          width={1000}
          height={1000}
          className="lg:w-[20rem] w-[10rem] mx-auto aspect-auto rounded-br-xl"
        />
        <p className="text-sm text-gray-200 text-center font-quickSand">
          {message}
        </p>
        <Button
          label="Add an organization"
          variant="primary"
          size="medium"
          fullWidth={false}
          state="active"
          onClick={() => {
            router.push("/organization/create");
            hideModal();
          }}
        />
      </div>
    </div>
  );
}

export default CreateOrgFirst;
