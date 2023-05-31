import prisma from '@root/prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    // const body = JSON.parse(req.body);
    if (req.method === 'PUT') {
        try {
            await prisma.profile.update({
                data: {
                    cv: req.body.cv,
                    title: req.body.title,
                    intro: req.body.intro,
                },
                where: {
                    userId: req.body.userId,
                },
            });

            await prisma.user.update({
                data: {
                    name: req.body.name,
                },
                where: {
                    id: req.body.userId,
                },
            });

            return res.status(200).json({ message: 'Profile updated' });
        } catch (error) {
            console.log(error);
            res.status(400).json({ message: 'Something went wrong post' });
        }
    }
};

export default handler;
