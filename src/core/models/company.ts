export interface Post {
    id: string;
    images: string[];
    name: string;
    otherJobs: Tag[];
    hireJob: Tag;
    updateAt: string;
    descriptions: string;
    jobDetail: {
        title: Title;
        quantity: number;
        type: TypeWorking;
        applied: number;
        address: string;
        department: string;
        length: string;
        salary: string;
        expired: string;
        status: Status;
    };
    requires: {
        name: string;
        details: string;
    }[];
    ratings: Rating[];
}

interface Rating {
    id: string;
    postId: string;
    rating: number;
    comment: string;
    avatar: string;
    name: string;
}

type Title = 'Thực tập sinh' | 'Nhân viên' | 'Quản lý';

export interface OptionalSelect {
    value: string;
    label: string;
}

export const selectTitle: OptionalSelect[] = [
    { value: 'Thực tập sinh', label: 'Thực tập sinh' },
    {
        value: 'Nhân viên',
        label: 'Nhân viên',
    },
    {
        value: 'Quản lý',
        label: 'Quản lý',
    },
];

type TypeWorking = 'Full-time' | 'Part-time' | 'Hybrid' | 'Remote';

export const selectTypeWorking: OptionalSelect[] = [
    { value: 'Full-time', label: 'Full-time' },
    {
        value: 'Part-time',
        label: 'Part-time',
    },
    {
        value: 'Hybrid',
        label: 'Hybird',
    },
    {
        value: 'Remote',
        label: 'Remote',
    },
];

type Status = 'Đang tuyển' | 'Đã tuyển' | 'Đã hết hạn';
export const selectStatus: OptionalSelect[] = [
    { value: 'Đang tuyển', label: 'Đang tuyển' },
    {
        value: 'Đã tuyển',
        label: 'Đã tuyển',
    },
    {
        value: 'Đã hết hạn',
        label: 'Đã hết hạn',
    },
];

type Tag =
    | 'Công nghệ thông tin'
    | 'Kinh tế'
    | 'Marketing'
    | 'Kinh doanh'
    | 'Tài chính'
    | 'Nhân sự'
    | 'Thiết kế'
    | 'Kiến trúc'
    | 'Ngoại ngữ'
    | 'Khác'
    | 'UX/UI Designer'
    | 'Frontend Developer'
    | string;

export const selectTag: OptionalSelect[] = [
    { value: 'Công nghệ thông tin', label: 'Công nghệ thông tin' },
    {
        value: 'Kinh tế',
        label: 'Kinh tế',
    },
    {
        value: 'Marketing',
        label: 'Marketing',
    },
    {
        value: 'Kinh doanh',
        label: 'Kinh doanh',
    },
    {
        value: 'Tài chính',
        label: 'Tài chính',
    },
    {
        value: 'Nhân sự',
        label: 'Nhân sự',
    },
    {
        value: 'Thiết kế',
        label: 'Thiết kế',
    },
    {
        value: 'Kiến trúc',
        label: 'Kiến trúc',
    },
    {
        value: 'Ngoại ngữ',
        label: 'Ngoại ngữ',
    },
    {
        value: 'UX/UI Designer',
        label: 'UX/UI Designer',
    },
    {
        value: 'Frontend Developer',
        label: 'Frontend Developer',
    },
    {
        value: 'Khác',
        label: 'Khác',
    },
];

export interface PostAddDTO extends Omit<Post, 'reviews' | 'id'> {}
