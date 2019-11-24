import React, { FormEvent } from 'react';
import { FormField } from './FormField';
import { IUser, User } from '../models/User';
import { IUpdateUserFormElements } from '../models/UpdateUserFormElements';
import { defaultLeague } from '../constants/defaults';
import { ELeague } from '../models/League';

export const UpdateUserForm: React.FC<Props> = ({
    updateUser,
}) => {
    const setUser = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const elements = form.elements as IUpdateUserFormElements;

        const accountName = elements.accountName.value;
        const league = (elements.league.value === '' ? defaultLeague : elements.league.value) as ELeague;
        const sessionId = elements.sessionId.value;

        const user = new User({
            accountName,
            league,
            sessionId,
        });

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
                name="sessionId"
                placeholder="POESESSID"
            />
            <FormField
                name="league"
                placeholder="League"
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
