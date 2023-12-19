'use client'
import React, { createContext, useContext, useEffect, useState } from 'react';

// Define a type for your user data
type UserData = {
    email: string,
    id: number
    // Add other relevant fields
};

// Define the shape of the appContext
type AppContextType = {
    isAuthenticated: boolean;
    user: UserData | null;
    setUser: (userData: UserData | null) => void;
    login: (userData: UserData) => void;
    logout: () => void;
};

// Create the context
const AppContext = createContext<AppContextType>({
    isAuthenticated: false,
    user: null,
    setUser: () => { },
    login: () => { },
    logout: () => { },
});

// Custom hook to use the context
export const useAppContext = () => {
    return useContext(AppContext);
};

// Context provider
export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isMounted, setIsMounted] = useState(false)
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
        {
            // Get the authentication status from localStorage or set to false if not found
            const storedAuth = isMounted ? localStorage.getItem('isAuthenticated') : false;
            return storedAuth ? JSON.parse(storedAuth) : false;
        }
    });
    const [user, setUser] = useState<UserData | null>(() => {
        // Get the user data from localStorage or set to null if not found
        const storedUser = isMounted ? localStorage.getItem('user') : null;
        try {
            return storedUser ? JSON.parse(storedUser) : null;
        } catch (error) {
            // If there's an error parsing the stored user data, handle it gracefully
            console.error("Error parsing user data:", error);
            return null; // or provide a default/fallback user object
        }
    });

    const login = (userData: UserData) => {
        setIsAuthenticated(true);
        setUser(userData);
        // Store the authentication status and user data in localStorage
        localStorage.setItem('isAuthenticated', JSON.stringify(true));
        localStorage.setItem('user', JSON.stringify(userData));
    };

    const logout = () => {
        setIsAuthenticated(false);
        setUser(null);
        // Clear the authentication status and user data from localStorage
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('user');
    };

    const appContextValue: AppContextType = {
        isAuthenticated,
        user,
        setUser,
        login,
        logout,
    };
    useEffect(() => {
        setIsMounted(true)
    }, [])
    if (!isMounted) return null
    return <AppContext.Provider value={appContextValue}>{children}</AppContext.Provider>;
};
