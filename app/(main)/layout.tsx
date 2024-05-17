'use client';
import Navbar from '@/components/Layout/Navbar';
import Footer from '@/components/Layout/Footer';



export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <div className="relative">
        <div
          className={`flex min-h-screen w-full flex-col items-center justify-start pt-24 bg-primaryWhite`}
        >
          { children}
        </div>
      </div>
      <Footer />
    </>
  );
}
