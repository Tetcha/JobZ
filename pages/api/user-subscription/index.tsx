import prisma from '@root/prisma/client';
import moment from 'moment';
import { NextApiRequest, NextApiResponse } from 'next';

export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'PUT') {
        try {
            const data = await prisma.userSubscription.update({
                where: {
                    userId: req.body.userId,
                },
                data: {
                    bookings: req.body.bookings,
                    view: req.body.view,
                    posts: req.body.posts,
                },
            });
            return res.status(200).json(data);
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Something went wrong user subscription' });
        }
    }

    if (req.method === 'PUT') {
        try {
            const data = await prisma.userSubscription.update({
                where: {
                    id: req.body.userSubscriptionId,
                },
                data: {
                    view: req.body.view,
                    bookings: req.body.bookings,
                    price: req.body.price,
                    startDate: req.body.startDate,
                    endDate: req.body.endDate,
                },
            });
            return res.status(200).json(data);
        } catch (error) {
            console.log(error);
            res.status(400).json({ message: 'Something went wrong user subscription' });
        }
    }
};

export default handler;
