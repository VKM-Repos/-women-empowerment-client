"use client";
import React, { useEffect, useState } from "react";

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

export default function ProfilePage({ params }: { params: { id: string } }) {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    bio: "",
  });
  const [contentType, setContentType] = useState<any>("");

  const handleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };
  const userId = params?.id;
  const {
    data: user,
    isLoading: isUserLoading,
    isError: isUserError,
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

  const { mutate, isPending: updatingUser } = usePATCH(
    `user/update-profile`,
    true,
    undefined,
    contentType
  );

  useEffect(() => {
    setFormData({
      name: user?.name,
      email: user?.email,
      bio: user?.bio,
    });
  }, [user]);

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

    mutate(formData, {
      onSuccess: () => {},
      onError: (error) => {
        console.log(error);
      },
    });
  };
  return (
    <TransitionParent>
      {updatingUser || isEventsLoading || isUserLoading ? (
        <LoadingThinkingWomen />
      ) : (
        <section className="bg-white flex flex-col items-center mb-[250px]">
          <div className="justify-between z-[1] w-full max-w-[1300px] mt-14 max-md:max-w-full max-md:mt-10">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[66%] max-md:w-full max-md:ml-0">
                <div className="bg-white flex flex-col w-full pt-11 pb-5 px-20 rounded-2xl border border-stone-800 border-solid border-black border-opacity-10 max-md:max-w-full max-md:mt-10 max-md:px-5">
                  <div className="items-stretch flex justify-between gap-5 self-start">
                    <div className="bg-white flex grow basis-[0%] flex-col justify-center items-center rounded-[105px]">
                      <div className="flex-col overflow-hidden relative flex aspect-square w-[212px] justify-center items-center px-16 py-12 rounded-[50%] max-md:px-5">
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5408c81413e677bc13d5c7e2808b50ce1b02bb0281aaca66802b4f5a070879cd?apiKey=12cdcbacd64a44978db653c66e993585&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5408c81413e677bc13d5c7e2808b50ce1b02bb0281aaca66802b4f5a070879cd?apiKey=12cdcbacd64a44978db653c66e993585&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5408c81413e677bc13d5c7e2808b50ce1b02bb0281aaca66802b4f5a070879cd?apiKey=12cdcbacd64a44978db653c66e993585&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5408c81413e677bc13d5c7e2808b50ce1b02bb0281aaca66802b4f5a070879cd?apiKey=12cdcbacd64a44978db653c66e993585&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5408c81413e677bc13d5c7e2808b50ce1b02bb0281aaca66802b4f5a070879cd?apiKey=12cdcbacd64a44978db653c66e993585&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5408c81413e677bc13d5c7e2808b50ce1b02bb0281aaca66802b4f5a070879cd?apiKey=12cdcbacd64a44978db653c66e993585&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5408c81413e677bc13d5c7e2808b50ce1b02bb0281aaca66802b4f5a070879cd?apiKey=12cdcbacd64a44978db653c66e993585&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5408c81413e677bc13d5c7e2808b50ce1b02bb0281aaca66802b4f5a070879cd?apiKey=12cdcbacd64a44978db653c66e993585&"
                          className="absolute h-full w-full object-cover object-center inset-0"
                        />
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/19d801c02f8092496b1acf27f38e7cfe019c05eff9870b0e957c1b7ca6ad1566?apiKey=12cdcbacd64a44978db653c66e993585&"
                          className="aspect-square object-contain object-center w-12 justify-center items-center overflow-hidden max-w-full my-8"
                        />
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
                      <EventCardLoader key={id} event={event} />
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
                  <div className="text-green-800 text-lg font-bold self-stretch mt-24 max-md:mt-10">
                    NEWS CENTER
                  </div>
                  <div className="bg-neutral-200 self-stretch shrink-0 h-px mt-4" />
                  {db.news.map((item) => (
                    <NewsCard key={item.id} news={item} />
                  ))}
                  <div className="text-orange-500 text-base whitespace-nowrap justify-center items-center border border-[color:var(--Secondary-Colour,#FF7400)] self-center w-[347px] max-w-full mt-5 px-16 py-2.5 rounded-lg border-solid max-md:px-5">
                    MORE FROM NEWS CENTER
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </TransitionParent>
  );
}
