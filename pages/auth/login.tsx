import { NextPage } from 'next';
import * as React from 'react';

import { CommonSeo } from '../../src/core/components';

interface LoginPageProps {
    token: string;
}

const LoginPage: NextPage<LoginPageProps> = ({}) => {
    return (
        <>
            <CommonSeo title="Login" />
            <div>Login</div>
        </>
    );
};

export default LoginPage;
