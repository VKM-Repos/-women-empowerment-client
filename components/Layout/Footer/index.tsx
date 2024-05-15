import React from "react";
import vhdoLogo from "@/public/icons/vhdo-logo.svg";
import vkmLogo from "@/public/icons/vkm-logo.svg";
import footerImg from "@/public/icons/footer-img.svg";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Common/Button/Button";
import { useRouter } from "next/navigation";
import { useAppContext } from "@/lib/context/app-context";

const Footer: React.FC = () => {
  const router = useRouter();
  const { isAuthenticated, showSignupProcess } = useAppContext();
  return (
    <div className={`${showSignupProcess ? "hidden" : ""} w-full pt-[1rem]`}>
      <div className="w-[95%] mx-auto grid grid-cols-1 md:grid-cols-2 items-end">
        <div className="">
          <div className="flex items-start justify-start w-1/2 md:mx-0 mx-auto">
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
          <div className="flex flex-col gap-5 items-center md:items-start justify-start w-full py-8">
            <h3 className="md:text-4xl font-semibold font-sora text-2xl text-primary w-auto">
              Be a part of our community
            </h3>
            <p className="text-sm font-quickSand md:text-lg w-full md:w-2/3 text-center md:text-left text-gray-100">
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
                  onClick={() => router.push("/discussions")}
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
                  onClick={() => router.push("/account/sign-up")}
                />
              </>
            )}
          </div>
        </div>

        <div className="w-full relative place-self-end flex flex-col items-center">
          <div className="w-[60%] mx-auto relative md:-top-[5rem]">
            <Image
              className=" h-[10rem] object-contain"
              src={footerImg.src}
              alt="imageOne"
              layout="responsive"
              width={1}
              height={1}
            />
          </div>
          <p className="text-base font-quickSand md:text-xl text-gray-100 w-auto text-center my-4">
            Follow our social media links for the latest update
          </p>
          <div className="flex  items-center justify-center w-auto my-4">
            <a href="https://x.com/TheWomen_hub?t=GzIJ8w21eTToumkHJfvQTA&s=09" target="__blank">
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.0312 32.9688L23.7147 26.2853M23.7147 26.2853L17.0312 17.0312H21.4583L26.2853 23.7147M23.7147 26.2853L28.5417 32.9688H32.9688L26.2853 23.7147M32.9688 17.0312L26.2853 23.7147" stroke="#106840" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17.0312 32.9688L23.7147 26.2853M23.7147 26.2853L17.0312 17.0312H21.4583L26.2853 23.7147M23.7147 26.2853L28.5417 32.9688H32.9688L26.2853 23.7147M32.9688 17.0312L26.2853 23.7147" stroke="#106840" strokeOpacity="0.2" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17.0312 32.9688L23.7147 26.2853M23.7147 26.2853L17.0312 17.0312H21.4583L26.2853 23.7147M23.7147 26.2853L28.5417 32.9688H32.9688L26.2853 23.7147M32.9688 17.0312L26.2853 23.7147" stroke="#106840" strokeOpacity="0.2" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17.0312 32.9688L23.7147 26.2853M23.7147 26.2853L17.0312 17.0312H21.4583L26.2853 23.7147M23.7147 26.2853L28.5417 32.9688H32.9688L26.2853 23.7147M32.9688 17.0312L26.2853 23.7147" stroke="#106840" strokeOpacity="0.2" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17.0312 32.9688L23.7147 26.2853M23.7147 26.2853L17.0312 17.0312H21.4583L26.2853 23.7147M23.7147 26.2853L28.5417 32.9688H32.9688L26.2853 23.7147M32.9688 17.0312L26.2853 23.7147" stroke="#106840" strokeOpacity="0.2" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>

              </a>
              <a href="https://ng.linkedin.com/company/viable-helpers-development-organization" target="__blank">
                <svg
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M35 25.9305V32.8251H30.9641V26.3509C30.9641 24.7534 30.3756 23.6603 28.9462 23.6603C27.8531 23.6603 27.1805 24.417 26.9283 25.0897C26.8442 25.3419 26.7601 25.6783 26.7601 26.0987V32.8251H22.7242C22.7242 32.8251 22.8083 21.8946 22.7242 20.8016H26.7601V22.4832C27.2646 21.6424 28.2735 20.4652 30.3756 20.4652C32.9821 20.4652 35 22.2309 35 25.9305ZM18.5202 15C17.1749 15 16.25 15.9249 16.25 17.102C16.25 18.2791 17.0908 19.204 18.4361 19.204C19.8655 19.204 20.7063 18.2791 20.7063 17.102C20.7904 15.8408 19.9495 15 18.5202 15ZM16.5022 32.8251H20.5381V20.8016H16.5022V32.8251Z"
                    fill="#106840"
                  />
                </svg>
              </a>
              <a href="https://www.instagram.com/women_hub_org?igsh=MTN2d3h6aGgyOHV5NA==" target="__blank">
                <svg
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.4645 16.4645L15.5806 15.5806L15.5806 15.5806L16.4645 16.4645ZM33.5356 16.4645L34.4195 15.5806L34.4194 15.5806L33.5356 16.4645ZM33.5356 33.5356L34.4194 34.4195L34.4195 34.4194L33.5356 33.5356ZM16.4645 33.5356L15.5806 34.4194L15.5806 34.4195L16.4645 33.5356ZM30.7977 20.4605C31.488 20.4605 32.0477 19.9009 32.0477 19.2105C32.0477 18.5202 31.488 17.9605 30.7977 17.9605V20.4605ZM30.7882 17.9605C30.0979 17.9605 29.5382 18.5202 29.5382 19.2105C29.5382 19.9009 30.0979 20.4605 30.7882 20.4605V17.9605ZM16.25 25C16.25 22.6076 16.2527 20.9391 16.4219 19.6802C16.5863 18.4572 16.8871 17.8096 17.3483 17.3483L15.5806 15.5806C14.5774 16.5838 14.1459 17.8469 13.9442 19.3471C13.7473 20.8113 13.75 22.6783 13.75 25H16.25ZM17.3483 17.3483C17.8096 16.8871 18.4572 16.5863 19.6802 16.4219C20.9391 16.2527 22.6076 16.25 25 16.25V13.75C22.6783 13.75 20.8113 13.7473 19.3471 13.9442C17.8469 14.1459 16.5838 14.5774 15.5806 15.5806L17.3483 17.3483ZM25 16.25C27.3923 16.25 29.0609 16.2527 30.3198 16.4219C31.5428 16.5863 32.1904 16.8871 32.6517 17.3484L34.4194 15.5806C33.4162 14.5774 32.1531 14.1459 30.6529 13.9442C29.1887 13.7473 27.3217 13.75 25 13.75V16.25ZM32.6517 17.3483C33.1129 17.8096 33.4137 18.4572 33.5781 19.6802C33.7473 20.9391 33.75 22.6076 33.75 25H36.25C36.25 22.6783 36.2527 20.8113 36.0558 19.3471C35.8541 17.8469 35.4226 16.5838 34.4195 15.5806L32.6517 17.3483ZM33.75 25C33.75 27.3923 33.7473 29.0609 33.5781 30.3198C33.4137 31.5428 33.1129 32.1904 32.6517 32.6517L34.4195 34.4194C35.4226 33.4162 35.8541 32.1531 36.0558 30.6529C36.2527 29.1887 36.25 27.3217 36.25 25H33.75ZM32.6517 32.6517C32.1904 33.1129 31.5428 33.4137 30.3198 33.5781C29.0609 33.7473 27.3923 33.75 25 33.75V36.25C27.3217 36.25 29.1887 36.2527 30.6529 36.0558C32.1531 35.8541 33.4162 35.4226 34.4194 34.4195L32.6517 32.6517ZM25 33.75C22.6076 33.75 20.9391 33.7473 19.6802 33.5781C18.4572 33.4137 17.8096 33.1129 17.3483 32.6517L15.5806 34.4195C16.5838 35.4226 17.8469 35.8541 19.3471 36.0558C20.8113 36.2527 22.6783 36.25 25 36.25V33.75ZM17.3484 32.6517C16.8871 32.1904 16.5863 31.5428 16.4219 30.3198C16.2527 29.0609 16.25 27.3923 16.25 25H13.75C13.75 27.3217 13.7473 29.1887 13.9442 30.6529C14.1459 32.1531 14.5774 33.4162 15.5806 34.4194L17.3484 32.6517ZM28.4868 25C28.4868 26.9257 26.9257 28.4868 25 28.4868V30.9868C28.3065 30.9868 30.9868 28.3065 30.9868 25H28.4868ZM25 28.4868C23.0743 28.4868 21.5132 26.9257 21.5132 25H19.0132C19.0132 28.3065 21.6936 30.9868 25 30.9868V28.4868ZM21.5132 25C21.5132 23.0743 23.0743 21.5132 25 21.5132V19.0132C21.6936 19.0132 19.0132 21.6936 19.0132 25H21.5132ZM25 21.5132C26.9257 21.5132 28.4868 23.0743 28.4868 25H30.9868C30.9868 21.6936 28.3065 19.0132 25 19.0132V21.5132ZM30.7977 17.9605H30.7882V20.4605H30.7977V17.9605Z"
                    fill="#106840"
                  />
                </svg>
              </a>
          </div>
        </div>
      </div>
      <div className="bg-gray-500 h-[0.3px] mt-[17px] w-full" />
      <p className="text-center md:text-left text-xs font-quickSand md:text-sm py-4 px-2 md:px-8 font-light">
        © Copyright 2024. Viable Helpers Development Organization
      </p>
    </div>
  );
};

export default Footer;
