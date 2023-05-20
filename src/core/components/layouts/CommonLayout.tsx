import MainNavbar from '@components/navbars/MainNavBar';
import * as React from 'react';

import { MainFooter } from '../footers';

interface CommonLayoutProps {
    children: React.ReactNode;
}

export const CommonLayout: React.FC<CommonLayoutProps> = ({ children }) => {
    return (
        <div className="flex flex-col flex-1 min-h-screen">
            <MainNavbar />
            <div className="flex-1  fade-in bg-[#f5f5f5] flex">{children}</div>
            <MainFooter />
        </div>
    );
};
