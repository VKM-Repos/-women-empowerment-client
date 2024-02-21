"use client";

import Sidebar from "./components/Sidebar/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {

  return (
    <>
      {/* <ProtectedPage> */}
        <section className=" w-screen -mt-[50px] mb-[200px] px-16 ">
            <div className="mt-12 px-16 ">
                <div className="gap-5 flex ">
                  <div className="flex flex-col items-stretch w-[31%] max-md:w-full max-md:ml-0">
                    <Sidebar />
                  </div>
                  <div className="w-[69%]">
                    {children}
                  </div>
                </div>
            </div>
        </section>
      {/* </ProtectedPage> */}
    </>
  );
}
