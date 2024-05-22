import React from 'react';
import vhdoLogo from '@/public/icons/vhdo-logo.svg';
import vkmLogo from '@/public/icons/vkm-logo.svg';
import footerImg from '@/public/icons/footer-img.svg';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/Common/Button/Button';
import { useRouter } from 'next/navigation';
import { useAppContext } from '@/lib/context/app-context';
import Twitter from '@/components/Common/Icons/social-media-icons/Twitter';
import LinkedIn from '@/components/Common/Icons/social-media-icons/LinkedIn';
import Instagram from '@/components/Common/Icons/social-media-icons/Instagram';

const Footer: React.FC = () => {
  const router = useRouter();
  const { isAuthenticated, showSignupProcess } = useAppContext();
  return (
    <div className={`${showSignupProcess ? 'hidden' : ''} w-full pt-[1rem]`}>
      <div className="mx-auto grid w-[95%] grid-cols-1 items-end md:grid-cols-2">
        <div className="">
          <div className="mx-auto flex w-1/2 items-start justify-start md:mx-0">
            <Image
              width={100}
              height={100}
              className="h-[3rem] object-contain"
              src={vhdoLogo.src}
              alt="croppedvhdologo"
            />
            <Image
              width={100}
              height={100}
              className="h-[3rem] object-contain"
              src={vkmLogo.src}
              alt="vector_One"
            />
          </div>
          <div className="flex w-full flex-col items-center justify-start gap-5 py-8 md:items-start">
            <h3 className="font-sora text-primary w-auto text-2xl font-semibold md:text-4xl">
              Be a part of our community
            </h3>
            <p className="font-quickSand text-gray-100 w-full text-center text-sm md:w-2/3 md:text-left md:text-lg">
              Our Community Membership offers professional individuals and
              corporations an opportunity to connect and support each other.
            </p>
            {isAuthenticated ? (
              <>
                <Button
                  label="Join Discussion"
                  fullWidth={false}
                  size="medium"
                  state="active"
                  variant="primary"
                  onClick={() => router.push('/discussions')}
                />
              </>
            ) : (
              <>
                <Button
                  label="Get started"
                  fullWidth={false}
                  size="medium"
                  state="active"
                  variant="primary"
                  onClick={() => router.push('/account/sign-up')}
                />
              </>
            )}
          </div>
        </div>

        <div className="relative flex w-full flex-col items-center place-self-end">
          <div className="relative mx-auto w-[60%] md:-top-[5rem]">
            <Image
              className=" h-[10rem] object-contain"
              src={footerImg.src}
              alt="imageOne"
              layout="responsive"
              width={1}
              height={1}
            />
          </div>
          <p className="font-quickSand text-gray-100 my-4 w-auto text-center text-base md:text-xl">
            Follow our social media links for the latest update
          </p>
          <div className="my-4 flex w-auto items-center justify-center text-[#106840]">
            <a
              href="https://x.com/TheWomen_hub?t=GzIJ8w21eTToumkHJfvQTA&s=09"
              target="__blank"
            >
               <Twitter size='50' />
            </a>
            <a
              href="https://ng.linkedin.com/company/viable-helpers-development-organization"
              target="__blank"
            >
            <LinkedIn size='50' />
            </a>
            <a
              href="https://www.instagram.com/women_hub_org?igsh=MTN2d3h6aGgyOHV5NA=="
              target="__blank"
            >
              <Instagram size='50'/>
            </a>
          </div>
        </div>
      </div>
      <div className="bg-gray-500 mt-[17px] h-[0.3px] w-full" />
      <p className="font-quickSand font-light px-2 py-4 text-center text-xs md:px-8 md:text-left md:text-sm">
        © Copyright 2024. Viable Helpers Development Organization
      </p>
    </div>
  );
};

export default Footer;
