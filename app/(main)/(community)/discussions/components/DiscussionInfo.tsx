'use client'
import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAppContext } from '@/lib/context/app-context';
import useRelativeTime from '@/lib/utils/useRelativeTime';
import { useGET } from '@/lib/hooks/useGET.hook';
import DiscussionDetailsLoader from '../components/DiscussionDetailsLoader';
import CommentForm from '../components/CommentForm';
import CommentList from '../components/CommentList';
import ShareDiscussion from '../components/ShareDiscussion';
import OtherDiscussion from '../components/OtherDiscussions';
import AuthorDetails from './AuthorDetails';
import DiscussionContent from './DiscussionContent';

interface DiscussionInfoProps {
  discussionId: string;
}

const DiscussionInfo: React.FC<DiscussionInfoProps> = ({ discussionId }) => {
  const router = useRouter();
  const { token } = useAppContext();

  const {
    data: discussion,
    isLoading: isDiscussionLoading,
    isError: isDiscussionError,
  } = useGET({
    url: `discussions/${discussionId}`,
    queryKey: ['discussion', discussionId],
    withAuth: false,
    enabled: !!discussionId,
  });

  const {
    data: comments,
    isLoading: isCommentsLoading,
    isError: isCommentsError,
    refetch: refetchComments,
  } = useGET({
    url: `discussions/${discussionId}/comments`,
    queryKey: ['comments', discussionId],
    withAuth: false,
    enabled: !!discussionId,
  });

  const formattedDate = useRelativeTime(discussion?.createdAt);

  if (isDiscussionLoading || !discussion) {
    return <DiscussionDetailsLoader />;
  }

  return (
    <AnimatePresence initial={false} mode="wait">
      <div className="font-sora relative mx-auto my-[2rem] w-full rounded-[1rem] pb-[7rem] pt-8 lg:w-3/4">
        <button
          onClick={router.back}
          className="absolute left-1 top-0 flex w-fit items-center justify-center gap-5 text-btnWarning"
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
        <div className="mx-auto my-auto mt-6 flex w-full flex-col items-center gap-10 px-4">
          <div className="relative grid grid-cols-1 justify-start gap-10 md:grid-cols-2">
            <div className="col-span-1 flex flex-col items-start justify-start gap-4 p-2">
             <div className="md:hidden items-center gap-4 flex">
                <AuthorDetails
                  photoUrl={discussion?.createdBy.photoUrl !== null ? discussion?.createdBy.photoUrl : 'https://placehold.co/400x400?text=Women\n Hub'}
                  name={discussion?.createdBy.name || 'Anonymous'}
                />
              </div>
              <DiscussionContent
                title={discussion?.title}
                content={discussion?.content}
                formattedDate={formattedDate}
                commentsCount={comments?.length || 0}
              />
              <CommentForm
                discussionId={discussionId}
                token={token}
                refetchComments={refetchComments}
              />
              <div className="">
                <h5 className="font-sora font-light text-primary text-base md:text-lg">
                  Comments
                </h5>
                <CommentList discussionId={discussionId} />
              </div>
            </div>
            <div className="col-span-1 flex flex-col items-start justify-start gap-10">
              <div className="hidden items-center gap-4 md:flex">
                <AuthorDetails
                  photoUrl={discussion?.createdBy.photoUrl !== null ? discussion?.createdBy.photoUrl : 'https://placehold.co/400x400?text=Women\n Hub'}
                  name={discussion?.createdBy.name || 'Anonymous'}
                />
              </div>
              <div className="">
                <h5 className="font-sora font-light text-primary text-base md:text-lg">
                  Share this discussion
                </h5>
                <ShareDiscussion
                  shareUrl={window.location.href}
                  shareText={`Check out this awesome link - ${discussion?.title}`}
                />
              </div>
              <div className="">
                <h5 className="font-sora font-light text-primary text-base md:text-lg">
                  Other discussions
                </h5>
                <OtherDiscussion currentDiscussionId={discussionId} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default DiscussionInfo;
