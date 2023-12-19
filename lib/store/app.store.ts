import { create } from "zustand";

interface appState {
    isLoggedIn: boolean,
    setIsLoggedIn: (isLoggedIn: boolean) => void,
    user: any,
    setUser: (user: any) => void,
}

export const useAppStore = create<appState>()((set) => ({
    isLoggedIn: false,
    setIsLoggedIn: (isLoggedIn: boolean) => set({ isLoggedIn }),
    user: {},
    setUser: (user: any) => set({ user })
}))

