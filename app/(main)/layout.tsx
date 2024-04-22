"use client";
import Navbar from "@/components/Layout/Navbar";
import NavbarWithHover from "@/components/Layout/Navbar/Navbar";
import Footer from "@/components/Layout/Footer";
import { useAppContext } from "@/lib/context/app-context";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { showSignupProcess } = useAppContext();
  return (
    <>
      <div className="lg:hidden md:block">
        <Navbar />
      </div>
      <div className="hidden lg:block">
        <NavbarWithHover />
      </div>
      <div className="relative">
        <div
          className={`w-full min-h-screen flex flex-col items-center pt-24 justify-start ${
            showSignupProcess
              ? " bg-black-100 bg-opacity-40 "
              : "bg-primaryWhite"
          } `}
        >
          {!showSignupProcess && children}
        </div>
      </div>
      <Footer />
    </>
  );
}
