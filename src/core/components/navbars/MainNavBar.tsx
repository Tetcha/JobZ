import { useUserContext } from '@context/UserContext';
import { Bars3Icon, MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useLocalStorage } from 'usehooks-ts';
import { v4 as uuid } from 'uuid';

interface MainNavbarProps {}

const MainNavbar: React.FunctionComponent<MainNavbarProps> = () => {
    const navlinkUser = [
        {
            name: 'Trang Chủ',
            id: uuid(),
            path: '/',
        },
        {
            name: 'Việc làm',
            id: uuid(),
            path: '/job',
        },
        {
            name: 'Danh sách ứng tuyển',
            id: uuid(),
            path: '/applied-jobs',
        },
    ];

    const navlinkBusiness = [
        {
            name: 'Trang Chủ',
            id: uuid(),
            path: '/',
        },
        {
            name: 'Việc làm',
            id: uuid(),
            path: '/job',
        },
        {
            name: 'Danh sách ứng viên',
            id: uuid(),
            path: '/candidate',
        },
    ];

    const [toggle, setToggle] = React.useState(false);

    const { isLogin, user, handleReset } = useUserContext();

    const router = useRouter();
    const handleLogout = () => {
        handleReset();
        router.push('/auth/login');
    };

    return (
        <>
            {/* main desktop menu sart*/}
            <div className="flex justify-center py-1 bg-white">
                <header className="flex items-center justify-between w-full max-w-7xl">
                    <div className="flex items-center justify-center gap-6">
                        <div className="flex items-center justify-center gap-2">
                            <Link href="/">
                                <img src="/assets/images/logo.png" className="h-16 cursor-pointer" alt="Job Z" />
                            </Link>
                        </div>
                    </div>
                    <nav>
                        <ul className="flex items-center justify-center gap-5">
                            {user.role === 'BUSINESS'
                                ? navlinkBusiness.map((item) => (
                                      <Link key={item.id} href={item.path}>
                                          <li className="px-4 py-2 font-semibold text-white bg-indigo-500 cursor-pointer rounded-3xl">{item.name}</li>
                                      </Link>
                                  ))
                                : navlinkUser.map((item) => (
                                      <Link key={item.id} href={item.path}>
                                          <li className="px-4 py-2 font-semibold text-white bg-indigo-500 cursor-pointer rounded-3xl">{item.name}</li>
                                      </Link>
                                  ))}
                        </ul>
                    </nav>
                    <div className="flex items-center justify-center">
                        {isLogin ? (
                            <>
                                <div className="flex items-center gap-2">
                                    <p className="text-base font-medium text-gray-800">{user.name}</p>
                                    <div className="overflow-hidden rounded-full h-14 w-14">
                                        <img src={'https://img.freepik.com/free-vector/illustration-user-avatar-icon_53876-5907.jpg'} alt="avatar" />
                                    </div>
                                </div>
                                <div className="relative ">
                                    <Bars3Icon className="w-10 h-10 text-indigo-400 cursor-pointer" onClick={() => setToggle(!toggle)} />
                                    {toggle ? (
                                        <div className="absolute right-0 z-[999] flex flex-col w-40 px-2 py-2 overflow-hidden text-white bg-indigo-500 rounded-md top-12">
                                            {user.role === 'BUSINESS' ? (
                                                <Link href={'/post-new-recruit'}>
                                                    <button className="w-full py-2 duration-300 hover:bg-indigo-400">Đăng bài</button>
                                                </Link>
                                            ) : (
                                                <Link href={'/profile'}>
                                                    <button className="w-full py-2 duration-300 hover:bg-indigo-400">Hồ sơ</button>
                                                </Link>
                                            )}

                                            <Link href={'/momo'}>
                                                <button className="w-full py-2 duration-300 hover:bg-indigo-400">Nạp tiền</button>
                                            </Link>

                                            <button className="w-full py-2 duration-300 hover:bg-indigo-400" onClick={() => handleLogout()}>
                                                Đăng xuất
                                            </button>
                                        </div>
                                    ) : (
                                        <></>
                                    )}
                                </div>
                            </>
                        ) : (
                            <button
                                className="w-full px-3 py-2 font-medium text-white duration-300 bg-indigo-500 rounded hover:bg-indigo-400"
                                onClick={() => handleLogout()}
                            >
                                Đăng nhập
                            </button>
                        )}
                    </div>
                </header>
            </div>
            {/* main desktop menu end */}
        </>
    );
};

export default MainNavbar;
