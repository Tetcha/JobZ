import { useRouter } from 'next/router';
import * as React from 'react';
import { toast } from 'react-toastify';

import { authApi } from '../../api';
import { UserRole } from '../../models';
import { routes } from '../../routes';
import { useStoreUser } from '../../store';

interface UnProtectionWrapperProps {
    children: React.ReactNode;
}

export const UnProtectWrapper: React.FC<UnProtectionWrapperProps> = ({ children }) => {
    const user = useStoreUser();
    const router = useRouter();

    React.useEffect(() => {
        if (user.isLogin && user.isAuth) {
            if (user.role === UserRole.ADMIN) {
                router.push(routes.dashboard.chart.home());
                return;
            } else if (user.role === UserRole.PARTNER) {
                router.push(routes.manager.chart.home());
                return;
            } else {
                toast.error('Bạn không có quyền truy cập');
                authApi.v1PostLogout().then(() => {
                    setTimeout(() => {
                        window.location.reload();
                    }, 3000);
                });
            }
        }
    }, [user, router]);

    return <>{children}</>;
};
