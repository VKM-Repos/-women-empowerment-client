'use client';
import React from 'react';
import { TransitionParent } from '@/lib/utils/transition';
import { useGET } from '@/lib/hooks/useGET.hook';
import LoadingThinkingWomen from '@/components/Common/Loaders/LoadingThinkingWomen';
import OrganizationProfile from '../components/OrganizationProfile';
import ActivityPane from '../components/ActivityPane';
import OrgProjects from '../components/OrgProjects';
import { Metadata } from 'next';
import { Organization } from '@/lib/types/organization.types';

export default function OrganizationDetails({
  organization,
}: {
  organization: Organization;
}) {
  //   const { data: organization, isPending } = useGET({
  //     url: `organizations/${params?.id}`,
  //     queryKey: ['GET_ORGANIZATION_DETAILS', params?.id],
  //     withAuth: true,
  //     enabled: true,
  //   });

  return (
    <TransitionParent className="w-full">
      {!organization ? (
        <LoadingThinkingWomen />
      ) : (
        <div className="mx-auto mb-[300px] flex w-full gap-10 p-2 lg:w-[90%]">
          <div className="flex w-full flex-col items-stretch gap-10 lg:basis-4/6">
            <OrganizationProfile organization={organization} />
            <ActivityPane organization={organization} />
          </div>
          <aside className="hidden flex-col items-stretch lg:flex lg:basis-2/6">
            <div className="w-full rounded-[1.5rem] border  p-2">
              <OrgProjects organization={organization} />
            </div>
          </aside>
        </div>
      )}
    </TransitionParent>
  );
}
