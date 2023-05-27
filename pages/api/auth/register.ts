import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@root/prisma/client';

export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        // Process a POST request
        try {
            const body = JSON.parse(req.body);

            const data = await prisma.user.create({
                data: body,
            });
            res.status(200).json(data);
        } catch (error) {
            res.status(400).json({ message: 'Something went wrong' });
        }
    }
};

export default handler;
