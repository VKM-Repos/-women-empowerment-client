'use client';
import React, { useEffect, useState } from 'react';
import Tab from './components/Tab';
import Event, { Loader } from './components/Event';
import { useGET } from '@/lib/hooks/useGET.hook';
import { useAppContext } from '@/lib/context/app-context';
import { TransitionParent } from '@/lib/utils/transition';
import Button from '@/components/Common/Button/Button';
import NoContent from '@/components/EmptyStates/NoContent';
import { BreadcrumbComponent } from '../components/WithBreadcrumb';
interface EventTab {
  name: string;
}

const tabs: EventTab[] = [{ name: 'All Events' }, { name: 'Drafts' }];
export default function Events() {
  const [selectedEventType, setSelectedEventType] = useState<EventTab>(tabs[0]);
  const [fetchCount, setFetchCount] = useState(0);
  const { user } = useAppContext();

  const {
    data: events,
    isPending,
    refetch,
  } = useGET({
    url: `organizations/${user?.organizationId}/events${
      selectedEventType?.name == 'Drafts' ? '/drafts' : ''
    }`,
    queryKey: ['GET_ALL_EVENTS', selectedEventType?.name, fetchCount],
    withAuth: true,
    enabled: true,
  });
  useEffect(() => {
    setFetchCount(fetchCount + 1);
    refetch();
  }, [selectedEventType.name]);

  return (
    <TransitionParent className='p-0 md:px-8 md:py-4 space-y-2'>
        <BreadcrumbComponent />
        <div className="flex w-full items-end justify-between ">
          <div className="flex gap-4 md:gap-8">
            {tabs?.map(tab => (
              <Tab
                key={tab.name}
                name={tab.name}
                selectedEventType={selectedEventType === tab}
                setSelectedEventType={() => setSelectedEventType(tab)}
              />
            ))}
          </div>

          <Button
            label="Add Event"
            variant="primary"
            state="active"
            size="normal"
            fullWidth={false}
            onClick={() => (window.location.href = '/events/create')}
          />
        </div>
        <div className="flex flex-col gap-5 py-4">
          {isPending && (
               [1, 2, 3, 4, 5].map((item: any) => (
            <Loader key={item.id} />
          )))
          }
          {events?.content?.length < 1 ? (
            <div className="flex justify-center">
            <NoContent
              message={`There's nothing here.`}
              buttonText={'Add Event'}
              buttonLink={() => (window.location.href = '/events/create')}
              withButton={true}
            />
            </div>
          ) : (
            events?.content?.map((event: any) => (
              <Event
                key={event?.name}
                event={event}
                eventStatus={selectedEventType.name}
              />
            ))
          )}
        </div>
    </TransitionParent>
  );
}
