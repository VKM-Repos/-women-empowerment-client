import React from "react";

import orgProfile from "@/public/images/org_profile.svg";
import Image from "next/image";
import orgProfile2 from "@/public/images/org_profile_2.svg";
import { useGET } from "@/lib/hooks/useGET.hook";
export default function EditEvent({ params }: { params: { id: string } }) {
  const eventId = params?.id;
  console.log(eventId);

  return (
    <section>
      <div className="flex flex-col items-stretch w-full ml-5 max-md:w-full max-md:ml-0">
        <span className="relative bg-white flex grow flex-col w-full pb-7 rounded-2xl border border-gray-500 max-md:max-w-full max-md:mt-5">
          <Image
            src={orgProfile2}
            layout="responsive"
            alt="bg"
            width={1000}
            height={1000}
            className="absolute inset-0"
          />
          <div className="z-10 flex justify-end pt-10">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/19d801c02f8092496b1acf27f38e7cfe019c05eff9870b0e957c1b7ca6ad1566?"
              className="aspect-square object-contain object-center w-12 justify-center items-center overflow-hidden max-w-full mr-12 max-md:mr-2.5 cursor-pointer z-10 "
            />
          </div>
          <span className="w-full flex flex-col px-2  max-md:max-w-full">
            <div className="z-[1]  max-md:max-w-full  ">
              <div className="gap-10 flex items-center px-10">
                <div className="flex flex-col justify-center w-full max-md:w-full text-white-100">
                  <p className="text-sm font-light w-[550px] text-center">
                    Add an image that clearly represents your Event. it will
                    appear on your event page Your image should be at least
                    1024x576 pixels. It will be cropped to a 16:9 ratio.
                  </p>
                </div>
              </div>
            </div>
          </span>
          <form action="">
            <div className="flex flex-col gap-5  px-[100px] mt-[200px] font-quickSand">
              <div className="flex items-center gap-5">
                <label className="font-sora flex-[0.5]" htmlFor="">
                  Date of event
                </label>
                <input
                  type="text"
                  className="font-quickSand flex-1 border border-gray-500 px-10 py-3 focus:outline-none rounded-md w-[100px]"
                  placeholder="Women researchers foundation"
                />
              </div>
              <div className="flex items-center gap-5">
                <label className="font-sora flex-[0.5]" htmlFor="">
                  Event Type
                </label>
                <input
                  type="text"
                  className="font-quickSand flex-1 border border-gray-500 px-10 py-3 focus:outline-none rounded-md w-full"
                  placeholder="htttps://womenresearchersfoundation.com"
                />
              </div>
              <div className="flex items-center gap-5">
                <label className="font-sora flex-[0.5]" htmlFor="">
                  Event Link
                </label>
                <input
                  type="text"
                  className="font-quickSand flex-1 border border-gray-500 px-10 py-3 focus:outline-none rounded-md w-full"
                  placeholder="htttps://www.facebook.com/wrf"
                />
              </div>
              <div className="flex items-center gap-5">
                <label className="font-sora flex-[0.5]" htmlFor="">
                  Event Title
                </label>
                <input
                  type="text"
                  className="font-quickSand flex-1 border border-gray-500 px-10 py-3 focus:outline-none rounded-md w-full"
                  placeholder="contact@womenresearchersfoundation.org"
                />
              </div>
              {/* <div className="flex items-center gap-5">
                <label className="font-sora flex-[0.5]" htmlFor="">
                  Event Description
                </label>
                <input
                  type="text"
                  className="font-quickSand flex-1 border border-gray-500 px-10 py-3 focus:outline-none rounded-md w-full"
                  placeholder="5th avenue, malcom X street, gwarinpa."
                />
              </div>
              <div className="flex items-center gap-5">
                <label className="font-sora flex-[0.5]" htmlFor="">
                  Contact
                </label>
                <input
                  type="text"
                  className="font-quickSand flex-1 border border-gray-500 px-10 py-3 focus:outline-none rounded-md w-full"
                  placeholder="09045456578"
                />
              </div> */}

              <div className="flex gap-5">
                <div className="text-black flex-[0.5]">Event Description</div>
                <textarea className="font-quickSand flex-1 border border-gray-500 rounded-md w-full px-9 py-3 h-[180px] focus:outline-none">
                  Our community counts over 200.000 members across the world
                  with chapters in all 6 continents. With our Head Office in
                  Paris, we are a Global Movement with chapters in 6 continents,
                  counting over 200.000 members.
                </textarea>
              </div>
              <button className="text-white-100 text-center text-base font-medium font-sora whitespace-nowrap justify-center items-stretch rounded bg-green-800 self-center mt-6 px-8 py-3.5 max-md:px-5">
                Update
              </button>
            </div>
          </form>
        </span>
      </div>
    </section>
  );
}
