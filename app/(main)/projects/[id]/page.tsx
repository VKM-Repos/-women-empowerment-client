'use client';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';

import { useRouter, useSearchParams } from 'next/navigation';
import { useGET } from '@/lib/hooks/useGET.hook';
import ShareDropdown from '@/components/LandingPage/ShareDropDown';
import Link from 'next/link';
import GoBackBtn from '@/components/Common/GoBackBtn';
import { useModal } from '@/lib/context/modal-context';
import ThreeDotsMenu from '../../organization/components/ThreeDotsMenu';
import ImageWithFallback from '@/components/Common/ImageWithFallBack';
import DeleteProjectModal from '../components/DeleteProjectModal';
import { siteConfig } from '@/lib/config/siteConfig';

export default function ProjectDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const router = useRouter();
  const projectId = params?.id?.replace(/\(\.\)/g, '');

  const { showModal, hideModal } = useModal();

  const handleDeleteModal = () => {
    showModal(<DeleteProjectModal projectId={projectId} />);
  };

  // when owner wants to delete
  const searchParams = useSearchParams();
  const deleteQuery = searchParams.get('query') === 'delete';

  // when owner wants to preview
  const previewQuery = searchParams.get('query') === 'preview';

  const { data: project, isPending } = useGET({
    url: `projects/${projectId}`,
    queryKey: ['PROJECT_DETAILS_PAGE', projectId],
    withAuth: false,
    enabled: true,
  });

  const urlToShare = `${typeof window !== 'undefined' ? window.location.origin : siteConfig.url}/projects/${projectId}`;

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
          <div className="font-sora relative mx-auto w-full p-4 pb-[7rem] pt-8 lg:w-3/4">
            <GoBackBtn />
            <span className="flex w-full items-center justify-end">
              {previewQuery && <ThreeDotsMenu menu={menu} />}
            </span>

            <h3 className=" font-sora text-primary my-6 text-center text-base font-bold md:text-xl">
              {project?.title || 'Project details'}
            </h3>

            <div className="grid w-full grid-cols-1 justify-start gap-10 md:grid-cols-2">
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
                  <h5 className="font-sora text-primary text-base font-semibold">
                    Description
                  </h5>
                  <p className="font-quickSand text-gray-200 text-base font-semibold">
                    {project?.description || ''}
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
                        : 'https://placehold.co/600x600/png'
                    }
                    alt={project?.title}
                    width={100}
                    height={100}
                    objectFit="cover"
                    className="border-gray-500 aspect-square w-[3rem] rounded-full border"
                  />
                  <h5 className="text-gray-200 font-sora text-base font-semibold">
                    {project?.organization?.name || ''}
                  </h5>
                </div>

                <ul className="flex w-full flex-col items-start gap-5">
                  <li className="grid w-full grid-cols-6 gap-2">
                    <span className="text-gray-200 font-quickSand col-span-2 font-medium md:col-span-1">
                      Status:
                    </span>
                    <span
                      className={`col-span-4 w-fit rounded-md border p-1 px-2 text-xs  ${getStatusColor(project.status)}`}
                    >
                      {project?.status || 'not stated'}
                    </span>
                  </li>
                  <li className="grid w-full grid-cols-6 gap-2">
                    <span className="text-gray-200 font-quickSand col-span-2 font-medium md:col-span-1">
                      Starts
                    </span>
                    <span className="col-span-4">
                      {project?.startDate || '1st March 2024'}
                    </span>
                  </li>
                  <li className="grid w-full grid-cols-6 gap-2">
                    <span className="text-gray-200 font-quickSand col-span-2 font-medium md:col-span-1">
                      Ends:
                    </span>
                    <span className="col-span-4">
                      {project?.endDate || '1st March 2024'}
                    </span>
                  </li>
                  <li className="grid w-full grid-cols-6 gap-2">
                    <span className="text-gray-200 font-quickSand col-span-2 font-medium md:col-span-1">
                      category:
                    </span>
                    <span className="col-span-4">
                      {project?.category[0] || 'Health'}
                    </span>
                  </li>
                  <li className="grid w-full grid-cols-6 gap-2">
                    <span className="text-gray-200 font-quickSand col-span-2 font-medium md:col-span-1">
                      Location:
                    </span>
                    <span className="col-span-4">
                      {project?.location || 'Abuja'}
                    </span>
                  </li>
                </ul>

                <div className="flex w-full flex-col items-center justify-between gap-5 md:flex-row">
                  {deleteQuery ? (
                    <button
                      onClick={handleDeleteModal}
                      className="border-error bg-error text-primaryWhite flex items-center space-x-2 rounded-md border px-6 py-4 text-xs md:text-base"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13 3.66602L12.5869 10.3494C12.4813 12.0569 12.4285 12.9107 12.0005 13.5246C11.7889 13.8281 11.5165 14.0842 11.2005 14.2767C10.5614 14.666 9.706 14.666 7.99513 14.666C6.28208 14.666 5.42553 14.666 4.78603 14.2759C4.46987 14.0831 4.19733 13.8265 3.98579 13.5225C3.55792 12.9077 3.5063 12.0527 3.40307 10.3428L3 3.66602"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                        <path
                          d="M2 3.66732H14M10.7038 3.66732L10.2487 2.72847C9.9464 2.10482 9.7952 1.793 9.53447 1.59852C9.47667 1.55538 9.4154 1.51701 9.35133 1.48378C9.0626 1.33398 8.71607 1.33398 8.023 1.33398C7.31253 1.33398 6.95733 1.33398 6.66379 1.49006C6.59873 1.52466 6.53665 1.56458 6.47819 1.60943C6.21443 1.81178 6.06709 2.13502 5.77241 2.78149L5.36861 3.66732"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                        <path
                          d="M6.33301 11V7"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                        <path
                          d="M9.66699 11V7"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                      <span>Delete</span>
                    </button>
                  ) : (
                    <>
                      <ShareDropdown
                        text={'Share this page  '}
                        urlToShare={urlToShare}
                        className="border-primary text-primary flex w-full items-center justify-center truncate rounded border"
                      />
                      <Link
                        href={project?.link || ''}
                        target="_blank"
                        className="bg-primary text-primaryWhite flex w-full items-center justify-center rounded border py-2"
                      >
                        Visit link
                      </Link>
                    </>
                  )}
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
      // alert('removed');
    },
  },
  {
    title: 'publish',
    blank: false,
    isButton: true,
    onClick: () => {
      // alert('changed');
    },
  },
];
