"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster, ToastPosition } from "react-hot-toast";
import { SideMenuProvider } from "../context/sidemenu-context";
import { ModalProvider } from "../context/modal-context";
import { AppProvider } from "../context/app-context";
import { SessionProvider } from "next-auth/react";
import AuthWrap from "./auth-wrap";

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
    <SessionProvider>
      <AuthWrap>
        <QueryClientProvider client={client}>
          <AppProvider>
            <ModalProvider>
              <SideMenuProvider>
                <Toaster toastOptions={toastConfig} />
                {children}
              </SideMenuProvider>
            </ModalProvider>
          </AppProvider>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </AuthWrap>
    </SessionProvider>
  );
};
