'use client'
import React, { useEffect } from 'react';
import { useAppContext } from '@/lib/context/app-context';
import { useRouter } from 'next/navigation';

const LogoutPage: React.FC = () => {
    const { logout } = useAppContext();
    const router = useRouter();

    useEffect(() => {

        logout();
        router.push('/');
    }, [logout, router]);

    return <div>Logging out...</div>;
};

export default LogoutPage;
