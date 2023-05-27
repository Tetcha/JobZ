import CandidateCard from '@components/cards/CandidateCard';
import Link from 'next/link';
import * as React from 'react';
import { v4 as uuid } from 'uuid';

interface CandidateListProps {}

const CandidateList: React.FunctionComponent<CandidateListProps> = () => {
    return (
        <div className="flex flex-col justify-center w-full">
            <div className="flex flex-col items-center justify-center w-full gap-2 bg-gray-200 h-96">
                <h1 className="text-6xl font-semibold text-gray-900">Danh sách ứng viên ứng tuyển</h1>
                <div className="flex items-center justify-center gap-2 mt-2 text-lg font-medium text-gray-700">
                    <Link href={'/'}>
                        <p className="cursor-pointer hover:text-blue-600">Home</p>
                    </Link>
                    &gt;
                    <p>Candidate To Apply</p>
                </div>
            </div>
            <div className="flex justify-center w-full py-20 bg-gray-100">
                <div className="flex flex-col items-center justify-center w-full text-gray-900 max-w-screen-app gap-9">
                    <div className="flex flex-col items-center justify-center w-full py-10">
                        <p className="text-lg font-semibold text-red-500">Danh Sách ứng viên</p>
                        <h1 className="text-3xl font-bold uppercase">FPT Software</h1>
                    </div>
                    <div className="grid w-full grid-cols-3 gap-10 ">
                        {Array.from({ length: 6 }).map((_, index) => (
                            <CandidateCard
                                key={index}
                                id={'1'}
                                name={'Nguyễn Văn Hải'}
                                avatar={'/images/avatars/creator_2.jpg'}
                                position={'front-end developer'}
                                socialLink={[]}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CandidateList;
