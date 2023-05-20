import { IOption } from './interface';
import { Wallet } from './wallet';

export enum UserRole {
    ADMIN = 'ADMIN',
    PARTNER = 'PARTNER',
    DRIVER = 'DRIVER',
}

export enum UserStatus {
    ACTIVE = 'ACTIVE',
    INACTIVE = 'INACTIVE',
}

export interface User {
    id: string;
    name: string;
    password: string;
    email: string;
    phone: string;
    address: string;
    isVerified: boolean;
    googleId: string;
    createdAt: number;
    updatedAt: number;
    status: UserStatus;
    role: UserRole;
    wallet: Wallet;
    deviceId: string;
    walletId: string;
    avatarUrl: string;
}

export const optionsUserStatus: IOption[] = [
    {
        value: UserStatus.ACTIVE,
        label: 'Hoạt Động',
        origin: UserStatus.ACTIVE,
    },
    {
        value: UserStatus.INACTIVE,
        label: 'Không Hoạt Động',
        origin: UserStatus.INACTIVE,
    },
];

export const optionsUserRole: IOption[] = [
    {
        value: UserRole.ADMIN,
        label: 'Quản Trị Viên',
        origin: UserRole.ADMIN,
    },
    {
        value: UserRole.PARTNER,
        label: 'Quản Lý',
        origin: UserRole.PARTNER,
    },
    {
        value: UserRole.DRIVER,
        label: 'Tài Xế',
        origin: UserRole.DRIVER,
    },
];

export const colorsUserStatus: IOption[] = [
    { value: UserStatus.ACTIVE, label: 'Hoạt Động', origin: 'green' },
    { value: UserStatus.INACTIVE, label: 'Không Hoạt Động', origin: 'red' },
];

export const colorsUserRole: IOption[] = [
    { value: UserRole.ADMIN, label: 'Quản Trị Viên', origin: 'green' },
    { value: UserRole.PARTNER, label: 'Quản Lý', origin: 'blue' },
    { value: UserRole.DRIVER, label: 'Tài Xế', origin: 'orange' },
];
