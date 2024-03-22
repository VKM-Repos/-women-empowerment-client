"use client";
import Navbar from "@/components/Layout/Navbar/Navbar";
import MobileNav from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <span className="sm:hidden block">
        <MobileNav />
      </span>
      <span className="hidden sm:block">
        <Navbar />
      </span>
      <div className="relative">
        <div className="w-full min-h-screen flex flex-col items-center pt-24 justify-start bg-primaryWhite overflow-x-hidden">
          {children}
        </div>
      </div>
      <Footer />
    </>
  );
}
