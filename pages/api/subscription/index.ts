import { Role } from '@prisma/client';
import prisma from '@root/prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'GET') {
        try {
            const maxValue = await prisma.subscription.aggregate({
                _max: {
                    price: true,
                },
                where: {
                    userRole: (String(req.query.userRole) as Role) || 'USER',
                },
            });

            const subscription = await prisma.subscription.findFirst({
                where: {
                    userRole: (String(req.query.userRole) as Role) || 'USER',
                    price: maxValue._max.price || 0,
                },
            });

            console.log(subscription);
            res.status(200).json(subscription);
        } catch (error) {
            console.log(error);
            res.status(400).json({ message: 'Something went wrong user subscription' });
        }
    }
};

export default handler;
