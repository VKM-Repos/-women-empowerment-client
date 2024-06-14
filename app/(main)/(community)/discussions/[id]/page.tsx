'use client';

import { AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Button from '@/components/Common/Button/Button';
import DiscussionCardThumbnail from '../components/DiscussionCardThumbnail';
import DiscussionDetailsLoader from '../components/DiscussionDetailsLoader';
import { useAppContext } from '@/lib/context/app-context';
import useRelativeTime from '@/lib/utils/useRelativeTime';
import axios from 'axios';
import toast from 'react-hot-toast';
import { SubmitHandler, useForm } from 'react-hook-form';
import DiscussionCardLoader from '../components/DiscussionCardLoader';
import { Comment, Discussion } from '@/lib/types/discussion.types';
import CommentCard from '../components/CommentCard';
import NoContent from '@/components/EmptyStates/NoContent';
import Icon from '@/components/Common/Icons/Icon';
import { useGET } from '@/lib/hooks/useGET.hook';
import ImageWithFallback from '@/components/Common/ImageWithFallBack';
import Facebook from '@/components/Common/Icons/social-media-icons/Facebook';
import Twitter from '@/components/Common/Icons/social-media-icons/Twitter';
import LinkedIn from '@/components/Common/Icons/social-media-icons/LinkedIn';

export default function DiscussionDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const router = useRouter();
  const { isAuthenticated, token } = useAppContext();
  const [isLoading, setIsLoading] = useState(false);

  // fetch lists of discussions
  const {
    data: discussions,
    isError: isDiscussionsError,
    isLoading: isDiscussionsLoading,
  } = useGET({
    url: 'discussions',
    queryKey: ['discussions'],
    withAuth: false,
    enabled: false,
  });

  const {
    data: discussion,
    isLoading: isDiscussionLoading,
    isError: isDiscussionError,
  } = useGET({
    url: `discussions/${params?.id}`,
    queryKey: ['discussion', params?.id],
    withAuth: false,
    enabled: !!params?.id,
  });

  const {
    data: comments,
    isLoading: isCommentsLoading,
    isError: isCommentsError,
    refetch: refetchComments,
  } = useGET({
    url: `discussions/${params?.id}/comments`,
    queryKey: ['comments', params?.id],
    withAuth: false,
    enabled: !!params?.id,
  });

  const urlToShare = `https://womenhub.org/discussions/${params.id}`;

  const handleFacebookShare = () => {
    const shareUrl = encodeURIComponent(urlToShare);
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`;
    window.open(facebookUrl, '_blank', 'width=600,height=400');
  };

  const handleTwitterShare = () => {
    const shareText = encodeURIComponent(
      `Check out this awesome link - ${discussion.title}`
    );
    const twitterUrl = `https://twitter.com/intent/tweet?text=${shareText}&url=${urlToShare}`;
    window.open(twitterUrl, '_blank', 'width=600,height=400');
  };

  const handleLinkedInShare = () => {
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${urlToShare}`;
    window.open(linkedInUrl, '_blank', 'width=600,height=400');
  };

  const formattedDate = useRelativeTime(discussion?.createdAt);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isDirty, isValid },
  } = useForm<{ content: string }>({
    defaultValues: {
      content: '',
    },
  });

  const addComment: SubmitHandler<{ content: string }> = async data => {
    setIsLoading(true);
    if (!isAuthenticated) {
      toast.error('You must be logged in to comment.');
      // throw new Error("User is not authenticated");
      setIsLoading(false);
    } else {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL;
        const endpoint = `${apiUrl}discussions/${params?.id}/comments`;

        const formData = new FormData();
        formData.append('content', data.content);

        const response: any = await axios.post(endpoint, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (response.status === 200) {
          toast.success('comment added!');
          refetchComments();
        } else {
          toast.error(` ${response?.status}`);
        }
      } catch (error: any) {
        toast.error(`Error: ${error.response.statusText}`);
      } finally {
        setIsLoading(false);
        reset();
        refetchComments();
      }
    }
  };

  return (
    <AnimatePresence initial={false} mode="wait">
      {isDiscussionLoading || !discussions ? (
        <DiscussionDetailsLoader />
      ) : (
        <div className="font-sora relative mx-auto my-[2rem]  w-full rounded-[1rem] pb-[7rem] pt-8 lg:w-3/4">
          <button
            onClick={router.back}
            className="text-btnWarning absolute left-1 top-0 flex w-fit items-center justify-center gap-5 "
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
                <div className=" flex items-center gap-4 md:hidden">
                  <span className="aspect-square w-[2.5rem] overflow-hidden rounded-full md:w-[3.5rem]">
                    <ImageWithFallback
                      src={discussion?.createdBy.photoUrl}
                      fallbackSrc={
                        'https://placehold.co/500x500?text=Women\n Hub'
                      }
                      aspectRatio={{ width: 1, height: 1 }}
                      alt={discussion.createdBy.name}
                      className=""
                    />
                  </span>
                  <h5 className="text-gray-200 font-sora text-base font-semibold">
                    {discussion?.createdBy?.name || 'Anonymous'}
                  </h5>
                </div>
                <h3 className=" font-sora text-primaryBlack text-lg font-bold md:text-2xl">
                  {discussion?.title}
                </h3>
                <p className="font-quickSand text-gray-100 text-base font-semibold">
                  {discussion?.content}
                </p>
                <div className="flex items-center justify-start gap-4">
                  <p className="font-quickSand text-gray-400 text-sm font-semibold">
                    {formattedDate}
                  </p>
                  <p className="font-light font-sora text-primary flex items-center justify-center gap-1 text-sm">
                    <Icon name="comment-icon" className="aspect-square w-4" />

                    <span>
                      {comments?.length}{' '}
                      {comments?.length <= 1 ? 'comment' : 'comments'}
                    </span>
                  </p>
                  {/* <span>{discussions.comments} comments</span></p> */}
                </div>
                <form
                  onSubmit={handleSubmit(addComment)}
                  className="flex w-full flex-col gap-2"
                >
                  <fieldset className="grid w-full grid-cols-8 items-center gap-4">
                    <span className="col-span-1 aspect-square w-[2.5rem] overflow-hidden rounded-full md:w-[3.5rem]">
                      <ImageWithFallback
                        src={discussion?.createdBy.photoUrl}
                        fallbackSrc={
                          'https://placehold.co/100x100?text=Women\n Hub'
                        }
                        aspectRatio={{ width: 100, height: 100 }}
                        alt={discussion.createdBy.name}
                        className=""
                      />
                    </span>
                    <input
                      type="text"
                      id=""
                      placeholder="Add comment"
                      {...register('content', {
                        required: 'This field is required',
                      })}
                      className=" font-quickSand border-gray-500 bg-primaryWhite text-gray-100 focus:outline-btnWarning col-span-7 rounded-l border p-2 py-3 text-base "
                    />
                    {errors?.content?.message && (
                      <p className="text-error mt-1 text-sm">
                        {errors?.content?.message}
                      </p>
                    )}
                  </fieldset>
                  <div className="flex w-full justify-end">
                    <Button
                      label={isLoading ? 'please wait...' : 'Add'}
                      variant="primary"
                      size="medium"
                      fullWidth={false}
                      state={isValid ? 'active' : 'disabled'}
                      disabled={isLoading}
                    />
                  </div>
                </form>

                <div className="">
                  <h5 className="font-sora font-light text-primary text-base md:text-lg">
                    Comments
                  </h5>
                  <br />
                  {isCommentsError && <p>Error fetching comments</p>}

                  {isCommentsLoading ? (
                    <>loading...</>
                  ) : !isCommentsLoading &&
                    !isCommentsError &&
                    comments?.length === 0 ? (
                    <p className="text-gray-300">
                      No comments yet. Be the first to leave a comment!
                    </p>
                  ) : (
                    <div className="flex flex-col gap-10">
                      {comments?.map((comment: Comment) => (
                        <CommentCard key={comment?.id} comment={comment} />
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/*2nd col */}
              <div className="col-span-1 flex flex-col items-start justify-start gap-10">
                <div className=" hidden items-center gap-4 md:flex">
                  <span className="aspect-square w-[2.5rem] overflow-hidden rounded-full md:w-[3.5rem]">
                    <ImageWithFallback
                      src={discussion?.createdBy.photoUrl}
                      fallbackSrc={
                        'https://placehold.co/100x100?text=Women\n Hub'
                      }
                      aspectRatio={{ width: 100, height: 100 }}
                      alt={discussion.createdBy.name}
                      className=""
                    />
                  </span>
                  <h5 className="text-gray-200 font-sora text-base font-semibold">
                    {discussion?.createdBy?.name || 'Anonymous'}
                  </h5>
                </div>

                <div className="">
                  <h5 className="font-sora font-light text-primary text-base md:text-lg">
                    Share this discussion
                  </h5>
                  <span className="text-primaryWhite  flex w-auto items-center justify-start gap-2">
                    <button className='bg-info aspect-square w-10 rounded-full flex items-center justify-center' onClick={handleFacebookShare}>
                      <Facebook size="34" />
                    </button>

                    <button className='bg-info aspect-square w-10 rounded-full flex items-center justify-center' onClick={handleTwitterShare}>
                      <Twitter size="35" />
                    </button>

                    <button className='bg-info aspect-square w-10 rounded-full flex items-center justify-center' onClick={handleLinkedInShare}>
                      <LinkedIn size="35" />
                    </button>
                  </span>
                </div>
                <div className="">
                  <h5 className="font-sora font-light text-primary text-base md:text-lg">
                    Other discussions
                  </h5>
                  <div>
                    {isDiscussionsError && <p>Error fetching list</p>}
                    {isDiscussionsLoading ? (
                      [1, 2, 3, 4, 5, 6, 7].map((item: any) => (
                        <DiscussionCardLoader key={item?.id} />
                      ))
                    ) : !isDiscussionsLoading &&
                      !isDiscussionsError &&
                      discussions?.content?.length === 0 ? (
                      <p className="no-result">No discussions yet</p>
                    ) : (
                      <>
                        {discussions?.content?.slice(0, 7).map(
                          (item: Discussion) =>
                            // Exclude the current discussion from the list
                            item.id != params.id && (
                              <DiscussionCardThumbnail
                                key={item?.id}
                                discussion={item}
                              />
                            )
                        )}
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}

// export async function generateStaticParams() {
//     return posts.map((post) => ({
//         params: {
//             postId: post.id,
//         },
//     }));
// }
