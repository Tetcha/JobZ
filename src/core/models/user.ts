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
