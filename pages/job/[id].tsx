import { NextPage } from 'next';
import { useRouter } from 'next/router';
import * as React from 'react';

interface JobDetailPageProps {}

const JobDetailPage: NextPage<JobDetailPageProps> = () => {
    const { query } = useRouter();

    const id = query.id || '';  
    return <div className="flex flex-col w-full h-full text-black bg-gray-100">{id}</div>;
};

export default JobDetailPage;
