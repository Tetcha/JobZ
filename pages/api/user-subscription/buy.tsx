import prisma from '@root/prisma/client';
import moment from 'moment';
import { NextApiRequest, NextApiResponse } from 'next';

export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'PUT') {
        try {
            const subscription = await prisma.subscription.findUnique({
                where: {
                    id: req.body.subscriptionId,
                },
            });

            if (subscription) {
                const data = await prisma.userSubscription.update({
                    where: {
                        userId: req.body.userId,
                    },
                    data: {
                        name: subscription.name,
                        bookings: subscription.bookings,
                        price: subscription.price,
                        view: subscription.view,
                        posts: subscription.posts,
                        userRole: subscription.userRole,
                        startDate: moment().unix(),
                        endDate: moment().add(1, 'month').unix(),
                    },
                });
                return res.status(200).json(data);
            }

            res.status(400).json({ message: 'Something went wrong user subscription' });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Something went wrong user subscription' });
        }
    }
};

export default handler;
