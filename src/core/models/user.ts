import { Applied as IApplied, Post as IPost, Profile } from '@prisma/client';

export interface User {
    id: string;
    name: string;
    password: string;
    email: string;
    role: 'BUSINESS' | 'USER';
    posts: Post[];
    applied: Applied[];
    profile: Profile;
    userSubscription: UserSubscription;
}

interface UserSubscription {
    bookings: number;
    endDate: number;
    id: string;
    name: string;
    posts: number;
    price: number;
    startDate: number;
    userId: string;
    userRole: 'BUSINESS' | 'USER';
    view: number;
}

interface Post extends IPost {
    applied: Applied[];
}

interface Applied extends IApplied {
    user: Pick<User, 'id' | 'name' | 'email' | 'profile'>;
    post: Post;
}
