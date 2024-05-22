import * as React from 'react';
import { Organization } from '@/lib/types/organization.types';
import { User } from '@/lib/types/user.types';
import ImageWithFallback from '@/components/Common/ImageWithFallBack';
import { Card, CardContent } from '@/components/UI/Card';
import NoContent from '@/components/EmptyStates/NoContent';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { formatDateTime } from '@/lib/utils/helperFunctions';
import { CameraIcon } from '@/components/Common/Icons/Camera.icon';
import { LocationIcon } from '@/components/Common/Icons/Location.icon';
import { ScrollArea } from '@/components/UI/ScrollArea';

interface OrgEventsProps {
  organizationEvent: any;
  user: any;
  organization: Organization;
}

const OrgEvents: React.FC<OrgEventsProps> = ({
  organizationEvent,
  user,
  organization,
}) => {
  const router = useRouter();
  return (
    <section className="relative space-y-8 p-2">
      <div className="text-primary font-quickSand whitespace-nowrap text-lg lg:text-2xl">
        Latest events
        <div className="bg-btnWarning mt-1 h-1 w-[4rem] rounded" />
      </div>

      {organizationEvent?.content?.length > 0 ? (
        <ScrollArea className=" h-[45dvh] w-full">
          {organizationEvent?.content?.map((event: any) => (
            <div key={event.id} className="">
              <Link key={event?.id} href={`/events/${event?.id}`}>
                <div className="hover:bg-primary/10 flex items-stretch justify-center gap-5 rounded-xl py-2 p-1 drop-shadow-sm">
                  <div className="relative aspect-square w-[7rem] overflow-hidden rounded">
                    <ImageWithFallback
                      src={
                        event.image ||
                        'https://placehold.co/400x400?text=Women\n Hub'
                      }
                      fallbackSrc={
                        'https://placehold.co/400x400?text=Women\n Hub'
                      }
                      aspectRatio={{ width: 1, height: 1 }}
                      alt={`Image ${event.id}`}
                      className=""
                    />
                  </div>
                  <div className="my-auto flex grow basis-[0%] flex-col items-stretch self-center">
                    <div className="text-black text-base text-opacity-40">
                      <h5 className="text-gray-100 font-sora block w-full truncate whitespace-nowrap text-sm font-medium">
                        {event.name}
                      </h5>
                      <span className=" text-black font-quickSand text-sm">
                        {formatDateTime(event?.startDate)}
                      </span>
                    </div>
                    <div className="mt-1 flex flex-col items-start justify-start gap-0  text-xs">
                      <span className="font-sora text-btnWarning flex items-center text-xs font-medium md:text-sm">
                        {event.type === 'ONLINE' && (
                          <span className='flex gap-1'>
                            <CameraIcon className="aspect-square w-5" />{' '}
                            <p className="font-quickSand w-full truncate whitespace-nowrap text-xs capitalize">
                              {event.type.toLowerCase()}
                            </p>{' '}
                            
                          </span>
                        )}
                        {event.type === 'PHYSICAL' && (
                          <span className='flex gap-1'>
                            <LocationIcon className="aspect-square w-4" />
                            <p className="font-quickSand w-full truncate whitespace-nowrap text-xs">
                              {event.location}
                            </p>
                          </span>
                        )}
                      </span>
                      <div className="text-primary font-quickSand w-5/6 truncate whitespace-nowrap text-xs">
                        By {organization?.name}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </ScrollArea>
      ) : (
        <NoContent
          message="No events yet."
          buttonText={'Add Images'}
          buttonLink={() => router.push('/events/create')}
          withButton={user?.organizationId == organization?.id}
        />
      )}
    </section>
  );
};

export default OrgEvents;
