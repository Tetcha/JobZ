import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@root/prisma/client';

export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    // const body = JSON.parse(req.body);
    if (req.method === 'GET') {
        try {
            const data = await prisma.rating.findMany({
                where: {
                    postId: req.query.postId as string,
                },
            });
            res.status(200).json(data);
        } catch (error) {
            console.log(error);
            res.status(400).json({ message: 'Something went wrong post' });
        }
    }
};

export default handler;
