"use client";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import NavBanner from "@/components/Common/Banners/NavBanner";
import { useEffect, useState, useRef } from "react";
import { useModal } from "@/lib/context/modal-context";
import BannerModal from "@/components/Common/Banners/BannerModal";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isActive, setIsActive] = useState(true);
  const [modalShown, setModalShown] = useState(false);
  const { showModal, hideModal } = useModal();
  const hasModalBeenShown = useRef(false);

  const toggleBanner = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Adjust the scroll position threshold as needed
      const scrollThreshold = 500;

      if (window.scrollY > scrollThreshold && !modalShown && !hasModalBeenShown.current) {
        showModal(<BannerModal />);
        setModalShown(true);
        hasModalBeenShown.current = true;
      } else if (window.scrollY <= scrollThreshold && modalShown) {
        hideModal();
        setModalShown(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [modalShown, showModal, hideModal]);

  return (
    <>
      <Navbar />
      <div className="relative">
        <div className="w-full min-h-screen flex flex-col items-center pt-24 justify-start bg-primaryWhite ">
          {isActive && <NavBanner toggleBanner={toggleBanner} />}
          {children}
        </div>
      </div>
      <Footer />
    </>
  );
}
