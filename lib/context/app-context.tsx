import React, { createContext, useContext, useEffect, useState } from "react";

// Define a type for your user data
type UserData = {
  name: string;
  email: string;
  userId: number;
  role: string;
  organizationId: number;
  token: string;
  refreshToken: string;
  // Add other relevant fields
};

// Define a type for your category data
type CategoryData = {
  id: number;
  name: string;
  imageUrl: string;
  createdAt: string;
  updatedAt: string | null;
  // Add other relevant fields
};

// Define the shape of the appContext
type AppContextType = {
  isAuthenticated: boolean;
  user: UserData | null;
  token: string | null;
  showSignupProcess: boolean;
  categories: CategoryData[]; // Add categories
  setUser: (userData: UserData | null) => void;
  toggleSignupProcess: () => void;
  login: (userData: UserData, token: string) => void;
  logout: () => void;
};

// Create the context
const AppContext = createContext<AppContextType>({
  isAuthenticated: false,
  user: null,
  token: null,
  showSignupProcess: false,
  categories: [], // Initialize categories
  setUser: () => {},
  toggleSignupProcess: () => {},
  login: () => {},
  logout: () => {},
});

// Custom hook to use the context
export const useAppContext = () => {
  return useContext(AppContext);
};

// Context provider
export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    // Get the authentication status from localStorage or set to false if not found
    const storedAuth = localStorage.getItem("isAuthenticated");
    return storedAuth ? JSON.parse(storedAuth) : false;
  });
  const [token, setToken] = useState<string>(() => {
    // Get the token from localStorage or set to null if not found
    const storedToken = localStorage.getItem("token");
    return storedToken || "";
  });
  const [showSignupProcess, setShowSignupProcess] = useState<boolean>(false);
  const [user, setUser] = useState<UserData | null>(() => {
    // Get the user data from localStorage or set to null if not found
    const storedUser = localStorage.getItem("user");
    try {
      return storedUser ? JSON.parse(storedUser) : null;
    } catch (error) {
      // If there's an error parsing the stored user data, handle it gracefully
      console.error("Error parsing user data:", error);
      return null; // or provide a default/fallback user object
    }
  });
  const [categories, setCategories] = useState<CategoryData[]>([]); // Initialize categories state

  // Fetch categories data or use a placeholder function
  const fetchCategories = async () => {
    try {
      // Fetch categories data from your API or any source
      const response = await fetch("https://www.womenhub.org/api/categories");
      const data = await response.json();
      setCategories(data?.content);
    } catch (error) {
      console.error("Error fetching categories:", error);
      // Handle error or set default categories
      setCategories([]);
    }
  };

  useEffect(() => {
    // Fetch categories data when the component mounts
    fetchCategories();
  }, []);

  const toggleSignupProcess = () => {
    setShowSignupProcess((prevState) => !prevState);
  };
  const login = (userData: UserData, authToken: string) => {
    setIsAuthenticated(true);
    setUser(userData);
    setToken(authToken);
    // Store the authentication status, user data, and token in localStorage
    localStorage.setItem("isAuthenticated", JSON.stringify(true));
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("token", authToken);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    setToken("");
    // Clear the authentication status, user data, and token from localStorage
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  const appContextValue: AppContextType = {
    isAuthenticated,
    user,
    token,
    showSignupProcess,
    categories, // Add categories to the context value
    setUser,
    toggleSignupProcess,
    login,
    logout,
  };

  useEffect(() => {
    // Ensure the context is updated in localStorage whenever isAuthenticated or user changes
    localStorage.setItem("isAuthenticated", JSON.stringify(isAuthenticated));
    localStorage.setItem("user", JSON.stringify(user));
  }, [isAuthenticated, user]);

  return (
    <AppContext.Provider value={appContextValue}>
      {children}
    </AppContext.Provider>
  );
};