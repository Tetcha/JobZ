import { http } from '@core/api';
import { config } from '@core/config';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useForm } from 'react-hook-form';

interface AuthLoginProps {}

interface RegisterDTO {
    email: string;
    password: string;
    name: string;
    role: string;
}

const defaultValues: RegisterDTO = {
    email: '',
    password: '',
    name: '',
    role: 'USER',
};

const AuthRegister: React.FunctionComponent<AuthLoginProps> = () => {
    const { register, handleSubmit } = useForm<RegisterDTO>({ defaultValues });
    const [role, setRole] = React.useState<string>('USER');

    const router = useRouter();

    const onSubmit = (data: RegisterDTO) => {
        data.role = role;

        axios.post(`${config.SERVER_URL}/auth/register`, data).then((res) => {
            router.push('/auth/login');
        });
        // fetch('http://localhost:3000/api/auth/register', {
        //     method: 'POST',
        //     body: JSON.stringify(data),
        // }).then((res) => {
        //     router.push('/auth/login');
        // });
    };

    return (
        <>
            <div className="flex justify-center h-auto p-10">
                <Image src="/images/login/banner.png" alt="Job Z" width={550} height={500} objectFit="cover" />
                <div className="flex flex-col items-center justify-center h-auto">
                    <Link href="/">
                        <img src="/assets/images/logo.png" className="object-cover cursor-pointer h-28" alt="Job Z" />
                    </Link>
                    <p className="text-3xl font-bold">Đăng ký JobZ</p>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="flex flex-col border-2 border-solid border-black rounded-lg  p-4 h-auto min-w-[400px] my-6"
                    >
                        <div className="flex flex-col items-center w-full bg-gray-100 gap-y-6">
                            <input
                                {...register('name')}
                                type="text"
                                className="w-full border-2 border-black border-solid rounded-lg"
                                placeholder="Tên của bạn"
                            />
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
                                Đăng ký
                            </button>
                            <button
                                type="submit"
                                onClick={() => setRole('BUSINESS')}
                                className="w-full px-4 py-2 font-semibold text-white bg-indigo-700 rounded-lg cursor-pointer"
                            >
                                Đăng ký cho doanh nghiệp
                            </button>
                        </div>
                    </form>

                    <Link href="/auth/login">
                        <button className="w-full px-4 py-2 my-4 font-semibold border-2 border-black border-solid rounded-lg cursor-pointer ">
                            Bạn đã có tài khoản? <span className="text-blue-600">Đăng nhập ngay</span>
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default AuthRegister;
