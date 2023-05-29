import { User } from '@models/user';
import * as React from 'react';
// @ts-ignore
import { useLocalStorage } from 'usehooks-ts';

export interface UserProps {
    user: User;
    isLogin: boolean;
    setUser: (user: User) => void;
    updateIsLogin: () => void;
    handleReset: () => void;
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
    setUser: () => {},
    updateIsLogin: () => {},
    handleReset: () => {},
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

    const updateIsLogin = () => {
        const user = JSON.parse(localStorage.getItem('user') as string) as User;
        if (Boolean(user.id)) {
            setIsLogin(true);
        } else {
            setIsLogin(false);
        }
    };

    const handleReset = () => {
        setUser(defaultValues.user);
        setIsLogin(false);
    };

    return <UserContext.Provider value={{ isLogin, user, setUser, updateIsLogin, handleReset }}>{children}</UserContext.Provider>;
};

export function useUserContext() {
    const methods = React.useContext(UserContext);

    return {
        ...methods,
    };
}
