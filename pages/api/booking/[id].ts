import prisma from '@root/prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    // const body = JSON.parse(req.body);
    if (req.method === 'GET') {
        try {
            const data = await prisma.booking.findUnique({
                where: {
                    appliedId: req.query.id as string,
                },
            });
            res.status(200).json(data);
        } catch (error) {
            console.log(error);
            res.status(400).json({ message: 'Something went wrong booking' });
        }
    }
};

export default handler;
