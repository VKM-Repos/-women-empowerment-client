"use-client";
import Image from "next/image";
import React, { useState } from "react";

import { Menu } from "@/components/Common/ModalMenu/Menu";
import { formatDateTime } from "@/lib/utils/helperFunctions";
type EventCardProps = {
  event: {
    id: number;
    image: string;
    name: string;
    organization: {
      name: string;
    };
    startDate: string;
    location: string;
    type: string;
  };
  eventStatus: string;
};
export default function Event({ event, eventStatus }: EventCardProps) {
  const [showPopMenu, setShowPopMenu] = useState(false);
  const eventMenu = [
    {
      title: "Edit",
      link: `/organization/manage/events/edit/${event?.id}`,
      icon: (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.33333 12.6673H4.26667L10.0167 6.91732L9.08333 5.98398L3.33333 11.734V12.6673ZM12.8667 5.95065L10.0333 3.15065L10.9667 2.21732C11.2222 1.96176 11.5362 1.83398 11.9087 1.83398C12.2807 1.83398 12.5944 1.96176 12.85 2.21732L13.7833 3.15065C14.0389 3.40621 14.1722 3.71465 14.1833 4.07598C14.1944 4.43687 14.0722 4.7451 13.8167 5.00065L12.8667 5.95065ZM2.66667 14.0007C2.47778 14.0007 2.31956 13.9367 2.192 13.8087C2.064 13.6811 2 13.5229 2 13.334V11.4507C2 11.3618 2.01667 11.2758 2.05 11.1927C2.08333 11.1091 2.13333 11.034 2.2 10.9673L9.06667 4.10065L11.9 6.93398L5.03333 13.8007C4.96667 13.8673 4.89178 13.9173 4.80867 13.9507C4.72511 13.984 4.63889 14.0007 4.55 14.0007H2.66667ZM9.55 6.45065L9.08333 5.98398L10.0167 6.91732L9.55 6.45065Z"
            fill="#65655E"
          />
        </svg>
      ),
    },
    {
      title: "View",
      link: `/events/${event?.id}`,
      icon: (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.33301 5.33333C1.33301 5.33333 4.31777 2 7.99967 2C11.6815 2 14.6663 5.33333 14.6663 5.33333"
            stroke="#65655E"
            stroke-width="1.5"
            strokeLinecap="round"
          />
          <path
            d="M14.3623 8.69602C14.565 8.98022 14.6663 9.12235 14.6663 9.33268C14.6663 9.54302 14.565 9.68515 14.3623 9.96935C13.4516 11.2464 11.1258 13.9993 7.99967 13.9993C4.87353 13.9993 2.54774 11.2464 1.63703 9.96935C1.43435 9.68515 1.33301 9.54302 1.33301 9.33268C1.33301 9.12235 1.43435 8.98022 1.63703 8.69602C2.54774 7.41895 4.87353 4.66602 7.99967 4.66602C11.1258 4.66602 13.4516 7.41895 14.3623 8.69602Z"
            stroke="#65655E"
            stroke-width="1.5"
          />
          <path
            d="M10 9.33398C10 8.22938 9.1046 7.33398 8 7.33398C6.8954 7.33398 6 8.22938 6 9.33398C6 10.4386 6.8954 11.334 8 11.334C9.1046 11.334 10 10.4386 10 9.33398Z"
            stroke="#65655E"
            stroke-width="1.5"
          />
        </svg>
      ),
    },
  ];
  const eventDraftMenu = [
    {
      title: "Edit",
      link: `/organization/manage/events/edit/${event?.id}`,
      icon: (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.33333 12.6673H4.26667L10.0167 6.91732L9.08333 5.98398L3.33333 11.734V12.6673ZM12.8667 5.95065L10.0333 3.15065L10.9667 2.21732C11.2222 1.96176 11.5362 1.83398 11.9087 1.83398C12.2807 1.83398 12.5944 1.96176 12.85 2.21732L13.7833 3.15065C14.0389 3.40621 14.1722 3.71465 14.1833 4.07598C14.1944 4.43687 14.0722 4.7451 13.8167 5.00065L12.8667 5.95065ZM2.66667 14.0007C2.47778 14.0007 2.31956 13.9367 2.192 13.8087C2.064 13.6811 2 13.5229 2 13.334V11.4507C2 11.3618 2.01667 11.2758 2.05 11.1927C2.08333 11.1091 2.13333 11.034 2.2 10.9673L9.06667 4.10065L11.9 6.93398L5.03333 13.8007C4.96667 13.8673 4.89178 13.9173 4.80867 13.9507C4.72511 13.984 4.63889 14.0007 4.55 14.0007H2.66667ZM9.55 6.45065L9.08333 5.98398L10.0167 6.91732L9.55 6.45065Z"
            fill="#65655E"
          />
        </svg>
      ),
    },
    {
      title: "View",
      link: `/events/${event?.id}`,
      icon: (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.33301 5.33333C1.33301 5.33333 4.31777 2 7.99967 2C11.6815 2 14.6663 5.33333 14.6663 5.33333"
            stroke="#65655E"
            stroke-width="1.5"
            strokeLinecap="round"
          />
          <path
            d="M14.3623 8.69602C14.565 8.98022 14.6663 9.12235 14.6663 9.33268C14.6663 9.54302 14.565 9.68515 14.3623 9.96935C13.4516 11.2464 11.1258 13.9993 7.99967 13.9993C4.87353 13.9993 2.54774 11.2464 1.63703 9.96935C1.43435 9.68515 1.33301 9.54302 1.33301 9.33268C1.33301 9.12235 1.43435 8.98022 1.63703 8.69602C2.54774 7.41895 4.87353 4.66602 7.99967 4.66602C11.1258 4.66602 13.4516 7.41895 14.3623 8.69602Z"
            stroke="#65655E"
            stroke-width="1.5"
          />
          <path
            d="M10 9.33398C10 8.22938 9.1046 7.33398 8 7.33398C6.8954 7.33398 6 8.22938 6 9.33398C6 10.4386 6.8954 11.334 8 11.334C9.1046 11.334 10 10.4386 10 9.33398Z"
            stroke="#65655E"
            stroke-width="1.5"
          />
        </svg>
      ),
    },
    {
      title: "Delete",
      link: `/events/delete/${event?.id}`,
      icon: (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13 3.66602L12.5869 10.3494C12.4813 12.0569 12.4285 12.9107 12.0005 13.5246C11.7889 13.8281 11.5165 14.0842 11.2005 14.2767C10.5614 14.666 9.706 14.666 7.99513 14.666C6.28208 14.666 5.42553 14.666 4.78603 14.2759C4.46987 14.0831 4.19733 13.8265 3.98579 13.5225C3.55792 12.9077 3.5063 12.0527 3.40307 10.3428L3 3.66602"
            stroke="#65655E"
            stroke-width="1.5"
            strokeLinecap="round"
          />
          <path
            d="M2 3.66732H14M10.7038 3.66732L10.2487 2.72847C9.9464 2.10482 9.7952 1.793 9.53447 1.59852C9.47667 1.55538 9.4154 1.51701 9.35133 1.48378C9.0626 1.33398 8.71607 1.33398 8.023 1.33398C7.31253 1.33398 6.95733 1.33398 6.66379 1.49006C6.59873 1.52466 6.53665 1.56458 6.47819 1.60943C6.21443 1.81178 6.06709 2.13502 5.77241 2.78149L5.36861 3.66732"
            stroke="#65655E"
            stroke-width="1.5"
            strokeLinecap="round"
          />
          <path
            d="M6.33301 11V7"
            stroke="#65655E"
            stroke-width="1.5"
            strokeLinecap="round"
          />
          <path
            d="M9.66699 11V7"
            stroke="#65655E"
            stroke-width="1.5"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
  ];
  const handleShowPopUpMenu = () => {
    setShowPopMenu(!showPopMenu);
  };
  return (
    <div className="flex justify-between items-center border border-gray-500 p-5 rounded-md w-[700px]">
      <div className="flex items-center gap-5">
        <div className="rounded-full">
          <img
            src={event?.image}
            alt="organization logo"
            className="w-16 h-16 rounded-full object-cover"
          />
        </div>
        <div className="flex flex-col">
          <h3 className="text-xl font-semibold font-sora">{event?.name}</h3>
          <p className="text-lg text-gray-300 font-quickSand font-bold">
            {event?.organization?.name}
          </p>
          <p className="text-xs text-info font-medium">
            {formatDateTime(event?.startDate)}{" "}
            {event?.type == "ONLINE" ? (
              <span>(ONLINE)</span>
            ) : (
              <span>({event?.location})</span>
            )}
          </p>
        </div>
      </div>
      <div>
        <div className="relative">
          <Menu
            showMenu={showPopMenu}
            menuItems={eventStatus == "Drafts" ? eventDraftMenu : eventMenu}
          />
        </div>
        <span>
          <svg
            onClick={handleShowPopUpMenu}
            className="cursor-pointer"
            width="32"
            height="33"
            viewBox="0 0 32 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_5731_24673)">
              <path
                d="M13.334 16.4596C13.334 17.1669 13.6149 17.8452 14.115 18.3453C14.6151 18.8453 15.2934 19.1263 16.0007 19.1263C16.7079 19.1263 17.3862 18.8453 17.8863 18.3453C18.3864 17.8452 18.6673 17.1669 18.6673 16.4596C18.6673 15.7524 18.3864 15.0741 17.8863 14.574C17.3862 14.0739 16.7079 13.793 16.0007 13.793C15.2934 13.793 14.6151 14.0739 14.115 14.574C13.6149 15.0741 13.334 15.7524 13.334 16.4596ZM13.334 8.45964C13.334 9.16688 13.6149 9.84516 14.115 10.3453C14.6151 10.8453 15.2934 11.1263 16.0007 11.1263C16.7079 11.1263 17.3862 10.8453 17.8863 10.3453C18.3864 9.84516 18.6673 9.16688 18.6673 8.45964C18.6673 7.75239 18.3864 7.07411 17.8863 6.57402C17.3862 6.07392 16.7079 5.79297 16.0007 5.79297C15.2934 5.79297 14.6151 6.07392 14.115 6.57402C13.6149 7.07411 13.334 7.75239 13.334 8.45964ZM13.334 24.4596C13.334 25.1669 13.6149 25.8452 14.115 26.3452C14.6151 26.8453 15.2934 27.1263 16.0007 27.1263C16.7079 27.1263 17.3862 26.8453 17.8863 26.3452C18.3864 25.8452 18.6673 25.1669 18.6673 24.4596C18.6673 23.7524 18.3864 23.0741 17.8863 22.574C17.3862 22.0739 16.7079 21.793 16.0007 21.793C15.2934 21.793 14.6151 22.0739 14.115 22.574C13.6149 23.0741 13.334 23.7524 13.334 24.4596Z"
                fill="#65655E"
              />
            </g>
            <defs>
              <clipPath id="clip0_5731_24673">
                <rect
                  width="32"
                  height="32"
                  fill="white"
                  transform="translate(0 0.458984)"
                />
              </clipPath>
            </defs>
          </svg>
        </span>
      </div>
    </div>
  );
}
