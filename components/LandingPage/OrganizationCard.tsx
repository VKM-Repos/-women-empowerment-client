"use client";
import { Organization } from "@/lib/types/organization.types";
import formatIdToTitle from "@/lib/utils/formatIdToTitle";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import LikeButton from "./LikeButton";

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
    <article className="border border-gray-500 shadow-sm bg-white self-stretch p-4 py-4 md:p-8 rounded-2xl max-md:max-w-full hover:bg-primary/10 transform transition-all ease-in-out duration-75">
      <div className="grid grid-cols-12 gap-5 place-content-center items-start ">
        <div className="col-span-8 md:col-span-10 h-full flex flex-col gap-2 items-start justify-between">
          <Link
            className="flex flex-col w-full hover:underline"
            href={`/organization/${organization.id}`}
            as={`/organization/${formatIdToTitle(organization.name)}`}
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

              {/* share button */}
              <button className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full">
                <svg
                  className="w-6 aspect-square"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.35962 6L12.3596 2L16.3596 6"
                    stroke="#787878"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16.3596 10H18.3596C18.6248 10 18.8792 10.1054 19.0667 10.2929C19.2543 10.4804 19.3596 10.7348 19.3596 11V20C19.3596 20.2652 19.2543 20.5196 19.0667 20.7071C18.8792 20.8946 18.6248 21 18.3596 21H6.35962C6.0944 21 5.84005 20.8946 5.65251 20.7071C5.46498 20.5196 5.35962 20.2652 5.35962 20V11C5.35962 10.7348 5.46498 10.4804 5.65251 10.2929C5.84005 10.1054 6.0944 10 6.35962 10H8.35962"
                    stroke="#787878"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.3596 2V15"
                    stroke="#787878"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
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

              <Link href={organization.website} target="_blank" className="text-gray-300 font-sora text-center text-xs md:text-sm self-center hover:underline my-auto">
                visit website
              </Link>
            </button>
          </div>
        </div>
        <div className="flex flex-col col-span-4 md:col-span-2">
          <motion.img
            src={organization.logo || "https://placehold.co/400x400?text=Women\n Hub"}
            alt=""
            loading="lazy"
            className="w-full aspect-square justify-center items-center overflow-hidden rounded-md"
          />
        </div>
      </div>
    </article>
  );
};
