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
            className={`absolute w-[500px] left-[50%] z-10 ${
              showDeleteModal ? "" : "hidden"
            }`}
          >
            <div className="relative -left-[50%] w-[500px] bg-gray-500 py-5 px-5 rounded-md text-white-100">
              <div className="flex justify-end mb-5">
                <svg
                  onClick={toggleDeleteModal}
                  className="cursor-pointer"
                  width="27"
                  height="27"
                  viewBox="0 0 27 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.75586 8.05762L18.6455 18.9472M7.75586 18.9472L18.6455 8.05762"
                    stroke="black"
                    stroke-width="1.58394"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className="flex flex-col items-center gap-5">
                <h2 className="text-black-100">
                  Are sure you want to delete this event?
                </h2>
                <button
                  onClick={handleDeleteEvent}
                  className="border border-red-500 px-3 py-1 rounded-md text-red-500"
                >
                  Yes delete
                </button>
              </div>
            </div>
          </div>
          <div
            className={`lg:w-2/3 w-full mx-auto bg-[#F6F7F8] py-4 pt-8 rounded-[1rem] relative mb-[200px]`}
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
                  stroke-width="1.58394"
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
                  <div className="bg-primaryWhite w-full rounded-lg drop-shadow-sm p-4 flex flex-col gap-5">
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
                          stroke-width="1.18796"
                        />
                        <path
                          d="M11.7383 7.44971V12.0695L14.0482 14.3795"
                          stroke="#106840"
                          stroke-width="1.18796"
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
                  <div className="bg-primaryWhite w-full rounded-lg drop-shadow-sm p-4 flex flex-col gap-5">
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
                  } border border-red-500 bg-red-500 text-primaryWhite text-xs md:text-base px-4 py-2 rounded-md flex items-center space-x-2`}
                >
                  {/* <Icon name="" size={24} /> */}
                  <span>Delete event</span>
                </button>
              </div>
            </div>
          </div>
        </AnimatePresence>
      )}
    </>
  );
}
