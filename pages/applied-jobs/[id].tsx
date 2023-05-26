import * as React from 'react';
import { CheckIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import { useToggleContext } from 'react-toggle-hook';
import { XMarkIcon } from '@heroicons/react/24/solid';
import SelectInterviewDate from '@components/modals/SelectInterviewModal';

interface AppliedJobDetailPageProps {}

export enum StepStatus {
    Complete = 'complete',
    Current = 'current',
    Upcoming = 'upcoming',
    Deny = 'deny',
}

export interface Step {
    name: string;
    description: string;
    action: () => void;
    status: StepStatus;
}

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

const AppliedJobDetailPage: React.FunctionComponent<AppliedJobDetailPageProps> = () => {
    const { open } = useToggleContext<string>('select-interview-date', {
        // extraOpenAction is called after close action
        extraCloseAction: () => {},
    });

    const steps: Step[] = [
        { name: 'Tạo hồ sơ ứng tuyển', description: 'Hồ sơ của bạn khởi tạo trên nền tảng', action: () => {}, status: StepStatus.Complete },
        {
            name: 'Nộp hồ sơ',
            description: 'Hồ sơ của bạn sẽ được gửi đến nhà tuyển dụng',
            action: () => {},
            status: StepStatus.Current,
        },
        { name: 'Doanh nghiệp đã nhận', description: 'Hồ sơ của bạn đã được doanh nghiệp tiếp nhận', action: () => {}, status: StepStatus.Upcoming },
        {
            name: 'Đồng ý phỏng vấn',
            description: 'Doanh nghiệp đã đồng ý phỏng vấn, hãy chọn lịch phỏng vấn phù hợp với bạn',
            action: () => {
                open('');
            },
            status: StepStatus.Current,
        },
        { name: 'Đồng ý nhận làm việc', description: 'Chúc mừng bạn đã ứng tuyển thành công', action: () => {}, status: StepStatus.Upcoming },
    ];

    const handleStep = (status: StepStatus, step: Step, stepIdx: number) => {
        switch (status) {
            case StepStatus.Complete:
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
            case StepStatus.Current:
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
                        </div>
                    </>
                );
            case StepStatus.Upcoming:
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
            case StepStatus.Deny:
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
                    <h1 className="text-6xl font-semibold text-gray-900">Vị trí đã ứng tuyển</h1>
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
                            <h2 className="text-3xl font-semibold text-indigo-500">Công Ty: FPT Telecom</h2>
                            <p className="text-lg font-medium text-gray-900">
                                Vị trí ứng tuyển <span className="font-semibold text-indigo-500">{`Marketing`}</span>
                            </p>
                            <p className="text-lg font-medium text-gray-900">
                                Ngày ứng tuyển <span className="font-semibold text-indigo-500">{`20/10/2021`}</span>
                            </p>
                            <div className="flex items-center justify-start w-full mt-2">
                                <div className="w-full max-w-md overflow-hidden rounded-lg shadow-lg h-72">
                                    <img
                                        src="https://styles.redditmedia.com/t5_5y10vo/styles/communityIcon_hp8h49lns4l81.png"
                                        className="object-cover w-full h-full"
                                        alt=""
                                    />
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
            <SelectInterviewDate />
        </>
    );
};

export default AppliedJobDetailPage;
