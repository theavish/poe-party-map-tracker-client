import React from 'react';

export const FormField: React.FC<Props> = ({
    type = 'text',
    name,
    placeholder,
}) => (
    <input
        type={type}
        name={name}
        placeholder={placeholder || name}
    />
);

interface Props {
    name: string;
    placeholder?: string;
    type?: 'text' | 'submit';
}
