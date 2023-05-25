import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

interface AuthLoginProps {}

const AuthLogin: React.FunctionComponent<AuthLoginProps> = () => {
    return (
        <>
            <div className="flex h-auto p-10 justify-center">
                <Image src="/images/login/banner.png" alt="Job Z" width={550} height={500} objectFit="cover" />
                <div className="flex flex-col h-auto justify-center items-center">
                    <Link href="/">
                        <img src="/assets/images/logo.png" className="h-28 cursor-pointer object-cover" alt="Job Z" />
                    </Link>
                    <p className="text-3xl font-bold">Đăng nhập JobZ</p>
                    <div className="flex flex-col border-2 border-solid border-black rounded-lg  p-4 h-auto min-w-[400px] my-6">
                        <div className="flex flex-col gap-y-6 items-center w-full bg-gray-100">
                            <input type="email" className="w-full border-2 border-solid border-black rounded-lg" placeholder="Email" />
                            <input type="password" className="w-full border-2 border-solid border-black rounded-lg" placeholder="Mật khẩu" />
                            <button className="w-full px-4 py-2 font-semibold text-white bg-indigo-700 cursor-pointer rounded-lg">Đăng nhập</button>
                            <button className="w-full px-4 py-2 font-semibold text-white bg-indigo-700 cursor-pointer rounded-lg">
                                Đăng nhập cho doanh nghiệp
                            </button>
                        </div>
                    </div>
                    <Link href="/">
                        <p className="text-blue-600 font-semibold text-lg hover:text-xl cursor-pointer">Quên mật khẩu?</p>
                    </Link>
                    <Link href="/">
                        <button className="w-full px-4 py-2 my-4 font-semibold cursor-pointer border-2 border-solid border-black rounded-lg ">
                            Bạn chưa có tài khoản? <span className="text-blue-600">Đăng ký ngay</span>
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default AuthLogin;
