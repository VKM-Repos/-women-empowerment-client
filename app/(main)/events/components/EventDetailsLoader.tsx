import React from "react";

type Props = {
  events: any;
};

export default function EventDetailsLoader({ events }: Props) {
  return (
    <div className="lg:w-2/3 w-full mx-auto bg-[#F6F7F8] py-4 pt-8 rounded-[1rem] relative">
      <button className="w-fit absolute top-0 right-1">
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
      <div className="w-full mx-auto flex flex-col items-center justify-start h-[85vh] md:h-[70vh] my-auto px-4  overflow-y-scroll">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 justify-start">
          <div className="col-span-1 flex flex-col items-start justify-start gap-5">
            <div className="w-full h-[22rem] bg-gray-500 animate-pulse" />
            <span className="w-[85%] h-4 bg-gray-400 rounded animate-pulse"></span>
          </div>
          <div className="col-span-1 flex flex-col items-start justify-start gap-5">
            <span className="w-1/5 h-4 bg-gray-400 rounded animate-pulse"></span>
            <div className="bg-primaryWhite w-full rounded-lg drop-shadow-sm p-4 flex flex-col gap-5">
              <div className=" flex items-center gap-4">
                <div className="w-[3rem] aspect-square rounded-full border bg-gray-500 animate-pulse" />
                <span className="w-1/2 h-4 bg-gray-400 rounded animate-pulse"></span>
              </div>
              <div className=" flex items-center gap-4">
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

                <span className="w-full flex flex-col gap-4 items-start">
                  <p className="w-1/2 h-2 bg-gray-400 rounded animate-pulse"></p>
                  <p className="w-2/3 h-2 bg-gray-400 rounded animate-pulse"></p>
                  <p className="w-1/4 h-2 bg-gray-400 rounded animate-pulse"></p>
                </span>
              </div>
              <div className=" flex items-center gap-4">
                {/* <Icon name="" size={20} /> */}
                <svg
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
                </svg>
                <p className="w-1/4 h-2 bg-gray-400 rounded animate-pulse"></p>
              </div>
            </div>
            <div className="bg-primaryWhite w-full rounded-lg drop-shadow-sm p-4 flex flex-col gap-3">
              <p className="w-full h-2 bg-gray-400 rounded animate-pulse"></p>
              <p className="w-[80%] h-2 bg-gray-400 rounded animate-pulse"></p>
              <p className="w-full h-2 bg-gray-400 rounded animate-pulse"></p>
              <p className="w-[40%] h-2 bg-gray-400 rounded animate-pulse"></p>
              <p className="w-full h-2 bg-gray-400 rounded animate-pulse"></p>
            </div>
          </div>
        </div>

        <div className=" flex gap-10 my-8">
          <button className="border border-primary text-primary text-base px-4 py-2 rounded-md flex items-center space-x-2">
            {/* <Icon name="" size={24} /> */}
            <span>Share</span>
            <svg
              width="20"
              height="19"
              viewBox="0 0 20 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.45508 4.74748L9.62297 1.57959L12.7909 4.74748"
                stroke="#106840"
                strokeWidth="0.791972"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.7918 7.91553H14.3757C14.5858 7.91553 14.7872 7.99897 14.9357 8.14749C15.0842 8.29601 15.1677 8.49746 15.1677 8.7075V15.8352C15.1677 16.0453 15.0842 16.2467 14.9357 16.3953C14.7872 16.5438 14.5858 16.6272 14.3757 16.6272H4.87205C4.66201 16.6272 4.46056 16.5438 4.31204 16.3953C4.16352 16.2467 4.08008 16.0453 4.08008 15.8352V8.7075C4.08008 8.49746 4.16352 8.29601 4.31204 8.14749C4.46056 7.99897 4.66201 7.91553 4.87205 7.91553H6.45599"
                stroke="#106840"
                strokeWidth="0.791972"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.62305 1.57959V11.8752"
                stroke="#106840"
                strokeWidth="0.791972"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button className="border border-primary bg-primary text-primaryWhite text-base px-4 py-2 rounded-md flex items-center space-x-2">
            {/* <Icon name="" size={24} /> */}
            <span>Visit Website</span>
            <svg
              width="20"
              height="19"
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
          </button>
        </div>
      </div>
    </div>
  );
}

