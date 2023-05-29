import { Tab } from '@headlessui/react';
import { StarIcon } from '@heroicons/react/20/solid';
import { Post } from '@models/company';
import clsx from 'clsx';
import Link from 'next/link';
import * as React from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useToggleContext } from 'react-toggle-hook';
import ApplyJobModal from '@components/modals/ApplyJobModal';

interface JobDetailProps {
    post: Post;
}

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

const JobDetail: React.FC<JobDetailProps> = ({ post }) => {
    const { open } = useToggleContext<string>('apply-job', {
        // extraOpenAction is called after close action
        extraCloseAction: () => {},
    });

    const [averageRating, setAverageRating] = React.useState(0);

    React.useEffect(() => {
        if (post.ratings.length > 0) {
            const sum = post.ratings.reduce((acc, item) => acc + item.rating, 0);
            setAverageRating(sum / post.ratings.length);
        }
    }, [post]);

    return (
        <>
            <div className="">
                <main>
                    <div className="relative flex flex-col items-center justify-center w-full gap-2 bg-blue-100 h-96">
                        <div className="absolute top-0 h-full -translate-x-1/2 opacity-20 left-1/2">
                            <img
                                className="object-cover w-auto h-full"
                                src="https://media.istockphoto.com/id/1399989707/vector/title-reading-job-description-carefully-finding-the-right-job-concept-unemployment-person.jpg?s=612x612&w=0&k=20&c=I5pqawPausKUKrv9fQEokWGGCT9QJTdlgZ0N9xhXKcY="
                            />
                        </div>
                        <h1 className="relative z-10 text-6xl font-semibold text-gray-900">Chi tiết công việc</h1>
                        <div className="relative z-10 flex items-center justify-center gap-2 mt-2 text-lg font-medium text-gray-700">
                            <Link href={'/'}>
                                <p className="cursor-pointer hover:text-blue-600">Home</p>
                            </Link>
                            &gt;
                            <Link href={'/job'}>
                                <p className="cursor-pointer hover:text-blue-600">Job list</p>
                            </Link>
                            &gt;
                            <p className="text-indigo-500">Job detail</p>
                        </div>
                    </div>
                    <div className="w-full bg-gray-300 h-[480px] py-3">
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={30}
                            loop={true}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            autoplay={{
                                delay: 2500,
                            }}
                            modules={[Pagination, Navigation, Autoplay]}
                            className="h-full w-[820px] rounded-xl overflow-hidden"
                        >
                            {post.images.map((item, i) => (
                                <SwiperSlide key={i}>
                                    <img className="w-[820px] h-full object-cover" src={item} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    {/* Product info */}
                    <div className="mx-auto max-w-2xl px-4 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16">
                        <div className="flex items-center w-full col-span-2 lg:border-r lg:border-gray-200 ">
                            <div className="flex flex-col w-full gap-2">
                                <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{post.name}</h1>
                            </div>
                            <button
                                onClick={() => open('')}
                                className="flex items-center justify-center flex-shrink-0 px-8 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Ứng tuyển ngay
                            </button>
                        </div>

                        <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                            {/* Description and details */}

                            <div className="mt-10">
                                <h3 className="text-2xl font-medium text-gray-900">Miêu tả công việc</h3>

                                <div className="mt-4">
                                    <span dangerouslySetInnerHTML={{ __html: post.descriptions }} />
                                </div>
                            </div>

                            <section aria-labelledby="shipping-heading" className="mt-10">
                                <h2 id="shipping-heading" className="mb-2 text-2xl font-medium text-gray-900">
                                    Chi tiết
                                </h2>
                                <div className="flex">
                                    <div className="flex flex-col w-full gap-5 pr-4 bg-gray-200 border-r border-gray-400 py-14 pl-11">
                                        <div className="flex justify-between">
                                            <p className="font-bold text-gray-600">Loại công việc:</p>
                                            <p className="text-gray-900">{post.jobDetail.title}</p>
                                        </div>
                                        <div className="flex justify-between">
                                            <p className="font-bold text-gray-600">Số lượng cần tuyển:</p>
                                            <p className="text-gray-900">{post.jobDetail.quantity} người</p>
                                        </div>
                                        <div className="flex justify-between">
                                            <p className="font-bold text-gray-600">Loại hình công việc:</p>
                                            <p className="text-gray-900">{post.jobDetail.type}</p>
                                        </div>
                                        <div className="flex justify-between">
                                            <p className="font-bold text-gray-600">Đã ứng tuyển:</p>
                                            <p className="text-gray-900">{post.jobDetail.applied}</p>
                                        </div>
                                        <div className="flex justify-between">
                                            <p className="font-bold text-gray-600">Địa điểm:</p>
                                            <p className="text-gray-900">{post.jobDetail.address}</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col w-full gap-5 pr-4 bg-gray-200 py-14 pl-11">
                                        <div className="flex justify-between">
                                            <p className="font-bold text-gray-600">Đơn vị quản lý:</p>
                                            <p className="text-gray-900">{post.jobDetail.department}</p>
                                        </div>
                                        <div className="flex justify-between">
                                            <p className="font-bold text-gray-600">Thời gian:</p>
                                            <p className="text-gray-900">{post.jobDetail.length}</p>
                                        </div>
                                        <div className="flex justify-between">
                                            <p className="font-bold text-gray-600">Mức lương</p>
                                            <p className="text-gray-900">{post.jobDetail.salary}</p>
                                        </div>
                                        <div className="flex justify-between">
                                            <p className="font-bold text-gray-600">Hạn nộp hồ sơ:</p>
                                            <p className="text-gray-900">{post.jobDetail.expired}</p>
                                        </div>
                                        <div className="flex justify-between">
                                            <p className="font-bold text-gray-600">Trạng thái:</p>
                                            <p className="text-gray-900">{post.jobDetail.status}</p>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section aria-labelledby="shipping-heading" className="mt-10">
                                <h2 className="mb-2 text-2xl font-medium text-gray-900">Tag</h2>
                                <div className="flex flex-wrap w-full gap-2">
                                    {post.otherJobs.map((item) => (
                                        <p
                                            key={item}
                                            className="flex items-center justify-center px-6 py-2 font-semibold text-white uppercase bg-indigo-500 rounded-xl"
                                        >
                                            {item}
                                        </p>
                                    ))}
                                </div>
                            </section>
                        </div>

                        <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                            {/* Reviews */}

                            <section aria-labelledby="reviews-heading" className="pt-10 border-t border-gray-200 lg:pt-16">
                                <h2 id="reviews-heading" className="sr-only">
                                    Reviews
                                </h2>

                                <div className="space-y-10">
                                    <h3 className="sr-only">Customer Reviews</h3>
                                    {post.ratings.map((rating, index) => (
                                        <div key={rating.id} className="flex space-x-4 text-sm text-gray-500">
                                            <div className="flex-none py-10">
                                                <img src={rating.avatar} alt="" className="w-10 h-10 bg-gray-100 rounded-full" />
                                            </div>
                                            <div className={classNames(index === 0 ? '' : 'border-t border-gray-200', 'py-10')}>
                                                <h3 className="font-medium text-gray-900">{rating.name}</h3>

                                                <div className="flex items-center mt-4">
                                                    {[0, 1, 2, 3, 4].map((rt) => (
                                                        <StarIcon
                                                            key={rt}
                                                            className={classNames(
                                                                rating.rating > rt ? 'text-yellow-400' : 'text-gray-300',
                                                                'h-5 w-5 flex-shrink-0'
                                                            )}
                                                            aria-hidden="true"
                                                        />
                                                    ))}
                                                </div>
                                                <p className="sr-only">{rating.rating} out of 5 stars</p>

                                                <div
                                                    className="mt-4 prose-sm prose text-gray-500 max-w-none"
                                                    dangerouslySetInnerHTML={{ __html: rating.comment }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>
                        <div className="flex items-center justify-between w-full col-span-1 col-start-3 row-start-1 p-3 mb-2 bg-gray-100 rounded-2xl">
                            <h2 className="text-xl font-semibold text-indigo-500">{post.hireJob}</h2>
                            <div className="flex items-center">
                                <div className="flex items-center">
                                    {[0, 1, 2, 3, 4].map((rating) => (
                                        <StarIcon
                                            key={rating}
                                            className={classNames(
                                                averageRating > rating ? 'text-yellow-400' : 'text-gray-200',
                                                'h-5 w-5 flex-shrink-0'
                                            )}
                                            aria-hidden="true"
                                        />
                                    ))}
                                </div>
                                <p className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">{post.ratings.length} reviews</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center w-full h-full col-span-1 col-start-3 row-start-2">
                            <Tab.Group>
                                <div className="p-3 bg-indigo-500 rounded-xl">
                                    <Tab.List className="flex w-full p-1 space-x-1 bg-gray-200 rounded-xl">
                                        {post.requires.map((item) => (
                                            <Tab
                                                key={item.name}
                                                className={({ selected }) =>
                                                    clsx('w-full  rounded-lg py-2.5 text-sm outline-none font-medium leading-5', {
                                                        'bg-indigo-500 text-white': selected,
                                                        'text-black': !selected,
                                                    })
                                                }
                                            >
                                                {item.name}
                                            </Tab>
                                        ))}
                                    </Tab.List>
                                    <Tab.Panels className="w-full mt-2">
                                        {post.requires.map((item, idx) => (
                                            <Tab.Panel
                                                key={idx}
                                                className={classNames(
                                                    'rounded-xl bg-white p-3',
                                                    'ring-white ring-opacity-60 focus:outline-none focus:ring-2'
                                                )}
                                            >
                                                <span dangerouslySetInnerHTML={{ __html: item.details }} />
                                            </Tab.Panel>
                                        ))}
                                    </Tab.Panels>
                                </div>
                            </Tab.Group>
                        </div>
                    </div>
                </main>
            </div>

            <ApplyJobModal />
        </>
    );
};

export default JobDetail;
