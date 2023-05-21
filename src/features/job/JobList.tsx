import JobCard from '@components/cards/JobCard';
import { ArrowDownIcon, Bars3Icon, ListBulletIcon, MagnifyingGlassIcon, TableCellsIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import * as React from 'react';
import { v4 as uuid } from 'uuid';

interface JobListProps {}

const JobList: React.FunctionComponent<JobListProps> = () => {
    const majors = [
        {
            name: 'Mechanic',
            id: uuid(),
        },
        {
            name: 'Engineer',
            id: uuid(),
        },
        {
            name: 'Computer Science',
            id: uuid(),
        },
        {
            name: 'Data & Tech',
            id: uuid(),
        },
        {
            name: 'UX & UI Design',
            id: uuid(),
        },
        {
            name: 'English',
            id: uuid(),
        },
        {
            name: 'Mobile Handset',
            id: uuid(),
        },
    ];

    const skills = [
        {
            name: 'All',
            id: uuid(),
        },
        {
            name: 'Fullstack',
            id: uuid(),
        },
        {
            name: 'English Learn',
            id: uuid(),
        },
        {
            name: 'Intermediate',
            id: uuid(),
        },
        {
            name: 'PHP',
            id: uuid(),
        },
        {
            name: 'Wordpress',
            id: uuid(),
        },
    ];

    return (
        <div className="flex flex-col justify-center w-full">
            <div className="flex flex-col items-center justify-center w-full gap-2 bg-gray-200 h-96">
                <h1 className="text-6xl font-semibold text-gray-900">Danh Sách Việc Làm</h1>
                <div className="flex items-center justify-center gap-2 text-lg text-gray-700">
                    <Link href={'/'}>
                        <p className="cursor-pointer hover:text-blue-600">Home</p>
                    </Link>
                    &gt;
                    <p>Job list</p>
                </div>
            </div>
            <div className="flex justify-center w-full py-24 bg-gray-100">
                <div className="flex flex-col items-center justify-center w-full text-gray-900 max-w-screen-app gap-9">
                    <div className="flex items-center justify-between w-full px-4 py-2 bg-white border-gray-400 shadow-lg border-px">
                        <p className="flex flex-col w-full gap-4 ">Hiển thị 1-9 trong 54 kết quả tìm thấy</p>
                        <div className="flex justify-between w-96">
                            <div className="flex gap-2">
                                <div className="w-6 h-6 cursor-pointer">
                                    <TableCellsIcon />
                                </div>
                                <div className="w-6 h-6 cursor-pointer">
                                    <ListBulletIcon />
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <p className="text-base font-semibold text-gray-400">Mới nhất</p>
                                <div className="w-6 h-6 cursor-pointer">
                                    <ArrowDownIcon />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between w-full gap-7">
                        <div className="flex flex-col items-start w-72">
                            <div className="flex flex-col gap-6 px-5 bg-white border border-gray-200 py-9">
                                <label className="text-2xl font-semibold text-gray-900">Tìm kiếm</label>
                                <div className="flex items-center w-full bg-gray-100">
                                    <input type="text" className="w-full bg-gray-100 border-none outline-none" />

                                    <button className="w-10">
                                        <MagnifyingGlassIcon className="w-6 h-6" />
                                    </button>
                                </div>
                            </div>
                            <div className="flex flex-col w-full gap-6 px-5 bg-white border border-gray-200 py-9">
                                <label className="text-2xl font-semibold text-gray-900">Mức Lương</label>
                                <div className="flex items-center justify-between w-full text-lg">
                                    <input type="number" defaultValue={100} name="" id="" className="bg-gray-100 border-none outline-none w-28" />
                                    <span className="text-3xl">-</span>
                                    <input type="number" defaultValue={500} name="" id="" className="bg-gray-100 border-none outline-none w-28" />
                                </div>
                            </div>
                            <div className="flex flex-col items-start w-full gap-6 px-5 bg-white border border-gray-200 py-9">
                                <label className="text-2xl font-semibold text-gray-900">Lĩnh Vực</label>
                                <div className="flex flex-col items-start">
                                    {majors.map((item) => (
                                        <div key={item.id} className="flex items-center justify-center gap-2 text-lg">
                                            <input type="checkbox" id={item.id} className="" />
                                            <label className="text-base" htmlFor={item.id}>
                                                {item.name}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="flex flex-col items-start w-full gap-6 px-5 bg-white border border-gray-200 py-9">
                                <label className="text-2xl font-semibold text-gray-900">Kĩ Năng</label>
                                <div className="flex flex-col items-start">
                                    {skills.map((item) => (
                                        <div key={item.id} className="flex items-center justify-center gap-2 text-lg">
                                            <input type="checkbox" id={item.id} className="" />
                                            <label className="text-base" htmlFor={item.id}>
                                                {item.name}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="grid w-full grid-cols-3 gap-6 ">
                            {Array.from({ length: 9 }).map((_, index) => (
                                <JobCard
                                    key={index}
                                    id={'1'}
                                    company="FPT Telecom"
                                    companyLogo="https://styles.redditmedia.com/t5_5y10vo/styles/communityIcon_hp8h49lns4l81.png"
                                    salary="$200.00 - $350.00"
                                    thumbnail="https://styles.redditmedia.com/t5_5y10vo/styles/communityIcon_hp8h49lns4l81.png"
                                    title="Marketing Intern"
                                    tag="Marketing"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobList;
