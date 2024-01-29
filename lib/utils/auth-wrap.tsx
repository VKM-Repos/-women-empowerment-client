"use client";
import { useSession } from "next-auth/react";
import { PropsWithChildren, useEffect } from "react";
import { create } from "zustand";
import useUserStore from "../store/user.store";
import LoadingThinkingWomen from "@/components/Common/Loaders/LoadingThinkingWomen";

interface TokenStore {
  token: string | null;
  axiosBearerConf: { Authorization: string } | null;
  updateToken(token: string | null): void;
  removeToken(): void;
}

export const useToken = create<TokenStore>((set) => ({
  token: null,
  axiosBearerConf: null,
  updateToken: (token) => set((state) => ({ ...state, token, axiosBearerConf: { Authorization: `Bearer ${token}` } })),
  removeToken: () => set(() => ({ token: null, axiosBearerConf: null })),
}));

const AuthWrap: React.FC<PropsWithChildren> = ({ children }) => {
  const { data: session, status } = useSession();
  const { setAuthUser } = useUserStore();
  const { updateToken } = useToken();

  useEffect(() => {
    if (session && status === "authenticated") {
      updateToken(session.user.accessToken);
      setAuthUser(session.user);
    }
  }, [session, status]);

  if (status === "loading") {
    return (
      <div className="fixed top-0 left-0 w-full bg-transparent gap-10 select-none h-full flex flex-col items-center justify-center">
        <LoadingThinkingWomen />
      </div>
    );
  }

  return <>{children}</>;
};

export default AuthWrap;
