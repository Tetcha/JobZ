import prisma from '@root/prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const { body } = req;
    if (req.method === 'GET') {
        return res.status(200).json({ message: 'WTF' });
    }

    if (req.method === 'POST') {
        // Process a POST request

        try {
            const data = await prisma.user.findUnique({
                where: {
                    email: body.email,
                },
            });

            if (data?.email !== body.email) {
                return res.status(400).json({ message: 'Incorrect email or password' });
            }

            if (data?.role !== body.role) {
                return res.status(400).json({ message: 'Incorrect role' });
            }

            if (data?.password !== body.password) {
                return res.status(400).json({ message: 'Incorrect email or password' });
            }

            return res.status(200).json(data);
        } catch (error) {
            res.status(400).json({ message: 'Incorrect email or password' });
        }
    }
};

export default handler;
