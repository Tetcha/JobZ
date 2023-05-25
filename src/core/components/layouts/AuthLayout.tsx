import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

import { routes } from '../../routes';

interface AuthLayoutProps {
    children: React.ReactNode;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
    return (
        <div className="flex min-h-screen ">
            <div className="flex flex-col items-center justify-center flex-1">
                <div className="z-10 w-full max-w-screen-xl px-6 py-8 pb-16 bg-white rounded-lg shadow-lg fade-in">{children}</div>
                <div className="absolute z-0 w-full h-full">
                    <div className="absolute z-10 w-full h-full bg-gray-300 bg-opacity-30"></div>
                </div>
            </div>
        </div>
    );
};
