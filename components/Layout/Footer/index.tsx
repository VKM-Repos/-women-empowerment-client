import React from "react";

import { Line } from '@/components/Line'

import logo from '@/public/icons/logo.svg'
import vhdoLogo from '@/public/icons/vhdo-logo.svg'
import vkmLogo from '@/public/icons/vkm-logo.svg'
import footerImg from '@/public/icons/footer-img.svg'
import eeclip from '@/public/icons/eclipe.svg'
type FooterProps = Omit<
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    | "language"
    | "beapartofour"
    | "descriptionTwo"
    | "getstarted"
    | "copyright2022"
> &
    Partial<{
        language: string;
        beapartofour: string;
        descriptionTwo: string;
        getstarted: string;
        copyright2022: string;
    }>;

const Footer: React.FC<FooterProps> = (
    props,
) => {
    return (
        <div className="pt-[6rem]">
            <div className={props.className}>
                <div className="flex flex-col relative border-t border-gray-50">
                    {/* <img
                        className="h-[214px] mt-[-20px] mx-auto object-cover w-full z-[1]"
                        src={eeclip.src}
                        alt="ellipseEight"
                    /> */}
                    <img
                        className="h-[336px] ml-auto mr-[169px] mt-[-142.33px] rounded-[50%] w-[336px] z-[1]"
                        src={footerImg.src}
                        alt="imageOne"
                    />
                    <div className="flex flex-col gap-4 items-center justify-start ml-auto mr-[184px] mt-[-NaNpx] w-auto z-[1]">
                        <p
                            className="text-base text-black-900 w-auto"
                        >
                            {props?.language}
                        </p>
                        <div className="flex flex-row gap-4 items-start justify-start w-auto">
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.6571 20.3648H25.3793L25.9637 16.5605H21.6563V14.4813C21.6563 12.901 22.1696 11.4996 23.6389 11.4996H26V8.17974C25.5852 8.12338 24.7078 8 23.05 8C19.5882 8 17.5587 9.8393 17.5587 14.0297V16.5605H14V20.3648H17.5587V30.821C18.2634 30.9276 18.9773 31 19.7101 31C20.3724 31 21.0189 30.9391 21.6571 30.8522V20.3648Z" fill="#106840" />
                            </svg>

                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M30.6 14.9C29.9 15.2 29.1 15.4 28.3 15.5C29.1 15 29.8 14.2 30.1 13.3C29.3 13.8 28.5 14.1 27.5 14.3C26.8 13.5 25.7 13 24.6 13C22.4 13 20.6 14.8 20.6 17C20.6 17.3 20.6 17.6 20.7 17.9C17.4 17.7 14.4 16.1 12.4 13.7C12.1 14.3 11.9 15 11.9 15.7C11.9 17.1 12.6 18.3 13.7 19C13 19 12.4 18.8 11.9 18.5C11.9 20.4 13.3 22.1 15.1 22.4C14.8 22.5 14.4 22.5 14 22.5C13.7 22.5 13.5 22.5 13.2 22.4C13.7 24 15.2 25.2 17 25.2C15.6 26.3 13.9 26.9 12 26.9C11.7 26.9 11.4 26.9 11 26.8C12.8 27.9 14.9 28.6 17.2 28.6C24.6 28.6 28.6 22.5 28.6 17.2V16.7C29.4 16.4 30.1 15.7 30.6 14.9Z" fill="#106840" />
                            </svg>

                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M28 20.7444V26.2601H24.7713V21.0807C24.7713 19.8027 24.3004 18.9283 23.157 18.9283C22.2825 18.9283 21.7444 19.5336 21.5426 20.0718C21.4753 20.2735 21.4081 20.5426 21.4081 20.8789V26.2601H18.1794C18.1794 26.2601 18.2466 17.5157 18.1794 16.6413H21.4081V17.9865C21.8117 17.3139 22.6188 16.3722 24.3004 16.3722C26.3856 16.3722 28 17.7848 28 20.7444ZM14.8161 12C13.7399 12 13 12.7399 13 13.6816C13 14.6233 13.6726 15.3632 14.7489 15.3632C15.8924 15.3632 16.565 14.6233 16.565 13.6816C16.6323 12.6726 15.9596 12 14.8161 12ZM13.2018 26.2601H16.4305V16.6413H13.2018V26.2601Z" fill="#106840" />
                            </svg>

                        </div>
                    </div>

                    <div className="flex flex-col gap-5 items-start justify-start mb-[59px] ml-[66px] mt-[-NaNpx] w-auto z-[1]">
                        <div className="flex flex-row gap-6 items-center justify-start w-auto">
                            <img
                                className="h-[53px] md:h-auto object-cover w-[53px]"
                                src={logo.src}
                                alt="downloadremoveb_One"
                            />
                            <img
                                className="h-[53px] md:h-auto object-cover w-[53px]"
                                src={vhdoLogo.src}
                                alt="croppedvhdologo"
                            />
                            <img
                                className="h-[51px] md:h-auto object-cover w-[34px]"
                                src={vkmLogo.src}
                                alt="vector_One"
                            />
                        </div>
                        <div className="flex flex-col gap-5 items-start justify-start w-auto sm:w-full">
                            <p
                                className="text-4xl font-semibold sm:text-[32px] md:text-[34px] text-teal-900 w-auto"
                            >
                                {props?.beapartofour}
                            </p>
                            <div className="flex flex-col gap-7 items-start justify-start w-full">
                                <p
                                    className="max-w-[496px] md:max-w-full text-gray-900_02 text-sm"
                                >
                                    {props?.descriptionTwo}
                                </p>
                                <button
                                    className="cursor-pointer bg-btnWarning rounded-sm focus:outline-none text-white-100 font-medium font-quicksand h-12 leading-[normal] min-w-[145px] text-base text-center"
                                >
                                    {props?.getstarted}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <Line className="bg-black-300 h-[0.3px] mt-[17px] w-full" />
                <p
                    className="md:ml-[66px] ml-[66px] mt-[23px] text-gray-900_02 text-sm"
                >
                    {props?.copyright2022}
                </p>
            </div>
        </div>
    );
};

Footer.defaultProps = {
    language: "share this page to create awarenttess ",
    beapartofour: "Be a part of our community",
    descriptionTwo:
        "Our Community Membership offers professional individuals and corporations an opportunity to connect and support each other.",
    getstarted: "Get started",
    copyright2022: "© Copyright 2022. Viable Helpers Development Organization",
};

export default Footer;
