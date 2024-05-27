"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

import { useRouter, useSearchParams } from "next/navigation";
import { useGET } from "@/lib/hooks/useGET.hook";
import LoadingThinkingWomen from "@/components/Common/Loaders/LoadingThinkingWomen";
import ShareDropdown from "@/components/LandingPage/ShareDropDown";
import Link from "next/link";
import GoBackBtn from "@/components/Common/GoBackBtn";
import { useModal } from "@/lib/context/modal-context";
import ThreeDotsMenu from "../../organization/components/ThreeDotsMenu";
import ImageWithFallback from "@/components/Common/ImageWithFallBack";

export default function ProjectDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const router = useRouter();
  const projectId = params?.id?.replace(/\(\.\)/g, "");

      const { showModal, hideModal } = useModal();

  const handleDeleteModal = () => {
    // showModal(<DeleteEventModal eventId={eventId} />); 
  }


  // when owner wants to delete
  const searchParams = useSearchParams();
  const deleteQuery = searchParams.get('query') === 'delete';

  // when owner wants to preview
  const previewQuery = searchParams.get('query') === 'preview';


  const { data: project, isPending } = useGET({
    url: `projects/${projectId}`,
    queryKey: ["PROJECT_DETAILS_PAGE", projectId],
    withAuth: false,
    enabled: true,
  });


  const urlToShare = `https://womenhub.org/projects/${projectId}`;

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'COMPLETED':
        return 'bg-[#FF7400] text-primaryWhite border-[#FF7400]';
      case 'ONGOING':
        return 'bg-[#FFFFFF] text-primary border-primary';
      case 'UPCOMING':
        return 'bg-[#93E5AB] text-primary border-[#93E5AB]';
      default:
        return '';
    }
  };

  return (
    <>
      {isPending ? (
        // <LoadingThinkingWomen />
        'loading'
      ) : (
        <AnimatePresence initial={false} mode="wait">
          <div className="lg:w-3/4 w-full mx-auto p-4 pt-8 relative font-sora pb-[7rem]">
            <GoBackBtn />
            <span className="flex w-full items-center justify-end">
              {previewQuery && <ThreeDotsMenu menu={menu} />}
            </span>

            <h3 className=" text-base md:text-xl font-sora font-bold text-primary text-center my-6">
              {project?.title || "Project details"}
            </h3>

            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 justify-start">
              <div className="col-span-1 flex flex-col items-start justify-start gap-8 p-2">
                 <div className="h-4/5 w-full overflow-hidden rounded-md">
                  <ImageWithFallback
                    src={project?.image}
                    fallbackSrc={
                      'https://placehold.co/600x500?text=Women\n Hub'
                    }
                    aspectRatio={{ width: 6, height: 5 }}
                    alt={project?.name}
                    className=""
                  />
                </div>
                <span>
                  <h5 className="text-base font-sora font-semibold text-primary">
                    Description
                  </h5>
                  <p className="text-base font-quickSand text-gray-200 font-semibold">
                    {project?.description ||
                      ""}
                  </p>
                </span>
              </div>

              {/*2nd col */}
              <div className="col-span-1 flex flex-col items-start justify-start gap-5 p-2">
                <div className=" flex items-center justify-start gap-4">
                  <Image
                    src={
                      project?.organization?.logo
                        ? project?.organization.logo
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
                  <li className="w-full grid grid-cols-6 gap-2">
                    <span className="col-span-2 md:col-span-1 text-gray-200 font-medium font-quickSand">Status:</span>
                    <span className={`col-span-4 w-fit text-xs p-1 px-2 rounded-md border  ${getStatusColor(project.status)}`}>
                      {project?.status || "not stated"}
                    </span>
                  </li>
                  <li className="w-full grid grid-cols-6 gap-2">
                    <span className="col-span-2 md:col-span-1 text-gray-200 font-medium font-quickSand">Starts</span>
                    <span className="col-span-4">
                      {project?.startDate || "1st March 2024"}
                    </span>
                  </li>
                  <li className="w-full grid grid-cols-6 gap-2">
                    <span className="col-span-2 md:col-span-1 text-gray-200 font-medium font-quickSand">Ends:</span>
                    <span className="col-span-4">
                      {project?.endDate || "1st March 2024"}
                    </span>
                  </li>
                  <li className="w-full grid grid-cols-6 gap-2">
                    <span className="col-span-2 md:col-span-1 text-gray-200 font-medium font-quickSand">category:</span>
                    <span className="col-span-4">
                      {project?.category[0] || "Health"}
                    </span>
                  </li>
                  <li className="w-full grid grid-cols-6 gap-2">
                    <span className="col-span-2 md:col-span-1 text-gray-200 font-medium font-quickSand">Location:</span>
                    <span className="col-span-4">
                      {project?.location || "Abuja"}
                    </span>
                  </li>
                </ul>

               <div className="w-full flex gap-5 flex-col md:flex-row items-center justify-between">
                <ShareDropdown text={"Share this page  "} urlToShare={urlToShare} className="w-full truncate border border-primary text-primary rounded flex items-center justify-center"  />
                <Link href={project?.link || ''} target="_blank" className="w-full py-2 border bg-primary text-primaryWhite rounded flex items-center justify-center">Visit link</Link>
               </div>
              </div>
            </div>
          </div>
        </AnimatePresence>
      )}
    </>
  );
}


const menu = [
  {
    title: 'Edit',
    blank: false,
    isButton: true,
    onClick: () => {
      alert('removed');
    },
  },
  {
    title: 'publish',
    blank: false,
    isButton: true,
    onClick: () => {
      alert('changed');
    },
  },
];