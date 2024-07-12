'use client';
import { AnimatePresence, motion } from 'framer-motion';
import EventDetailsLoader from '../components/EventDetailsLoader';
import { useRouter, useSearchParams } from 'next/navigation';
import { useGET } from '@/lib/hooks/useGET.hook';
import { formatDateTime } from '@/lib/utils/helperFunctions';
import { CameraIcon } from '@/components/Common/Icons/Camera.icon';
import { LocationIcon } from '@/components/Common/Icons/Location.icon';
import ShareDropdown from '@/components/LandingPage/ShareDropDown';
import Link from 'next/link';
import ImageWithFallback from '@/components/Common/ImageWithFallBack';
import ThreeDotsMenu from '../../organization/components/ThreeDotsMenu';
import GoBackBtn from '@/components/Common/GoBackBtn';
import Icon from '@/components/Common/Icons/Icon';
import { useModal } from '@/lib/context/modal-context';
import DeleteEventModal from '../components/DeleteEventModal';

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
    title: 'delete',
    blank: false,
    isButton: true,
    onClick: () => {
      alert('changed');
    },
  },
];

export default function EventsDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const router = useRouter();
  const eventId = params?.id?.replace(/\(\.\)/g, '');
  const { showModal, hideModal } = useModal();

  const handleDeleteModal = () => {
    showModal(<DeleteEventModal eventId={eventId} />);
  };

  // when owner wants to delete
  const searchParams = useSearchParams();
  const deleteQuery = searchParams.get('query') === 'delete';

  // when owner wants to preview
  const previewQuery = searchParams.get('query') === 'preview';

  const { data: event, isPending } = useGET({
    url: `events/${eventId}`,
    queryKey: ['GET_EVENT_DETAILS_EVENT_DETAILS_PAGE', eventId],
    withAuth: false,
    enabled: true,
  });

  const urlToShare = `https://womenhub.org/events/${eventId}`;
  return (
    <>
      {isPending ? (
        // <EventDetailsLoader />
        'loading'
      ) : (
        <AnimatePresence initial={false} mode="wait">
          <div className="font-sora relative mx-auto w-full rounded-[1rem] p-4 pb-[7rem] pt-8 lg:w-3/4 ">
            <GoBackBtn />
            <span className="flex w-full items-center justify-end">
              {previewQuery && <ThreeDotsMenu menu={menu} />}
            </span>
            <div className="my-6 grid grid-cols-1 justify-start justify-items-stretch gap-10 md:grid-cols-2">
              <div className="col-span-1 flex w-full flex-col items-start justify-items-stretch gap-5 ">
                <div className="h-3/5 w-full overflow-hidden rounded-md">
                  <ImageWithFallback
                    src={event?.image}
                    fallbackSrc={
                      'https://placehold.co/600x500?text=Women\n Hub'
                    }
                    aspectRatio={{ width: 6, height: 5 }}
                    alt={event?.name}
                    className=""
                  />
                </div>
                <h3 className="text-primary font-sora h-fit w-full text-base font-bold uppercase">
                  {event?.name}
                </h3>
              </div>
              <div className="col-span-1 flex flex-col items-start justify-start gap-5">
                <h3 className="font-sora text-xl  font-semibold">Details</h3>
                <div className="bg-primaryWhite flex w-full flex-col gap-5 rounded-lg p-4">
                  <div className=" flex items-center gap-4">
                    <span className="border-gray-500 aspect-square w-[3rem] overflow-hidden rounded-full border">
                      <ImageWithFallback
                        src={event?.organization?.logo}
                        fallbackSrc={
                          'https://placehold.co/100x100?text=Women\n Hub'
                        }
                        aspectRatio={{ width: 1, height: 1 }}
                        alt={event?.organization?.name}
                        className=""
                      />
                    </span>
                    <h5 className="text-gray-200 font-quickSand text-base font-semibold">
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
                        strokeWidth="1.18796"
                      />
                      <path
                        d="M11.7383 7.44971V12.0695L14.0482 14.3795"
                        stroke="#106840"
                        strokeWidth="1.18796"
                      />
                    </svg>

                    <span className="font-sora flex flex-col items-start gap-1">
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
                    {/* <Icon name="" size={20} /> */}
                    {/* <svg
                        width="23"
                        height="23"
                        viewBox="0 0 23 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.49805 13.6769V6.28516H10.8138C12.8549 6.28516 14.5096 7.93985 14.5096 9.98102V17.3728H6.19392C4.15274 17.3728 2.49805 15.718 2.49805 13.6769Z"
                          stroke="#106840"
                          strokeWidth="1.18796"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M20.9778 7.20909H21.6708C21.6708 6.95352 21.5301 6.71871 21.3048 6.59811C21.0794 6.47752 20.806 6.49074 20.5934 6.6325L20.9778 7.20909ZM16.8199 9.98099L16.4356 9.4044L16.127 9.61012V9.98099H16.8199ZM20.9778 16.4488L20.5934 17.0253C20.806 17.1671 21.0794 17.1804 21.3048 17.0598C21.5301 16.9391 21.6708 16.7043 21.6708 16.4488H20.9778ZM16.8199 13.6769H16.127V14.0477L16.4356 14.2534L16.8199 13.6769ZM20.5934 6.6325L16.4356 9.4044L17.2043 10.5575L21.3622 7.78568L20.5934 6.6325ZM21.3622 15.8722L17.2043 13.1003L16.4356 14.2534L20.5934 17.0253L21.3622 15.8722ZM16.127 9.98099V13.6769H17.5129V9.98099H16.127ZM21.6708 16.4488V7.20909H20.2848V16.4488H21.6708Z"
                          fill="#106840"
                        />
                      </svg> */}
                    {event?.type == 'ONLINE' ? (
                      <CameraIcon className="aspect-square w-6" />
                    ) : (
                      <LocationIcon className="aspect-square w-6" />
                    )}
                    <p className="text-gray-200 font-sora text-sm">
                      {event?.type == 'ONLINE' ? (
                        <p>
                          <a href={event?.link} className="underline">
                            {event?.link}
                          </a>{' '}
                          ({event?.type})
                        </p>
                      ) : (
                        <p>
                          {event?.location} ({event?.type})
                        </p>
                      )}{' '}
                    </p>
                  </div>
                </div>
                <div className="bg-primaryWhite flex w-full flex-col gap-5 rounded-lg p-4">
                  <p className="text-gray-200 font-quickSand text-sm">
                    {event?.description}
                  </p>
                </div>
              </div>
            </div>

            <div className="font-quickSand my-4 flex justify-center gap-10">
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
                  <button className="border-primary text-primary flex items-center space-x-2 rounded-md border px-4 py-1 text-xs md:text-base">
                    <ShareDropdown text={'Share'} urlToShare={urlToShare} />
                  </button>
                  <button className="border-primary bg-primary text-primaryWhite flex items-center space-x-2 rounded-md border px-4 py-1 text-xs md:text-base">
                    <Link
                      className="flex items-center gap-2"
                      href={event?.organization?.website}
                      target="_blank"
                    >
                      <span>Visit Website</span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 20 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17.2916 9.50031V15.8361C17.2916 16.0461 17.2082 16.2476 17.0597 16.3961C16.9111 16.5446 16.7097 16.6281 16.4997 16.6281H3.8281C3.61806 16.6281 3.41662 16.5446 3.2681 16.3961C3.11957 16.2476 3.03613 16.0461 3.03613 15.8361V3.16453C3.03613 2.95449 3.11957 2.75305 3.2681 2.60452C3.41662 2.456 3.61806 2.37256 3.8281 2.37256H10.1639"
                          stroke="white"
                          strokeWidth="0.791972"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M13.332 2.37256H16.8484C16.966 2.37256 17.0788 2.41928 17.162 2.50246C17.2452 2.58563 17.2919 2.69844 17.2919 2.81606V6.33242"
                          stroke="white"
                          strokeWidth="0.791972"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M17.1651 2.49902L10.1641 9.50005"
                          stroke="white"
                          strokeWidth="0.791972"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                  </button>
                </>
              )}
            </div>
          </div>
        </AnimatePresence>
      )}
    </>
  );
}
