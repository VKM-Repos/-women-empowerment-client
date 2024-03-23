"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

import { useRouter } from "next/navigation";
import { useGET } from "@/lib/hooks/useGET.hook";
import LoadingThinkingWomen from "@/components/Common/Loaders/LoadingThinkingWomen";
import ShareDropdown from "@/components/LandingPage/ShareDropDown";
import Link from "next/link";
import { useDELETE } from "@/lib/hooks/useDelete.hook";
import { useState } from "react";

export default function DeleteProject({ params }: { params: { id: string } }) {
  const router = useRouter();
  const projectId = params?.id?.replace(/\(\.\)/g, "");
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const { data: project, isPending } = useGET({
    url: `projects/${projectId}`,
    queryKey: ["PROJECT_DETAILS_PAGE", projectId],
    withAuth: false,
    enabled: true,
  });
  const { mutate: deleteProject, isPending: deletingEvent } = useDELETE(
    `projects/${projectId}`
  );
  const toggleDeleteModal = () => {
    setShowDeleteModal(!showDeleteModal);
  };

  const handleDeleteEvent = (event: any) => {
    event.preventDefault();
    deleteProject("", {
      onSuccess: () => {
        toggleDeleteModal();
        window.location.href = "/organization/manage/projects";
      },
      onError: (error) => {
        console.log(error);
      },
    });
  };
  const urlToShare = `https://womenhub.org/projects/${projectId}`;

  return (
    <>
      {isPending || deletingEvent ? (
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
                  Are sure you want to delete this project?
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
          <div className="lg:w-3/4 w-full mx-auto p-4 pt-8 rounded-[1rem] relative font-sora">
            <button
              onClick={router.back}
              className="w-fit flex items-center justify-center gap-5 absolute top-0 left-1 text-btnWarning "
            >
              <svg
                className="cursor-pointer"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.4997 25.7334L5.69967 16.9334C5.56634 16.8 5.47167 16.6556 5.41567 16.5C5.36056 16.3445 5.33301 16.1778 5.33301 16C5.33301 15.8223 5.36056 15.6556 5.41567 15.5C5.47167 15.3445 5.56634 15.2 5.69967 15.0667L14.4997 6.2667C14.7441 6.02225 15.0494 5.89425 15.4157 5.8827C15.7828 5.87203 16.0997 6.00003 16.3663 6.2667C16.633 6.51114 16.7721 6.81647 16.7837 7.1827C16.7943 7.54981 16.6663 7.8667 16.3997 8.13336L9.86634 14.6667H24.7663C25.1441 14.6667 25.461 14.7943 25.717 15.0494C25.9721 15.3054 26.0997 15.6223 26.0997 16C26.0997 16.3778 25.9721 16.6943 25.717 16.9494C25.461 17.2054 25.1441 17.3334 24.7663 17.3334H9.86634L16.3997 23.8667C16.6441 24.1111 16.7721 24.4223 16.7837 24.8C16.7943 25.1778 16.6663 25.4889 16.3997 25.7334C16.1552 26 15.8441 26.1334 15.4663 26.1334C15.0886 26.1334 14.7663 26 14.4997 25.7334Z"
                  fill="#FF7400"
                />
              </svg>
              Go back
            </button>

            <h3 className=" text-base md:text-xl font-sora font-bold text-primary text-center my-6">
              {project?.title || "Project details"}
            </h3>

            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-10 justify-start">
              <div className="col-span-1 flex flex-col items-start justify-start gap-8 p-2">
                <Image
                  src={
                    project?.image
                      ? project?.image
                      : "https://placehold.co/400x400/png"
                  }
                  alt={`profile image`}
                  width={500}
                  height={500}
                  // layout="responsive"
                  className="w-full h-[60%] rounded object-contain"
                />
                <span>
                  <h5 className="text-base font-sora font-semibold text-primary">
                    Description
                  </h5>
                  <p className="text-base font-quickSand text-gray-200 font-semibold">
                    {project?.description ||
                      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis saepe facilis blanditiis expedita amet maiores itaque tempore unde quidem dicta!"}
                  </p>
                </span>
              </div>

              {/*2nd col */}
              <div className="col-span-1 flex flex-col items-start justify-start gap-5 p-2">
                <div className=" flex items-center justify-start gap-4">
                  <Image
                    src={
                      project?.image
                        ? project?.image
                        : "https://placehold.co/600x600/png"
                    }
                    alt={project?.title}
                    width={100}
                    height={100}
                    objectFit="cover"
                    className="w-[3rem] aspect-square rounded-full border border-gray-500"
                  />
                  <h5 className="text-gray-200 font-semibold font-sora text-base">
                    {project?.organization?.name || ""}
                  </h5>
                </div>

                <ul className="w-full flex flex-col gap-5 items-start">
                  <li className="grid grid-cols-6 gap-2">
                    <span className="col-span-2 text-gray-200 font-medium font-quickSand">
                      Status:
                    </span>
                    <span className="col-span-4 ">
                      {project?.status || "not stated"}
                    </span>
                  </li>
                  <li className="grid grid-cols-6 gap-2">
                    <span className="col-span-2 text-gray-200 font-medium font-quickSand">
                      Starts
                    </span>
                    <span className="col-span-4">
                      {project?.startDate || "1st March 2024"}
                    </span>
                  </li>
                  <li className="grid grid-cols-6 gap-2">
                    <span className="col-span-2 text-gray-200 font-medium font-quickSand">
                      Ends:
                    </span>
                    <span className="col-span-4">
                      {project?.endDate || "1st March 2024"}
                    </span>
                  </li>
                  <li className="grid grid-cols-6 gap-2">
                    <span className="col-span-2 text-gray-200 font-medium font-quickSand">
                      category:
                    </span>
                    <span className="col-span-4">
                      {project?.category[0] || "Health"}
                    </span>
                  </li>
                  <li className="grid grid-cols-6 gap-2">
                    <span className="col-span-2 text-gray-200 font-medium font-quickSand">
                      Location:
                    </span>
                    <span className="col-span-4">
                      {project?.location || "Abuja"}
                    </span>
                  </li>
                </ul>

                <button
                  onClick={toggleDeleteModal}
                  className="w-full border py-2 hover:bg-red-600 hover:text-white-100 border-red-600 text-red-600 rounded flex items-center justify-center"
                >
                  Delete this project
                </button>
              </div>
            </div>
          </div>
        </AnimatePresence>
      )}
    </>
  );
}
