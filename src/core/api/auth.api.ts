import _get from 'lodash.get';

import { User } from '../models';
import { http } from '.';

export interface IV1AuthLogin extends Pick<User, 'phone' | 'password'> {}
export interface IV1AuthRegister extends Pick<User, 'phone' | 'password' | 'name'> {
    confirmPassword: string;
}

export interface IV1AuthVerify {
    otp: string;
}

export const authApi = {
    vGetGoogle: async (token: string) => {
        const res = await http.get(`/auth/google?credential=${token}`);
        return _get(res, 'data.token', '') as string;
    },
    v1PostLogin: async (input: IV1AuthLogin) => {
        const res = await http.post('/auth/login', input);
        return _get(res, 'data.token', '');
    },
    v1PostLogout: async () => {
        const res = await http.post('/auth/logout');
        return _get(res, 'data', '');
    },

    v1PostRegister: async (input: IV1AuthRegister) => {
        const res = await http.post('/auth/register', input);
        return _get(res, 'data.token', '');
    },
    v1VerifyOtp: async (input: IV1AuthVerify) => {
        const res = await http.post(`/auth/verify-phone/${input.otp}`, input);

        return _get(res, 'data', '');
    },
};
