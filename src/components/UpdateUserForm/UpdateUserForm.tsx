import React, { FormEvent } from 'react';
import { FormField } from './FormField';
import { IUser, User } from '../../models/User';
import { IUpdateUserFormElements } from '../../models/UpdateUserFormElements';

export const UpdateUserForm: React.FC<Props> = ({
    updateUser,
}) => {
    const setUser = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const elements = form.elements as IUpdateUserFormElements;

        const accountName = elements.accountName.value as string;

        const user = new User({ accountName });

        if (updateUser != null) {
            updateUser(user);
        }
    };

    return (
        <form onSubmit={setUser}>
            <FormField
                name="accountName"
                placeholder="Account Name"
            />
            <FormField
                name="submit"
                type="submit"
            />
        </form>
    );
};

interface Props {
    updateUser?: (user: IUser) => void
}
