"use client";

import Sidebar from "./components/Sidebar/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {

  return (
    <>
      {/* <ProtectedPage> */}
        <section className="self-stretch w-full -mt-[50px] mb-[200px] px-16 max-md:max-w-full max-md:mt-10 max-md:px-5">
            <div className="self-stretch w-full mt-12 px-16 max-md:max-w-full max-md:mt-10 max-md:px-5">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <Sidebar />
                {children}
                </div>
            </div>
        </section>
      {/* </ProtectedPage> */}
    </>
  );
}
