import Link from "next/link";
import React from "react";

import notFoundSocket from "@/public/images/not-found-socket.svg";
import notFoundImage from "@/public/images/not-found-image.svg";
import Image from "next/image";
export default function NotFound() {
  return (
    <section className="flex flex-col items-center  w-screen  gap-7 mt-[50px] no-scrollbar">
      <h1 className="font-sora text-2xl font-medium">
        Oops! You've Discovered Uncharted Territory
      </h1>
      <p className="font-quickSand w-[47%] text-center">
        Mistakes happen, but empowerment is about navigating through challenges.
        Refresh the page or explore our empowering content from the homepage
      </p>
      <span className="my-7">
        <svg
          width="273"
          height="99"
          viewBox="0 0 273 99"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M87.9036 76.6674H72.4961V96.534H51.1372V76.6674H0.195312V61.9366L44.7869 1.9375H67.7593L26.4123 58.8308H51.8139V41.133H72.4961V58.8308H87.9036V76.6674Z"
            fill="#263238"
          />
          <path
            d="M94.4434 49.24C94.4434 18.0086 111.794 0.328125 134.975 0.328125C158.155 0.328125 175.541 18.0259 175.541 49.24C175.541 80.4541 158.381 98.1693 134.992 98.1693C111.603 98.1693 94.4434 80.4541 94.4434 49.24ZM153.436 49.24C153.436 27.7597 145.871 18.8414 134.923 18.8414C123.974 18.8414 116.548 27.7597 116.548 49.24C116.548 70.7203 124.113 79.656 134.923 79.656C145.732 79.656 153.488 70.7377 153.488 49.24H153.436Z"
            fill="#263238"
          />
          <path
            d="M272.861 76.6674H257.453V96.534H236.112V76.6674H185.152V61.9366L229.761 1.9375H252.734L211.369 58.8308H236.771V41.133H257.453V58.8308H272.861V76.6674Z"
            fill="#263238"
          />
        </svg>
      </span>
      <Link
        href={"/"}
        className="bg-btnWarning text-white-100 font-quickSand px-6 py-3"
      >
        Return Home
      </Link>

      <div className="flex justify-end gap-5 w-full pr-[200px] -mt-[50px]">
        <img
          src={notFoundSocket.src}
          alt="Not Found Socket"
          className="object-cover"
        />
        <img
          src={notFoundImage.src}
          alt="Not Found Socket"
          className="object-cover"
        />
      </div>
    </section>
  );
}
