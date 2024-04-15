"use client";
import Navbar from "@/components/Layout/Navbar/Navbar";
import MobileNav from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import { useAppContext } from "@/lib/context/app-context";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { showSignupProcess } = useAppContext();
  return (
    <>
      <span className="sm:hidden block">
        <MobileNav />
      </span>
      <span className="hidden sm:block">
        <Navbar />
      </span>
      <div className="relative">
        <div
          className={`w-full min-h-screen flex flex-col items-center pt-24 justify-start ${
            showSignupProcess
              ? " bg-black-100 bg-opacity-40"
              : "bg-primaryWhite"
          } overflow-x-hidden`}
        >
          {children}
        </div>
      </div>
      <Footer />
    </>
  );
}
