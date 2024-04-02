"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Menu } from "@/components/Common/ModalMenu/Menu";
import Tab from "../components/Tab";
import { TransitionParent } from "@/lib/utils/transition";
import Link from "next/link";
import { useGET } from "@/lib/hooks/useGET.hook";
import { useAppContext } from "@/lib/context/app-context";
import { useRouter } from "next/navigation";
import NoContent from "@/components/EmptyStates/NoContent";
import EventCardLoader from "../../events/components/EventCardLoader";
import Project from "../manage/projects/components/Project";
import { Event } from "@/lib/types/events.types";
import LoadingThinkingWomen from "@/components/Common/Loaders/LoadingThinkingWomen";

import threeDot from "@/public/icons/three_dots.svg";
import { formatDateTime } from "@/lib/utils/helperFunctions";
import { CameraIcon } from "@/components/Common/Icons/Camera.icon";
import { LocationIcon } from "@/components/Common/Icons/Location.icon";

interface EventTab {
  name: string;
}
const tabs: EventTab[] = [
  {
    name: "Images",
  },
  {
    name: "Events",
  },
];
export default function OrganizationDetails({
  params,
}: {
  params: { id: string };
}) {
  const { user, isAuthenticated } = useAppContext();

  const router = useRouter();
  // const router = useRouter()
  const formattedId = params.id;

  const [showMenu, setShowMenu] = useState(false);
  const handleSHowMenu = () => {
    setShowMenu((prevState) => !prevState);
  };
  const [selectedEventType, setSelectedEventType] = useState<EventTab>(tabs[0]);

  const { data: organization, isPending } = useGET({
    url: `organizations/${params?.id}`,
    queryKey: ["GET_ORGANIZATION_DETAILS", params?.id],
    withAuth: true,
    enabled: true,
  });
  const {
    data: projects,
    isPending: isProjectsPending,
    isError: isProjectsError,
  } = useGET({
    url: "/projects?size=5",
    queryKey: ["PROJECTS", params?.id],
    withAuth: false,
    enabled: true,
  });

  const {
    data: organizationEvent,
    isPending: isOrganizationEventPending,
    isError: isOrganizationError,
  } = useGET({
    url: `/organizations/${organization?.id}/events`,
    queryKey: ["EVENTS_BYORGANIZATION", organization?.id],
    withAuth: false,
    enabled: true,
  });

  const ownerMenu = [
    {
      title: "Manage Organization",
      blank: false,
      link: "/organization/manage/dashboard",
      icon: (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 19H6.4L15.025 10.375L13.625 8.975L5 17.6V19ZM19.3 8.925L15.05 4.725L16.45 3.325C16.8333 2.94167 17.3043 2.75 17.863 2.75C18.421 2.75 18.8917 2.94167 19.275 3.325L20.675 4.725C21.0583 5.10833 21.2583 5.571 21.275 6.113C21.2917 6.65433 21.1083 7.11667 20.725 7.5L19.3 8.925ZM4 21C3.71667 21 3.47933 20.904 3.288 20.712C3.096 20.5207 3 20.2833 3 20V17.175C3 17.0417 3.025 16.9127 3.075 16.788C3.125 16.6627 3.2 16.55 3.3 16.45L13.6 6.15L17.85 10.4L7.55 20.7C7.45 20.8 7.33767 20.875 7.213 20.925C7.08767 20.975 6.95833 21 6.825 21H4ZM14.325 9.675L13.625 8.975L15.025 10.375L14.325 9.675Z"
            fill="#65655E"
          />
        </svg>
      ),
    },
    {
      title: "Visit Site",
      blank: true,
      link: `${organization?.website}`,
      icon: (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.2 0C5.29044 0 3.45909 0.758569 2.10883 2.10883C0.758569 3.45909 0 5.29044 0 7.2C0 9.10956 0.758569 10.9409 2.10883 12.2912C3.45909 13.6414 5.29044 14.4 7.2 14.4C9.10956 14.4 10.9409 13.6414 12.2912 12.2912C13.6414 10.9409 14.4 9.10956 14.4 7.2C14.4 5.29044 13.6414 3.45909 12.2912 2.10883C10.9409 0.758569 9.10956 0 7.2 0V0ZM0.888 7.744H2.896C2.928 8.472 3.0296 9.1952 3.2 9.904H1.472C1.14976 9.2247 0.951967 8.49312 0.888 7.744ZM7.744 3.424V0.952C8.51495 1.24498 9.14844 1.8157 9.52 2.552C9.684 2.8296 9.8288 3.1184 9.952 3.416L7.744 3.424ZM10.32 4.504C10.5056 5.2104 10.616 5.9344 10.648 6.664H7.744V4.504H10.32ZM6.656 0.952V3.424H4.448C4.57141 3.12616 4.71577 2.83743 4.88 2.56C5.24997 1.82068 5.88367 1.24693 6.656 0.952ZM6.656 4.504V6.664H3.76C3.792 5.9344 3.9024 5.2104 4.088 4.504H6.656ZM2.896 6.656H0.888C0.951967 5.90688 1.14976 5.1753 1.472 4.496H3.2C3.02927 5.20452 2.92747 5.92788 2.896 6.656ZM3.76 7.744H6.656V9.904H4.088C3.90243 9.19766 3.79248 8.47359 3.76 7.744ZM6.664 10.944V13.416C5.89305 13.123 5.25956 12.5523 4.888 11.816C4.72377 11.5386 4.57941 11.2498 4.456 10.952L6.664 10.944ZM7.744 13.416V10.984H9.952C9.82859 11.2818 9.68423 11.5706 9.52 11.848C9.14844 12.5843 8.51495 13.155 7.744 13.448V13.416ZM7.744 9.864V7.704H10.64C10.6075 8.43359 10.4976 9.15766 10.312 9.864H7.744ZM11.512 7.704H13.52C13.456 8.45312 13.2582 9.1847 12.936 9.864H11.2C11.368 9.168 11.4696 8.4584 11.504 7.744L11.512 7.704ZM11.512 6.624C11.4754 5.90905 11.3709 5.19919 11.2 4.504H12.928C13.2504 5.184 13.448 5.9152 13.512 6.664L11.512 6.624ZM12.312 3.424H10.88C10.6209 2.69624 10.2453 2.01538 9.768 1.408C10.7635 1.85486 11.6282 2.54884 12.28 3.424H12.312ZM4.632 1.408C4.15466 2.01538 3.7791 2.69624 3.52 3.424H2.12C2.77178 2.54884 3.63649 1.85486 4.632 1.408ZM2.112 11.008H3.52C3.7791 11.7358 4.15466 12.4166 4.632 13.024C3.63374 12.5704 2.76876 11.868 2.12 10.984L2.112 11.008ZM9.76 13.024C10.2373 12.4166 10.6129 11.7358 10.872 11.008H12.28C11.6242 11.8714 10.7599 12.5541 9.768 12.992L9.76 13.024Z"
            fill="#65655E"
          />
        </svg>
      ),
    },
    {
      title: "Share",
      blank: false,
      link: "/",
      icon: (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 10.72C11.4933 10.72 11.04 10.92 10.6933 11.2334L5.94 8.46671C5.97333 8.31337 6 8.16004 6 8.00004C6 7.84004 5.97333 7.68671 5.94 7.53337L10.64 4.79337C11 5.12671 11.4733 5.33337 12 5.33337C13.1067 5.33337 14 4.44004 14 3.33337C14 2.22671 13.1067 1.33337 12 1.33337C10.8933 1.33337 10 2.22671 10 3.33337C10 3.49337 10.0267 3.64671 10.06 3.80004L5.36 6.54004C5 6.20671 4.52667 6.00004 4 6.00004C2.89333 6.00004 2 6.89337 2 8.00004C2 9.10671 2.89333 10 4 10C4.52667 10 5 9.79337 5.36 9.46004L10.1067 12.2334C10.0733 12.3734 10.0533 12.52 10.0533 12.6667C10.0533 13.74 10.9267 14.6134 12 14.6134C13.0733 14.6134 13.9467 13.74 13.9467 12.6667C13.9467 11.5934 13.0733 10.72 12 10.72Z"
            fill="#65655E"
          />
        </svg>
      ),
    },
  ];

  const guestMenu = [
    {
      title: "Visit Site",
      blank: true,
      link: `${organization?.website}`,
      icon: (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.2 0C5.29044 0 3.45909 0.758569 2.10883 2.10883C0.758569 3.45909 0 5.29044 0 7.2C0 9.10956 0.758569 10.9409 2.10883 12.2912C3.45909 13.6414 5.29044 14.4 7.2 14.4C9.10956 14.4 10.9409 13.6414 12.2912 12.2912C13.6414 10.9409 14.4 9.10956 14.4 7.2C14.4 5.29044 13.6414 3.45909 12.2912 2.10883C10.9409 0.758569 9.10956 0 7.2 0V0ZM0.888 7.744H2.896C2.928 8.472 3.0296 9.1952 3.2 9.904H1.472C1.14976 9.2247 0.951967 8.49312 0.888 7.744ZM7.744 3.424V0.952C8.51495 1.24498 9.14844 1.8157 9.52 2.552C9.684 2.8296 9.8288 3.1184 9.952 3.416L7.744 3.424ZM10.32 4.504C10.5056 5.2104 10.616 5.9344 10.648 6.664H7.744V4.504H10.32ZM6.656 0.952V3.424H4.448C4.57141 3.12616 4.71577 2.83743 4.88 2.56C5.24997 1.82068 5.88367 1.24693 6.656 0.952ZM6.656 4.504V6.664H3.76C3.792 5.9344 3.9024 5.2104 4.088 4.504H6.656ZM2.896 6.656H0.888C0.951967 5.90688 1.14976 5.1753 1.472 4.496H3.2C3.02927 5.20452 2.92747 5.92788 2.896 6.656ZM3.76 7.744H6.656V9.904H4.088C3.90243 9.19766 3.79248 8.47359 3.76 7.744ZM6.664 10.944V13.416C5.89305 13.123 5.25956 12.5523 4.888 11.816C4.72377 11.5386 4.57941 11.2498 4.456 10.952L6.664 10.944ZM7.744 13.416V10.984H9.952C9.82859 11.2818 9.68423 11.5706 9.52 11.848C9.14844 12.5843 8.51495 13.155 7.744 13.448V13.416ZM7.744 9.864V7.704H10.64C10.6075 8.43359 10.4976 9.15766 10.312 9.864H7.744ZM11.512 7.704H13.52C13.456 8.45312 13.2582 9.1847 12.936 9.864H11.2C11.368 9.168 11.4696 8.4584 11.504 7.744L11.512 7.704ZM11.512 6.624C11.4754 5.90905 11.3709 5.19919 11.2 4.504H12.928C13.2504 5.184 13.448 5.9152 13.512 6.664L11.512 6.624ZM12.312 3.424H10.88C10.6209 2.69624 10.2453 2.01538 9.768 1.408C10.7635 1.85486 11.6282 2.54884 12.28 3.424H12.312ZM4.632 1.408C4.15466 2.01538 3.7791 2.69624 3.52 3.424H2.12C2.77178 2.54884 3.63649 1.85486 4.632 1.408ZM2.112 11.008H3.52C3.7791 11.7358 4.15466 12.4166 4.632 13.024C3.63374 12.5704 2.76876 11.868 2.12 10.984L2.112 11.008ZM9.76 13.024C10.2373 12.4166 10.6129 11.7358 10.872 11.008H12.28C11.6242 11.8714 10.7599 12.5541 9.768 12.992L9.76 13.024Z"
            fill="#65655E"
          />
        </svg>
      ),
    },
    {
      title: "Share",
      blank: false,
      organizationId: organization?.id,
      link: "/",
      icon: (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 10.72C11.4933 10.72 11.04 10.92 10.6933 11.2334L5.94 8.46671C5.97333 8.31337 6 8.16004 6 8.00004C6 7.84004 5.97333 7.68671 5.94 7.53337L10.64 4.79337C11 5.12671 11.4733 5.33337 12 5.33337C13.1067 5.33337 14 4.44004 14 3.33337C14 2.22671 13.1067 1.33337 12 1.33337C10.8933 1.33337 10 2.22671 10 3.33337C10 3.49337 10.0267 3.64671 10.06 3.80004L5.36 6.54004C5 6.20671 4.52667 6.00004 4 6.00004C2.89333 6.00004 2 6.89337 2 8.00004C2 9.10671 2.89333 10 4 10C4.52667 10 5 9.79337 5.36 9.46004L10.1067 12.2334C10.0733 12.3734 10.0533 12.52 10.0533 12.6667C10.0533 13.74 10.9267 14.6134 12 14.6134C13.0733 14.6134 13.9467 13.74 13.9467 12.6667C13.9467 11.5934 13.0733 10.72 12 10.72Z"
            fill="#65655E"
          />
        </svg>
      ),
    },
  ];
  return (
    <TransitionParent>
      {isPending || isProjectsPending ? (
        <LoadingThinkingWomen />
      ) : (
        <section className="bg-white flex flex-col items-stretch mb-[300px]">
          <div className="w-full mt-9 px-14 max-md:max-w-full max-md:px-5">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[66%] max-md:w-full max-md:ml-0">
                <div className="items-start flex grow flex-col  max-md:max-w-full max-md:mt-8">
                  <div className="flex flex-col items-stretch w-full ml-5 max-md:w-full max-md:ml-0">
                    <span className="relative bg-white flex grow flex-col w-full pb-7 rounded-2xl border border-stone-800 border-solid border-opacity-10 max-md:max-w-full max-md:mt-5">
                      <img
                        src={
                          organization?.coverImage ||
                          "https://placehold.co/400x400?text=Women\n Hub"
                        }
                        loading="lazy"
                        alt="bg"
                        className="absolute rounded-tl-2xl rounded-tr-2xl aspect-auto object-cover brightness-50 h-[250px] max-h-[250px] min-h-[250px] w-full bg-blend-darken"
                      />
                      <div className="z-10  flex justify-end pt-10 px-8">
                        <span
                          className="cursor-pointer"
                          onClick={handleSHowMenu}
                        >
                          <Image src={threeDot} alt="three dot menu" />
                        </span>
                        <Menu
                          menuItems={
                            user?.organizationId == organization?.id
                              ? ownerMenu
                              : guestMenu
                          }
                          showMenu={showMenu}
                        />
                      </div>
                      <div className="z-[1] flex items-center px-5">
                        <div className=" relative aspect-square w-[212px] rounded-full">
                          <img
                            loading="lazy"
                            alt="Profile_picture"
                            src={
                              isPending
                                ? "https://placehold.co/400x400?text=Women\n Hub"
                                : organization?.logo
                                ? organization?.logo
                                : "https://placehold.co/400x400?text=Women\n Hub"
                            }
                            width={100}
                            height={100}
                            className="absolute h-full w-full object-cover object-center inset-0 rounded-full mt-10 "
                          />
                        </div>
                        <div className="flex flex-col items-stretch w-[72%] ml-5 max-md:w-full max-md:ml-0 text-white-100">
                          <div className="text-white lg:text-3xl font-sora font-bold tracking-wide mt-[60px] max-md:max-w-full max-md:mt-10">
                            {organization?.name}
                          </div>
                        </div>
                      </div>
                      <div className=" bg-white self-stretch flex flex-col py-10  items-end max-md:max-w-full">
                        <div className="items-start flex justify-between gap-5 mr-16 max-md:justify-center max-md:mr-2.5">
                          {(organization?.linkedin ||
                            organization?.twitter ||
                            organization?.facebook) && (
                            <div className="text-black font-quickSand text-opacity-60 text-center text-base tracking-normal self-center my-auto">
                              Follow us:
                            </div>
                          )}
                          {organization?.linkedin && (
                            <Link href={organization?.linkedin} target="_blank">
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clipPath="url(#clip0_2357_8427)">
                                  <path
                                    d="M12.0005 0.480469C5.63807 0.480469 0.480469 5.63807 0.480469 12.0005C0.480469 18.3629 5.63807 23.5205 12.0005 23.5205C18.3629 23.5205 23.5205 18.3629 23.5205 12.0005C23.5205 5.63807 18.3629 0.480469 12.0005 0.480469ZM9.18047 16.7753H6.84767V9.26807H9.18047V16.7753ZM7.99967 8.34647C7.26287 8.34647 6.78647 7.82447 6.78647 7.17887C6.78647 6.52007 7.27727 6.01367 8.02967 6.01367C8.78207 6.01367 9.24287 6.52007 9.25727 7.17887C9.25727 7.82447 8.78207 8.34647 7.99967 8.34647ZM17.7005 16.7753H15.3677V12.6149C15.3677 11.6465 15.0293 10.9889 14.1857 10.9889C13.5413 10.9889 13.1585 11.4341 12.9893 11.8625C12.9269 12.0149 12.9113 12.2309 12.9113 12.4457V16.7741H10.5773V11.6621C10.5773 10.7249 10.5473 9.94127 10.5161 9.26687H12.5429L12.6497 10.3097H12.6965C13.0037 9.82007 13.7561 9.09767 15.0149 9.09767C16.5497 9.09767 17.7005 10.1261 17.7005 12.3365V16.7753Z"
                                    fill="#0A66C2"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_2357_8427">
                                    <rect width="24" height="24" fill="white" />
                                  </clipPath>
                                </defs>
                              </svg>
                            </Link>
                          )}
                          {organization?.twitter && (
                            <Link href={organization?.twitter} target="_blank">
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M12 1.5C6.20156 1.5 1.5 6.20156 1.5 12C1.5 17.7984 6.20156 22.5 12 22.5C17.7984 22.5 22.5 17.7984 22.5 12C22.5 6.20156 17.7984 1.5 12 1.5ZM17.0461 9.41484C17.0531 9.525 17.0531 9.63984 17.0531 9.75234C17.0531 13.193 14.4328 17.1562 9.64453 17.1562C8.16797 17.1562 6.79922 16.7273 5.64609 15.9891C5.85703 16.0125 6.05859 16.0219 6.27422 16.0219C7.49297 16.0219 8.61328 15.6094 9.50625 14.9109C8.3625 14.8875 7.40156 14.1375 7.07344 13.1063C7.47422 13.1648 7.83516 13.1648 8.24766 13.0594C7.65873 12.9397 7.12939 12.6199 6.74957 12.1542C6.36974 11.6885 6.16286 11.1056 6.16406 10.5047V10.4719C6.50859 10.6664 6.91406 10.7859 7.33828 10.8023C6.98166 10.5647 6.6892 10.2427 6.48682 9.86491C6.28445 9.48715 6.17841 9.06528 6.17813 8.63672C6.17813 8.15156 6.30469 7.70859 6.53203 7.32422C7.18571 8.12891 8.0014 8.78705 8.92609 9.25586C9.85078 9.72466 10.8638 9.99364 11.8992 10.0453C11.5312 8.27578 12.8531 6.84375 14.4422 6.84375C15.1922 6.84375 15.8672 7.15781 16.343 7.66406C16.9312 7.55391 17.4937 7.33359 17.9953 7.03828C17.8008 7.64062 17.393 8.14922 16.8516 8.47031C17.3766 8.41406 17.8828 8.26875 18.3516 8.06484C17.9977 8.58516 17.5547 9.04688 17.0461 9.41484Z"
                                  fill="#0A66C2"
                                />
                              </svg>
                            </Link>
                          )}
                          {organization?.facebook && (
                            <Link href={organization?.facebook} target="_blank">
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M12 0C5.3724 0 0 5.4051 0 12.073C0 18.0987 4.3884 23.0933 10.1256 24V15.5622H7.0776V12.073H10.1256V9.41335C10.1256 6.38785 11.916 4.71694 14.658 4.71694C15.9708 4.71694 17.3436 4.95236 17.3436 4.95236V7.92233H15.8316C14.34 7.92233 13.8756 8.85316 13.8756 9.80814V12.073H17.2032L16.6716 15.5622H13.8756V24C19.6116 23.0945 24 18.0975 24 12.073C24 5.4051 18.6276 0 12 0Z"
                                  fill="#0A66C2"
                                />
                              </svg>
                            </Link>
                          )}
                        </div>
                        <div className="self-stretch flex flex-col mt-2 px-12 items-start max-md:max-w-full max-md:px-5">
                          <div className="text-primary font-sora text-2xl tracking-wide whitespace-nowrap">
                            About
                            <div className="w-[4rem] h-1 rounded bg-btnWarning mt-1" />
                          </div>
                          <div className="text-black font-quickSand text-opacity-80 text-base tracking-normal self-stretch mt-5 max-md:max-w-full">
                            {organization?.description}
                          </div>
                          <div className="font-quickSand self-stretch flex w-[100%] items-stretch justify-between gap-5 mt-12 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
                            <div className="flex  justify-between gap-5  max-md:max-w-full max-md:flex-wrap max-md:pr-5">
                              <div className="items-center flex grow basis-[0%] flex-col">
                                <img
                                  loading="lazy"
                                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/fe855fcb572283e4eadd53dce8006539c57e6a12eafb2e323cc4a06312ab4e10?apiKey=12cdcbacd64a44978db653c66e993585&"
                                  className="aspect-square object-contain object-center w-6 overflow-hidden max-w-full"
                                />
                                <div className="text-black text-opacity-60 text-center text-sm tracking-normal self-stretch mt-4">
                                  {organization?.state} <br />{" "}
                                  {organization?.street}
                                </div>
                              </div>
                              <div className="bg-neutral-200 self-center w-px shrink-0 h-[31px] my-auto" />
                              {/*  */}
                            </div>

                            <div className="flex items-center justify-between gap-5 pr-6 self-start max-md:pr-5">
                              <div className="items-center self-stretch flex flex-col">
                                <img
                                  loading="lazy"
                                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/5c5797671bbfcf56da0e2d3a278b42ea250363c208432483a2e75edf7f0edb96?apiKey=12cdcbacd64a44978db653c66e993585&"
                                  className="aspect-square object-contain object-center w-6 overflow-hidden max-w-full"
                                />
                                <div className="text-black text-opacity-60 text-sm tracking-normal self-stretch whitespace-nowrap mt-4">
                                  {organization?.email}
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center justify-between gap-5 pr-6 self-start max-md:pr-5">
                              <div className="bg-neutral-200 w-px shrink-0 h-[31px] my-auto" />
                              <div className="items-center self-stretch flex flex-col">
                                <img
                                  loading="lazy"
                                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/3c626735b6b0c9477b5b357937dd2772719655ba3defd6ec7dbae27affe114e1?apiKey=12cdcbacd64a44978db653c66e993585&"
                                  className="aspect-square object-contain object-center w-6 overflow-hidden max-w-full"
                                />
                                <div className="text-black text-opacity-60 text-sm tracking-normal self-stretch whitespace-nowrap mt-4">
                                  {organization?.phoneNumber}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </span>
                  </div>

                  <div className="items-stretch flex gap-2.5 mt-10 self-start font-sora">
                    {tabs.map((tab) => (
                      <Tab
                        key={tab.name}
                        name={tab.name}
                        selectedEventType={selectedEventType === tab}
                        setSelectedEventType={() => setSelectedEventType(tab)}
                      />
                    ))}
                  </div>

                  <div className="font-sora self-stretch border border-gray-400 rounded-tl-0 rounded-tr-lg rounded-bl-lg rounded-br-lg  bg-white flex flex-col p-8 border-solid items-start max-md:max-w-full max-md:px-5">
                    {selectedEventType.name === "Images" && (
                      <>
                        <div className="text-primary text-2xl whitespace-nowrap">
                          Latest images
                          <div className="w-[4rem] h-1 rounded bg-btnWarning mt-1" />
                        </div>

                        {organization?.images?.length > 0 ? (
                          <div className="grid grid-cols-4 gap-5 mt-10">
                            {organization?.images?.map(
                              (image: any, index: number) => (
                                <img
                                  key={image?.id}
                                  loading="lazy"
                                  srcSet={image?.url}
                                  className=" aspect-square object-cover rounded-xl"
                                />
                              )
                            )}
                          </div>
                        ) : (
                          <div className="mt-5 flex flex-col gap-5 items-center justify-center w-full">
                            <p className="text-2xl text-gray-600">
                              No Images found
                            </p>
                            {user?.organizationId == organization?.id && (
                              <Link
                                href={"/organization/manage/images"}
                                className="text-white-100 bg-btnWarning px-4 py-2 rounded-md"
                              >
                                Add Images
                              </Link>
                            )}
                          </div>
                        )}
                      </>
                    )}

                    {selectedEventType.name === "Events" && (
                      <>
                        <div className="text-primary text-2xl whitespace-nowrap w-full">
                          All Events
                          <div className="w-[4rem] h-1 rounded bg-btnWarning mt-1" />
                        </div>
                        <div className="h-[350px] overflow-y-scroll no-scrollbar w-full no-scrollbar">
                          {console.log(organizationEvent?.content)}
                          {organizationEvent?.content.length < 1 ? (
                            <div className="mt-5 flex flex-col gap-5 items-center justify-center w-full">
                              <p className="text-2xl text-gray-600">
                                No Events found
                              </p>
                              {user?.organizationId == organization?.id && (
                                <Link
                                  href={"/events/create"}
                                  className="text-white-100 bg-btnWarning px-4 py-2 rounded-md"
                                >
                                  Add Event
                                </Link>
                              )}
                            </div>
                          ) : (
                            organizationEvent?.content?.map((event: any) => (
                              <Link
                                key={event?.id}
                                href={`/events/${event?.id}`}
                              >
                                <div className="justify-center items-stretch flex gap-5 mt-2.5 px-4 py-2 rounded-xl hover:bg-primary/10 drop-shadow-sm">
                                  <img
                                    loading="lazy"
                                    src={event?.image}
                                    className="aspect-auto w-[80px] h-[80px] object-cover rounded-full"
                                  />
                                  <div className="self-center flex grow basis-[0%] flex-col items-stretch my-auto">
                                    <div className="text-black text-opacity-40 text-base">
                                      <span className="font-bold text-black font-sora">
                                        {event?.name}
                                      </span>
                                      <br />
                                      <span className=" text-sm text-black font-quickSand">
                                        {formatDateTime(event?.startDate)}
                                      </span>
                                    </div>
                                    <div className="items-center flex gap-5 mt-2.5">
                                      <span className="text-xs md:text-sm font-sora text-btnWarning font-medium flex items-center">
                                        {event.type === "ONLINE" ? (
                                          <>
                                            <CameraIcon className="w-6 aspect-square" />{" "}
                                            &nbsp; {event.type} &nbsp;
                                          </>
                                        ) : event.type === "PHYSICAL" ? (
                                          <>
                                            {" "}
                                            <LocationIcon className="w-6 aspect-square" />{" "}
                                            &nbsp; {event.location}
                                          </>
                                        ) : null}{" "}
                                      </span>
                                      <div className="text-orange-500 text-sm my-auto font-quickSand">
                                        By {organization?.name}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            ))
                          )}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[34%] ml-5 max-md:w-full max-md:ml-0">
                <aside className="w-full rounded-[1.5rem] ">
                  <h3 className="text-primary text-lg md:text-2xl font-sora font-semibold items-stretch justify-center py-1 border-b-neutral-200 border-b border-solid max-md:max-w-full mb-5">
                    Projects
                  </h3>

                  <section className="flex flex-col lg:gap-[0.1rem] gap-[3rem]  py-1">
                    {isProjectsError && <p>Error fetching Events</p>}
                    {isProjectsPending ? (
                      [1, 2, 3, 4].map((event: any, id: number) => (
                        <EventCardLoader key={id} event={event} />
                      ))
                    ) : !isProjectsPending &&
                      !isProjectsError &&
                      projects?.content.length === 0 ? (
                      <NoContent
                        message="No projects yet."
                        buttonText={
                          isAuthenticated ? "Add projects" : "Login to add"
                        }
                        buttonLink={
                          isAuthenticated
                            ? () => router.push("/projects/create")
                            : () => router.push("/account/login")
                        }
                      />
                    ) : (
                      !isProjectsPending &&
                      !isProjectsError && (
                        <>
                          <div className="w-full md:w-[95%] mx-auto gap-5 flex justify-center flex-wrap ">
                            {Array.isArray(projects?.content) &&
                              projects?.content.map((project: any) => (
                                <Project
                                  key={project?.name}
                                  project={project}
                                  projectStatus={""}
                                  imageWidth={100}
                                  includeMenu={false}
                                />
                              ))}
                          </div>
                          <div className="w-fit mx-auto my-8">
                            <Link
                              href={"/projects"}
                              className="text-btnWarning border border-btnWarning px-4 py-2 rounded-md"
                            >
                              SEE MORE PROJECT
                            </Link>
                          </div>
                        </>
                      )
                    )}
                  </section>
                </aside>
              </div>
            </div>
          </div>
        </section>
      )}
    </TransitionParent>
  );
}
