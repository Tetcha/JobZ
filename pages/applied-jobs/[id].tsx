import SelectInterviewDate from '@components/modals/SelectInterviewModal';
import { useUserContext } from '@context/UserContext';
import { config } from '@core/config';
import { CheckIcon } from '@heroicons/react/20/solid';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { Applied } from '@models/applied';
import { Status } from '@prisma/client';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useToggleContext } from 'react-toggle-hook';

interface AppliedJobDetailPageProps {}

export interface Step {
    name: string;
    description: string;
    action: () => void;
    status: Status;
}

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

const AppliedJobDetailPage: React.FunctionComponent<AppliedJobDetailPageProps> = () => {
    const { open } = useToggleContext<string>('select-interview-date', {
        // extraOpenAction is called after close action
        extraCloseAction: () => {},
    });

    const { user } = useUserContext();

    const [id, setId] = React.useState<string>('');

    const router = useRouter();
    React.useEffect(() => {
        if (router.query.id) {
            console.log(router.query.id);
            setId(router.query.id as string);
        }
    }, [router.query.id]);

    const { data, refetch } = useQuery<Applied>(
        ['applied-job-detail', id],
        async () => {
            const res = await axios.get(`${config.SERVER_URL}/applied/recruit/${id}`);
            return res.data;
        },
        {
            enabled: Boolean(id),
            initialData: {
                id: '',
                note: '',
                phone: '',
                post: {
                    id: '',
                    hireJob: '',
                    thumbnail: '',
                },
                postId: '',
                stage: 1,
                status: 'INCOMING',
                userId: '',
            } as Applied,
        }
    );

    const steps: Step[] = [
        {
            name: 'Tạo hồ sơ ứng tuyển',
            description: `Hồ sơ của ${user.role === 'BUSINESS' ? 'ứng viên' : 'bạn'} khởi tạo trên nền tảng`,
            action: () => {},
            status: Status.COMPLETE,
        },
        {
            name: 'Nộp hồ sơ',
            description: `Hồ sơ của ${user.role === 'BUSINESS' ? 'ứng viên' : 'bạn'} sẽ được gửi đến nhà tuyển dụng`,
            action: () => {},
            status: data.status === 'REJECT' ? Status.REJECT : data.stage > 1 ? Status.COMPLETE : Status.INCOMING,
        },
        {
            name: 'Doanh nghiệp đã nhận',
            description: `Hồ sơ của ${user.role === 'BUSINESS' ? 'ứng viên' : 'bạn'} đã được doanh nghiệp tiếp nhận`,
            action: () => {},
            status: data.status === 'REJECT' ? Status.REJECT : data.stage > 2 ? Status.COMPLETE : Status.INCOMING,
        },
        {
            name: 'Đồng ý phỏng vấn',
            description: `Doanh nghiệp đã đồng ý phỏng vấn, hãy liên hệ với ${user.role === 'BUSINESS' ? 'ứng viên' : 'nhà tuyển dụng'} để phỏng vấn`,
            action: () => {},
            status: data.status === 'REJECT' ? Status.REJECT : data.stage > 3 ? Status.COMPLETE : Status.INCOMING,
        },
        {
            name: 'Đồng ý nhận làm việc',
            description: `Chúc mừng ${user.role === 'BUSINESS' ? 'ứng viên' : 'bạn'} đã ứng tuyển thành công`,
            action: () => {},
            status: data.status === 'REJECT' ? Status.REJECT : data.stage > 4 ? Status.COMPLETE : Status.INCOMING,
        },
    ];

    const handleAccept = () => {
        axios
            .put(`${config.SERVER_URL}/applied/recruit`, {
                id: data.id,
                stage: data.stage + 1,
                status: Status.INCOMING,
            })
            .then((res) => {
                refetch();
            });
    };

    const handleReject = () => {
        axios
            .put(`${config.SERVER_URL}/applied/recruit`, {
                id: data.id,
                stage: data.stage + 1,
                status: Status.REJECT,
            })
            .then((res) => {
                refetch();
            });
    };

    const handleStep = (status: Status, step: Step, stepIdx: number) => {
        console.log(status);
        switch (status) {
            case Status.COMPLETE:
                return (
                    <>
                        {stepIdx !== steps.length - 1 ? (
                            <div className="absolute left-4 top-4 -ml-px mt-0.5 h-full w-0.5 bg-indigo-600" aria-hidden="true" />
                        ) : null}
                        <div className="relative flex items-start group">
                            <span className="flex items-center h-9">
                                <span className="relative z-10 flex items-center justify-center w-8 h-8 bg-indigo-600 rounded-full group-hover:bg-indigo-800">
                                    <CheckIcon className="w-5 h-5 text-white" aria-hidden="true" />
                                </span>
                            </span>
                            <span className="flex flex-col min-w-0 ml-4">
                                <span className="text-sm font-medium">{step.name}</span>
                                <span className="text-sm text-gray-500">{step.description}</span>
                            </span>
                        </div>
                    </>
                );
            case Status.INCOMING:
                return (
                    <>
                        {stepIdx !== steps.length - 1 ? (
                            <div className="absolute left-4 top-4 -ml-px mt-0.5 h-full w-0.5 bg-gray-300" aria-hidden="true" />
                        ) : null}

                        <div className="relative flex items-start cursor-pointer group" aria-current="step" onClick={() => step.action()}>
                            <span className="flex items-center h-9" aria-hidden="true">
                                <span className="relative z-10 flex items-center justify-center w-8 h-8 bg-white border-2 border-indigo-600 rounded-full">
                                    <span className="h-2.5 w-2.5 rounded-full bg-indigo-600" />
                                </span>
                            </span>
                            <span className="flex flex-col min-w-0 ml-4">
                                <span className="text-sm font-medium text-indigo-600">{step.name}</span>
                                <span className="text-sm text-gray-500">{step.description}</span>
                            </span>
                            {user.role === 'BUSINESS' && data.status === 'INCOMING' && stepIdx === data.stage && (
                                <div className="absolute top-0 right-0 flex items-center justify-center h-10 gap-2 ">
                                    <div
                                        className="w-8 h-8 p-1 text-green-500 bg-white border border-gray-900 border-solid rounded-full"
                                        onClick={() => handleAccept()}
                                    >
                                        <CheckIcon />
                                    </div>
                                    <div
                                        className="w-8 h-8 p-1 text-red-500 bg-white border border-gray-900 border-solid rounded-full"
                                        onClick={() => handleReject()}
                                    >
                                        <XMarkIcon />
                                    </div>
                                </div>
                            )}
                        </div>
                    </>
                );

            case Status.REJECT:
                return (
                    <>
                        {stepIdx !== steps.length - 1 ? (
                            <div className="absolute left-4 top-4 -ml-px mt-0.5 h-full w-0.5 bg-indigo-600" aria-hidden="true" />
                        ) : null}
                        <div className="relative flex items-start group">
                            <span className="flex items-center h-9">
                                <span className="relative z-10 flex items-center justify-center w-8 h-8 bg-red-600 rounded-full group-hover:bg-indigo-800">
                                    <XMarkIcon className="w-5 h-5 text-white" aria-hidden="true" />
                                </span>
                            </span>
                            <span className="flex flex-col min-w-0 ml-4">
                                <span className="text-sm font-medium">{step.name}</span>
                                <span className="text-sm text-gray-500">{step.description}</span>
                            </span>
                        </div>
                    </>
                );
            default:
                return (
                    <>
                        {stepIdx !== steps.length - 1 ? (
                            <div className="absolute left-4 top-4 -ml-px mt-0.5 h-full w-0.5 bg-gray-300" aria-hidden="true" />
                        ) : null}
                        <div className="relative flex items-start group">
                            <span className="flex items-center h-9" aria-hidden="true">
                                <span className="relative z-10 flex items-center justify-center w-8 h-8 bg-white border-2 border-gray-300 rounded-full group-hover:border-gray-400">
                                    <span className="h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-gray-300" />
                                </span>
                            </span>
                            <span className="flex flex-col min-w-0 ml-4">
                                <span className="text-sm font-medium text-gray-500">{step.name}</span>
                                <span className="text-sm text-gray-500">{step.description}</span>
                            </span>
                        </div>
                    </>
                );
        }
    };

    return (
        <>
            <div className="flex flex-col">
                <div className="flex flex-col items-center justify-center w-full gap-2 bg-gray-200 h-96">
                    <h1 className="text-6xl font-semibold text-gray-900">Chi tiết ứng tuyển</h1>
                    <div className="flex items-center justify-center gap-2 mt-2 text-lg font-medium text-gray-700">
                        <Link href={'/'}>
                            <p className="cursor-pointer hover:text-blue-600">Home</p>
                        </Link>
                        &gt;
                        <Link href={'/applied-jobs'}>
                            <p className="cursor-pointer hover:text-blue-600">Applied Jobs</p>
                        </Link>
                        &gt;
                        <p>Applied Detail</p>
                    </div>
                </div>
                <div className="flex justify-center h-full gap-2 py-32">
                    <div className="flex flex-col w-full max-w-xl ">
                        <div className="flex flex-col w-full gap-2 h-96">
                            <h2 className="text-3xl font-semibold text-indigo-500">{data.post.name}</h2>
                            <p className="text-lg font-medium text-gray-900">
                                Vị trí ứng tuyển <span className="font-semibold text-indigo-500">{data.post.hireJob}</span>
                            </p>

                            <div className="flex items-center justify-start w-full mt-2">
                                <div className="flex items-center justify-center w-full max-w-md overflow-hidden rounded-lg shadow-lg h-72">
                                    {data.post.thumbnail ? (
                                        <img
                                            src="https://styles.redditmedia.com/t5_5y10vo/styles/communityIcon_hp8h49lns4l81.png"
                                            className="object-cover w-full h-full"
                                            alt=""
                                        />
                                    ) : (
                                        <p>Chưa có ảnh</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full max-w-2xl">
                        <nav aria-label="Progress">
                            <ol role="list" className="overflow-hidden">
                                {steps.map((step, stepIdx) => (
                                    <li key={step.name} className={classNames(stepIdx !== steps.length - 1 ? 'pb-10' : '', 'relative')}>
                                        {handleStep(step.status, step, stepIdx)}
                                    </li>
                                ))}
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AppliedJobDetailPage;
