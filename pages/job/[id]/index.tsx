import { NextPage } from 'next';
import { useRouter } from 'next/router';
import * as React from 'react';

interface JobDetailPageProps {}

import JobDetail from '@features/job/JobDetail';
import { Tab } from '@headlessui/react';
import { StarIcon } from '@heroicons/react/20/solid';
import { Company } from '@models/company';
import clsx from 'clsx';
import Link from 'next/link';
import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// const reviews: {
//     average: 4;
//     totalCount: 117;
//     featured: [
//         {
//             id: 1;
//             date: '19/11/2021';
//             rating: 5;
//             content: `
//         <p>I've searched my entire life for a t-shirt that reflects every color in the visible spectrum. Scientists said it couldn't be done, but when I look at this shirt, I see white light bouncing right back into my eyes. Incredible!</p>
//       `;
//             author: 'Mark Edwards';
//             avatarSrc: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixqx=oilqXxSqey&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80';
//         },
//         {
//             id: 2;
//             date: 'Adds the perfect variety to my wardrobe';
//             rating: 4;
//             content: `
//         <p>I used to be one of those unbearable minimalists who only wore the same black v-necks every day. Now, I have expanded my wardrobe with three new crewneck options! Leaving off one star only because I wish the heather gray was more gray.</p>
//       `;
//             author: 'Blake Reid';
//             avatarSrc: 'https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80';
//         },
//         {
//             id: 3;
//             date: 'All good things come in 6-Packs';
//             rating: 5;
//             content: `
//         <p>Tasty beverages, strong abs that will never be seen due to aforementioned tasty beverages, and these Basic Tees!</p>
//       `;
//             author: 'Ben Russel';
//             avatarSrc: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80';
//         }
//     ];
// };

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

const company: Company = {
    images: [
        'https://fpt.vn/storage/upload/images/services/enterprise/datacenter/1.jpg',
        'https://image-us.24h.com.vn/upload/4-2022/images/2022-11-07/image2-1667817116-777-width660height396.jpg',
        'https://fptso1vn.com/wp-content/uploads/2022/04/4b22e4042f6159e26af20aad1bb4101f.jpg',
        'https://media.doanhnhantrevietnam.vn/files/content/2021/03/22/fpt-telecom-1348.jpg',
        'https://fpt-fti.com/wp-content/uploads/2020/12/Tuyen-dung-Cong-ty-TNHH-MTV-Vien-thong-Quoc-te-FPT-FPT-Telecom-International-3.jpg',
    ],
    name: 'Công Ty Cổ Phần Viễn Thông FPT Telecom',
    otherJobs: ['Marketing', 'UX/UI Designer', 'Frontend Developer'],
    hireJob: 'Marketing',
    updatedAt: 'Feb 28 2023',
    descriptions: [
        'Tạo và thực hiện nội dung trên các nền tảng Mạng xã hội và Blog theo kế hoạch Team Digital Marketing.',
        'Sáng tạo, tìm kiếm nội dung, tài liệu đáp ứng cho hoạt động sáng tạo nội dung.',
        'Tham gia lập kế hoạch phát triển kênh truyền thông online: Facebook, Tiktok, Zalo, Website và các kênh PR vệ tinh khác.',
        'Lên kế hoạch nội dung và viết content cho Facebook, Tiktok...',
        'Phối hợp với các bộ phận liên quan để sản xuất nội dung trên nhiều định dạng khác nhau: Content video, Content hình vẽ, Content bài viết.',
    ],
    jobDetail: {
        title: 'Thực tập sinh',
        quantity: 5,
        type: 'Thực tập sinh',
        applied: 2,
        address: 'TP. Hồ Chí Minh',
        department: 'Ban Marketing',
        length: '3 tháng',
        salary: 'Lương thoả thuận',
        expired: '08/03/2023',
        status: 'Đang tuyển',
    },

    requires: [
        {
            name: 'Chi tiết công việc',
            details: [
                'Tạo và thực hiện nội dung trên các nền tảng Mạng xã hội và Blog theo kế hoạch Team Digital Marketing.',
                'Sáng tạo, tìm kiếm nội dung, tài liệu đáp ứng cho hoạt động sáng tạo nội dung.',
                'Tham gia lập kế hoạch phát triển kênh truyền thông online: Facebook, Tiktok, Zalo, Website và các kênh PR vệ tinh khác.',
                'Lên kế hoạch nội dung và viết content cho Facebook, Tiktok...',
                'Phối hợp với các bộ phận liên quan để sản xuất nội dung trên nhiều định dạng khác nhau: Content video, Content hình vẽ, Content bài viết.',
            ],
        },
        {
            name: 'Yêu cầu công việc',
            details: [
                'Ưu tiên ứng viên tốt nghiệp Cao đẳng trở lên chuyên ngành: Marketing, Truyền thông, Tổ chức sự kiện, Ngôn ngữ, Báo chí và các ngành nghề liên quan khác.',
                'Thực tập 3 tháng full time trở lên, tối thiểu 80h/ 1 tháng.',
                'Yêu thích công nghệ, giải trí và yêu thích bắt trends.',
                'Biết sử dụng các nền tảng mạng xã hội giải trí.',
                'Thích học hỏi, nhạy bén và yêu thích sáng tạo nội dung.',
                'Có kỹ năng sử dụng các ứng dụng hỗ trợ làm content là điểm cộng.',
            ],
        },
        {
            name: 'Quyền lợi',
            details: [
                'Hỗ trợ làm đồ án, báo cáo tốt nghiệp.',
                'Có cơ hội phát triển thành nhân viên chính thức.',
                'Cơ hội được tham gia vào công việc thực tế tại công ty.',
                'Cơ hội học hỏi, đào tạo nghiệp vụ, phát triển chuyên môn.',
                'Được tham gia các chương trình, trải nghiệm văn hóa FPT.',
            ],
        },
    ],
    reviews: {
        average: 4,
        totalCount: 117,
        featured: [
            {
                id: 1,
                date: '19/11/2021',
                rating: 5,
                content: `
            <p>I've searched my entire life for a t-shirt that reflects every color in the visible spectrum. Scientists said it couldn't be done, but when I look at this shirt, I see white light bouncing right back into my eyes. Incredible!</p>
          `,
                author: 'Mark Edwards',
                avatarSrc:
                    'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixqx=oilqXxSqey&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
            {
                id: 2,
                date: 'Adds the perfect variety to my wardrobe',
                rating: 4,
                content: `
            <p>I used to be one of those unbearable minimalists who only wore the same black v-necks every day. Now, I have expanded my wardrobe with three new crewneck options! Leaving off one star only because I wish the heather gray was more gray.</p>
          `,
                author: 'Blake Reid',
                avatarSrc:
                    'https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80',
            },
            {
                id: 3,
                date: 'All good things come in 6-Packs',
                rating: 5,
                content: `
            <p>Tasty beverages, strong abs that will never be seen due to aforementioned tasty beverages, and these Basic Tees!</p>
          `,
                author: 'Ben Russel',
                avatarSrc:
                    'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
        ],
    },
};

const JobDetailPage: NextPage<JobDetailPageProps> = () => {
    const router = useRouter();
    const id = router.query.id || '';
    // get job detail here

    return <JobDetail company={company} />;
};

export default JobDetailPage;
