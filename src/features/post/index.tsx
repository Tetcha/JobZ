import { useUserContext } from '@context/UserContext';
import { config } from '@core/config';
import { PlusCircleIcon, XCircleIcon } from '@heroicons/react/24/outline';
import { PostAddDTO, selectStatus, selectTag, selectTitle, selectTypeWorking } from '@models/company';
import axios from 'axios';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import * as React from 'react';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import Select from 'react-select';
import { toast } from 'react-toastify';

// import ReactQuill from 'react-quill';

// dynamic import React Quill
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

interface PostRecruitProps {}

const defaultValues: PostAddDTO = {
    name: '',
    thumbnail: '',
    hireJob: 'Khác',
    otherJobs: [],
    descriptions: '',
    requires: [],
    updateAt: '',
    images: [],
    jobDetail: {
        address: '',
        applied: 0,
        department: '',
        expired: '',
        length: '',
        quantity: 0,
        salary: '',
        status: 'Đang tuyển',
        title: 'Thực tập sinh',
        type: 'Full-time',
    },
};

const PostRecruit: React.FunctionComponent<PostRecruitProps> = () => {
    const { control, handleSubmit, register, reset } = useForm<PostAddDTO>({
        defaultValues,
    });

    const [imageList, setImageList] = React.useState<number>(0);

    const [require1, setRequire1] = React.useState<string>('');
    const [require2, setRequire2] = React.useState<string>('');
    const [require3, setRequire3] = React.useState<string>('');

    const { user } = useUserContext();

    const router = useRouter();

    const handleOnSubmit = async (data: PostAddDTO) => {
        data.descriptions = descriptions;
        data.updateAt = new Date().toLocaleDateString();
        data.jobDetail.expired = new Date(data.jobDetail.expired).toLocaleDateString();
        data.requires = [
            { name: 'Chi tiết', details: require1 },
            { name: 'Yêu cầu', details: require2 },
            { name: 'Quyền lợi', details: require3 },
        ];

        if (user.userSubscription.posts <= 0) {
            toast.error('Bạn đã hết lượt đăng bài, hãy nâng cấp gói Premium để đăng bài không giới hạn');
            return;
        }

        await axios.put(`/api/user-subscription`, {
            userId: user.id,
            posts: user.userSubscription.posts - 1,
            view: user.userSubscription.view,
            bookings: user.userSubscription.bookings,
        });

        axios.post(`/api/post`, { ...data, userId: user.id }).then((res) => {
            reset(defaultValues);
            router.push('/job');
            toast.success('Đăng bài thành công');
        });
    };

    const [descriptions, setDescriptions] = React.useState<string>('');

    return (
        <>
            <div className="flex flex-col items-center justify-center w-full">
                <div className="flex flex-col items-start  w-full max-w-screen-lg gap-2 h-auto p-10 my-5 border-[1px] border-solid border-black rounded-lg">
                    <h1 className="text-3xl font-bold">Đăng bài tuyển dụng</h1>
                    {user.userSubscription.posts > 0 ? (
                        <form
                            onSubmit={handleSubmit(handleOnSubmit)}
                            className="relative grid w-full h-full max-w-4xl grid-cols-1 p-4 bg-white rounded gap-x-6 gap-y-6 sm:grid-cols-12 md:col-span-6"
                        >
                            <div className="col-span-6">
                                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                    Tên doanh nghiệp
                                </label>
                                <div className="mt-2">
                                    <input
                                        {...register('name', { required: true })}
                                        type="text"
                                        id="nameJob"
                                        className="block w-full py-2 text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="col-span-6">
                                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                    Logo doanh nghiệp
                                </label>
                                <div className="mt-2">
                                    <input
                                        {...register('thumbnail', { required: true })}
                                        type="text"
                                        id="nameJob"
                                        className="block w-full py-2 text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="col-span-4">
                                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                    Loại công việc
                                </label>
                                <div className="mt-2">
                                    <Controller
                                        control={control}
                                        name="jobDetail.title"
                                        render={({ field: { onChange, value, ref } }) => (
                                            <Select
                                                ref={ref}
                                                value={selectTitle.filter((c) => value.includes(c.value))}
                                                // onChange={(val) => onChange(val.map((c) => c.value))}
                                                defaultValue={selectTitle[0]}
                                                onChange={(val) => onChange(val?.value)}
                                                options={selectTitle}
                                                // isMulti
                                            />
                                        )}
                                    />
                                </div>
                            </div>
                            <div className="col-span-4">
                                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900"></label>
                                <div className="mt-2">
                                    <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                        Loại hình công việc
                                    </label>
                                    <Controller
                                        control={control}
                                        name="jobDetail.type"
                                        render={({ field: { onChange, value, ref } }) => (
                                            <Select
                                                ref={ref}
                                                value={selectTypeWorking.filter((c) => value.includes(c.value))}
                                                defaultValue={selectTypeWorking[0]}
                                                onChange={(val) => onChange(val?.value)}
                                                options={selectTypeWorking}
                                            />
                                        )}
                                    />
                                </div>
                            </div>
                            <div className="col-span-4">
                                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900"></label>
                                <div className="mt-2">
                                    <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                        Công việc
                                    </label>
                                    <Controller
                                        control={control}
                                        name="hireJob"
                                        render={({ field: { onChange, value, ref } }) => (
                                            <Select
                                                ref={ref}
                                                value={selectTag.filter((c) => value.includes(c.value))}
                                                defaultValue={selectTag[0]}
                                                onChange={(val) => onChange(val?.value)}
                                                options={selectTag}
                                            />
                                        )}
                                    />
                                </div>
                            </div>
                            <div className="col-span-full">
                                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900"></label>
                                <div className="mt-2">
                                    <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                        Công việc khác
                                    </label>
                                    <Controller
                                        control={control}
                                        name="otherJobs"
                                        render={({ field: { onChange, value, ref } }) => (
                                            <Select
                                                ref={ref}
                                                value={selectTag.filter((c) => value.includes(c.value))}
                                                options={selectTag}
                                                onChange={(val) => onChange(val.map((c) => c.value))}
                                                isMulti
                                            />
                                        )}
                                    />
                                </div>
                            </div>
                            <div className="col-span-6">
                                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                    Mức lương
                                </label>
                                <div className="mt-2">
                                    <input
                                        {...register('jobDetail.salary', { required: true })}
                                        type="text"
                                        className="block w-full py-2 text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="col-span-6">
                                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                    Phòng ban
                                </label>
                                <div className="mt-2">
                                    <input
                                        {...register('jobDetail.department', { required: true })}
                                        type="text"
                                        className="block w-full py-2 text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="col-span-4">
                                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                    Số lượng tuyển
                                </label>
                                <div className="mt-2">
                                    <input
                                        {...register('jobDetail.quantity', { required: true })}
                                        type="text"
                                        id="quantity"
                                        className="block w-full py-2 text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="col-span-8">
                                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                    Địa chỉ
                                </label>
                                <div className="mt-2">
                                    <input
                                        {...register('jobDetail.address', { required: true })}
                                        type="text"
                                        id="name"
                                        className="block w-full py-2 text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="col-span-4">
                                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                    Thời gian
                                </label>
                                <div className="mt-2">
                                    <input
                                        {...register('jobDetail.length', { required: true })}
                                        type="text"
                                        className="block w-full py-2 text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="col-span-4">
                                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                    Hạn nộp đơn
                                </label>
                                <div className="mt-2">
                                    <input
                                        {...register('jobDetail.expired', { required: true })}
                                        type="date"
                                        id="dateSubmit"
                                        className="block w-full py-2 text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="col-span-4">
                                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900"></label>
                                <div className="mt-2">
                                    <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                        Trạng thái
                                    </label>
                                    <Controller
                                        control={control}
                                        name="jobDetail.status"
                                        render={({ field: { onChange, value, ref } }) => (
                                            <Select
                                                ref={ref}
                                                value={selectStatus.filter((c) => value.includes(c.value))}
                                                defaultValue={selectStatus[0]}
                                                onChange={(val) => onChange(val?.value)}
                                                options={selectStatus}
                                            />
                                        )}
                                    />
                                </div>
                            </div>
                            <div className="grid justify-between w-full grid-cols-12 gap-6 mb-16 col-span-full">
                                <div className="col-span-4">
                                    <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                        Chi tiết
                                    </label>

                                    <ReactQuill className="h-36" theme="snow" value={require1} onChange={setRequire1} />
                                </div>
                                <div className="col-span-4">
                                    <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                        Yêu cầu
                                    </label>

                                    <ReactQuill className="h-36" theme="snow" value={require2} onChange={setRequire2} />
                                </div>
                                <div className="col-span-4">
                                    <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                        Quyền lợi
                                    </label>

                                    <ReactQuill className="h-36" theme="snow" value={require3} onChange={setRequire3} />
                                </div>
                            </div>
                            <div className="row-span-4 mb-10 col-span-full">
                                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                    Mô tả
                                </label>

                                <ReactQuill className="h-36" theme="snow" value={descriptions} onChange={setDescriptions} />
                            </div>

                            <div className="row-span-4 mb-10 col-span-full flex flex-gap w-full flex-col gap-2">
                                <label className="block text-sm font-medium leading-6 text-gray-900">Hình ảnh</label>
                                {Array.from(Array(imageList).keys()).map((index) => (
                                    <input
                                        key={'images-' + index}
                                        {...register(`images.${index}`, { required: true })}
                                        type="text"
                                        id="images"
                                        className="block w-full py-2 text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                ))}
                                <div className="flex flex-row items-center justify-center w-full">
                                    {imageList < 6 && (
                                        <button type="button" onClick={() => setImageList(imageList + 1)}>
                                            <PlusCircleIcon className="w-8 h-8 text-blue-500" />
                                        </button>
                                    )}
                                    {imageList > 0 && (
                                        <button type="button" onClick={() => setImageList(imageList - 1)}>
                                            <XCircleIcon className="w-8 h-8 text-red-500" />
                                        </button>
                                    )}
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full col-span-3 px-3 py-2 text-lg font-semibold text-white bg-indigo-500 rounded-md shadow-sm ring-1 ring-inset ring-indigo-300 hover:bg-indigo-600"
                            >
                                Đăng ngay
                            </button>
                        </form>
                    ) : (
                        <div className="text-gray-900 text-base">
                            Bạn đã hết lượt đăng bài, hãy đăng ký gói Premium để đăng bài không giới hạn nhé
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default PostRecruit;
