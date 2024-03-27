"use client";
import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  ReactNode,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import ShareButton from "./ShareButton";

import toast from "react-hot-toast";

interface ShareDropdownProps {
  // children: ReactNode;
  urlToShare: string;
  text: string | null;
}

const ShareDropdown: React.FC<ShareDropdownProps> = ({
  // children,
  urlToShare,
  text,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  const [copied, setCopied] = useState(false);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(urlToShare);
    setCopied(true);
    toast.success("Link copied!");
  };

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

  return (
    <div className="relative z-[20000] inline-block" ref={dropdownRef}>
      <button
        className="p-2 cursor-pointer flex items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <ShareButton />
        &nbsp;
        {text}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:w-[300px] w-[200px] max-h-[15rem] absolute top-[-250%] left-[100%] mt-2 bg-primaryWhite border border-gray-500 p-2 rounded-md shadow-md z-[3000]"
          >
            <div className="w-full z-[4000]">
              <div className="w-full bg-primaryWhite flex flex-col items-start justify-start gap-2 text-xs">
                {/* copy link */}
                <button
                  onClick={handleCopyClick}
                  className="w-full p-1 flex items-center justify-start gap-2 text-gray-300 hover:bg-primary/10 rounded"
                >
                  <svg
                    className="w-6 aspect-square"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M15.197 3.35462C16.8703 1.67483 19.4476 1.53865 20.9536 3.05046C22.4596 4.56228 22.3239 7.14956 20.6506 8.82935L18.2268 11.2626M10.0464 14C8.54044 12.4882 8.67609 9.90087 10.3494 8.22108L12.5 6.06212"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      ></path>{" "}
                      <path
                        d="M13.9536 10C15.4596 11.5118 15.3239 14.0991 13.6506 15.7789L11.2268 18.2121L8.80299 20.6454C7.12969 22.3252 4.55237 22.4613 3.0464 20.9495C1.54043 19.4377 1.67609 16.8504 3.34939 15.1706L5.77323 12.7373"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      ></path>{" "}
                    </g>
                  </svg>
                  <span>copy link</span>
                </button>
                <hr className="w-full border-b border-gray-500" />
                {/* facebook share */}
                <button
                  onClick={handleFacebookShare}
                  className="w-full p-1 flex items-center justify-start gap-2 text-gray-300 hover:bg-primary/10 rounded"
                >
                  <svg
                    className="w-6 aspect-square "
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.6571 20.3648H25.3793L25.9637 16.5605H21.6563V14.4813C21.6563 12.901 22.1696 11.4996 23.6389 11.4996H26V8.17974C25.5852 8.12338 24.7078 8 23.05 8C19.5882 8 17.5587 9.8393 17.5587 14.0297V16.5605H14V20.3648H17.5587V30.821C18.2634 30.9276 18.9773 31 19.7101 31C20.3724 31 21.0189 30.9391 21.6571 30.8522V20.3648Z"
                      fill="currentCOlor"
                    />
                  </svg>
                  <span>share via facebook</span>
                </button>
                {/* twitter share */}
                <button
                  onClick={handleTwitterShare}
                  className="w-full p-1 flex items-center justify-start gap-2 text-gray-300 hover:bg-primary/10 rounded"
                >
                  <svg
                    className="w-6 aspect-square"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M30.6 14.9C29.9 15.2 29.1 15.4 28.3 15.5C29.1 15 29.8 14.2 30.1 13.3C29.3 13.8 28.5 14.1 27.5 14.3C26.8 13.5 25.7 13 24.6 13C22.4 13 20.6 14.8 20.6 17C20.6 17.3 20.6 17.6 20.7 17.9C17.4 17.7 14.4 16.1 12.4 13.7C12.1 14.3 11.9 15 11.9 15.7C11.9 17.1 12.6 18.3 13.7 19C13 19 12.4 18.8 11.9 18.5C11.9 20.4 13.3 22.1 15.1 22.4C14.8 22.5 14.4 22.5 14 22.5C13.7 22.5 13.5 22.5 13.2 22.4C13.7 24 15.2 25.2 17 25.2C15.6 26.3 13.9 26.9 12 26.9C11.7 26.9 11.4 26.9 11 26.8C12.8 27.9 14.9 28.6 17.2 28.6C24.6 28.6 28.6 22.5 28.6 17.2V16.7C29.4 16.4 30.1 15.7 30.6 14.9Z"
                      fill="currentCOlor"
                    />
                  </svg>
                  <span>share via twitter</span>
                </button>
                {/* linkedin share */}
                <button
                  onClick={handleLinkedInShare}
                  className="w-full p-1 flex items-center justify-start gap-2 text-gray-300 hover:bg-primary/10 rounded"
                >
                  <svg
                    className="w-6 aspect-square"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M28 20.7444V26.2601H24.7713V21.0807C24.7713 19.8027 24.3004 18.9283 23.157 18.9283C22.2825 18.9283 21.7444 19.5336 21.5426 20.0718C21.4753 20.2735 21.4081 20.5426 21.4081 20.8789V26.2601H18.1794C18.1794 26.2601 18.2466 17.5157 18.1794 16.6413H21.4081V17.9865C21.8117 17.3139 22.6188 16.3722 24.3004 16.3722C26.3856 16.3722 28 17.7848 28 20.7444ZM14.8161 12C13.7399 12 13 12.7399 13 13.6816C13 14.6233 13.6726 15.3632 14.7489 15.3632C15.8924 15.3632 16.565 14.6233 16.565 13.6816C16.6323 12.6726 15.9596 12 14.8161 12ZM13.2018 26.2601H16.4305V16.6413H13.2018V26.2601Z"
                      fill="currentColor"
                    />
                  </svg>
                  <span>share via linkedIn</span>
                </button>
              </div>
              {/* {children} */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ShareDropdown;
