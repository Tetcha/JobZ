import { useUserContext } from '@context/UserContext';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { Booking, Status } from '@prisma/client';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { LargeNumberLike } from 'crypto';
import moment from 'moment';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useToggleContext } from 'react-toggle-hook';

interface SelectInterviewDateProps {}

interface SelectInterviewDTO {
    time: number;
    note: string;
    linkMeeting: string;
    appliedId: string;
}

export interface IOpenModalSelectInterview extends Pick<SelectInterviewDTO, 'appliedId'> {}

const SelectInterviewDate: React.FunctionComponent<SelectInterviewDateProps> = () => {
    const { close, isOpen, value } = useToggleContext<IOpenModalSelectInterview>('select-interview-date');
    const { register, handleSubmit } = useForm<SelectInterviewDTO>();
    const router = useRouter();
    const { user } = useUserContext();

    const onSubmit = async (data: SelectInterviewDTO) => {
        if (user.userSubscription.bookings <= 0) {
            toast.error('Bạn đã hết lượt đặt lịch phỏng vấn');
            return;
        }

        data.time = moment(data.time).unix();
        data.appliedId = value.appliedId;

        await axios.put(`/api/user-subscription`, {
            userId: user.id,
            posts: user.userSubscription.posts,
            view: user.userSubscription.view,
            bookings: user.userSubscription.bookings - 1,
        });

        await axios.post(`/api/booking`, data);

        await axios
            .put(`/api/applied/recruit`, {
                id: data.appliedId,
                stage: 4,
                status: Status.INCOMING,
            })
            .then((res) => {
                router.reload();
            });
    };

    return (
        <>
            {isOpen && (
                <div className="fixed top-0 left-0 z-10 flex flex-col items-center justify-center w-full h-full bg-gray-900/50">
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="relative grid w-full max-w-2xl grid-cols-1 p-4 bg-white rounded gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2"
                    >
                        <div className="absolute w-8 h-8 cursor-pointer top-4 right-4" onClick={() => close()}>
                            <XMarkIcon />
                        </div>
                        <p className="text-4xl font-semibold text-gray-800 col-span-full">Đặt lịch phỏng vấn</p>

                        <div className="col-span-3">
                            <label htmlFor="date" className="block text-sm font-medium leading-6 text-gray-900">
                                Chọn ngày phỏng vấn
                            </label>
                            <input
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                type="datetime-local"
                                {...register('time', {
                                    required: true,
                                })}
                            />
                        </div>

                        <div className="col-span-3">
                            <label htmlFor="linkMeeting" className="block text-sm font-medium leading-6 text-gray-900">
                                Link meeting
                            </label>
                            <input
                                type="text"
                                {...register('linkMeeting', { required: true })}
                                id="linkMeeting"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>

                        <div className="col-span-full">
                            <label htmlFor="note" className="block text-sm font-medium leading-6 text-gray-900">
                                Lời nhắn
                            </label>
                            <div className="mt-2">
                                <textarea
                                    id="note"
                                    {...register('note')}
                                    rows={3}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    defaultValue={''}
                                />
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="w-full col-span-2 px-3 py-2 text-lg font-semibold text-white bg-indigo-500 rounded-md shadow-sm ring-1 ring-inset ring-indigo-300 hover:bg-indigo-600"
                        >
                            Gửi
                        </button>
                    </form>
                </div>
            )}
        </>
    );
};

export default SelectInterviewDate;
