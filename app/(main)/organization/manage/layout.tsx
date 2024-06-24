"use client";

import Sidebar from "./components/Sidebar/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* <ProtectedPage> */}
      <section className="pb-[10rem] min-h-screen w-full lg:w-[90%] mx-auto flex gap-10 relative lg:mt-4 ">
            <aside className="hidden lg:block lg:w-[25%] relative">
              <Sidebar />
            </aside>
            <div className="lg:w-[75%] w-full md:border rounded-[1rem] md:shadow-sm overflow-hidden p-4 lg:p-0 lg:pb-8">
              {children}
            </div> 
      </section>
      {/* </ProtectedPage> */}
    </>
  );
}
