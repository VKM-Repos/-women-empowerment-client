"use client";
import React, { useEffect, useRef, useState } from "react";

import db from "@/data/db.json";
import EventCard from "../../(community)/discussions/components/EventCard";
import NewsCard from "../../(community)/discussions/components/NewsCard";
import { useGET } from "@/lib/hooks/useGET.hook";
import { Event } from "@/lib/types/events.types";
import EventCardLoader from "../../events/components/EventCardLoader";
import Link from "next/link";
import { usePATCH } from "@/lib/hooks/usePATCH.hook";
import { TransitionParent } from "@/lib/utils/transition";
import LoadingThinkingWomen from "@/components/Common/Loaders/LoadingThinkingWomen";
import { usePOST } from "@/lib/hooks/usePOST.hook";
import { useAppContext } from "@/lib/context/app-context";

export default function ProfilePage({ params }: { params: { id: string } }) {
  const { user } = useAppContext();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    bio: "",
  });
  const inputRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | string>("");
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [contentType, setContentType] = useState<any>("");

  const { mutate: updateImage, isPending: updatingUserImage } = usePATCH(
    `user/photo`,
    true,
    undefined,
    contentType
  );

  const userId = params?.id;
  const {
    data: userDetails,
    isLoading: isUserLoading,
    isError: isUserError,
    refetch,
  } = useGET({
    url: `/user`,
    queryKey: ["USER_DETAILS_PROFILE", userId],
    withAuth: true,
    enabled: true,
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

  const { mutate, isPending: updatingUser } = usePOST(
    `user/update-profile`,
    true
  );

  useEffect(() => {
    setFormData({
      name: userDetails?.name,
      email: userDetails?.email,
      bio: userDetails?.bio,
    });
  }, [userDetails]);

  const handleOnChange = (event: any) => {
    const { name, value } = event?.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  };

  const handleUpdateProfile = (event: any) => {
    event?.preventDefault();
    // setContentType("application/json");
    mutate(formData, {
      onSuccess: () => {
        refetch();
      },
      onError: (error) => {
        console.log(error);
      },
    });
  };

  const handleChooseFile = () => {
    inputRef.current?.click();
  };
  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const imageFile = e.target.files?.[0];

    if (imageFile) {
      // Update the logo in the store with the URL
      const imageUrl = URL.createObjectURL(imageFile);
      setImagePreview(imageUrl);
      setSelectedFile(imageFile);
    }
  };
  const handleUpdateImage = (event: any) => {
    event.preventDefault();
    setContentType("multipart/form-data");
    let formData = new FormData();
    formData.append("photo", selectedFile);
    console.log(selectedFile);

    updateImage(formData, {
      onSuccess: () => {
        setSelectedFile("");
        setImagePreview(null);
        refetch();
      },
      onError: (error) => {
        console.log(error);
      },
    });
  };

  return (
    <TransitionParent>
      {updatingUser || isEventsLoading || isUserLoading || updatingUserImage ? (
        <LoadingThinkingWomen />
      ) : (
        <section className="bg-white flex flex-col items-center mb-[250px]">
          <div className="justify-between z-[1] w-full max-w-[1300px] mt-14 max-md:max-w-full max-md:mt-10">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[66%] max-md:w-full max-md:ml-0">
                <div className="bg-white flex flex-col w-full pt-11 pb-5 px-20 rounded-2xl border border-stone-800 border-solid border-black border-opacity-10 max-md:max-w-full max-md:mt-10 max-md:px-5">
                  <div className="items-stretch flex justify-between gap-5 self-start">
                    <div className="bg-white flex grow basis-[0%] flex-col justify-center items-center rounded-[105px]">
                      <div className="flex-col group overflow-hidden relative flex aspect-square justify-center items-center px-16 py-12 rounded-[50%] max-md:px-5">
                        <form action="" onSubmit={handleUpdateImage}>
                          <input
                            ref={inputRef}
                            type="file"
                            onChange={handleImageChange}
                            name="image"
                            className="hidden"
                            accept="image/*"
                          />
                          <img
                            loading="lazy"
                            src={
                              imagePreview ||
                              userDetails?.photoUrl ||
                              "https://placehold.co/400x400?text=Women\n Hub"
                            }
                            className="absolute h-full w-full object-cover object-center inset-0 group-hover:-z-10"
                          />
                          <div className="flex flex-col items-center gap-2 justify-center ">
                            <svg
                              onClick={handleChooseFile}
                              className="group-hover:z-10 cursor-pointer"
                              width="40"
                              height="38"
                              viewBox="0 0 50 48"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clipPath="url(#clip0_5601_32761)">
                                <rect
                                  x="1"
                                  width="48"
                                  height="48"
                                  rx="8"
                                  fill="#1F1F1F"
                                />
                                <path
                                  d="M15.6667 33.3327H17.5333L29.0333 21.8327L27.1667 19.966L15.6667 31.466V33.3327ZM34.7333 19.8993L29.0667 14.2993L30.9333 12.4327C31.4444 11.9216 32.0724 11.666 32.8173 11.666C33.5613 11.666 34.1889 11.9216 34.7 12.4327L36.5667 14.2993C37.0778 14.8105 37.3444 15.4273 37.3667 16.15C37.3889 16.8718 37.1444 17.4882 36.6333 17.9993L34.7333 19.8993ZM14.3333 35.9993C13.9556 35.9993 13.6391 35.8713 13.384 35.6153C13.128 35.3602 13 35.0438 13 34.666V30.8993C13 30.7216 13.0333 30.5496 13.1 30.3833C13.1667 30.2162 13.2667 30.066 13.4 29.9327L27.1333 16.1993L32.8 21.866L19.0667 35.5993C18.9333 35.7327 18.7836 35.8327 18.6173 35.8993C18.4502 35.966 18.2778 35.9993 18.1 35.9993H14.3333ZM28.1 20.8993L27.1667 19.966L29.0333 21.8327L28.1 20.8993Z"
                                  fill="white"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_5601_32761">
                                  <rect width="50" height="48" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                            {selectedFile && (
                              <button className="bg-gray-100 text-white-100 text-xs font-light px-2 py-1 rounded-md">
                                Update
                              </button>
                            )}
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="items-stretch font-sora justify-start flex grow basis-[0%] flex-col my-auto">
                      <div className="text-green-800 text-2xl tracking-wide whitespace-nowrap">
                        My Profile
                      </div>
                      <button className="text-green-300 text-sm tracking-normal underline mt-4">
                        View profile
                      </button>
                    </div>
                  </div>
                  <form action="" onSubmit={handleUpdateProfile}>
                    <div className="flex flex-col gap-5 mt-10">
                      <div className="flex items-center gap-5">
                        <label className="font-sora flex-[0.3]" htmlFor="">
                          Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          onChange={handleOnChange}
                          value={formData?.name}
                          className="font-quickSand flex-1 border border-stone-800 border-solid border-black border-opacity-10 px-10 py-3 focus:outline-none rounded-md w-full"
                          placeholder="Sarah Bling"
                        />
                      </div>
                      <div className="flex items-center gap-5">
                        <label className="font-sora flex-[0.3]" htmlFor="">
                          Email
                        </label>
                        <input
                          type="text"
                          name="email"
                          onChange={handleOnChange}
                          value={formData?.email}
                          className="font-quickSand flex-1 border border-stone-800 border-solid border-black border-opacity-10 px-10 py-3 focus:outline-none rounded-md w-full"
                          placeholder="sarahbling@gmail.com"
                        />
                      </div>
                      <div className="flex gap-5">
                        <div className="text-black flex-[0.3]">Bio</div>
                        <textarea
                          name="bio"
                          onChange={handleOnChange}
                          value={formData?.bio}
                          className="font-quickSand flex-1 border border-stone-800 border-solid border-black border-opacity-10 rounded-md w-full px-9 py-3 h-[180px] focus:outline-none"
                        ></textarea>
                      </div>
                      <button className="text-white-100 text-center text-base font-medium font-sora whitespace-nowrap justify-center items-stretch rounded bg-green-800 self-center mt-6 px-8 py-3.5 max-md:px-5">
                        Update
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[34%] ml-5 max-md:w-full max-md:ml-0">
                <div className="items-center flex grow flex-col px-5 py-0.5 max-md:mt-10">
                  <div className="self-stretch flex flex-col items-stretch px-7 max-md:px-5">
                    <div className="text-green-800 text-lg font-bold max-w-[393px]">
                      EVENTS
                    </div>
                    <div className="bg-neutral-200 w-[366px] shrink-0 max-w-full h-px mt-4" />
                  </div>
                  {isEventsLoading &&
                    [1, 2, 3, 4].map((event: any, id: number) => (
                      <EventCardLoader key={id} />
                    ))}

                  {isEventsError && <p>Error fetching Events</p>}
                  {!isEventsLoading &&
                    !isEventsError &&
                    events?.content.length === 0 && <p>No Events yet</p>}

                  {!isEventsLoading && !isEventsError && (
                    <div className="w-full md:w-[95%] mx-auto flex justify-center flex-wrap ">
                      {Array.isArray(events?.content) &&
                        events?.content.map((event: Event) => (
                          <EventCard key={event.id} event={event} />
                        ))}
                    </div>
                  )}

                  <Link
                    href={"/events"}
                    className="text-orange-500 text-base whitespace-nowrap justify-center items-center mt-5 border border-[color:var(--Secondary-Colour,#FF7400)] self-center w-[347px] max-w-full px-16 py-2.5 rounded-lg border-solid max-md:px-5"
                  >
                    SEE MORE EVENTS
                  </Link>
                  {/* <div className="text-green-800 text-lg font-bold self-stretch mt-24 max-md:mt-10">
                    NEWS CENTER
                  </div>
                  <div className="bg-neutral-200 self-stretch shrink-0 h-px mt-4" />
                  {db.news.map((item) => (
                    <NewsCard key={item.id} news={item} />
                  ))}
                  <div className="text-orange-500 text-base whitespace-nowrap justify-center items-center border border-[color:var(--Secondary-Colour,#FF7400)] self-center w-[347px] max-w-full mt-5 px-16 py-2.5 rounded-lg border-solid max-md:px-5">
                    MORE FROM NEWS CENTER
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </TransitionParent>
  );
}
