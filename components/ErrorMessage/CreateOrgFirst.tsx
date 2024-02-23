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
            X
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
        <p className="text-sm text-gray-200 text-center font-quickSand">{message}</p>
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
