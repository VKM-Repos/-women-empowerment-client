"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import db from "@/data/db.json";
import { useEffect, useState } from "react";
import formatIdToTitle from "@/lib/utils/formatIdToTitle";
import EventDetailsLoader from "../components/EventDetailsLoader";
import DefaultImage from "@/public/images/defaultEventsImage.png";
import { useRouter } from "next/navigation";
import { useGET } from "@/lib/hooks/useGET.hook";
import { formatDateTime } from "@/lib/utils/helperFunctions";
import { CameraIcon } from "@/components/Common/Icons/Camera.icon";
import { LocationIcon } from "@/components/Common/Icons/Location.icon";
import ShareDropdown from "@/components/LandingPage/ShareDropDown";
import Link from "next/link";
import ImageWithFallback from "@/components/Common/ImageWithFallBack";

export default function EventsDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const [events, setEvents] = useState<any | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const eventId = params?.id?.replace(/\(\.\)/g, "");

  const { data: event, isPending } = useGET({
    url: `events/${eventId}`,
    queryKey: ["GET_EVENT_DETAILS_EVENT_DETAILS_PAGE", eventId],
    withAuth: false,
    enabled: true,
  });

  const urlToShare = `https://womenhub.org/events/${eventId}`;
  return (
    <>
      {isPending ? (
        <EventDetailsLoader />
      ) : (
        <AnimatePresence initial={false} mode="wait">
          <div className="lg:w-2/3 w-full mx-auto bg-[#F6F7F8] py-4 p-4 rounded-md relative ">
            <button
              onClick={router.back}
              className="w-fit absolute top-0 right-1 m-4"
            >
              <svg
                width="27"
                height="27"
                viewBox="0 0 27 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.75488 8.05713L18.6445 18.9467M7.75488 18.9467L18.6445 8.05713"
                  stroke="black"
                  strokeWidth="1.58394"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-start justify-items-stretch">
                <div className="w-full col-span-1 flex flex-col items-start justify-items-stretch gap-5 ">
                  <div className="w-full h-4/5 rounded-md overflow-hidden">
                    <ImageWithFallback
                        src={event?.image}
                        fallbackSrc={"https://placehold.co/600x500?text=Women\n Hub"}
                        aspectRatio={{ width: 6, height: 5 }}
                        alt={event?.name}
                        className=""
                      />
                  </div>
                  <h3 className="h-fit w-full uppercase text-base font-bold text-primary font-sora">
                    {event?.name}
                  </h3>
                </div>
                <div className="col-span-1 flex flex-col items-start justify-start gap-5">
                  <h3 className="font-semibold text-xl  font-sora">Details</h3>
                  <div className="bg-primaryWhite w-full rounded-lg drop-shadow-sm p-4 flex flex-col gap-5">
                    <div className=" flex items-center gap-4">
                      {/* <Image
                        src={event?.organization?.logo}
                        alt={event?.organization?.name}
                        width={100}
                        height={100}
                        objectFit="cover"
                        className="w-[3rem] aspect-square rounded-full border border-gray-500"
                      /> */}
                      <span className="w-[3rem] aspect-square rounded-full border border-gray-500 overflow-hidden">
                      <ImageWithFallback
                        src={event?.organization?.logo}
                        fallbackSrc={"https://placehold.co/100x100?text=Women\n Hub"}
                        aspectRatio={{ width: 1, height: 1 }}
                        alt={event?.organization?.name}
                        className=""
                      />

                      </span>
                      <h5 className="text-gray-200 font-semibold text-base font-quickSand">
                        {event?.organization?.name}
                      </h5>
                    </div>
                    <div className="flex items-center gap-4">
                      {/* <Icon name="" size={20} /> */}
                      <svg
                        width="23"
                        height="24"
                        viewBox="0 0 23 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.7377 21.3094C16.8406 21.3094 20.9774 17.1727 20.9774 12.0698C20.9774 6.96682 16.8406 2.83008 11.7377 2.83008C6.63479 2.83008 2.49805 6.96682 2.49805 12.0698C2.49805 17.1727 6.63479 21.3094 11.7377 21.3094Z"
                          stroke="#106840"
                          strokeWidth="1.18796"
                        />
                        <path
                          d="M11.7383 7.44971V12.0695L14.0482 14.3795"
                          stroke="#106840"
                          strokeWidth="1.18796"
                        />
                      </svg>

                      <span className="flex flex-col gap-1 items-start font-sora">
                        <h5 className="text-gray-200 text-sm">
                          {formatDateTime(event?.startDate)}
                        </h5>
                        <h5 className="text-gray-200 text-sm">
                          {formatDateTime(event?.endDate)}
                        </h5>
                        {/* <button
                          onClick={() => {}}
                          className="text-info hover:underline text-sm"
                        >
                          Add to calender
                        </button> */}
                      </span>
                    </div>
                    <div className=" flex items-center gap-4">
                      {/* <Icon name="" size={20} /> */}
                      {/* <svg
                        width="23"
                        height="23"
                        viewBox="0 0 23 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.49805 13.6769V6.28516H10.8138C12.8549 6.28516 14.5096 7.93985 14.5096 9.98102V17.3728H6.19392C4.15274 17.3728 2.49805 15.718 2.49805 13.6769Z"
                          stroke="#106840"
                          strokeWidth="1.18796"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M20.9778 7.20909H21.6708C21.6708 6.95352 21.5301 6.71871 21.3048 6.59811C21.0794 6.47752 20.806 6.49074 20.5934 6.6325L20.9778 7.20909ZM16.8199 9.98099L16.4356 9.4044L16.127 9.61012V9.98099H16.8199ZM20.9778 16.4488L20.5934 17.0253C20.806 17.1671 21.0794 17.1804 21.3048 17.0598C21.5301 16.9391 21.6708 16.7043 21.6708 16.4488H20.9778ZM16.8199 13.6769H16.127V14.0477L16.4356 14.2534L16.8199 13.6769ZM20.5934 6.6325L16.4356 9.4044L17.2043 10.5575L21.3622 7.78568L20.5934 6.6325ZM21.3622 15.8722L17.2043 13.1003L16.4356 14.2534L20.5934 17.0253L21.3622 15.8722ZM16.127 9.98099V13.6769H17.5129V9.98099H16.127ZM21.6708 16.4488V7.20909H20.2848V16.4488H21.6708Z"
                          fill="#106840"
                        />
                      </svg> */}
                      {event?.type == "ONLINE" ? (
                        <CameraIcon className="w-6 aspect-square" />
                      ) : (
                        <LocationIcon className="w-6 aspect-square" />
                      )}
                      <p className="text-sm text-gray-200 font-sora">
                        {event?.type == "ONLINE" ? (
                          <p>
                            <a href={event?.link} className="underline">
                              {event?.link}
                            </a>{" "}
                            ({event?.type})
                          </p>
                        ) : (
                          <p>
                            {event?.location} ({event?.type})
                          </p>
                        )}{" "}
                      </p>
                    </div>
                  </div>
                  <div className="bg-primaryWhite w-full rounded-lg drop-shadow-sm p-4 flex flex-col gap-5">
                    <p className="text-sm text-gray-200 font-quickSand">
                      {event?.description}
                    </p>
                  </div>
                </div>
              </div>

              <div className="font-quickSand my-8 flex gap-10 justify-center">
                <button className="border border-primary text-primary text-xs md:text-base px-4 py-1 rounded-md flex items-center space-x-2">
                    <ShareDropdown text={"Share"} urlToShare={urlToShare} />
                </button>
                <button className="border border-primary bg-primary text-primaryWhite text-xs md:text-base px-4 py-1 rounded-md flex items-center space-x-2">
                  <Link
                    className="flex items-center gap-2"
                    href={event?.organization?.website}
                    target="_blank"
                  >
                    <span>Visit Website</span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 20 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.2916 9.50031V15.8361C17.2916 16.0461 17.2082 16.2476 17.0597 16.3961C16.9111 16.5446 16.7097 16.6281 16.4997 16.6281H3.8281C3.61806 16.6281 3.41662 16.5446 3.2681 16.3961C3.11957 16.2476 3.03613 16.0461 3.03613 15.8361V3.16453C3.03613 2.95449 3.11957 2.75305 3.2681 2.60452C3.41662 2.456 3.61806 2.37256 3.8281 2.37256H10.1639"
                        stroke="white"
                        strokeWidth="0.791972"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M13.332 2.37256H16.8484C16.966 2.37256 17.0788 2.41928 17.162 2.50246C17.2452 2.58563 17.2919 2.69844 17.2919 2.81606V6.33242"
                        stroke="white"
                        strokeWidth="0.791972"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M17.1651 2.49902L10.1641 9.50005"
                        stroke="white"
                        strokeWidth="0.791972"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </button>
              </div>
          </div>
        </AnimatePresence>
      )}
    </>
  );
}
