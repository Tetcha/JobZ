import _get from 'lodash.get';
import * as React from 'react';
import { useFormContext } from 'react-hook-form';

import { stringHelper } from '../../utils';

interface FormErrorMessageProps {
    name: string;
    className: string;
    label: string;
}

export const FormErrorMessage: React.FC<FormErrorMessageProps> = ({ name, label, className }) => {
    const [errorMessage, setErrorMessage] = React.useState('');
    const formMethods = useFormContext();

    return (
        <>
            {Boolean(errorMessage) && (
                <div className={className}>
                    {label} {errorMessage}
                </div>
            )}
        </>
    );
};
