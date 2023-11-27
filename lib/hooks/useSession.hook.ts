
import { useEffect, useState } from 'react';
import { getStoredToken } from '@/lib/config/authHelper';

const useSession = () => {
  const [authToken, setAuthToken] = useState<string | null>(null);

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const token = getStoredToken();
        setAuthToken(token);
      } catch (error) {
        console.error('Error checking authentication:', error);
        setAuthToken(null);
      }
    };

    checkAuthentication();
  }, []);

  return authToken;
};

export default useSession;
