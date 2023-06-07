import { useUserContext } from '@context/UserContext';
import { config } from '@core/config';
import axios from 'axios';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import * as React from 'react';

interface SubscriptionPageProps {}

const SubscriptionPage: NextPage<SubscriptionPageProps> = () => {
    const router = useRouter();
    const { updateUserData } = useUserContext();

    const { id, userId } = router.query;

    const handleUpgradeSubscription = async () => {
        if (!id && !userId) return;

        await axios.put(`/api/user-subscription/buy`, {
            subscriptionId: id,
            userId: userId,
        });
        updateUserData();
    };

    React.useEffect(() => {
        handleUpgradeSubscription();
        setTimeout(() => {
            router.push('/');
        }, 5000);
    }, [id, userId]);

    return (
        <div className="flex flex-col items-center justify-center h-[900px] w-full bg-white">
            <h1 className="text-2xl font-semibold text-gray-900">Bạn đã nâng cấp gói premium thành công</h1>
            <p className="text-sm font-semibold text-gray-900">Trang sẽ được chuyển đến trang chủ trong 5s</p>
        </div>
    );
};

export default SubscriptionPage;
