import { User } from '@models/user';
import * as React from 'react';
// @ts-ignore
import { useLocalStorage } from 'usehooks-ts';

export interface UserProps {
    user: User;
    isLogin: boolean;
}

const defaultValues: UserProps = {
    user: {
        email: '',
        id: '',
        name: '',
        password: '',
        role: 'USER',
    },
    isLogin: false,
};

export const UserContext = React.createContext<UserProps>(defaultValues);

interface LoadingProviderProps extends React.PropsWithChildren {}

export const UserProviderContext: React.FC<LoadingProviderProps> = ({ children }) => {
    const [user, setUser] = useLocalStorage('user', defaultValues.user);
    const [isLogin, setIsLogin] = React.useState<boolean>(defaultValues.isLogin);

    React.useEffect(() => {
        if (localStorage.getItem('user')) {
            const user = JSON.parse(localStorage.getItem('user') as string) as User;
            if (user) {
                setUser(user);
                setIsLogin(true);
            } else {
                setUser(defaultValues.user);
                setIsLogin(false);
            }
        }
    }, []);

    return <UserContext.Provider value={{ isLogin, user }}>{children}</UserContext.Provider>;
};

export function useUserContext() {
    const methods = React.useContext(UserContext);

    return {
        ...methods,
    };
}
