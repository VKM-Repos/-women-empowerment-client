"use client";

import Modal from "@/components/Common/Modal/Modal";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import formatIdToTitle from "@/lib/utils/formatIdToTitle";
import Button from "@/components/Common/Button/Button";
import Link from "next/link";
import DiscussionCardThumbnail from "../../../components/DiscussionCardThumbnail";
import DiscussionDetailsLoader from "../../../components/DiscussionDetailsLoader";
import { useGET } from "@/lib/hooks/useGET.hook";
import { Discussion } from "@/lib/types/discussion.types";
import useRelativeTime from "@/lib/utils/useRelativeTime";
import Icon from "@/components/Common/Icons/Icon";
import DiscussionCardLoader from "../../../components/DiscussionCardLoader";

export default function DiscussionDetailsModal({
  params,
}: {
  params: { id: string };
}) {
  const router = useRouter();

  // fetch lists of discussions
  const {
    data: discussions,
    isError: isDiscussionsError,
    isLoading: isDiscussionsLoading,
  } = useGET({
    url: "/discussions",
    queryKey: ["discussions"],
    withAuth: false,
    enabled: false,
  });

  // Use the matched category's ID to fetch organizations based on category
  const {
    data: discussion,
    isLoading: isDiscussionLoading,
    isError: isDiscussionError,
  } = useGET({
    url: `/discussions/${params?.id}`,
    queryKey: ["discussion", params?.id],
    withAuth: false,
    enabled: !!params?.id,
  });

  // fetch lists of events
  const {
    data: events,
    isLoading: isEventsLoading,
    isError: isEventsError,
  } = useGET({
    url: "/events",
    queryKey: ["events"],
    withAuth: false,
    enabled: true,
  });

  const urlToShare = `https://womenhub.org/organization/${params.id}`;

  const handleFacebookShare = () => {
    const shareUrl = encodeURIComponent(urlToShare);
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`;
    window.open(facebookUrl, "_blank", "width=600,height=400");
  };

  const handleTwitterShare = () => {
    const shareText = encodeURIComponent("Check out this awesome link!");
    const twitterUrl = `https://twitter.com/intent/tweet?text=${shareText}&url=${urlToShare}`;
    window.open(twitterUrl, "_blank", "width=600,height=400");
  };

  const handleLinkedInShare = () => {
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${urlToShare}`;
    window.open(linkedInUrl, "_blank", "width=600,height=400");
  };

  const formattedDate = useRelativeTime(discussion?.createdAt);

  return (
    <Modal onClose={router.back} isOpen={true}>
      <AnimatePresence initial={false} mode="wait">
        {isDiscussionLoading || !discussion ? (
          <DiscussionDetailsLoader />
        ) : (
          <div className="lg:w-3/4 w-full mx-auto bg-[#F6F7F8] py-4 pt-8 rounded-[1rem] relative">
            <button
              onClick={router.back}
              className="w-fit absolute top-0 right-1"
            >
              <svg
                width="27"
                height="27"
                viewBox="0 0 27 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.75488 8.05713L18.6445 18.9467M7.75488 18.9467L18.6445 8.05713"
                  stroke="black"
                  stroke-width="1.58394"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div className="w-full mx-auto flex flex-col gap-10 items-center h-[85vh] md:h-[70vh] my-auto px-4  overflow-y-scroll">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-start">
                <div className="col-span-1 flex flex-col items-start justify-start gap-4 p-2">
                  <h3 className=" text-base md:text-xl font-sora font-bold text-primaryBlack">
                    {discussion.title}
                  </h3>
                  <p className="text-sm font-quickSand text-gray-100">
                    {discussion.content}
                  </p>
                  <div className="flex items-center justify-start gap-4">
                    <p className="text-sm font-sora text-gray-100">
                      {formattedDate}
                    </p>
                    <p className="text-sm font-light font-sora text-primary flex items-center justify-center gap-1">
                      <Icon name="comment-icon" className="w-4 aspect-square" />

                      <span>11 comments</span>
                    </p>
                    {/* <span>{discussions.comments} comments</span></p> */}
                  </div>
                  <div className="w-full grid grid-cols-8 gap-2">
                    <Image
                      src={
                        discussion?.createdBy.photoUrl ||
                        "https://placehold.co/400x400?text=Women\nHub"
                      }
                      alt={`user`}
                      width={100}
                      height={100}
                      // layout="responsive"
                      className="col-span-1 h-full aspect-square rounded-full object-contain"
                    />
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Add comment"
                      // value={searchTerm}
                      // onChange={handleSearchInputChange}
                      className=" col-span-7 py-3 font-quickSand border border-gray-500 bg-primaryWhite rounded-l text-base text-gray-100 focus:outline-btnWarning p-2 "
                    />
                  </div>
                  <div className="w-full flex justify-end">
                    <Button
                      label="Add"
                      variant="primary"
                      size="medium"
                      state="active"
                      fullWidth={false}
                      onClick={() => {}}
                    />
                  </div>

                  <h5 className="font-sora">Comments</h5>
                  {[1, 2, 3, 4, 5, 6].map((item) => (
                    <div
                      key={item}
                      className="w-full grid grid-cols-8 gap-2 p-2"
                    >
                      <Image
                        src={
                          discussion?.image ||
                          "https://placehold.co/300x300/png"
                        }
                        alt={`discussion post`}
                        width={100}
                        height={100}
                        // layout="responsive"
                        className="col-span-1 h-full aspect-square rounded-full object-contain"
                      />
                      <div className="col-span-7 flex flex-col gap-1">
                        <p className="text-xs font-quickSand text-gray-100">
                          {discussion.title}
                        </p>
                        <div className="w-full flex items-center justify-start gap-4">
                          <p className="text-xs font-sora text-gray-100">
                            {formattedDate}
                          </p>
                          <p className="text-sm font-sora text-primary flex items-center justify-center gap-1">
                            <Icon
                              name="comment-icon"
                              className="w-4 aspect-square"
                            />

                            <span className="text-xs">
                              {discussions.comments} comments
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="col-span-1 flex flex-col items-start justify-start gap-5">
                  <div className=" flex items-center gap-4">
                    <Image
                      src={
                        discussion.image || "https://placehold.co/600x600/png"
                      }
                      alt={discussion.title}
                      width={100}
                      height={100}
                      objectFit="cover"
                      className="w-[3rem] aspect-square rounded-full border border-gray-500"
                    />
                    <h5 className="text-gray-200 font-semibold font-sora text-base">
                      {discussion?.createdBy?.name || "Anonymous"}
                    </h5>
                  </div>
                  <h5 className="font-sora">Share this discussion</h5>
                  <div className="flex  items-center justify-center w-auto gap-2 text-primaryWhite">
                    <button onClick={handleFacebookShare}>
                      <svg
                        className="w-8 aspect-square rounded-full bg-info"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21.6571 20.3648H25.3793L25.9637 16.5605H21.6563V14.4813C21.6563 12.901 22.1696 11.4996 23.6389 11.4996H26V8.17974C25.5852 8.12338 24.7078 8 23.05 8C19.5882 8 17.5587 9.8393 17.5587 14.0297V16.5605H14V20.3648H17.5587V30.821C18.2634 30.9276 18.9773 31 19.7101 31C20.3724 31 21.0189 30.9391 21.6571 30.8522V20.3648Z"
                          fill="currentColor"
                        />
                      </svg>
                    </button>

                    <button onClick={handleTwitterShare}>
                      <svg
                        className="w-8 aspect-square rounded-full bg-info"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M30.6 14.9C29.9 15.2 29.1 15.4 28.3 15.5C29.1 15 29.8 14.2 30.1 13.3C29.3 13.8 28.5 14.1 27.5 14.3C26.8 13.5 25.7 13 24.6 13C22.4 13 20.6 14.8 20.6 17C20.6 17.3 20.6 17.6 20.7 17.9C17.4 17.7 14.4 16.1 12.4 13.7C12.1 14.3 11.9 15 11.9 15.7C11.9 17.1 12.6 18.3 13.7 19C13 19 12.4 18.8 11.9 18.5C11.9 20.4 13.3 22.1 15.1 22.4C14.8 22.5 14.4 22.5 14 22.5C13.7 22.5 13.5 22.5 13.2 22.4C13.7 24 15.2 25.2 17 25.2C15.6 26.3 13.9 26.9 12 26.9C11.7 26.9 11.4 26.9 11 26.8C12.8 27.9 14.9 28.6 17.2 28.6C24.6 28.6 28.6 22.5 28.6 17.2V16.7C29.4 16.4 30.1 15.7 30.6 14.9Z"
                          fill="currentColor"
                        />
                      </svg>
                    </button>

                    <button onClick={handleLinkedInShare}>
                      <svg
                        className="w-8 aspect-square rounded-full bg-info"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M28 20.7444V26.2601H24.7713V21.0807C24.7713 19.8027 24.3004 18.9283 23.157 18.9283C22.2825 18.9283 21.7444 19.5336 21.5426 20.0718C21.4753 20.2735 21.4081 20.5426 21.4081 20.8789V26.2601H18.1794C18.1794 26.2601 18.2466 17.5157 18.1794 16.6413H21.4081V17.9865C21.8117 17.3139 22.6188 16.3722 24.3004 16.3722C26.3856 16.3722 28 17.7848 28 20.7444ZM14.8161 12C13.7399 12 13 12.7399 13 13.6816C13 14.6233 13.6726 15.3632 14.7489 15.3632C15.8924 15.3632 16.565 14.6233 16.565 13.6816C16.6323 12.6726 15.9596 12 14.8161 12ZM13.2018 26.2601H16.4305V16.6413H13.2018V26.2601Z"
                          fill="currentColor"
                        />
                      </svg>
                    </button>
                  </div>
                  <h5 className="font-sora">Other discussions</h5>
                  <div>
                    {isDiscussionsError && <p>Error fetching list</p>}

                    {isDiscussionsLoading ? (
                      [1, 2, 3, 4, 5, 6].map((item: any) => (
                        <DiscussionCardLoader key={item?.id} />
                      ))
                    ) : !isDiscussionsLoading &&
                      !isDiscussionsError &&
                      discussions?.content?.length === 0 ? (
                      <p className="no-result">No discussions yet</p>
                    ) : (
                      <>
                        {discussions?.content?.map((item: Discussion) => (
                          <DiscussionCardThumbnail
                            key={item?.id}
                            discussion={item}
                          />
                        ))}
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </Modal>
  );
}
