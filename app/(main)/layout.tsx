"use client";
import ProtectedPage from "./protectedPage";

export default function Layout({ children }: { children: React.ReactNode }) {

  return (
    <>
      {/* <ProtectedPage> */}
      <div className="relative">
        <div className="w-full min-h-screen flex items-start pt-24 justify-center bg-secondaryOffWhite ">
          {children}
        </div>
      </div>
      {/* </ProtectedPage> */}
    </>
  );
}
