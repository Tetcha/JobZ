import { Applied as IApplied } from '@prisma/client';

import { Post } from './company';

export interface Applied extends IApplied {
    post: Pick<Post, 'hireJob' | 'id' | 'thumbnail' | 'name'>;
}
