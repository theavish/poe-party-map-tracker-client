import React, { useEffect, useState } from 'react';
import { getStashItems } from './api/stashApi';
import { UpdateUserForm } from './UpdateUserForm';
import { prettyPrintJson } from './helpers/jsonHelpers';
import {IUser, User} from './models/User';
import {IStash} from './models/Stash';

export const App: React.FC<Props> = () => {
    const [
        stash,
        setStash
    ] = useState<IStash | null>(null);

    const [
        user,
        setUser
    ] = useState<IUser | null>(null);

    useEffect(() => {
        if (user == null) {
            return;
        }

        getStashItems(user).then(setStash);
    }, [
        user
    ]);

    return (
        <>
            <UpdateUserForm updateUser={setUser} />
            <pre>User Data: {prettyPrintJson(user)}</pre>
            <pre>Stash Data: {prettyPrintJson(stash)}</pre>
        </>
    );
};

interface Props {}
