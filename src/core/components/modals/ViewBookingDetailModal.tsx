import { XMarkIcon } from '@heroicons/react/24/solid';
import { Booking } from '@prisma/client';
import moment from 'moment';
import * as React from 'react';
import { useToggleContext } from 'react-toggle-hook';

interface ApplyJobModalProps {}

const ViewBookingDetailModal: React.FunctionComponent<ApplyJobModalProps> = () => {
    const { close, isOpen, value } = useToggleContext<Booking>('view-booking-detail');

    return (
        <>
            {isOpen && (
                <div className="fixed top-0 left-0 z-10 flex flex-col items-center justify-center w-full h-full min-h-screen bg-gray-900/50">
                    <div className="relative grid w-full max-w-2xl grid-cols-1 p-4 bg-white rounded gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
                        <div className="absolute w-8 h-8 cursor-pointer top-4 right-4" onClick={() => close()}>
                            <XMarkIcon />
                        </div>
                        <p className="text-4xl font-semibold text-gray-800 col-span-full">Thông tin phỏng vấn</p>

                        <div className="col-span-full flex gap-2 items-center">
                            <div className="block text-sm font-medium leading-6 text-gray-900">
                                Thời gian: {moment.unix(value.time).format('MMMM Do YYYY, h:mm:ss a')}
                            </div>
                        </div>
                        <div className="col-span-full">
                            <div className="block text-sm font-medium leading-6 text-gray-900">
                                Link meet:{' '}
                                <a href={value.linkMeeting} rel="noreferrer" target="_blank" className="hover:text-blue-500 text-blue-400">
                                    {value.linkMeeting}
                                </a>
                            </div>
                        </div>
                        <div className="col-span-full">
                            <div className="block text-sm font-medium leading-6 text-gray-900">Lời nhắn: {value.note}</div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ViewBookingDetailModal;
