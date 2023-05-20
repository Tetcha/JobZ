import * as React from 'react';

interface DashboardHeaderLayoutProps {
    title: string;
    children: React.ReactNode;
}

export const DashboardHeaderLayout: React.FC<DashboardHeaderLayoutProps> = ({ title, children }) => {
    return (
        <div className="flex items-center justify-between pb-4">
            <div className="text-xl font-medium text-gray-700">{title}</div>
            <div className="flex items-center space-x-2">{children}</div>
        </div>
    );
};
