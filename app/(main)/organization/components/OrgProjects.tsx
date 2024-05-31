'use client';
import ImageWithFallback from '@/components/Common/ImageWithFallBack';
import NoContent from '@/components/EmptyStates/NoContent';
import { useGET } from '@/lib/hooks/useGET.hook';
import { Organization } from '@/lib/types/organization.types';
import { Project } from '@/lib/types/project.types';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import EventCardLoader from '../../events/components/EventCardLoader';
import { useAppContext } from '@/lib/context/app-context';
import { ScrollArea } from '@/components/UI/ScrollArea';

type Props = {
  organization: Organization;
};

const OrgProjects = ({ organization }: Props) => {
  const { user } = useAppContext();
  const router = useRouter();

  const {
    data: orgProjects,
    isPending: isOrgProjectsPending,
    isError: isOrgProjectsError,
    // refetch,
  } = useGET({
    url: `/organizations/${organization?.id}/projects`,
    queryKey: ['projects_by_organization', organization?.id],
    withAuth: false,
    enabled: true,
  });

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
    return text.length > maxLength
      ? `${text.slice(0, maxLength)}...`
      : text;
  };

  return (
    <div className="space-y-8 p-2 relative">
      <div className="text-primary whitespace-nowrap text-lg lg:text-2xl font-quickSand">
        Projects
        <div className="bg-btnWarning mt-1 h-1 w-[4rem] rounded" />
      </div>

      <div className="flex flex-col gap-[3rem] py-1  lg:gap-[0.1rem]">
        {isOrgProjectsError && <p>Error fetching projects</p>}
        {isOrgProjectsPending ? (
          [1, 2, 3, 4].map((_, id: number) => <EventCardLoader key={id} />)
        ) : !isOrgProjectsPending && orgProjects?.content.length === 0 ? (
          <NoContent
            message="No projects yet."
            buttonText={'Create project'}
            buttonLink={() => router.push('/projects/create')}
            withButton={user?.organizationId == organization?.id}
          />
        ) : (
          !isOrgProjectsPending && (
            <ScrollArea className='w-full h-[45dvh] md:h-auto '>
              <div className="mx-auto flex flex-wrap w-full gap-2 justify-center md:w-[95%] ">
                {Array.isArray(orgProjects?.content) &&
                  orgProjects?.content.map((project: Project) => (
                    <Link
                      href={`/projects/${project.id}`}
                      key={project.id}
                      className="border-gray-500 hover:bg-primary/10 grid w-full transform grid-cols-12  items-center gap-4 border rounded-md p-2 drop-shadow-sm transition-all duration-75 ease-in-out hover:rounded"
                    >
                    <div className="col-span-4 relative aspect-square w-[6rem] overflow-hidden rounded lg:w-[7rem]">
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
                      <div className="col-span-8 flex w-full flex-col items-start gap-0">
                        <h5 className="text-gray-100 font-sora block w-full truncate whitespace-nowrap text-sm font-medium">
                          {project.title}
                        </h5>
                        <p className="text-gray-200 overflow-hidden h-[2rem] w-full font-quickSand text-xs font-medium ">
                          {truncatedText(project.description, 90)}
                        </p>
                        <span
                          className={`mt-2 w-fit rounded-md border p-0.5 px-1 text-[8px]  ${getStatusColor(project.status)}`}
                        >
                          {project?.status || 'not stated'}
                        </span>
                      </div>
                    </Link>
                  ))}
              </div>
            </ScrollArea>
          )
        )}
      </div>
    </div>
  );
};

export default OrgProjects;
