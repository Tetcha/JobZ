import _get from 'lodash.get';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import * as React from 'react';

interface HomePageProps {}

const HomePage: NextPage<HomePageProps> = () => {
    const router = useRouter();

    return <div className="text-2xl dark:text-jacarta-50 text-jacarta-900">Hello</div>;
};
HomePage.getInitialProps = async (ctx): Promise<HomePageProps> => {
    //tripper.monoinfinity.net/
    return {};
};

export default HomePage;
