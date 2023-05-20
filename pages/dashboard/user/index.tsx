import { NextPage } from 'next';
import * as React from 'react';

import { ModalProvider } from '../../../src/core/contexts';
import { defaultPagingProps } from '../../../src/core/models';
import { objectHelper } from '../../../src/core/utils';

interface DashboardUserManagementPageProps {}

const DashboardUserManagementPage: NextPage<DashboardUserManagementPageProps> = ({}) => {
    return <ModalProvider></ModalProvider>;
};

DashboardUserManagementPage.getInitialProps = async (ctx): Promise<DashboardUserManagementPageProps> => {
    return {
        filters: objectHelper.getObjectWithDefault<Partial<any>>(ctx.query, {
            ...defaultPagingProps,
            status: '',
            role: '',
            name: '',
            email: '',
        }),
    };
};

export default DashboardUserManagementPage;
