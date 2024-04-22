"use client";
import { Organization } from "@/lib/types/organization.types";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import LikeButton from "./LikeButton";
import ShareDropdown from "./ShareDropDown";
import ExternalLinkButton from "./ExternalLinkButton";


export const OrganizationCard: React.FC<{
  organization: Organization;
}> = ({ organization }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const truncatedText = (text: string, maxLength: number) => {
    return text.length > maxLength && !expanded
      ? `${text.slice(0, maxLength)}...`
      : text;
  };

  const urlToShare = `https://womenhub.org/organization/${organization?.id}`;
  return (
    <article className="border border-gray-500 shadow-sm bg-white self-stretch p-4 py-4 md:p-8 rounded-2xl max-md:max-w-full hover:bg-primary/10 transform transition-all ease-in-out duration-75 ">
      <div className="grid grid-cols-12 gap-5 place-content-center items-start ">
        <div className="col-span-9 md:col-span-10  flex flex-col gap-2 items-start justify-between h-[10rem] md:h-[8rem]">
          <Link
            className="flex flex-col w-full h-[75%] hover:underline"
            href={`/organization/${organization?.id}`}
            scroll={true}
          >
            <h4 className="text-primary text-base md:text-lg font-sora font-bold truncate whitespace-nowrap w-full block">
              {organization?.name}
            </h4>
            <p className=" text-xs md:text-sm font-quickSand leading-5 max-md:max-w-full">
              {truncatedText(organization?.description, 150)}
            </p>
          </Link>

          <div className="justify-between border-gray-500  flex w-full h-[25%] gap-4 py-1 border-y items-center">
            <div className="items-center flex justify-start gap-4">
              <LikeButton
                organizationId={organization?.id}
                likesCount={organization?.likesCount}
              />
              <ShareDropdown text={""} urlToShare={urlToShare} />
            </div>

            <button className="flex flex-nowrap items-center gap-1.5 whitespace-nowrap">
              <ExternalLinkButton />
              <Link
                href={organization.website ? organization.website : organization.facebook}
                target="_blank"
                className="text-gray-300 font-sora text-center text-xs md:text-sm self-center hover:underline my-auto"
              >
                {organization?.website ? 'visit website' : 'visit facebook page'}
              </Link>
            </button>
          </div>
        </div>
        <div className="flex flex-col col-span-3 md:col-span-2">
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
