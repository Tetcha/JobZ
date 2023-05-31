import { useUserContext } from '@context/UserContext';
import { http } from '@core/api';
import { config } from '@core/config';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { useLocalStorage } from 'usehooks-ts';

interface AuthLoginProps {}

interface LoginDTO {
    email: string;
    password: string;
    role: string;
}

const defaultValues: LoginDTO = {
    email: '',
    password: '',
    role: 'USER',
};

const AuthLogin: React.FunctionComponent<AuthLoginProps> = () => {
    const { register, handleSubmit } = useForm<LoginDTO>({ defaultValues });

    const [role, setRole] = React.useState<string>('USER');
    const router = useRouter();

    const { updateUserData: updateIsLogin, setUserId } = useUserContext();

    const onSubmit = (data: LoginDTO) => {
        data.role = role;

        axios.post(`${config.SERVER_URL}/auth/login`, data).then((res) => {
            setUserId(res.data.id);
            updateIsLogin();
            router.push('/');
        });
    };

    return (
        <>
            <div className="flex justify-center h-auto p-10">
                <Image src="/images/login/banner.png" alt="Job Z" width={550} height={500} objectFit="cover" />
                <div className="flex flex-col items-center justify-center h-auto">
                    <Link href="/">
                        <img src="/assets/images/logo.png" className="object-cover cursor-pointer h-28" alt="Job Z" />
                    </Link>
                    <p className="text-3xl font-bold">Đăng nhập JobZ</p>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="flex flex-col border-2 border-solid border-black rounded-lg  p-4 h-auto min-w-[400px] my-6"
                    >
                        <div className="flex flex-col items-center w-full bg-gray-100 gap-y-6">
                            <input
                                {...register('email')}
                                type="email"
                                className="w-full border-2 border-black border-solid rounded-lg"
                                placeholder="Email"
                            />
                            <input
                                {...register('password')}
                                type="password"
                                className="w-full border-2 border-black border-solid rounded-lg"
                                placeholder="Mật khẩu"
                            />
                            <button
                                type="submit"
                                onClick={() => setRole('USER')}
                                className="w-full px-4 py-2 font-semibold text-white bg-indigo-700 rounded-lg cursor-pointer"
                            >
                                Đăng nhập
                            </button>
                            <button
                                type="submit"
                                onClick={() => setRole('BUSINESS')}
                                className="w-full px-4 py-2 font-semibold text-white bg-indigo-700 rounded-lg cursor-pointer"
                            >
                                Đăng nhập cho doanh nghiệp
                            </button>
                        </div>
                    </form>

                    <Link href="/auth/register">
                        <button className="w-full px-4 py-2 my-4 font-semibold border-2 border-black border-solid rounded-lg cursor-pointer ">
                            Bạn chưa có tài khoản? <span className="text-blue-600">Đăng ký ngay</span>
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default AuthLogin;
