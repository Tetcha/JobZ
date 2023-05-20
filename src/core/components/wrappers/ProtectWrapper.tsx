import { useRouter } from 'next/router';
import * as React from 'react';

import { UserRole } from '../../models';
import { routes } from '../../routes';
import { useStoreUser } from '../../store';

interface ProtectWrapperProps {
    acceptRoles: Array<UserRole>;
    children: React.ReactNode;
}

export const ProtectWrapper: React.FC<ProtectWrapperProps> = ({ children, acceptRoles }) => {
    const user = useStoreUser();
    const router = useRouter();

    React.useEffect(() => {
        // if ((user.isLogin && !user.isAuth) || acceptRoles.findIndex((item) => item === user.role) === -1) {
        if (user.isLogin && !user.isAuth) {
            router.push(routes.auth.login());
        }
    }, [acceptRoles, user, router]);

    return <>{children}</>;
};
