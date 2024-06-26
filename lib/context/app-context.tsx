import React, { createContext, useContext, useEffect, useState } from "react";

// Define a type for your user data
type UserData = {
  name: string;
  email: string;
  userId: number;
  role: string;
  organizationId: string;
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
  fetchUser: () => Promise<void>;
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
  fetchUser: () => Promise.resolve(),
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
    // Check if the code is running in a browser environment before accessing localStorage
    if (typeof window !== "undefined") {
      const storedAuth = localStorage.getItem("isAuthenticated");
      return storedAuth ? JSON.parse(storedAuth) : false;
    }
    return false;
  });
  const [token, setToken] = useState<string>(() => {
    if (typeof window !== "undefined") {
      const storedToken = localStorage.getItem("token");
      return storedToken || "";
    }
    return "";
  });
  const [showSignupProcess, setShowSignupProcess] = useState<boolean>(false);
 const [user, setUser] = useState<UserData | null>(() => {
    if (typeof window !== "undefined") {
      const storedUser = localStorage.getItem("user");
      try {
        return storedUser ? JSON.parse(storedUser) : null;
      } catch (error) {
        console.error("Error parsing user data:", error);
        return null; // or provide a default/fallback user object
      }
    }
    return null;
  });
  const [categories, setCategories] = useState<CategoryData[]>([]); // Initialize categories state

  // Fetch categories data or use a placeholder function
  const fetchCategories = async () => {
    try {
      // Fetch categories data from your API or any source
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}categories`
      );
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
    if (typeof window !== "undefined") {
      localStorage.setItem("isAuthenticated", JSON.stringify(true));
      localStorage.setItem("user", JSON.stringify(userData));
      localStorage.setItem("token", authToken);
     
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    setToken("");
    // Clear the authentication status, user data, and token from localStorage
    if (typeof window !== "undefined") {
      localStorage.removeItem("isAuthenticated");
      localStorage.removeItem("user");
      localStorage.removeItem("token");

    }
  };

  const fetchUser = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}user`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        const userData = await response.json();
        setUser(userData);
        if (typeof window !== "undefined") {
          localStorage.setItem("user", JSON.stringify(userData));
        }
      } else {
        // Handle error responses
        console.error("Failed to fetch user data:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
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
    fetchUser,
  };

  // Ensure the context is updated in localStorage whenever isAuthenticated or user changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("isAuthenticated", JSON.stringify(isAuthenticated));
      localStorage.setItem("user", JSON.stringify(user));
    }
  }, [isAuthenticated, user]);

  return (
    <AppContext.Provider value={appContextValue}>
      {children}
    </AppContext.Provider>
  );
};
