import { useUserContext } from '@context/UserContext';
import { config } from '@core/config';
import { User } from '@models/user';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';

interface MyProfilePageProps {}

const MyProfilePage: React.FunctionComponent<MyProfilePageProps> = () => {
    const router = useRouter();
    const id = router.query.userId as string;
    const { data: user } = useQuery<User>(
        ['user', id],
        async () => {
            const res = await axios.get(`/api/user/${id}`);
            return res.data;
        },
        { initialData: { name: '', profile: { avatar: '', cv: '', intro: '', title: '' } } as User }
    );

    return (
        <>
            <div className="flex flex-col items-center justify-center w-full">
                <div className="flex items-start w-full h-auto max-w-screen-lg gap-4 p-10 my-5 ">
                    <div className="h-full overflow-hidden rounded-md w-60">
                        {user.profile.avatar ? (
                            <img src={user.profile.avatar} alt="" className="w-full" />
                        ) : (
                            <img src="/images/avatars/creator_2.jpg" alt="" className="w-full" />
                        )}
                    </div>
                    <div className="flex flex-col w-full h-auto max-w-xl gap-10">
                        <div>
                            <h1 className="text-3xl font-bold">{user.name}</h1>
                            {user.profile.title ? (
                                <p className="text-base">{user.profile.title}</p>
                            ) : (
                                <p className="font-medium text-gray-900">Chưa có chức vụ</p>
                            )}
                        </div>
                        <div>
                            <h1 className="text-xl font-bold">Giới thiệu</h1>
                            {user.profile.intro ? (
                                <p className="text-base">{user.profile.intro}</p>
                            ) : (
                                <p className="font-medium text-gray-900">Chưa có giới thiệu</p>
                            )}
                        </div>
                        <div className="w-full h-full">
                            {user.profile.cv ? (
                                <img src={user.profile.cv} alt="" className="w-full h-full" />
                            ) : (
                                <p className="font-medium text-gray-900">Chưa có CV</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyProfilePage;
