import { create } from "zustand";
import { User } from "../types/user.types";

type UserResponse = {
  status: boolean;
  message: string;
  data: Record<string, any>;
};

type Store = {
  authUser: User | null;
  isLoading: boolean;
  userId: string | null;
  verifyUser: UserResponse | null;
  setAuthUser: (user: User | null) => void;
  setUserId: (userId: string | null) => void;
  setIsLoading: (isLoading: boolean) => void;
  setVerifyUser: (user: UserResponse | null) => void;
  reset: () => void;
};

const useUserStore = create<Store>((set) => ({
  authUser: null,
  isLoading: false,
  userId: null,
  verifyUser: null,
  setAuthUser: (user) => set((state) => ({ ...state, authUser: user })),
  setUserId: (userId) => set((state) => ({ ...state, userId })),
  setIsLoading: (loading) => set((state) => ({ ...state, isLoading: loading })),
  setVerifyUser: (user) => set((state) => ({ ...state, verifyUser: user })),
  reset: () => set({ authUser: null, isLoading: false, userId: null, verifyUser: null }),
}));

export default useUserStore;
