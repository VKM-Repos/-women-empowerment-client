"use client";

import { notFound } from "next/navigation";
import Sidebar from "./components/Sidebar/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* <ProtectedPage> */}
      <section className=" w-screen  mb-[200px] lg:px-16 ">
        <div className="lg:mt-12 lg:px-16 ">
          <div className="gap-5 flex ">
            <div className="lg:flex flex-col items-stretch w-[31%] max-md:w-full max-md:ml-0 hidden">
              <Sidebar />
            </div>
            <div className="lg:w-[69%] w-screen">{children}</div>
          </div>
        </div>
      </section>
      {/* </ProtectedPage> */}
    </>
  );
}
