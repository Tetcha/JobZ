import prisma from '@root/prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    // const body = JSON.parse(req.body);
    if (req.method === 'POST') {
        try {
            const data = await prisma.booking.create({
                data: {
                    linkMeeting: req.body.linkMeeting,
                    time: req.body.time,
                    note: req.body.note,
                    appliedId: req.body.appliedId,
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
