import React from 'react';

import { FormErrorMessage } from './FormErrorMessage';

interface FieldWrapperProps {
    label: string;
    name: string;
    children: React.ReactNode;
}

export const FieldWrapper: React.FC<FieldWrapperProps> = ({ label, name, children }) => {
    return (
        <div className="space-y-2">
            {Boolean(label) && (
                <label htmlFor={name} className="block text-sm font-medium text-gray-700">
                    {label}
                </label>
            )}
            {children}
            <FormErrorMessage className="text-sm text-red-500" name={name} label={label} />
        </div>
    );
};
