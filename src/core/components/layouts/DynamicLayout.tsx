import { useRouter } from 'next/router';
import * as React from 'react';

import { MainFooter } from '../footers';
import MainNavbar from '../navbars/MainNavBar';
import { ProtectWrapper, UnProtectWrapper } from '../wrappers';
import { AuthLayout } from './AuthLayout';
import { CommonLayout } from './CommonLayout';

interface DynamicLayoutProps {
    children: React.ReactNode;
}

export const DynamicLayout: React.FC<DynamicLayoutProps> = ({ children }) => {
    const router = useRouter();

    if (router.pathname.startsWith('/auth')) {
        return (
            <UnProtectWrapper>
                <AuthLayout>{children}</AuthLayout>
            </UnProtectWrapper>
        );
    }

    if (router.pathname.startsWith('/dashboard')) {
        return (
            <>
                <ProtectWrapper acceptRoles={[]}>{children}</ProtectWrapper>
            </>
        );
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
