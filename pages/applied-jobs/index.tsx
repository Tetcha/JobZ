import { ChevronRightIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import * as React from 'react';

interface AppliedJobsPageProps {}

const people = [
    {
        name: 'Leslie Alexander',
        email: 'leslie.alexander@example.com',
        role: 'Co-Founder / CEO',
        imageUrl: 'https://styles.redditmedia.com/t5_5y10vo/styles/communityIcon_hp8h49lns4l81.png',
        href: '#',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
        name: 'Michael Foster',
        email: 'michael.foster@example.com',
        role: 'Co-Founder / CTO',
        imageUrl: 'https://styles.redditmedia.com/t5_5y10vo/styles/communityIcon_hp8h49lns4l81.png',
        href: '#',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
        name: 'Dries Vincent',
        email: 'dries.vincent@example.com',
        role: 'Business Relations',
        imageUrl: 'https://styles.redditmedia.com/t5_5y10vo/styles/communityIcon_hp8h49lns4l81.png',
        href: '#',
        lastSeen: null,
    },
    {
        name: 'Lindsay Walton',
        email: 'lindsay.walton@example.com',
        role: 'Front-end Developer',
        imageUrl: 'https://styles.redditmedia.com/t5_5y10vo/styles/communityIcon_hp8h49lns4l81.png',
        href: '#',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
        name: 'Courtney Henry',
        email: 'courtney.henry@example.com',
        role: 'Designer',
        imageUrl: 'https://styles.redditmedia.com/t5_5y10vo/styles/communityIcon_hp8h49lns4l81.png',
        href: '#',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
        name: 'Tom Cook',
        email: 'tom.cook@example.com',
        role: 'Director of Product',
        imageUrl: 'https://styles.redditmedia.com/t5_5y10vo/styles/communityIcon_hp8h49lns4l81.png',
        href: '#',
        lastSeen: null,
    },
];

const AppliedJobsPage: React.FunctionComponent<AppliedJobsPageProps> = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full">
            <div className="flex flex-col items-center justify-center w-full gap-2 bg-gray-200 h-96">
                <h1 className="text-6xl font-semibold text-gray-900">Vị trí đã ứng tuyển</h1>
                <div className="flex items-center justify-center gap-2 mt-2 text-lg font-medium text-gray-700">
                    <Link href={'/'}>
                        <p className="cursor-pointer hover:text-blue-600">Home</p>
                    </Link>
                    &gt;
                    <p>Applied Jobs</p>
                </div>
            </div>
            <div className="w-full max-w-3xl px-4 py-10 ">
                <ul role="list" className="divide-y divide-gray-400">
                    {people.map((person) => (
                        <li key={person.email} className="relative py-5 hover:bg-gray-50">
                            <Link href={`/applied-jobs/${1}`}>
                                <div className="px-4 sm:px-6 lg:px-8">
                                    <div className="flex justify-between max-w-4xl mx-auto gap-x-6">
                                        <div className="flex w-full gap-x-4">
                                            <img className="flex-none object-cover rounded-lg h-36 w-60 bg-gray-50" src={person.imageUrl} alt="" />
                                            <div className="flex flex-col items-start justify-center w-full">
                                                <p className="text-xl font-semibold leading-6 text-gray-900">
                                                    <a href={person.href}>
                                                        <span className="absolute inset-x-0 bottom-0 -top-px" />
                                                        Chuyên Viên Đầu Tư
                                                    </a>
                                                </p>
                                                <p className="flex mt-1 text-sm font-medium leading-5 text-gray-700">
                                                    <p className="relative w-full h-full ">Công Ty Cổ Phần Quản Lý Quỹ Đầu Tư FPT (FPT Capital)</p>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-x-4">
                                            <div className="hidden sm:flex sm:flex-col sm:items-end">
                                                <p className="mt-1 text-xs leading-5 text-gray-500">
                                                    Ứng tuyển: <time dateTime={person.lastSeenDateTime}>{person.lastSeen}</time>
                                                </p>
                                            </div>

                                            <ChevronRightIcon className="flex-none w-5 h-5 text-gray-400" aria-hidden="true" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default AppliedJobsPage;
