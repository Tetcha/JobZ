import CandidateDetail from '@features/candidate/CandidateDetail';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import * as React from 'react';
interface CandidateDetailPageProps {}

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

const CandidateDetailPage: NextPage<CandidateDetailPageProps> = () => {
    const router = useRouter();
    const id = router.query.id || '';
    // get job detail here

    return <CandidateDetail />;
};

export default CandidateDetailPage;
