import React from 'react';

export const FormField: React.FC<Props> = ({
    type = 'text',
    name,
    placeholder,
    defaultValue,
}) => (
    <input
        type={type}
        name={name}
        placeholder={placeholder || name}
        defaultValue={defaultValue}
    />
);

interface Props {
    name: string;
    placeholder?: string;
    type?: 'text' | 'submit';
    defaultValue?: string;
}
