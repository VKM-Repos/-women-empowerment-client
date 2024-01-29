"use client";
import formatIdToTitle from "@/lib/utils/formatIdToTitle";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

interface OrganizationProps {
  id: string;
  name: string;
  description: string;
  image: string;
}
export const CommunityCard: React.FC<{ organization: OrganizationProps }> = ({
  organization,
}) => {
  const [fav, setFav] = useState(false);
  const handleFavorite = () => {
    setFav((prevState) => !prevState);
  };
  return (
    <Link href={`/organization/${organization.id}`} as={`/organization/${formatIdToTitle(organization.name)}`} scroll={false} className="border border-gray-500 shadow-sm bg-white self-stretch p-2 py-4 md:p-8 rounded-2xl max-md:max-w-full hover:bg-primary/10 transform transition-all ease-in-out duration-75">
      <div className="grid grid-cols-12 gap-2 place-content-center items-center ">
        <div className="col-span-9 md:col-span-10 flex flex-col gap-2 items-stretch">
            <h4 className="text-primary text-xl font-sora font-bold max-md:max-w-full">
              {organization.name}
            </h4>
            <p className=" text-sm font-quickSand leading-5 max-md:max-w-full">
              {organization.description}
            </p>
            <div className="justify-between border-gray-500  flex w-full gap-4 py-2.5 border-y items-center ">
              <div className="items-center flex justify-start gap-4">
                <span className="flex items-center justify-between gap-1">
                  <svg
                    onClick={handleFavorite}
                    className="cursor-pointer"
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill={fav ? "red" : "none"}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.7504 21.1975L10.7496 21.1969C7.60326 18.3438 5.03218 16.0116 3.24167 13.8225C1.45691 11.6405 0.5 9.66166 0.5 7.52391C0.5 4.04866 3.22366 1.325 6.69891 1.325C8.66681 1.325 10.5634 2.24354 11.7992 3.69476L12.1798 4.14179L12.5605 3.69476C13.7963 2.24354 15.6929 1.325 17.6608 1.325C21.136 1.325 23.8597 4.04866 23.8597 7.52391C23.8597 9.66166 22.9028 11.6405 21.1179 13.8242C19.3314 16.0099 16.7679 18.3394 13.6312 21.1898L13.6107 21.2084L13.6096 21.2094L12.1811 22.5L10.7504 21.1975Z"
                      stroke="black"
                      strokeOpacity="0.4"
                    />
                  </svg>

                  <p className="text-neutral-500 text-center text-sm self-center my-auto">
                    3.5K
                  </p>
                </span>
              <button className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full">
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.35962 6L12.3596 2L16.3596 6" stroke="#787878" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16.3596 10H18.3596C18.6248 10 18.8792 10.1054 19.0667 10.2929C19.2543 10.4804 19.3596 10.7348 19.3596 11V20C19.3596 20.2652 19.2543 20.5196 19.0667 20.7071C18.8792 20.8946 18.6248 21 18.3596 21H6.35962C6.0944 21 5.84005 20.8946 5.65251 20.7071C5.46498 20.5196 5.35962 20.2652 5.35962 20V11C5.35962 10.7348 5.46498 10.4804 5.65251 10.2929C5.84005 10.1054 6.0944 10 6.35962 10H8.35962" stroke="#787878" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12.3596 2V15" stroke="#787878" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              </div>

              <button
                className="items-stretch flex flex-nowrap justify-between gap-1.5"
              >
                <span className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 12V20C21 20.2652 20.8946 20.5196 20.7071 20.7071C20.5196 20.8946 20.2652 21 20 21H4C3.73478 21 3.48043 20.8946 3.29289 20.7071C3.10536 20.5196 3 20.2652 3 20V4C3 3.73478 3.10536 3.48043 3.29289 3.29289C3.48043 3.10536 3.73478 3 4 3H12" stroke="#787878" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M16 3H20.44C20.5885 3 20.731 3.059 20.836 3.16402C20.941 3.26904 21 3.41148 21 3.56V8" stroke="#787878" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M20.84 3.16L12 12" stroke="#787878" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>

                </span>
                <p className="text-neutral-500 font-sora text-center text-sm self-center my-auto">
                  visit website
                </p>
              </button>
            </div>
         
        </div>
        <div className="flex flex-col col-span-3 md:col-span-2">
          <motion.img
            src={organization.image}
            alt=""
            loading="lazy"
            className="w-full aspect-square justify-center items-center overflow-hidden"
          />
        </div>
      </div>
    </Link>
  );
};
