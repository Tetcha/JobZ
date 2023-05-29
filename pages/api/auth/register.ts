import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@root/prisma/client';

export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    // const body = JSON.parse(req.body);
    if (req.method === 'POST') {
        // Process a POST request
        try {
            const data = await prisma.user.create({
                data: req.body,
            });
            res.status(200).json(data);
        } catch (error) {
            console.log(error);
            res.status(400).json({ message: 'Something went wrong' });
        }
    }
};

export default handler;
