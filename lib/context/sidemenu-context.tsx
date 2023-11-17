'use client'


import { AnimatePresence } from "framer-motion";
import { createContext, ReactNode, useContext, useState } from "react";

interface SideMenuContextValue {
  showSideMenu: (content: ReactNode) => void;
  hideSideMenu: () => void;
}

const SideMenuContext = createContext<SideMenuContextValue | undefined>(
  undefined
);

interface SideMenuProviderProps {
  children: ReactNode;
}

export function SideMenuProvider({
  children,
}: SideMenuProviderProps): JSX.Element {
  const [sideMenuContent, setSideMenuContent] = useState<ReactNode | null>(
    null
  );

  const showSideMenu = (content: ReactNode) => {
    setSideMenuContent(content);
  };

  const hideSideMenu = () => {
    setSideMenuContent(null);
  };

  return (
    <SideMenuContext.Provider value={{ showSideMenu, hideSideMenu }}>
      {children}
      <AnimatePresence initial={true} mode="wait">
        {sideMenuContent}
      </AnimatePresence>
    </SideMenuContext.Provider>
  );
}

export function useSideMenu(): SideMenuContextValue {
  const context = useContext(SideMenuContext);
  if (!context) {
    throw new Error("useSideMenu must be used within a SideMenuProvider");
  }
  return context;
}
