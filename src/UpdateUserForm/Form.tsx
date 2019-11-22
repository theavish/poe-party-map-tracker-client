import React, {FormEvent} from 'react';
import { FormField } from './FormField';
import { IUser, User } from '../models/User';
import { IUpdateUserFormElements } from '../models/UpdateUserFormElements';

export const Form: React.FC<Props> = ({
    onSubmit,
}) => {
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const elements = form.elements as IUpdateUserFormElements;

        const user = new User({
            accountName: elements.accountName.value,
            league: elements.league.value,
            sessionId: elements.sessionId.value,
        });

        if (onSubmit != null) {
            onSubmit(user);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
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
    onSubmit?: (user: IUser) => void
}
