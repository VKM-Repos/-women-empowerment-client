"use client";
import { Organization } from "@/lib/types/organization.types";
import formatIdToTitle from "@/lib/utils/formatIdToTitle";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import LikeButton from "./LikeButton";
import ShareDropdown from "./ShareDropDown";

interface OrganizationProps extends Organization {
  otherProps?: string;
}
export const OrganizationCard: React.FC<{
  organization: OrganizationProps;
}> = ({ organization }) => {
  const [fav, setFav] = useState(false);
  const handleFavorite = () => {
    setFav((prevState) => !prevState);
  };

  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const truncatedText = (text: string, maxLength: number) => {
    return text.length > maxLength && !expanded
      ? `${text.slice(0, maxLength)}...`
      : text;
  };
  return (
    <article className="border border-gray-500 shadow-sm bg-white self-stretch p-4 py-4 md:p-8 rounded-2xl max-md:max-w-full hover:bg-primary/10 transform transition-all ease-in-out duration-75 ">
      <div className="grid grid-cols-12 gap-5 place-content-center items-start ">
        <div className="col-span-8 md:col-span-10 h-full flex flex-col gap-2 items-start justify-between">
          <Link
            className="flex flex-col w-full hover:underline"
            href={`/organization/${organization.id}`}
            // as={`/organization/${formatIdToTitle(organization.name)}`}
            scroll={true}
          >
            <h4 className="text-primary text-base md:text-lg font-sora font-bold truncate whitespace-nowrap w-full block">
              {organization.name}
            </h4>
            <p className=" text-xs md:text-sm font-quickSand leading-5 max-md:max-w-full">
              {/* {organization.description} */}
              {truncatedText(organization?.description, 200)}
              &nbsp;
              {organization.description.length > 200 && (
                <span className="text-info text-xs">See more</span>
              )}
            </p>
          </Link>

          <div className="justify-between border-gray-500  flex w-full gap-4 py-2 border-y items-center">
            <div className="items-center flex justify-start gap-4">
              <LikeButton organizationId={organization.id} />
              <ShareDropdown>
                <div className="w-full bg-primaryWhite py-4 p-2 flex flex-col items-start justify-start gap-4">
                  <button className="w-full p-2 flex items-center justify-start gap-6 text-gray-300 hover:bg-primary/10 rounded">
                    <svg
                      className="w-6 aspect-square"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          d="M15.197 3.35462C16.8703 1.67483 19.4476 1.53865 20.9536 3.05046C22.4596 4.56228 22.3239 7.14956 20.6506 8.82935L18.2268 11.2626M10.0464 14C8.54044 12.4882 8.67609 9.90087 10.3494 8.22108L12.5 6.06212"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                        ></path>{" "}
                        <path
                          d="M13.9536 10C15.4596 11.5118 15.3239 14.0991 13.6506 15.7789L11.2268 18.2121L8.80299 20.6454C7.12969 22.3252 4.55237 22.4613 3.0464 20.9495C1.54043 19.4377 1.67609 16.8504 3.34939 15.1706L5.77323 12.7373"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                        ></path>{" "}
                      </g>
                    </svg>
                    <span>copy link</span>
                  </button>
                </div>
              </ShareDropdown>
            </div>

            <button className="flex flex-nowrap items-center gap-1.5 whitespace-nowrap">
              <svg
                className="w-5 aspect-square"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 12V20C21 20.2652 20.8946 20.5196 20.7071 20.7071C20.5196 20.8946 20.2652 21 20 21H4C3.73478 21 3.48043 20.8946 3.29289 20.7071C3.10536 20.5196 3 20.2652 3 20V4C3 3.73478 3.10536 3.48043 3.29289 3.29289C3.48043 3.10536 3.73478 3 4 3H12"
                  stroke="#787878"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 3H20.44C20.5885 3 20.731 3.059 20.836 3.16402C20.941 3.26904 21 3.41148 21 3.56V8"
                  stroke="#787878"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20.84 3.16L12 12"
                  stroke="#787878"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <Link
                href={organization.website}
                target="_blank"
                className="text-gray-300 font-sora text-center text-xs md:text-sm self-center hover:underline my-auto"
              >
                visit website
              </Link>
            </button>
          </div>
        </div>
        <div className="flex flex-col col-span-4 md:col-span-2">
          <motion.img
            src={
              organization.logo ||
              "https://placehold.co/400x400?text=Women\n Hub"
            }
            alt=""
            loading="lazy"
            className="w-full aspect-square justify-center items-center overflow-hidden rounded-md"
          />
        </div>
      </div>
    </article>
  );
};
