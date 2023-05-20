import _get from 'lodash.get';

import { User } from '../models';
import { http } from '.';

export interface IV1UserUpdateMe extends Pick<User, 'name' | 'address' | 'phone'> {}
export interface IV1UserUpdateMePassword {
    currentPassword: string;
    newPassword: string;
    confirmNewPassword: string;
}

export const userApi = {
    v1GetMe: async () => {
        const res = await http.get<User>('/users/me');
        return _get(res, 'data');
    },
    v1GetMeByAccessToken: async (accessToken: string) => {
        const res = await http.get<User>(`/users/me`, {
            headers: {
                authorization: 'Bearer ' + accessToken,
            },
        });
        return _get(res, 'data');
    },
    v1PutMe: async (data: IV1UserUpdateMe) => {
        const res = await http.put<User>('/users', data);
        return _get(res, 'data');
    },
    v1PutChangePassword: async (data: IV1UserUpdateMePassword) => {
        const res = await http.put<User>('/users/password', data);
        return _get(res, 'data');
    },
    v1GetId: async (userId: string) => {
        const res = await http.get<User>(`/users/${userId}`);
        return _get(res, 'data');
    },
    v1GetByDriverId: async (driverId: string) => {
        const res = await http.get<User>(`/users/driver/${driverId}`);
        return _get(res, 'data');
    },
};
