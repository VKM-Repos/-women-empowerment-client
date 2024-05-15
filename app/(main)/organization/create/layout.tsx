"use client";
import Navbar from "@/components/Layout/Navbar";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
// import ProtectedPage from "../../protectedPage";

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    // <ProtectedPage>
     <div className="w-screen h-screen fixed inset-0 top-0 z-[1000] bg-primaryWhite scrollable-section hide-scroll-bar flex justify-center items-center">
      <div className="w-full overflow-auto bg-[#F0EBD6] md:bg-primaryWhite min-h-screen flex flex-col items-center justify-center relative">
        <Navbar />
        <header className="w-full flex flex-col relative top-0">
          <button
            className="block lg:hidden w-full relative left-2 -top-5"
            onClick={router.back}
          >
            <svg
              className="w-10 aspect-square"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.4999 25.7331L5.69992 16.9331C5.56659 16.7998 5.47192 16.6553 5.41592 16.4998C5.36081 16.3442 5.33325 16.1776 5.33325 15.9998C5.33325 15.822 5.36081 15.6553 5.41592 15.4998C5.47192 15.3442 5.56659 15.1998 5.69992 15.0665L14.4999 6.26645C14.7444 6.02201 15.0497 5.89401 15.4159 5.88245C15.783 5.87178 16.0999 5.99978 16.3666 6.26645C16.6332 6.5109 16.7724 6.81623 16.7839 7.18245C16.7946 7.54956 16.6666 7.86645 16.3999 8.13312L9.86658 14.6665H24.7666C25.1444 14.6665 25.4612 14.794 25.7172 15.0491C25.9724 15.3051 26.0999 15.622 26.0999 15.9998C26.0999 16.3776 25.9724 16.694 25.7172 16.9491C25.4612 17.2051 25.1444 17.3331 24.7666 17.3331H9.86658L16.3999 23.8665C16.6444 24.1109 16.7724 24.422 16.7839 24.7998C16.7946 25.1776 16.6666 25.4887 16.3999 25.7331C16.1555 25.9998 15.8444 26.1331 15.4666 26.1331C15.0888 26.1331 14.7666 25.9998 14.4999 25.7331Z"
                fill="#FF7400"
              />
            </svg>
          </button>
          <h4 className="block lg:hidden font-bold text-gray-300 text-lg font-sora text-center">
             Create Organization profile
          </h4>
        </header>
        {children}
      </div>
    </div>
  // </ProtectedPage>
  );
}
