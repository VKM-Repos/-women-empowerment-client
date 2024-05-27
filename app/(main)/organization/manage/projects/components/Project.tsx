'use-client';
import Image from 'next/image';
import React, { useState } from 'react';

import { Menu } from '@/components/Common/ModalMenu/Menu';
import Icon from '@/components/Common/Icons/Icon';
import ImageWithFallback from '@/components/Common/ImageWithFallBack';
import ThreeDotsMenu from '../../../components/ThreeDotsMenu';
type ProjectCardProps = {
  project: {
    id: number;
    image: string;
    title: string;
    description: string;
    status: string;
  };
  projectStatus: string;
};
export default function Project({ project, projectStatus }: ProjectCardProps) {
  const [showPopMenu, setShowPopMenu] = useState(false);

  const handleShowPopUpMenu = () => {
    setShowPopMenu(!showPopMenu);
  };
  const menu = [
    {
      title: 'Edit',
      link: `/organization/manage/projects/edit/${project?.id}`,
      blank: false,
      icon: <Icon name="edit-org-icon" />,
    },
    {
      title: 'View',
      link: `/projects/${project?.id}?query=preview`,
      blank: false,
      icon: <Icon name="eye-icon" />,
    },
    {
      title: 'Delete',
      link: `/projects/${project?.id}?query=delete`,
      blank: false,
      icon: <Icon name="trash-icon" />,
      condition: projectStatus === 'Drafts',
    },
  ];

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

  const truncatedText = (text: string, maxLength: number) => {
    return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
  };

  return (
    <div className=" relative flex w-full items-center justify-between gap-5 overflow-hidden rounded-xl border p-2 drop-shadow-sm md:max-w-3xl">
      <div className="flex items-start justify-start gap-5">
        <div className="relative aspect-square w-[4rem] overflow-hidden rounded lg:w-[7rem]">
          <ImageWithFallback
            src={
              project?.image || 'https://placehold.co/400x400?text=Women\n Hub'
            }
            fallbackSrc={'https://placehold.co/400x400?text=Women\n Hub'}
            aspectRatio={{ width: 1, height: 1 }}
            alt={`Image ${project?.id}`}
            className=""
          />
        </div>
        <div className="my-auto flex grow basis-[0%] flex-col items-stretch self-start">
          <h5 className="text-gray-100 font-sora block w-full truncate whitespace-nowrap text-sm font-medium">
            {project.title}
          </h5>
          <p className="text-gray-200 font-quickSand h-[2rem] w-full overflow-hidden text-xs font-medium ">
            {truncatedText(project.description, 90)}
          </p>
          <span
            className={`mt-2 w-fit rounded-md border p-0.5 px-1 text-[8px]  ${getStatusColor(project.status)}`}
          >
            {project?.status || 'not stated'}
          </span>
        </div>
      </div>

      <div className="absolute right-[2px] my-auto lg:right-2">
        <ThreeDotsMenu menu={menu} label="Quick action" />
      </div>
    </div>
  );
}

export const Loader = () => {
  return (
    <div className="flex max-w-3xl animate-pulse items-center justify-between gap-5 rounded-xl border p-2 drop-shadow-sm">
      <div className="flex min-h-full w-full items-start justify-start gap-5">
        <div className="bg-gray-500 relative aspect-square w-[4rem] overflow-hidden rounded lg:w-[7rem]"></div>
        <div className="flex h-full w-full flex-grow flex-col items-stretch self-center">
          <div className="h-full w-full">
            <div className="bg-gray-500 mb-2 h-4 w-2/4 rounded"></div>
            <div className="bg-gray-500 block h-2 w-1/4 rounded"></div>
          </div>
          <div className="mt-1 flex items-start justify-start gap-2 text-xs">
            <div className="bg-gray-500 h-2 w-1/6 rounded"></div>
            <div className="bg-gray-500 flex h-2 w-1/6 items-center justify-center rounded text-xs font-medium md:text-sm"></div>
          </div>
        </div>
      </div>

      <div className="bg-gray-500 h-8 w-8 rounded-full"></div>
    </div>
  );
};
