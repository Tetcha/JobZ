import _get from 'lodash.get';
import * as React from 'react';
import { useFormContext } from 'react-hook-form';

import { useStoreApi } from '../../store';
import { stringHelper } from '../../utils';

interface FormErrorMessageProps {
    name: string;
    className: string;
    label: string;
}

export const FormErrorMessage: React.FC<FormErrorMessageProps> = ({ name, label, className }) => {
    const { errorDetails } = useStoreApi();
    const [errorMessage, setErrorMessage] = React.useState('');
    const formMethods = useFormContext();

    React.useEffect(() => {
        setErrorMessage('');

        const key = Object.keys(errorDetails).find((item) => stringHelper.lowercaseFirstLetter(item) === name);
        if (key) {
            setErrorMessage(errorDetails[key]);
        } else if (formMethods.formState.errors[name]) {
            setErrorMessage(_get(formMethods.formState, 'errors.name.message', ''));
        }
    }, [errorDetails, name, formMethods.formState.errors]);
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
