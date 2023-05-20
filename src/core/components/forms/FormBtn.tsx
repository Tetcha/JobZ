import clsx from 'clsx';
import * as React from 'react';
import { ClipLoader } from 'react-spinners';

interface FormBtnProps {
    label: string;
    className?: string;
    disabled?: boolean;
    isLoading?: boolean;
}

export const FormBtn: React.FC<FormBtnProps> = ({ label, disabled = false, className, isLoading }) => {
    return (
        <button
            className={clsx(
                `inline-flex items-center  justify-center px-4 py-2 text-sm font-medium text-white duration-300 border border-transparent rounded-md shadow-sm bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2  ${className}`,
                {
                    'opacity-80': isLoading,
                }
            )}
            disabled={disabled || isLoading}
        >
            {isLoading && (
                <span className="mr-2 flex items-center">
                    <ClipLoader loading color="white" size={20} />
                </span>
            )}
            {label}
        </button>
    );
};
