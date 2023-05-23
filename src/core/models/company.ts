export interface Company {
    images: string[];
    name: string;
    otherJobs: string[];
    hireJob: string;
    updatedAt: string;
    descriptions: string[];
    jobDetail: {
        title: string;
        quantity: number;
        type: string;
        applied: number;
        address: string;
        department: string;
        length: string;
        salary: string;
        expired: string;
        status: string;
    };
    requires: {
        name: string;
        details: string[];
    }[];
    reviews: {
        average: number;
        totalCount: number;
        featured: {
            id: number;
            date: string;
            rating: number;
            content: string;
            author: string;
            avatarSrc: string;
        }[];
    };
}
