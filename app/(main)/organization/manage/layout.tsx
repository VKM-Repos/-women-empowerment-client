"use client";

import Sidebar from "./components/Sidebar/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* <ProtectedPage> */}
      <section className="pb-[10rem] min-h-screen w-full lg:w-[90%] mx-auto flex gap-10 relative mt-4 ">
            <aside className="hidden lg:block lg:w-[25%] relative">
              <Sidebar />
            </aside>
            <div className="lg:w-[75%] w-full md:border rounded-[1rem] p-4 md:shadow-sm">
              {children}
            </div> 
      </section>
      {/* </ProtectedPage> */}
    </>
  );
}
