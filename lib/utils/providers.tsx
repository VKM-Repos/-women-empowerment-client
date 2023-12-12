"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster, ToastPosition } from "react-hot-toast";
import { SideMenuProvider } from "../context/sidemenu-context";
import { ModalProvider } from "../context/modal-context";


export const Providers = ({ children }: { children: React.ReactNode }) => {
  const client = new QueryClient();


  // Global configuration for react-hot-toast
  const toastConfig = {
    position: "top-center" as ToastPosition,
    duration: 3000,
    style: {
      minWidth: "250px",
    },
    success: {
      icon: "👍",
    },
    error: {
      icon: "❌",
    },
    loading: {
      icon: "⏳",
      duration: Infinity,
    },
  } as const;


  return (
    <QueryClientProvider client={client}>
      <ModalProvider>
        <SideMenuProvider>
          <Toaster toastOptions={toastConfig} />
          {children}
        </SideMenuProvider>
      </ModalProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
