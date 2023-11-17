import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';
import { isAuthenticated } from '@/lib/config/authHelper';


interface ProtectedPageProps {
  children: React.ReactNode;
}

const ProtectedPage: React.FC<ProtectedPageProps> = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      if (!isAuthenticated()) {
        toast.error('User not authenticated. Redirecting to login...');
        router.push('/account/login');
      }
    };

    checkAuth();
  }, []);

  return <>{isAuthenticated() ? children : null}</>;
};

export default ProtectedPage;