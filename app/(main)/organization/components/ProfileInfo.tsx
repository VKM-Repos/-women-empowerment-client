'use client'
import Facebook from '@/components/Common/Icons/social-media-icons/Facebook';
import LinkedIn from '@/components/Common/Icons/social-media-icons/LinkedIn';
import Location from '@/components/Common/Icons/social-media-icons/Location';
import Mail from '@/components/Common/Icons/social-media-icons/Mail';
import Phone from '@/components/Common/Icons/social-media-icons/Phone';
import Twitter from '@/components/Common/Icons/social-media-icons/Twitter';
import { Separator } from '@/components/UI/Separator';
import { Organization } from '@/lib/types/organization.types';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';

type Props = {
  organization: Organization;
};

const ProfileInfo = ({ organization }: Props) => {
  const socialMediaLinks = {
    linkedin: organization?.linkedin,
    twitter: organization?.twitter,
    facebook: organization?.facebook,
  };

  const availableLinks = Object.entries(socialMediaLinks).filter(
    ([_, url]) => url
  );

  const contactDetails = {
    address:
      organization?.state && organization?.street
        ? `${organization.state} <br /> ${organization.street}`
        : null,
    email: organization?.email,
    phoneNumber: organization?.phoneNumber,
  };

  const availableDetails = Object.entries(contactDetails).filter(
    ([_, detail]) => detail
  );

  return (
    <section className="lg:-mt-16 -mt-8 w-full space-y-8 p-3 md:p-8">
      <div className="">
        {availableLinks.length > 0 && (
          <span className="flex w-full items-center justify-end gap-2">
            <p className="text-gray-200 font-quickSand text-base font-medium">
              Follow us:
            </p>
            {availableLinks.map(([platform, url]) => (
              <Link
                className=" text-gray-200 hover:text-btnWarning hover:bg-primary/50 flex aspect-square w-10 relative z-50 items-center justify-center rounded-full border"
                key={platform}
                href={url}
                target="_blank"
              >
                {platform === 'linkedin' && <LinkedIn size="35" />}
                {platform === 'twitter' && <Twitter size="35" />}
                {platform === 'facebook' && <Facebook size="34" />}
              </Link>
            ))}
          </span>
        )}
      </div>
      <div className="space-y-4">
        <div>
          <h3 className="text-primary font-quickSand text-xl">
            About
            <div className="bg-btnWarning mt-1 h-1 w-[2rem] rounded" />
          </h3>
        </div>
        <p className="text-gray-200 font-quickSand text-base font-medium">
          {organization.description}
        </p>
      </div>
      <div className="font-quickSand text-gray-300 grid grid-cols-1 items-center justify-center gap-5 text-xs font-semibold lg:grid-cols-3">
        {availableDetails.map(([type, detail], index) => (
          <React.Fragment key={type}>
            <div
              className={cn(
                'flex w-full flex-col items-center justify-start gap-1 text-center',
                {
                  'border-b border-r-0 py-4 lg:border-b-0 lg:border-r lg:py-0':
                    index < availableDetails.length - 1,
                }
              )}
            >
              {type === 'address' && <Location size="30" />}
              {type === 'email' && <Mail size="30" />}
              {type === 'phoneNumber' && <Phone size="30" />}
              <p
                className="flex h-[4rem] items-start"
                dangerouslySetInnerHTML={{ __html: detail || '' }}
              />
            </div>
            {/* {index < availableDetails.length - 1 && (
              <Separator orientation="vertical" />
            )} */}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default ProfileInfo;
