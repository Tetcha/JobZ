import DarkMode from '@components/templates/mode/DarkMode';
import Logo from '@public/images/logo.png';
import WhiteLogo from '@public/images/logo_white.png';
import { isChildrenPageActive } from '@utils/dynamicNavigation';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { v4 as uuidv4 } from 'uuid';

interface MainNavbarProps {}

const MainNavbar: React.FunctionComponent<MainNavbarProps> = () => {
    const route = useRouter();

    const links = [
        {
            id: uuidv4(),
            name: 'Trang chủ',
            path: '/',
        },
        {
            id: uuidv4(),
            name: 'Bài Viết',
            path: '/posts',
        },
        {
            id: uuidv4(),
            name: 'Tin Tức',
            path: '/news',
        },
    ];

    const userLinks = [
        {
            id: uuidv4(),
            name: 'Hồ sơ',
            path: '/profile',
            icon: svgList['profile'],
        },
        {
            id: uuidv4(),
            name: 'Chỉnh sửa hồ sơ',
            path: '/profile/edit',
            icon: svgList['edit_profile'],
        },
        {
            id: uuidv4(),
            name: 'Đăng xuất',
            path: '/logout',
            icon: svgList['sign_out'],
        },
    ];

    return (
        <>
            {/* main desktop menu sart*/}
            <header className="fixed top-0 z-20 w-full transition-colors js-page-header backdrop-blur">
                <div className="flex items-center px-6 py-6 xl:px-24 ">
                    <Link className="shrink-0" href="/">
                        <a>
                            <div className="dark:hidden">
                                <Image src={Logo} height={28} width={130} alt="Xhibiter | NFT Marketplace" className="h-auto max-h-7 " />
                            </div>
                            <div className="hidden dark:block">
                                <Image src={WhiteLogo} height={28} width={130} alt="Xhibiter | NFT Marketplace" />
                            </div>
                        </a>
                    </Link>
                    {/* End  logo */}

                    <nav className="flex justify-end w-full lg:justify-center navbar">
                        <ul className="flex flex-row gap-10 m-0 lg:gap-0">
                            {/* create */}
                            {links.map((link) => (
                                <li className="group" key={link.id}>
                                    <Link href={link.path}>
                                        <a>
                                            <button className="text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5">
                                                <span
                                                    className={clsx({
                                                        'text-accent dark:text-accent': isChildrenPageActive(route.asPath, link.path),
                                                    })}
                                                >
                                                    {link.name}
                                                </span>
                                            </button>
                                        </a>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="fixed inset-0 z-10 flex items-center ml-auto bg-white opacity-0 js-mobile-menu dark:bg-jacarta-800 lg:relative lg:inset-auto lg:bg-transparent lg:opacity-100 dark:lg:bg-transparent">
                        {/* End menu for desktop */}

                        <div className="flex items-center ml-8 xl:ml-12">
                            {/* End metamask Wallet */}

                            <div className="relative js-nav-dropdown group-dropdown">
                                <button className="dropdown-toggle border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]">
                                    {svgList['user']}
                                </button>
                                <div className="dropdown-menu dark:bg-jacarta-800 group-dropdown-hover:opacity-100 group-dropdown-hover:visible !-right-4 !top-[85%] !left-auto z-10 min-w-[14rem] whitespace-nowrap rounded-xl bg-white transition-all will-change-transform before:absolute before:-top-3 before:h-3 before:w-full lg:absolute lg:grid lg:!translate-y-4 lg:py-4 lg:px-2 lg:shadow-2xl hidden lg:invisible lg:opacity-0">
                                    {userLinks.map((link) => (
                                        <Link href={link.path} key={link.id}>
                                            <a className="flex items-center px-5 py-2 space-x-2 transition-colors dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 rounded-xl">
                                                {link.icon}
                                                <span className="mt-1 text-sm font-display text-jacarta-700 dark:text-white">{link.name}</span>
                                            </a>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            <DarkMode />
                        </div>
                        {/* End header right content (metamask and other) for desktop */}
                    </div>
                </div>
                {/* End flex item */}
            </header>
            {/* main desktop menu end */}
        </>
    );
};

export default MainNavbar;

const svgList: Record<string, React.ReactNode> = {
    user: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={24}
            height={24}
            className="w-4 h-4 transition-colors fill-jacarta-700 group-hover:fill-white group-focus:fill-white dark:fill-white"
        >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M11 14.062V20h2v-5.938c3.946.492 7 3.858 7 7.938H4a8.001 8.001 0 0 1 7-7.938zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z" />
        </svg>
    ),
    profile: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={24}
            height={24}
            className="w-4 h-4 transition-colors fill-jacarta-700 dark:fill-white"
        >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M11 14.062V20h2v-5.938c3.946.492 7 3.858 7 7.938H4a8.001 8.001 0 0 1 7-7.938zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z" />
        </svg>
    ),
    edit_profile: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={24}
            height={24}
            className="w-4 h-4 transition-colors fill-jacarta-700 dark:fill-white"
        >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M9.954 2.21a9.99 9.99 0 0 1 4.091-.002A3.993 3.993 0 0 0 16 5.07a3.993 3.993 0 0 0 3.457.261A9.99 9.99 0 0 1 21.5 8.876 3.993 3.993 0 0 0 20 12c0 1.264.586 2.391 1.502 3.124a10.043 10.043 0 0 1-2.046 3.543 3.993 3.993 0 0 0-3.456.261 3.993 3.993 0 0 0-1.954 2.86 9.99 9.99 0 0 1-4.091.004A3.993 3.993 0 0 0 8 18.927a3.993 3.993 0 0 0-3.457-.26A9.99 9.99 0 0 1 2.5 15.121 3.993 3.993 0 0 0 4 11.999a3.993 3.993 0 0 0-1.502-3.124 10.043 10.043 0 0 1 2.046-3.543A3.993 3.993 0 0 0 8 5.071a3.993 3.993 0 0 0 1.954-2.86zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
        </svg>
    ),
    sign_out: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={24}
            height={24}
            className="w-4 h-4 transition-colors fill-jacarta-700 dark:fill-white"
        >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zM7 11V8l-5 4 5 4v-3h8v-2H7z" />
        </svg>
    ),
};
