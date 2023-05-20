import { NextPage } from 'next';

import { ModalProvider } from '../../../src/core/contexts';
import { objectHelper } from '../../../src/core/utils';

interface DriverByIdPageProps {
    userId: string;
}

const AccountByIdPage: NextPage<DriverByIdPageProps> = ({ userId }) => {
    return <ModalProvider></ModalProvider>;
};
AccountByIdPage.getInitialProps = async (ctx): Promise<DriverByIdPageProps> => {
    return {
        userId: objectHelper.getObjectWithDefault<Partial<{ userId: string }>>(ctx.query, {
            userId: '',
        }).userId,
    };
};

export default AccountByIdPage;
