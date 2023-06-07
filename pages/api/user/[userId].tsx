import prisma from '@root/prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    // const body = JSON.parse(req.body);
    if (req.method === 'GET') {
        try {
            const data = await prisma.user.findUnique({
                where: {
                    id: req.query.userId as string,
                },
                include: {
                    applied: { select: { post: true, id: true } },
                    posts: {
                        select: {
                            id: true,
                            name: true,
                            hireJob: true,
                            thumbnail: true,
                            applied: {
                                select: {
                                    id: true,
                                    phone: true,
                                    stage: true,
                                    status: true,
                                    note: true,
                                    booking: true,
                                    user: {
                                        select: {
                                            name: true,
                                            id: true,
                                            email: true,
                                            profile: true,
                                        },
                                    },
                                },
                            },
                        },
                    },
                    profile: true,
                    userSubscription: true,
                },
            });

            if (!data) {
                return res.status(400).json({ message: 'User not found' });
            }

            return res.status(200).json(data);
        } catch (error) {
            console.log(error);
            res.status(400).json({ message: 'Something went wrong post' });
        }
    }
};

export default handler;
