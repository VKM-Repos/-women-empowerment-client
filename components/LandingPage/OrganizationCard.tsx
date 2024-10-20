'use client';
import { Organization } from '@/lib/types/organization.types';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React, { useState } from 'react';
import LikeButton from './LikeButton';
import ShareDropdown from './ShareDropDown';
import ExternalLinkButton from './ExternalLinkButton';
import ImageWithFallback from '../Common/ImageWithFallBack';
import { siteConfig } from '@/lib/config/siteConfig';

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

  const urlToShare = `${typeof window !== 'undefined' ? window.location.origin : siteConfig.url}/organization/${organization?.id}`;
  return (
    <article className="border-gray-500 max-md:max-w-full hover:bg-primary/10 transform self-stretch rounded-2xl border bg-white p-4 py-4 shadow-sm transition-all duration-75 ease-in-out md:p-8 ">
      <div className="grid grid-cols-12 place-content-center items-start gap-5 ">
        <div className="col-span-9 flex  h-[10rem] flex-col items-start justify-between gap-2 md:col-span-10 md:h-[8rem]">
          <Link
            className="flex h-[75%] w-full flex-col hover:underline"
            href={`/organization/${organization?.id}`}
            scroll={true}
          >
            <h4 className="text-primary font-sora block w-full truncate whitespace-nowrap text-base font-bold md:text-lg">
              {organization?.name}
            </h4>
            <p className=" font-quickSand max-md:max-w-full text-xs leading-5 md:text-sm">
              {truncatedText(organization?.description, 150)}
            </p>
          </Link>

          <div className="border-gray-500 flex  h-[25%] w-full items-center justify-between gap-4 border-y py-1">
            <div className="flex items-center justify-start gap-4">
              <LikeButton
                organizationId={organization?.id}
                likesCount={organization?.likesCount}
              />
              <ShareDropdown text={''} urlToShare={urlToShare} />
            </div>

            <button className="flex flex-nowrap items-center gap-1.5 whitespace-nowrap">
              <ExternalLinkButton />
              <Link
                href={
                  organization.website
                    ? organization.website
                    : organization.facebook
                }
                target="_blank"
                className="text-gray-300 font-sora my-auto self-center text-center text-xs hover:underline md:text-sm"
              >
                {organization?.website
                  ? 'visit website'
                  : 'visit facebook page'}
              </Link>
            </button>
          </div>
        </div>
        <div className="col-span-3 flex flex-col md:col-span-2">
          <ImageWithFallback
            src={
              organization.logo ||
              'https://placehold.co/400x400?text=Women\n Hub'
            }
            fallbackSrc={'https://placehold.co/400x400?text=Women\n Hub'}
            aspectRatio={{ width: 400, height: 400 }}
            alt={organization?.name}
            className="aspect-square w-full items-center justify-center overflow-hidden rounded-md"
          />
        </div>
      </div>
    </article>
  );
};
