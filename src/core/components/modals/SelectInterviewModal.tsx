import { XMarkIcon } from '@heroicons/react/24/solid';
import * as React from 'react';
import { useToggleContext } from 'react-toggle-hook';
import { useForm } from 'react-hook-form';

interface SelectInterviewDateProps {}

interface SelectInterviewDTO {
    date: string;
    note: string;
}

const SelectInterviewDate: React.FunctionComponent<SelectInterviewDateProps> = () => {
    const { close, isOpen, value } = useToggleContext<string>('select-interview-date');
    const { register, handleSubmit } = useForm<SelectInterviewDTO>();

    const onSubmit = (data: SelectInterviewDTO) => {
        console.log(data);
        close();
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
                        <p className="text-4xl font-semibold text-gray-800 col-span-full">Gửi đơn ứng tuyển</p>

                        <div className="col-span-6">
                            <label htmlFor="date" className="block text-sm font-medium leading-6 text-gray-900">
                                Chọn ngày phỏng vấn
                            </label>
                            <div className="w-full mt-2">
                                <select
                                    id="date"
                                    {...register('date', { required: true })}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600  sm:text-sm sm:leading-6"
                                >
                                    <option value="1">14:00 20/11/2023</option>
                                    <option value="2">17:00 20/11/2023</option>
                                    <option value="3">13:00 20/11/2023</option>
                                </select>
                            </div>
                        </div>

                        <div className="col-span-full">
                            <label htmlFor="note" className="block text-sm font-medium leading-6 text-gray-900">
                                Lời nhắn
                            </label>
                            <div className="mt-2">
                                <textarea
                                    id="note"
                                    {...register('note', { required: true })}
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
