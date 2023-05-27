import { useRouter } from 'next/router';
import * as React from 'react';

import { MainFooter } from '../footers';
import MainNavbar from '../navbars/MainNavBar';
import { AuthLayout } from './AuthLayout';

interface DynamicLayoutProps {
    children: React.ReactNode;
}

export const DynamicLayout: React.FC<DynamicLayoutProps> = ({ children }) => {
    const router = useRouter();

    if (router.pathname.startsWith('/auth')) {
        return <AuthLayout>{children}</AuthLayout>;
    }

    return (
        <div className="flex flex-col justify-start h-full min-h-screen">
            <MainNavbar />
            <div className="mb-10">{children}</div>
            {/* <MainSideBar /> */}
            <MainFooter />
        </div>
    );
};
