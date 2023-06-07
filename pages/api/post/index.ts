import prisma from '@root/prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    // const body = JSON.parse(req.body);
    if (req.method === 'GET') {
        try {
            const data = await prisma.post.findMany({
                include: {
                    jobDetail: true,
                    requires: true,
                },
            });
            res.status(200).json(data);
        } catch (error) {
            console.log(error);
            res.status(400).json({ message: 'Something went wrong post' });
        }
    }

    if (req.method === 'POST') {
        // Process a POST request
        try {
            const data = await prisma.post.create({
                data: {
                    userId: req.body.userId,
                    descriptions: req.body.descriptions,
                    hireJob: req.body.hireJob,
                    name: req.body.name,
                    updateAt: req.body.updateAt,
                    images: req.body.images,
                    thumbnail: req.body.thumbnail,
                    jobDetail: {
                        create: req.body.jobDetail,
                    },
                    otherJobs: req.body.otherJobs,
                    requires: {
                        createMany: {
                            data: req.body.requires,
                        },
                    },
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
