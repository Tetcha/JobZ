import { useUserContext } from '@context/UserContext';
import { Disclosure, Popover } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';
import { AtSymbolIcon, Cog6ToothIcon, PaperAirplaneIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/solid';
import { Status } from '@prisma/client';
import clsx from 'clsx';
import Link from 'next/link';
import * as React from 'react';

interface CandidateListPageProps {}

const CandidateListPage: React.FunctionComponent<CandidateListPageProps> = () => {
    const { user } = useUserContext();

    const statusToText = (status: Status) => {
        switch (status) {
            case Status.COMPLETE:
                return 'Đã hoàn thành';
            case Status.INCOMING:
                return 'Đang tiến hành';
            case Status.REJECT:
                return 'Đã từ chối';
        }
    };

    return (
        <div className="flex flex-col items-center justify-start min-h-screen py-7">
            <h1 className="text-3xl font-semibold">Danh sách ứng viên</h1>
            <div className="w-full px-4 pt-16">
                <div className="flex flex-col w-full max-w-5xl gap-2 p-2 mx-auto bg-white rounded-2xl">
                    {user.posts.map((post) => (
                        <Disclosure key={post.id}>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex justify-between w-full p-4 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                        <div className="flex w-full gap-4">
                                            <div className="flex items-center justify-center overflow-hidden bg-gray-100 rounded-md h-28 w-52">
                                                {post.thumbnail ? (
                                                    <img src={post.thumbnail} alt="" className="object-cover w-full h-full" />
                                                ) : (
                                                    <p>Chưa có ảnh</p>
                                                )}
                                            </div>
                                            <div className="flex flex-col items-start justify-center">
                                                <p className="text-xl font-semibold">{post.name}</p>
                                                <p className="text-base">Tuyển vị trí: {post.hireJob}</p>
                                            </div>
                                        </div>
                                        <ChevronUpIcon className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-purple-500`} />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="flex flex-col gap-4 px-4 pt-4 pb-2 text-sm text-gray-500">
                                        {post.applied.map((apply) => (
                                            <div key={apply.id} className="flex justify-between p-2 border border-gray-900 rounded-md">
                                                <div className="flex items-center justify-start gap-2">
                                                    <div className="flex-shrink-0 w-10 h-10 overflow-hidden rounded-full">
                                                        {!apply.user.profile.avatar ? (
                                                            <img src="https://i.pravatar.cc/100" alt="" />
                                                        ) : (
                                                            <img src={apply.user.profile.avatar} alt="" />
                                                        )}
                                                    </div>
                                                    <div className="flex gap-6">
                                                        <div className="flex flex-col flex-shrink-0 gap-1">
                                                            <p className="text-sm font-semibold text-gray-900">{apply.user.name}</p>
                                                            <p className="text-sm font-semibold text-gray-900">{apply.user.profile.title}</p>
                                                        </div>
                                                        <div className="flex flex-col flex-shrink-0 gap-1">
                                                            <p className="text-sm font-semibold text-gray-900">SĐT: {apply.phone}</p>
                                                            <p className="text-gray-900">
                                                                Trạng thái:{' '}
                                                                <span
                                                                    className={clsx('font-semibold', {
                                                                        'text-green-500': apply.status === Status.COMPLETE,
                                                                        'text-yellow-500': apply.status === Status.INCOMING,
                                                                        'text-red-500': apply.status === Status.REJECT,
                                                                    })}
                                                                >
                                                                    {statusToText(apply.status)}
                                                                </span>
                                                            </p>
                                                        </div>
                                                        <div className="relative text-sm font-medium text-gray-900">
                                                            <Popover>
                                                                <Popover.Button>
                                                                    <p className="line-clamp-2">Chú thích: {apply.note}</p>
                                                                </Popover.Button>

                                                                <Popover.Panel className="absolute left-0 z-10 max-w-2xl p-2 bg-gray-100 rounded-md shadow-lg bottom-14">
                                                                    <p>{apply.note}</p>
                                                                </Popover.Panel>
                                                            </Popover>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex h-10 gap-2">
                                                    <Link href={`mailto:${apply.user.email}`}>
                                                        <div className="w-10 h-10 p-2 overflow-hidden text-gray-100 bg-indigo-500 rounded-lg shadow-lg cursor-pointer">
                                                            <PaperAirplaneIcon />
                                                        </div>
                                                    </Link>
                                                    <a href={`/profile/${apply.user.id}`} target="_blank" rel="noreferrer">
                                                        <div className="w-10 h-10 p-2 overflow-hidden text-gray-100 bg-indigo-500 rounded-lg shadow-lg cursor-pointer">
                                                            <QuestionMarkCircleIcon />
                                                        </div>
                                                    </a>
                                                    {apply.status === Status.INCOMING && (
                                                        <a href={`/applied-jobs/${apply.id}`} target="_blank" rel="noreferrer">
                                                            <div className="w-10 h-10 p-2 overflow-hidden text-gray-100 bg-indigo-500 rounded-lg shadow-lg cursor-pointer">
                                                                <Cog6ToothIcon />
                                                            </div>
                                                        </a>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CandidateListPage;
