import { Tab } from '@headlessui/react';
import { StarIcon } from '@heroicons/react/20/solid';
import { Company } from '@models/company';
import clsx from 'clsx';
import Link from 'next/link';
import * as React from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

interface JobDetailProps {
    company: Company;
}

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

const JobDetail: React.FC<JobDetailProps> = ({ company }) => {
    return (
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
                        {company.images.map((item, i) => (
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
                            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{company.name}</h1>
                        </div>
                        <button
                            type="submit"
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
                                <ul role="list" className="pl-4 space-y-2 text-sm list-disc">
                                    {company.descriptions.map((item) => (
                                        <li key={item} className="text-gray-400">
                                            <span className="text-gray-600">{item}</span>
                                        </li>
                                    ))}
                                </ul>
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
                                        <p className="text-gray-900">{company.jobDetail.title}</p>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="font-bold text-gray-600">Số lượng cần tuyển:</p>
                                        <p className="text-gray-900">{company.jobDetail.quantity} người</p>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="font-bold text-gray-600">Loại hình công việc:</p>
                                        <p className="text-gray-900">{company.jobDetail.type}</p>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="font-bold text-gray-600">Đã ứng tuyển:</p>
                                        <p className="text-gray-900">{company.jobDetail.applied}</p>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="font-bold text-gray-600">Địa điểm:</p>
                                        <p className="text-gray-900">{company.jobDetail.address}</p>
                                    </div>
                                </div>
                                <div className="flex flex-col w-full gap-5 pr-4 bg-gray-200 py-14 pl-11">
                                    <div className="flex justify-between">
                                        <p className="font-bold text-gray-600">Đơn vị quản lý:</p>
                                        <p className="text-gray-900">{company.jobDetail.department}</p>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="font-bold text-gray-600">Thời gian:</p>
                                        <p className="text-gray-900">{company.jobDetail.length}</p>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="font-bold text-gray-600">Mức lương</p>
                                        <p className="text-gray-900">{company.jobDetail.salary}</p>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="font-bold text-gray-600">Hạn nộp hồ sơ:</p>
                                        <p className="text-gray-900">{company.jobDetail.expired}</p>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="font-bold text-gray-600">Trạng thái:</p>
                                        <p className="text-gray-900">{company.jobDetail.status}</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section aria-labelledby="shipping-heading" className="mt-10">
                            <h2 className="mb-2 text-2xl font-medium text-gray-900">Tag</h2>
                            <div className="flex flex-wrap w-full gap-2">
                                {company.otherJobs.map((item) => (
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
                                {company.reviews.featured.map((review) => (
                                    <div key={review.id} className="flex flex-col sm:flex-row">
                                        <div className="order-2 mt-6 sm:ml-16 sm:mt-0">
                                            <h3 className="text-sm font-medium text-gray-900">{review.date}</h3>
                                            <p className="sr-only">{review.rating} out of 5 stars</p>

                                            <div
                                                className="mt-3 space-y-6 text-sm text-gray-600"
                                                dangerouslySetInnerHTML={{ __html: review.content }}
                                            />
                                        </div>

                                        <div className="flex items-center order-1 sm:flex-col sm:items-start">
                                            <img src={review.avatarSrc} alt={`${review.author}.`} className="w-12 h-12 rounded-full" />

                                            <div className="ml-4 sm:ml-0 sm:mt-4">
                                                <p className="text-sm font-medium text-gray-900">{review.author}</p>
                                                <div className="flex items-center mt-2">
                                                    {[0, 1, 2, 3, 4].map((rating) => (
                                                        <StarIcon
                                                            key={rating}
                                                            className={classNames(
                                                                review.rating > rating ? 'text-gray-900' : 'text-gray-200',
                                                                'h-5 w-5 flex-shrink-0'
                                                            )}
                                                            aria-hidden="true"
                                                        />
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                    <div className="flex items-center justify-between w-full col-span-1 col-start-3 row-start-1 p-3 mb-2 bg-gray-100 rounded-2xl">
                        <h2 className="text-xl font-semibold text-indigo-500">{company.hireJob}</h2>
                        <div className="flex items-center">
                            <div className="flex items-center">
                                {[0, 1, 2, 3, 4].map((rating) => (
                                    <StarIcon
                                        key={rating}
                                        className={classNames(
                                            company.reviews.average > rating ? 'text-yellow-400' : 'text-gray-200',
                                            'h-5 w-5 flex-shrink-0'
                                        )}
                                        aria-hidden="true"
                                    />
                                ))}
                            </div>
                            <p className="sr-only">{company.reviews.average} out of 5 stars</p>
                            <p className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">{company.reviews.totalCount} reviews</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center w-full h-full col-span-1 col-start-3 row-start-2">
                        <Tab.Group>
                            <div className="p-3 bg-indigo-500 rounded-xl">
                                <Tab.List className="flex w-full p-1 space-x-1 bg-gray-200 rounded-xl">
                                    {company.requires.map((item) => (
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
                                    {company.requires.map((item, idx) => (
                                        <Tab.Panel
                                            key={idx}
                                            className={classNames(
                                                'rounded-xl bg-white p-3',
                                                'ring-white ring-opacity-60 focus:outline-none focus:ring-2'
                                            )}
                                        >
                                            <ul className="list-disc list-inside">
                                                {item.details.map((detail) => (
                                                    <li key={detail} className="relative p-3 rounded-md hover:bg-gray-100">
                                                        {detail}
                                                    </li>
                                                ))}
                                            </ul>
                                        </Tab.Panel>
                                    ))}
                                </Tab.Panels>
                            </div>
                        </Tab.Group>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default JobDetail;
