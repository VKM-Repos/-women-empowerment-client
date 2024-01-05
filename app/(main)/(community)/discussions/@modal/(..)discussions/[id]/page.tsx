'use client'

import Modal from "@/components/Common/Modal/Modal";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import db from "@/data/db.json";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import formatIdToTitle from "@/lib/utils/formatIdToTitle";
import Button from "@/components/Common/Button/Button";
import Link from "next/link";
import DiscussionCardThumbnail from "../../../components/DiscussionCardThumbnail";
import DiscussionDetailsLoader from "../../../components/DiscussionDetailsLoader";


export default function DiscussionDetailsModal({ params }: { params: { id: string } }) {
  const [discussions, setDiscussions] = useState<any | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  // Use the hook to format the ID
  const formattedId = formatIdToTitle(params.id);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        // Simulating an asynchronous API call
        const response = await new Promise<{ data: any[] }>((resolve) =>
          setTimeout(() => resolve({ data: db.discussions }), 1000)
        );

        // Find the event based on the formatted ID
        const foundDiscussion = response.data.find(
          (discussion) => formatIdToTitle(discussion.title).toLowerCase() === formattedId
        );

        // Set the event and loading state
        setDiscussions(foundDiscussion);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching discussion:", error);
        setIsLoading(false);
      }
    };

    fetchEvent();
  }, [formattedId]);
  return (
    <Modal onClose={router.back} isOpen={true}>
      <AnimatePresence initial={false} mode="wait">
      {isLoading || !discussions ? (
        <DiscussionDetailsLoader discussion={discussions} />
      ) : (
          <div className="w-3/4 mx-auto bg-primaryWhite flex flex-col gap-10 items-center h-[85vh] p-4 rounded-[1rem] relative overflow-y-scroll">
            <button onClick={router.back} className="absolute top-5 right-5">
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
                  strokeWidth="1.58394"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div className="grid grid-cols-2 gap-10">
              <div className="col-span-1 flex flex-col items-start justify-start gap-4 p-2">
                  <h3 className=" text-base md:text-xl font-bold text-primaryBlack">{`"${discussions.title}"`}</h3>
                  <p className="text-sm font-light text-gray-100">{discussions.description}</p>
                  <div className="flex items-center justify-start gap-4">
                    <p className="text-sm font-light text-gray-100">{discussions.createdAt}</p>
                    <p className="text-sm font-light text-primary flex items-center justify-center gap-1">
                      <svg className="w-4 aspect-square" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.48627 2.3877C7.55772 2.3877 6.63825 2.57059 5.78038 2.92593C4.92251 3.28127 4.14302 3.80211 3.48644 4.45869C2.1604 5.78473 1.41544 7.58323 1.41544 9.45853C1.40926 11.0913 1.97459 12.6747 3.01345 13.9344L1.59928 15.3485C1.50117 15.448 1.4347 15.5742 1.40828 15.7114C1.38185 15.8486 1.39664 15.9905 1.45079 16.1193C1.50952 16.2465 1.60473 16.3534 1.72432 16.4264C1.84392 16.4994 1.98252 16.5353 2.12252 16.5294H8.48627C10.3616 16.5294 12.1601 15.7844 13.4861 14.4584C14.8121 13.1323 15.5571 11.3338 15.5571 9.45853C15.5571 7.58323 14.8121 5.78473 13.4861 4.45869C12.1601 3.13266 10.3616 2.3877 8.48627 2.3877ZM8.48627 15.1152H3.82659L4.48418 14.4576C4.61587 14.3251 4.68979 14.1459 4.68979 13.9591C4.68979 13.7723 4.61587 13.5931 4.48418 13.4606C3.55831 12.5358 2.98175 11.3185 2.85272 10.0163C2.72369 8.714 3.05017 7.40728 3.77655 6.31874C4.50293 5.2302 5.58425 4.42718 6.8363 4.04649C8.08835 3.66581 9.43366 3.73102 10.643 4.231C11.8524 4.73099 12.851 5.63482 13.4687 6.7885C14.0864 7.94219 14.285 9.27436 14.0306 10.558C13.7762 11.8417 13.0847 12.9975 12.0737 13.8285C11.0627 14.6594 9.79492 15.1142 8.48627 15.1152Z" fill="#65B891"/>
                        <path d="M8.48627 2.3877C7.55772 2.3877 6.63825 2.57059 5.78038 2.92593C4.92251 3.28127 4.14302 3.80211 3.48644 4.45869C2.1604 5.78473 1.41544 7.58323 1.41544 9.45853C1.40926 11.0913 1.97459 12.6747 3.01345 13.9344L1.59928 15.3485C1.50117 15.448 1.4347 15.5742 1.40828 15.7114C1.38185 15.8486 1.39664 15.9905 1.45079 16.1193C1.50952 16.2465 1.60473 16.3534 1.72432 16.4264C1.84392 16.4994 1.98252 16.5353 2.12252 16.5294H8.48627C10.3616 16.5294 12.1601 15.7844 13.4861 14.4584C14.8121 13.1323 15.5571 11.3338 15.5571 9.45853C15.5571 7.58323 14.8121 5.78473 13.4861 4.45869C12.1601 3.13266 10.3616 2.3877 8.48627 2.3877ZM8.48627 15.1152H3.82659L4.48418 14.4576C4.61587 14.3251 4.68979 14.1459 4.68979 13.9591C4.68979 13.7723 4.61587 13.5931 4.48418 13.4606C3.55831 12.5358 2.98175 11.3185 2.85272 10.0163C2.72369 8.714 3.05017 7.40728 3.77655 6.31874C4.50293 5.2302 5.58425 4.42718 6.8363 4.04649C8.08835 3.66581 9.43366 3.73102 10.643 4.231C11.8524 4.73099 12.851 5.63482 13.4687 6.7885C14.0864 7.94219 14.285 9.27436 14.0306 10.558C13.7762 11.8417 13.0847 12.9975 12.0737 13.8285C11.0627 14.6594 9.79492 15.1142 8.48627 15.1152Z" fill="black" fillOpacity="0.2"/>
                      </svg>

                      <span>{discussions.comments} comments</span></p>
                  </div>
                  <div className="w-full grid grid-cols-8 gap-2">
                    <Image
                      src={
                        discussions?.image || "../../../../public/images/group-of-girls.png"
                      }
                      alt={`discussion post`}
                      width={100}
                      height={100}
                      // layout="responsive"
                      className="col-span-1 w-full aspect-square rounded-full object-contain"
                    />
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Add comment"
                      // value={searchTerm}
                      // onChange={handleSearchInputChange}
                      className=" col-span-7 py-3 border border-gray-500 bg-primaryWhite rounded-l text-base text-gray-100 focus:outline-btnWarning p-2 "  
                />
                  </div>
                  <div className="w-full flex justify-end">
                    <Button label="Add" variant="primary" size="medium" state="active" fullWidth={false} onClick={() => {}} />
                  </div>

                  <h5>Comments</h5>
                  {[1,2,3,4,5,6].map((item) => (
                    <div key={item} className="w-full grid grid-cols-8 gap-2 p-2">
                      <Image
                        src={
                          discussions?.image || "../../../../public/images/group-of-girls.png"
                        }
                        alt={`discussion post`}
                        width={100}
                        height={100}
                        // layout="responsive"
                        className="col-span-1 w-full aspect-square rounded-full object-contain"
                      />
                      <div className="col-span-7 flex flex-col gap-1">
                          <p className="text-xs font-light text-gray-100">{discussions.description}</p>
                          <div className="w-full flex items-center justify-start gap-4">
                            <p className="text-xs font-light text-gray-100">{discussions.createdAt}</p>
                            <p className="text-sm font-light text-primary flex items-center justify-center gap-1">
                              <svg className="w-4 aspect-square" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.48627 2.3877C7.55772 2.3877 6.63825 2.57059 5.78038 2.92593C4.92251 3.28127 4.14302 3.80211 3.48644 4.45869C2.1604 5.78473 1.41544 7.58323 1.41544 9.45853C1.40926 11.0913 1.97459 12.6747 3.01345 13.9344L1.59928 15.3485C1.50117 15.448 1.4347 15.5742 1.40828 15.7114C1.38185 15.8486 1.39664 15.9905 1.45079 16.1193C1.50952 16.2465 1.60473 16.3534 1.72432 16.4264C1.84392 16.4994 1.98252 16.5353 2.12252 16.5294H8.48627C10.3616 16.5294 12.1601 15.7844 13.4861 14.4584C14.8121 13.1323 15.5571 11.3338 15.5571 9.45853C15.5571 7.58323 14.8121 5.78473 13.4861 4.45869C12.1601 3.13266 10.3616 2.3877 8.48627 2.3877ZM8.48627 15.1152H3.82659L4.48418 14.4576C4.61587 14.3251 4.68979 14.1459 4.68979 13.9591C4.68979 13.7723 4.61587 13.5931 4.48418 13.4606C3.55831 12.5358 2.98175 11.3185 2.85272 10.0163C2.72369 8.714 3.05017 7.40728 3.77655 6.31874C4.50293 5.2302 5.58425 4.42718 6.8363 4.04649C8.08835 3.66581 9.43366 3.73102 10.643 4.231C11.8524 4.73099 12.851 5.63482 13.4687 6.7885C14.0864 7.94219 14.285 9.27436 14.0306 10.558C13.7762 11.8417 13.0847 12.9975 12.0737 13.8285C11.0627 14.6594 9.79492 15.1142 8.48627 15.1152Z" fill="#65B891"/>
                                <path d="M8.48627 2.3877C7.55772 2.3877 6.63825 2.57059 5.78038 2.92593C4.92251 3.28127 4.14302 3.80211 3.48644 4.45869C2.1604 5.78473 1.41544 7.58323 1.41544 9.45853C1.40926 11.0913 1.97459 12.6747 3.01345 13.9344L1.59928 15.3485C1.50117 15.448 1.4347 15.5742 1.40828 15.7114C1.38185 15.8486 1.39664 15.9905 1.45079 16.1193C1.50952 16.2465 1.60473 16.3534 1.72432 16.4264C1.84392 16.4994 1.98252 16.5353 2.12252 16.5294H8.48627C10.3616 16.5294 12.1601 15.7844 13.4861 14.4584C14.8121 13.1323 15.5571 11.3338 15.5571 9.45853C15.5571 7.58323 14.8121 5.78473 13.4861 4.45869C12.1601 3.13266 10.3616 2.3877 8.48627 2.3877ZM8.48627 15.1152H3.82659L4.48418 14.4576C4.61587 14.3251 4.68979 14.1459 4.68979 13.9591C4.68979 13.7723 4.61587 13.5931 4.48418 13.4606C3.55831 12.5358 2.98175 11.3185 2.85272 10.0163C2.72369 8.714 3.05017 7.40728 3.77655 6.31874C4.50293 5.2302 5.58425 4.42718 6.8363 4.04649C8.08835 3.66581 9.43366 3.73102 10.643 4.231C11.8524 4.73099 12.851 5.63482 13.4687 6.7885C14.0864 7.94219 14.285 9.27436 14.0306 10.558C13.7762 11.8417 13.0847 12.9975 12.0737 13.8285C11.0627 14.6594 9.79492 15.1142 8.48627 15.1152Z" fill="black" fillOpacity="0.2"/>
                              </svg>

                              <span className="text-xs">{discussions.comments} comments</span></p>
                          </div>
                      </div>
                    </div>
                  ))}
              </div>

              <div className="col-span-1 flex flex-col items-start justify-start gap-5">
                <div className=" flex items-center gap-4">
                    <Image
                      src={discussions.image}
                      alt={discussions.title}
                      width={100}
                      height={100}
                      objectFit="cover"
                      className="w-[3rem] aspect-square rounded-full border border-gray-500"
                    />
                    <h5 className="text-gray-200 font-semibold text-base">
                      Women in tech
                    </h5>
                  </div>
                  <h5>Share this discussion</h5>
                  <div className="flex  items-center justify-center w-auto gap-2 text-primaryWhite">
                    <Link href="#">
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
                    </Link>

                    <Link href="#">
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
                    </Link>

                    <Link href="#">
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
                    </Link>
                  </div>
                  <h5>Other discussions</h5>
                  <div>
                    {db.discussions && isLoading
                    ? <>Loading...</>
                    : db.discussions?.map((item: any) => (
                        <DiscussionCardThumbnail key={item?.id} discussion={item} />
                      ))}
                  </div>
              </div>
            </div>
          </div>
        )}
        </AnimatePresence>
    </Modal>
  )
}