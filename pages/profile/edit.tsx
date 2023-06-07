import { useUserContext } from '@context/UserContext';
import { config } from '@core/config';
import { Profile } from '@prisma/client';
import axios from 'axios';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useForm } from 'react-hook-form';

interface MyProfileEditPageProps {}

interface UpdateProfileInput extends Pick<Profile, 'title' | 'intro' | 'cv'> {
    name: string;
}

const defaultValues: UpdateProfileInput = {
    name: '',
    title: '',
    intro: '',
    cv: '',
};

const MyProfileEditPage: React.FunctionComponent<MyProfileEditPageProps> = () => {
    const { handleSubmit, register, setValue } = useForm<UpdateProfileInput>({ defaultValues });

    const { user, updateUserData } = useUserContext();

    React.useEffect(() => {
        setValue('name', user.name);
        if (user.profile) {
            setValue('title', user.profile.title || '');
            setValue('intro', user.profile.intro || '');
            setValue('cv', user.profile.cv || '');
        }
    }, [user]);

    const router = useRouter();

    const onSubmit = async (data: UpdateProfileInput) => {
        console.log(data);
        axios.put(`/api/profile`, { ...data, userId: user.id }).then((res) => {
            console.log(res);
            updateUserData();
            router.push('/profile');
        });
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center justify-center w-full">
                <div className="flex items-start w-full h-auto max-w-screen-lg gap-4 p-10 my-5 ">
                    <div className="h-full overflow-hidden rounded-md w-60">
                        {user.profile.avatar ? (
                            <img src={user.profile.avatar} alt="" className="w-full" />
                        ) : (
                            <img src="/images/avatars/creator_2.jpg" alt="" className="w-full" />
                        )}
                    </div>
                    <div className="flex flex-col w-full h-auto max-w-xl gap-4">
                        <div className="flex flex-col w-full gap-2">
                            <input
                                required
                                {...register('name')}
                                type="text"
                                id="name"
                                placeholder="Họ và tên"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-3xl font-semibold"
                            />
                            <input
                                {...register('title')}
                                placeholder="Chức vụ"
                                className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-base"
                            />
                        </div>
                        <div>
                            <h1 className="text-xl font-bold">Giới thiệu</h1>
                            <textarea
                                {...register('intro')}
                                rows={10}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-base"
                            />
                        </div>
                        <div className="w-full h-full">
                            <input
                                {...register('cv')}
                                placeholder="Link cv"
                                className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-base"
                            />
                        </div>
                    </div>
                    <button type="submit" className="w-[250px] px-4 py-2 font-semibold text-white bg-indigo-700 cursor-pointer rounded-lg text-sm">
                        Lưu
                    </button>
                </div>
            </form>
        </>
    );
};

export default MyProfileEditPage;
