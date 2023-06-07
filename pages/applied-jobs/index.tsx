import { useUserContext } from '@context/UserContext';
import { config } from '@core/config';
import { ChevronRightIcon } from '@heroicons/react/24/solid';
import { Applied } from '@prisma/client';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Link from 'next/link';
import * as React from 'react';

interface AppliedJobsPageProps {}

const AppliedJobsPage: React.FunctionComponent<AppliedJobsPageProps> = () => {
    const { user, updateUserData } = useUserContext();

    React.useEffect(() => {
        updateUserData();
    }, []);

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
                    {user.applied.map((item) => (
                        <li key={item.id} className="relative py-5 hover:bg-gray-50">
                            <Link href={`/applied-jobs/${item.id}`}>
                                <div className="px-4 sm:px-6 lg:px-8">
                                    <div className="flex justify-between max-w-4xl mx-auto gap-x-6">
                                        <div className="flex w-full gap-x-4">
                                            <div className="flex items-center justify-center overflow-hidden rounded-lg h-36 w-60 bg-gray-50">
                                                {!item.post.thumbnail.length ? (
                                                    <p>Chưa có ảnh</p>
                                                ) : (
                                                    <img className="object-cover w-full h-full " src={item.post.thumbnail} alt="" />
                                                )}
                                            </div>
                                            <div className="flex flex-col items-start justify-center w-full">
                                                <p className="text-xl font-semibold leading-6 text-gray-900">
                                                    <a>
                                                        <span className="absolute inset-x-0 bottom-0 -top-px" />
                                                        {item.post.hireJob}
                                                    </a>
                                                </p>
                                                <p className="flex mt-1 text-sm font-medium leading-5 text-gray-700">
                                                    <p className="relative w-full h-full ">{item.post.name}</p>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-x-4">
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
