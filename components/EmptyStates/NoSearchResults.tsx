"use client";
import React from "react";
import NoResults from "@/public/images/no-results.png";
import Image from "next/image";

type Props = {
  message: string;
};

function NoSearchResults({ message }: Props) {

  return (
    <div className="w-full flex flex-col relative -mt-[5%]">
         <Image
              src={NoResults}
              alt="oops"
              width={1000}
              height={1000}
              className="lg:w-[20rem] w-[10rem] mx-auto aspect-auto rounded-br-xl"
            />
        <p className="text-lg text-gray-200 text-center font-quickSand">Hmmm, no results for <b>{message}</b></p>      
    </div>
  );
}

export default NoSearchResults;
