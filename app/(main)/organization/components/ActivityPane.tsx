'use client';
import React, { useState } from 'react';
import Tab from './Tab';
import { Organization } from '@/lib/types/organization.types';
import { useGET } from '@/lib/hooks/useGET.hook';
import { useAppContext } from '@/lib/context/app-context';
import OrgImages from './OrgImages';
import OrgEvents from './OrgEvents';
import { cn } from '@/lib/utils';
import OrgProjects from './OrgProjects';

type Props = {
  organization: Organization;
};

interface EventTab {
  name: string;
}

const tabs: EventTab[] = [
  {
    name: 'Images',
  },
  {
    name: 'Events',
  },
  {
    name: 'Projects',
  },
];

const ActivityPane = ({ organization }: Props) => {
  const [selectedEventType, setSelectedEventType] = useState<EventTab>(tabs[0]);
  const { user } = useAppContext();

  const {
    data: organizationEvent,
    isPending: isOrganizationEventPending,
    isError: isOrganizationError,
  } = useGET({
    url: `/organizations/${organization?.id}/events`,
    queryKey: ['EVENTS_BY_ORGANIZATION', organization?.id],
    withAuth: false,
    enabled: true,
  });

  return (
    <section className='w-full'>
      <div className="">
        {tabs.map((tab, index) => (
          <Tab
            key={tab.name}
            name={tab.name}
            selectedEventType={selectedEventType === tab}
            setSelectedEventType={() => setSelectedEventType(tab)}
            className={cn(
              'tab-class',
              {
                'hidden md:block': tab.name === 'Projects' && (index === 0 || index === 1),
                'sm:block md:hidden': tab.name === 'Projects' && index === 2,
              }
            )}
          />
        ))}
      </div>

      <div className="w-full border rounded-tr-[1rem] rounded-br-[1rem] rounded-bl-[1rem] h-[60dvh] overflow-hidden">
        {selectedEventType.name === 'Images' && (
         <OrgImages organization={organization} user={user} />
        )}

        {selectedEventType.name === 'Events' && (
        <OrgEvents organization={organization} user={user} organizationEvent={organizationEvent}  />
        )}

        {selectedEventType.name === 'Projects' && (
        <OrgProjects organization={organization} />
        )}
      </div>
    </section>
  );
};

export default ActivityPane;
