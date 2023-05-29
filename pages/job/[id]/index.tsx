import { NextPage } from 'next';
import { useRouter } from 'next/router';
import * as React from 'react';

import JobDetail from '@features/job/JobDetail';

import { Post } from '@models/company';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { config } from '@core/config';
import get from 'lodash.get';

interface JobDetailPageProps {
    post: Post;
}

const JobDetailPage: NextPage<JobDetailPageProps> = ({ post }) => {
    return <JobDetail post={post} />;
};

JobDetailPage.getInitialProps = async (ctx) => {
    const id = get(ctx, 'query.id', '');
    const res = await axios.get(`${config.SERVER_URL}/post/${id}`);
    const post = res.data;
    return { post };
};

export default JobDetailPage;
