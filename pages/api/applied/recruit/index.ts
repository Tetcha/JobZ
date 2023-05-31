import prisma from '@root/prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        try {
            const data = await prisma.applied.create({
                data: { postId: req.body.postId, userId: req.body.userId, stage: 1, status: 'INCOMING', phone: req.body.phone, note: req.body.note },
            });
            res.status(200).json(data);
        } catch (error) {
            console.log(error);
            res.status(400).json({ message: 'Something went wrong post' });
        }
    }

    if (req.method === 'PUT') {
        try {
            const data = await prisma.applied.update({
                where: { id: req.body.id },
                data: {
                    stage: req.body.stage,
                    status: req.body.status,
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
