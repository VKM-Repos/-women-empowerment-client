"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import EventDetailsLoader from "../../components/EventDetailsLoader";
import { useRouter } from "next/navigation";
import { useGET } from "@/lib/hooks/useGET.hook";
import { formatDateTime } from "@/lib/utils/helperFunctions";
import { CameraIcon } from "@/components/Common/Icons/Camera.icon";
import { LocationIcon } from "@/components/Common/Icons/Location.icon";
import LoadingThinkingWomen from "@/components/Common/Loaders/LoadingThinkingWomen";
import { useDELETE } from "@/lib/hooks/useDelete.hook";

export default function EventsDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const [events, setEvents] = useState<any | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const router = useRouter();
  const eventId = params?.id?.replace(/\(\.\)/g, "");

  const { data: event, isPending } = useGET({
    url: `events/${eventId}`,
    queryKey: ["GET_EVENT_DETAILS_EVENT_DETAILS_PAGE", eventId],
    withAuth: false,
    enabled: true,
  });

  const { mutate: deleteEvent, isPending: deletingProject } = useDELETE(
    `events/${eventId}`
  );
  const toggleDeleteModal = () => {
    setShowDeleteModal(!showDeleteModal);
  };

  const handleDeleteEvent = (event: any) => {
    event.preventDefault();
    deleteEvent("", {
      onSuccess: () => {
        toggleDeleteModal();
        window.location.href = "/organization/manage/events";
      },
      onError: (error) => {
        console.log(error);
      },
    });
  };

  return (
    <>
      {isPending || deletingProject ? (
        <LoadingThinkingWomen />
      ) : (
        <AnimatePresence initial={false} mode="wait">
          <div
            className={`absolute w-[500px] top-[20%] left-[50%] z-10 ${
              showDeleteModal ? "" : "hidden"
            }`}
          >
            <div className="relative -left-[50%] w-[500px] bg-[#F0EBD6] py-10 px-5 rounded-md text-white-100">
              <div className="flex flex-col items-center gap-5">
                <div>
                  <svg
                    width="96"
                    height="90"
                    viewBox="0 0 96 90"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M46.8116 15.695C60.1407 12.8953 74.2427 18.8067 83.3129 28.8873C92.9885 39.6406 99.1404 54.9044 94.3254 68.5012C89.8657 81.0947 74.9885 85.4958 62.0107 89.0416C52.2854 91.6988 43.0754 88.3206 33.5199 85.1145C21.0971 80.9464 2.47959 81.103 0.190217 68.2993C-2.10469 55.4646 16.9545 50.794 25.6325 41.0025C33.3104 32.3392 35.4325 18.085 46.8116 15.695Z"
                      fill="#C4C4C4"
                    />
                    <path
                      d="M59.6335 6.14344L64.1643 6.10814L64.129 2.24815C64.129 1.64797 63.8818 1.07133 63.4582 0.647674C63.0345 0.224018 62.4461 -0.0113471 61.8577 0.000421092L39.5216 0.176945C38.9332 0.176945 38.3448 0.424077 37.9211 0.847734C37.4975 1.27139 37.2621 1.8598 37.2739 2.45998L37.3092 6.31996L41.8282 6.28466L41.8164 4.68418L59.6217 4.54296L59.6335 6.14344Z"
                      fill="#0F452C"
                    />
                    <path
                      d="M20.9991 20.8535C20.2813 20.8653 19.6105 21.1831 19.1633 21.7362C18.7161 22.2893 18.5278 23.0189 18.6573 23.7132L28.6838 76.0466C28.9074 77.1881 29.9077 78.0119 31.061 78.0001L71.579 77.6824C72.7323 77.6706 73.7208 76.8468 73.9327 75.7053L83.5002 23.219C83.6297 22.5129 83.4296 21.7832 82.9707 21.2419C82.5117 20.7006 81.8292 20.3828 81.1113 20.3828L20.9991 20.8535ZM38.2749 74.4461C36.9686 74.6579 35.7447 73.7635 35.5447 72.469L28.6603 29.3267C28.4484 28.0204 29.3428 26.7965 30.6373 26.5964C31.9436 26.3846 33.1675 27.279 33.3676 28.5735L40.252 71.7159C40.4638 73.0104 39.5812 74.2343 38.2749 74.4461ZM51.4789 74.6108C50.1608 74.6226 49.0781 73.5635 49.0781 72.2454L48.7369 28.5617C48.7251 27.2437 49.7842 26.161 51.1023 26.161C52.4203 26.1492 53.503 27.2084 53.5148 28.5264L53.8561 72.2101C53.8561 73.5282 52.7969 74.6108 51.4789 74.6108ZM73.5796 28.9736L67.366 72.2101C67.1777 73.5164 65.9656 74.4226 64.6593 74.2343C63.353 74.046 62.4469 72.8338 62.6352 71.5276L68.8488 28.2911C69.0371 26.9848 70.2492 26.0786 71.5555 26.2669C72.8618 26.467 73.7679 27.6674 73.5796 28.9736Z"
                      fill="#0F452C"
                    />
                    <path
                      d="M15.6429 18.6176L86.4288 18.0644L86.37 10.8505L79.8033 10.8976L79.7798 7.10822C79.7798 6.81401 79.6503 6.5198 79.4385 6.31974C79.2267 6.10792 78.9325 5.99023 78.6382 5.99023L64.1516 6.10792L59.6208 6.14322L41.8272 6.28444L37.2964 6.31974L23.7983 6.42566C23.5041 6.42566 23.2099 6.55511 23.0098 6.76694C22.798 6.97877 22.6803 7.27297 22.6803 7.56718L22.7038 11.3566L15.5723 11.4154L15.6429 18.6176Z"
                      fill="#AAD4C8"
                    />
                    <path
                      d="M51.0901 26.1603C49.7721 26.172 48.7129 27.2429 48.7247 28.561L49.066 72.2447C49.0778 73.5627 50.1487 74.6218 51.4667 74.6101C52.7848 74.5983 53.8439 73.5274 53.8321 72.2094L53.5026 28.5257C53.4908 27.2076 52.4199 26.1485 51.0901 26.1603Z"
                      fill="#AAD4C8"
                    />
                    <path
                      d="M68.8458 28.2922L62.6322 71.5287C62.4439 72.835 63.35 74.0471 64.6563 74.2354C65.9626 74.4237 67.1747 73.5175 67.363 72.2113L73.5766 28.9748C73.7649 27.6685 72.8588 26.4564 71.5525 26.2681C70.2462 26.0915 69.0341 26.9977 68.8458 28.2922Z"
                      fill="#AAD4C8"
                    />
                    <path
                      d="M30.6374 26.5978C29.3311 26.8096 28.4485 28.0217 28.6603 29.328L35.5447 72.4704C35.7448 73.7649 36.9804 74.6593 38.2749 74.4474C39.5812 74.2356 40.4638 73.0117 40.252 71.7172L33.3676 28.5749C33.1675 27.2686 31.9436 26.386 30.6374 26.5978Z"
                      fill="#AAD4C8"
                    />
                  </svg>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <h1 className="text-primary text-3xl font-bold font-sora">
                    Delete Event
                  </h1>
                  <h2 className="text-black-100 font-quickSand text-lg">
                    Are sure you want to delete this event?
                  </h2>
                </div>
                <div className="flex gap-10">
                  <button
                    onClick={handleDeleteEvent}
                    className="bg-btnWarning px-8 py-3 rounded-md text-white-100 text-base font-quickSand font-semibold"
                  >
                    Delete
                  </button>

                  <button
                    onClick={toggleDeleteModal}
                    className="border border-btnWarning px-8 py-3 rounded-md text-btnWarning font-quickSand font-semibold"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`lg:w-2/3 w-full mx-auto bg-[#F6F7F8] py-4 pt-8 rounded-[1rem] relative mb-[200px] ${
              showDeleteModal
                ? "inactive bg-black-100 bg-opacity-40 w-full"
                : ""
            }`}
          >
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
            <div className="w-full mx-auto flex flex-col gap-10 items-center  my-auto px-4 ">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-start">
                <div className="w-full col-span-1 flex flex-col items-start justify-start gap-5 ">
                  <div className=" h-4/5 mx-auto flex flex-col gap-3 items-center justify-center overflow-hidden">
                    <motion.img
                      src={event?.image}
                      alt={event?.name}
                      className="md:h-[20rem] h-[15rem] w-full"
                    />
                  </div>
                  <h3 className="h-fit w-full uppercase text-base font-bold text-primary font-sora">
                    {event?.name}
                  </h3>
                </div>
                <div className="col-span-1 flex flex-col items-start justify-start gap-5">
                  <h3 className="font-semibold text-xl  font-sora">Details</h3>
                  <div
                    className={` ${
                      showDeleteModal ? "hidden" : ""
                    }bg-primaryWhite w-full rounded-lg drop-shadow-sm p-4 flex flex-col gap-5`}
                  >
                    <div className=" flex items-center gap-4">
                      <Image
                        src={event?.organization?.logo}
                        alt={event?.organization?.name}
                        width={100}
                        height={100}
                        objectFit="cover"
                        className="w-[3rem] aspect-square rounded-full border border-gray-500"
                      />
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
                  <div
                    className={`${
                      showDeleteModal ? "hidden" : ""
                    }bg-primaryWhite w-full rounded-lg drop-shadow-sm p-4 flex flex-col gap-5`}
                  >
                    <p className="text-sm text-gray-200 font-quickSand">
                      {event?.description}
                    </p>
                  </div>
                </div>
              </div>

              <div className={` font-quickSand flex gap-10`}>
                <button
                  onClick={toggleDeleteModal}
                  className={`${
                    showDeleteModal ? "inactive" : ""
                  } border border-red-500 bg-red-500 text-primaryWhite text-xs md:text-base px-6 py-3 rounded-md flex items-center space-x-2`}
                >
                  {/* <Icon name="" size={24} /> */}
                  <span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.832 5.2168L15.3414 13.1533C15.216 15.181 15.1534 16.1949 14.6452 16.9239C14.3938 17.2843 14.0703 17.5884 13.6951 17.817C12.9362 18.2793 11.9204 18.2793 9.88875 18.2793C7.8545 18.2793 6.83735 18.2793 6.07795 17.8161C5.7025 17.5871 5.37886 17.2824 5.12765 16.9214C4.61956 16.1914 4.55826 15.176 4.43568 13.1455L3.95703 5.2168"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M2.76953 5.2181H17.0195M13.1053 5.2181L12.5649 4.10322C12.2059 3.36264 12.0263 2.99234 11.7167 2.76141C11.6481 2.71018 11.5753 2.66461 11.4992 2.62515C11.1564 2.44727 10.7449 2.44727 9.92184 2.44727C9.07816 2.44727 8.65636 2.44727 8.30778 2.63261C8.23053 2.67369 8.15681 2.7211 8.08739 2.77436C7.77416 3.01465 7.5992 3.39849 7.24926 4.16618L6.76976 5.2181"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M7.91602 13.9258V9.17578"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M11.873 13.9258V9.17578"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                  <span className="font-sora text-lg font-light">
                    {" "}
                    Delete event
                  </span>
                </button>
              </div>
            </div>
          </div>
        </AnimatePresence>
      )}
    </>
  );
}
