'use client'
import React, { createContext, useContext, useEffect, useState } from 'react';

// Define a type for your user data
type UserData = {
  name: string;
  email: string;
  id: number;
  role: string;
  organizationId: number;
  token: string
  refreshToken: string;
  // Add other relevant fields
};

// Define the shape of the appContext
type AppContextType = {
  isAuthenticated: boolean;
  user: UserData | null;
  token: string | null;
  showOrgBlocker: boolean;
  setUser: (userData: UserData | null) => void;
  toggleOrganizationBlocker:()=>void;
  login: (userData: UserData, token: string) => void;
  logout: () => void;
};

// Create the context
const AppContext = createContext<AppContextType>({
  isAuthenticated: false,
  user: null,
  token: null,
  showOrgBlocker: false,
  setUser: () => {},
  toggleOrganizationBlocker:()=>{},
  login: () => {},
  logout: () => {},
});

// Custom hook to use the context
export const useAppContext = () => {
  return useContext(AppContext);
};

// Context provider
export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    // Get the authentication status from localStorage or set to false if not found
    const storedAuth = localStorage.getItem('isAuthenticated');
    return storedAuth ? JSON.parse(storedAuth) : false;
  });
  const [token, setToken] = useState<string>(() => {
    // Get the token from localStorage or set to null if not found
    const storedToken = localStorage.getItem('token');
    return storedToken || '';
  });
  const [showOrgBlocker, setShowOrgBlocker] = useState<boolean>(false)
  const [user, setUser] = useState<UserData | null>(() => {
    // Get the user data from localStorage or set to null if not found
    const storedUser = localStorage.getItem('user');
    try {
      return storedUser ? JSON.parse(storedUser) : null;
    } catch (error) {
      // If there's an error parsing the stored user data, handle it gracefully
      console.error("Error parsing user data:", error);
      return null; // or provide a default/fallback user object
    }
  });
const toggleOrganizationBlocker = () =>{
  setShowOrgBlocker(prevState => !prevState)
}
  const login = (userData: UserData, authToken: string) => {
    setIsAuthenticated(true);
    setUser(userData);
    setToken(authToken);
    // Store the authentication status, user data, and token in localStorage
    localStorage.setItem('isAuthenticated', JSON.stringify(true));
    localStorage.setItem('user', JSON.stringify(userData));
    localStorage.setItem('token', authToken);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    setToken('');
    // Clear the authentication status, user data, and token from localStorage
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  };

  const appContextValue: AppContextType = {
    isAuthenticated,
    user,
    token,
    showOrgBlocker,
    setUser,
    toggleOrganizationBlocker,
    login,
    logout,
  };

  useEffect(() => {
    // Ensure the context is updated in localStorage whenever isAuthenticated or user changes
    localStorage.setItem('isAuthenticated', JSON.stringify(isAuthenticated));
    localStorage.setItem('user', JSON.stringify(user));
  }, [isAuthenticated, user]);

  return <AppContext.Provider value={appContextValue}>{children}</AppContext.Provider>;
};
