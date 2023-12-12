import shallow from "zustand/shallow";

import { useAppStore } from "@store/app.store";
import { useEffect, useState } from "react";

export const useLogoutUser = () => {
  const [userData, setUserData] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    setUserData(useAppStore.getState().userDetails);
    setIsAuthenticated(useAppStore.getState().isAuthenticated);
  }, []);

  const { reset } = useAppStore(
    (state) => ({
      reset: state.reset,
    }),
    shallow
  );

  const logoutHandler = () => {
    reset();
    setUserData({});
    setIsAuthenticated(!isAuthenticated)
    if (userData?.user?.type == 'staff') {
      window.location.replace("/staff/auth")
    } else if (userData?.user?.type == 'student') {
      window.location.replace("/student/auth")
    } else if (userData?.user?.type == 'applicant') {
      window.location.replace("/applicant/auth")
    }

  };

  return {
    logoutHandler,
  };
};
