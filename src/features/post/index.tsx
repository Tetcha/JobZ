import Link from 'next/link';
import * as React from 'react';
import { useForm } from 'react-hook-form';

interface PostRecruitProps {}

interface FormPostRecruitDTO {
    nameJob: string;
    typeJob: string;
    salary: string;
    phone: string;
    quantity: number;
    email: string;
    dateSubmit: string;
    address: string;
    descriptionJob: string;
}

const defaultValues: FormPostRecruitDTO = {
    nameJob: '',
    typeJob: '',
    salary: '',
    phone: '',
    quantity: 1,
    email: '',
    dateSubmit: '',
    address: '',
    descriptionJob: '',
};

const PostRecruit: React.FunctionComponent<PostRecruitProps> = () => {
    const { register, handleSubmit } = useForm<FormPostRecruitDTO>({
        defaultValues,
    });
    const handleOnSubmit = (data: FormPostRecruitDTO) => {
        console.log(data);
        close();
    };

    return (
        <>
            <div className="flex flex-col justify-center items-center w-full">
                <div className="flex flex-col items-start  w-full max-w-screen-lg gap-2 h-auto p-10 my-5 border-[1px] border-solid border-black rounded-lg">
                    <h1 className="font-bold text-3xl">Đăng bài tuyển dụng</h1>
                    <form
                        onSubmit={handleSubmit(handleOnSubmit)}
                        className="relative grid w-full max-w-4xl grid-cols-1 p-4 bg-white rounded gap-x-6 gap-y-6 sm:grid-cols-12 md:col-span-6"
                    >
                        <div className="col-span-8">
                            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                Tên công việc
                            </label>
                            <div className="mt-2">
                                <input
                                    {...register('nameJob', { required: true })}
                                    type="text"
                                    id="nameJob"
                                    className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="col-span-4">
                            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                Loại công việc
                            </label>
                            <div className="mt-2">
                                <input
                                    {...register('typeJob', { required: true })}
                                    type="text"
                                    id="typeJob"
                                    className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="col-span-6">
                            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                Mức lương
                            </label>
                            <div className="mt-2">
                                <input
                                    {...register('salary', { required: true })}
                                    type="text"
                                    id="nasalaryme"
                                    className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="col-span-6">
                            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                Số điện thoại liên lạc
                            </label>
                            <div className="mt-2">
                                <input
                                    {...register('phone', { required: true })}
                                    type="text"
                                    id="phone"
                                    className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="col-span-4">
                            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                Số lượng tuyển
                            </label>
                            <div className="mt-2">
                                <input
                                    {...register('quantity', { required: true })}
                                    type="text"
                                    id="quantity"
                                    className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="col-span-8">
                            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                Email liên hệ
                            </label>
                            <div className="mt-2">
                                <input
                                    {...register('email', { required: true })}
                                    type="text"
                                    id="name"
                                    className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="col-span-6">
                            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                Hạn nộp đơn
                            </label>
                            <div className="mt-2">
                                <input
                                    {...register('dateSubmit', { required: true })}
                                    type="text"
                                    id="dateSubmit"
                                    className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="col-span-6">
                            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                Địa chỉ làm việc
                            </label>
                            <div className="mt-2">
                                <input
                                    {...register('address', { required: true })}
                                    type="text"
                                    id="address"
                                    className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="col-span-full">
                            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                Mô tả công việc
                            </label>
                            <textarea
                                id="descriptionJob"
                                {...register('descriptionJob', { required: true })}
                                rows={6}
                                className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full col-span-3 px-3 py-2 text-lg font-semibold text-white bg-indigo-500 rounded-md shadow-sm ring-1 ring-inset ring-indigo-300 hover:bg-indigo-600"
                        >
                            Đăng ngay
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default PostRecruit;
