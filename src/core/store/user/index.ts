import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { User, UserRole, UserStatus } from '../../models';
import { RootState } from '..';

export interface UserState extends User {
    isLogin: boolean;
    isAuth: boolean;
}

const initialState: UserState = {
    address: '',
    avatarUrl: '',
    createdAt: 0,
    email: '',
    googleId: '',
    isVerified: true,
    name: '',
    password: '',
    phone: '',
    role: UserRole.PARTNER,
    status: UserStatus.ACTIVE,
    updatedAt: 0,
    id: '',
    // wallets: [],
    isLogin: false,
    isAuth: false,
    deviceId: '',
    wallet: {
        balance: '',
        createdAt: '',
        id: '',
        updatedAt: '',
    },
    walletId: '',
};

const reducer = createSlice({
    name: 'user',
    initialState,
    reducers: {
        resetState: () => ({ ...initialState }),
        autoLogin: (state) => ({ ...state, isLogin: false }),
        autoLoginSuccess: (state, { payload }: PayloadAction<User>) => ({ ...state, ...payload, isLogin: true, isAuth: true }),
        autoLoginFailed: (state, { payload }: PayloadAction<null>) => ({ ...state, isLogin: true, isAuth: false }),
    },
});
export const userActions = {
    ...reducer.actions,
};
export const userReducer = reducer.reducer;

export const useSelectUser = () =>
    createSelector(
        (state: RootState) => state.user,
        (user) => user
    );
