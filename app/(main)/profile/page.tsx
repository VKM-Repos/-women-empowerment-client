"use client";
import React, { useState } from "react";

import db from "@/data/db.json";
import EventCard from "../(community)/discussions/components/EventCard";
import NewsCard from "../(community)/discussions/components/NewsCard";
import { useGET } from "@/lib/hooks/useGET.hook";
import { Event } from "@/lib/types/events.types";
import EventCardLoader from "../events/components/EventCardLoader";

export default function ProfilePage() {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

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
  return (
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
              <div className="flex flex-col gap-5 mt-10">
                <div className="flex items-center gap-5">
                  <label className="font-sora flex-[0.3]" htmlFor="">
                    Username
                  </label>
                  <input
                    type="text"
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
                    className="font-quickSand flex-1 border border-stone-800 border-solid border-black border-opacity-10 px-10 py-3 focus:outline-none rounded-md w-full"
                    placeholder="sarahbling@gmail.com"
                  />
                </div>
                <div className="flex items-center gap-5">
                  <label className="font-sora flex-[0.3] w-full" htmlFor="">
                    Password
                  </label>
                  <div className="flex-1 flex border border-stone-800 border-solid border-black border-opacity-10 rounded-md px-8  py-3 w-full items-center">
                    <input
                      type={showPassword ? "text" : "password"}
                      className="font-quickSand flex-1 focus:outline-none w-full"
                      placeholder="****************"
                    />
                    {showPassword ? (
                      <svg
                        onClick={handleShowPassword}
                        className="cursor-pointer"
                        width="19"
                        height="19"
                        viewBox="0 0 19 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17.9643 8.78143C17.2789 6.85982 16.0838 5.19501 14.5262 3.99214L17.4002 0.906429L16.5542 0L0.599762 17.0936L1.44579 18L4.50587 14.7279C5.87177 15.5808 7.41927 16.0434 9 16.0714C10.9557 15.9926 12.8471 15.3016 14.4402 14.0837C16.0334 12.8657 17.2585 11.1744 17.9643 9.21857C18.0119 9.07733 18.0119 8.92267 17.9643 8.78143ZM9 13.1786C8.17294 13.1782 7.36768 12.8943 6.70193 12.3686L7.79997 11.205C8.25526 11.4723 8.77916 11.5742 9.29308 11.4954C9.807 11.4166 10.2832 11.1615 10.6503 10.7682C11.0174 10.3749 11.2556 9.86462 11.3291 9.31401C11.4026 8.76339 11.3075 8.20208 11.0581 7.71429L12.1441 6.55071C12.5668 7.17274 12.8207 7.90789 12.8778 8.67488C12.9349 9.44188 12.7928 10.2108 12.4675 10.8968C12.1421 11.5827 11.646 12.1588 11.0341 12.5615C10.4221 12.9642 9.71815 13.1778 9 13.1786ZM2.11781 12.735L5.11789 9.52071C5.10229 9.34768 5.09628 9.1738 5.09989 9C5.10148 7.8923 5.51289 6.83045 6.24396 6.04718C6.97503 5.26392 7.96611 4.82313 9 4.82143C9.15845 4.82233 9.31672 4.83306 9.47401 4.85357L11.7421 2.43C10.8594 2.10517 9.93331 1.93583 9 1.92857C7.04425 2.00737 5.15292 2.69843 3.55977 3.91634C1.96661 5.13425 0.741462 6.82563 0.0357458 8.78143C-0.0119153 8.92267 -0.0119153 9.07733 0.0357458 9.21857C0.496574 10.5317 1.20538 11.7288 2.11781 12.735Z"
                          fill="#0077B6"
                          fillOpacity="0.7"
                        />
                      </svg>
                    ) : (
                      <svg
                        onClick={handleShowPassword}
                        className="cursor-pointer"
                        width="19"
                        height="19"
                        viewBox="0 0 19 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.5 11.875C10.8117 11.875 11.875 10.8117 11.875 9.5C11.875 8.18832 10.8117 7.125 9.5 7.125C8.18832 7.125 7.125 8.18832 7.125 9.5C7.125 10.8117 8.18832 11.875 9.5 11.875Z"
                          fill="#808080"
                        />
                        <path
                          d="M18.3706 9.29812C17.6723 7.49173 16.4599 5.92955 14.8834 4.80468C13.3069 3.6798 11.4353 3.04153 9.49999 2.96875C7.56467 3.04153 5.6931 3.6798 4.11658 4.80468C2.54006 5.92955 1.32771 7.49173 0.629367 9.29812C0.582203 9.42858 0.582203 9.57142 0.629367 9.70188C1.32771 11.5083 2.54006 13.0704 4.11658 14.1953C5.6931 15.3202 7.56467 15.9585 9.49999 16.0312C11.4353 15.9585 13.3069 15.3202 14.8834 14.1953C16.4599 13.0704 17.6723 11.5083 18.3706 9.70188C18.4178 9.57142 18.4178 9.42858 18.3706 9.29812ZM9.49999 13.3594C8.73668 13.3594 7.99051 13.133 7.35584 12.709C6.72117 12.2849 6.2265 11.6821 5.93439 10.9769C5.64229 10.2717 5.56586 9.49572 5.71477 8.74707C5.86369 7.99843 6.23126 7.31075 6.771 6.77101C7.31075 6.23127 7.99842 5.8637 8.74707 5.71478C9.49571 5.56587 10.2717 5.6423 10.9769 5.9344C11.6821 6.22651 12.2849 6.72118 12.7089 7.35585C13.133 7.99052 13.3594 8.73669 13.3594 9.5C13.3578 10.5231 12.9507 11.5038 12.2272 12.2273C11.5038 12.9507 10.5231 13.3578 9.49999 13.3594Z"
                          fill="#808080"
                        />
                      </svg>
                    )}
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="text-black flex-[0.3]">Bio</div>
                  <textarea className="font-quickSand flex-1 border border-stone-800 border-solid border-black border-opacity-10 rounded-md w-full px-9 py-3 h-[180px] focus:outline-none">
                    Our community counts over 200.000 members across the world
                    with chapters in all 6 continents. With our Head Office in
                    Paris, we are a Global Movement with chapters in 6
                    continents, counting over 200.000 members.
                  </textarea>
                </div>
                <button className="text-white-100 text-center text-base font-medium font-sora whitespace-nowrap justify-center items-stretch rounded bg-green-800 self-center mt-6 px-8 py-3.5 max-md:px-5">
                  Update
                </button>
              </div>
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
                <div className="w-full md:w-[95%] mx-auto flex justify-center gap-5 flex-wrap md:gap-y-16 pb-[8rem]">
                  {Array.isArray(events?.content) &&
                    events?.content.map((event: Event) => (
                      <EventCard key={event.id} event={event} />
                    ))}
                </div>
              )}

              <div className="text-orange-500 text-base whitespace-nowrap justify-center items-center border border-[color:var(--Secondary-Colour,#FF7400)] self-center w-[347px] max-w-full mt-10 px-16 py-2.5 rounded-lg border-solid max-md:px-5">
                SEE MORE EVENTS
              </div>
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
  );
}
