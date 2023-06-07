import { config } from '@core/config';
import { User } from '@models/user';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import * as React from 'react';
// @ts-ignore
import { useLocalStorage } from 'usehooks-ts';

export interface UserProps {
    user: User;
    isLogin: boolean;
    setUser: (user: User) => void;
    setUserId: (userId: string) => void;
    updateUserData: () => void;
    handleReset: () => void;
}

const defaultValues: UserProps = {
    user: {
        email: '',
        id: '',
        name: '',
        password: '',
        role: 'USER',
        applied: [],
        posts: [],
        profile: {
            avatar: '',
            cv: '',
            id: '',
            intro: '',
            skills: [],
            title: '',
            userId: '',
        },
        userSubscription: {
            bookings: 0,
            endDate: 0,
            id: '',
            name: '',
            posts: 0,
            price: 0,
            startDate: 0,
            userId: '',
            userRole: 'USER',
            view: 0,
        },
    },
    isLogin: false,
    setUser: () => {},
    updateUserData: () => {},
    handleReset: () => {},
    setUserId: () => {},
};

export const UserContext = React.createContext<UserProps>(defaultValues);

interface LoadingProviderProps extends React.PropsWithChildren {}

export const UserProviderContext: React.FC<LoadingProviderProps> = ({ children }) => {
    // const [user, setUser] = useLocalStorage('user', defaultValues.user);
    const [user, setUser] = React.useState<User>(defaultValues.user);
    const [userId, setUserId] = useLocalStorage('userId', '');
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

    const { data, isSuccess, refetch } = useQuery<User>(
        ['user', userId],
        async () => {
            const res = await axios.get(`/api/user/${userId}`);
            return res.data;
        },
        {
            enabled: Boolean(userId),
            initialData: user,
        }
    );

    React.useEffect(() => {
        if (isSuccess) {
            console.log("Fetching user's data");
            setUser(data as User);
            setIsLogin(true);
        } else {
            setUser(defaultValues.user);
            setIsLogin(false);
        }
    }, [isSuccess, data]);

    const updateUserData = () => {
        refetch();
    };

    const handleReset = () => {
        setUser(defaultValues.user);
        setUserId('');
        setIsLogin(false);
    };

    return <UserContext.Provider value={{ isLogin, user, setUser, handleReset, updateUserData, setUserId }}>{children}</UserContext.Provider>;
};

export function useUserContext() {
    const methods = React.useContext(UserContext);

    return {
        ...methods,
    };
}
