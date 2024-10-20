'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';
import { useAppContext } from '@/lib/context/app-context';

interface ProtectedPageProps {
  children: React.ReactNode;
}

const ProtectedPage: React.FC<ProtectedPageProps> = ({ children }) => {
  const router = useRouter();
  const { isAuthenticated, user } = useAppContext();

  if (!isAuthenticated) {
    toast.error('you are not logged in');
    router.push('/account/login');
    return null;
  }

  return <>{children}</>;
};

export default ProtectedPage;
