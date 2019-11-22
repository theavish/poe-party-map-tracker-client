import React, { useEffect, useState } from 'react';
import { getStashItems } from './api/stashApi';
import { Form as TrackAUserForm } from './UpdateUserForm/Form';
import { prettyPrintJson } from './helpers/jsonHelpers';
import { IUser } from './models/User';

export const App: React.FC<Props> = () => {
    const [
        stash,
        setStash
    ] = useState({});

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
            <TrackAUserForm onSubmit={setUser} />
            <pre>User Data: {prettyPrintJson(user)}</pre>
            <pre>Stash Data: {prettyPrintJson(stash)}</pre>
        </>
    );
};

interface Props {}
