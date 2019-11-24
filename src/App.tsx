import React, { useEffect, useState } from 'react';
import { getStashItems } from './api/stashApi';
import { UpdateUserForm } from './UpdateUserForm';
import { prettyPrintJson } from './helpers/jsonHelpers';
import { IUser } from './models/User';
import { IStash } from './models/Stash';
import { getMaps } from './api/mapsApi';
import { IMap } from './models/Map';

export const App: React.FC<Props> = () => {
    const [
        stash,
        setStash
    ] = useState<IStash | null>(null);

    const [
        user,
        setUser
    ] = useState<IUser | null>(null);

    const [
        maps,
        setMaps
    ] = useState<Array<IMap> | null>(null);

    useEffect(() => {
        if (user == null) {
            return;
        }

        const {
            accountName,
            league,
        } = user;

        getMaps(user).then((mps) => setMaps(mps as Array<IMap>));
    }, [
        user
    ]);

    useEffect(() => {
        if (maps == null) {
            return;
        }

        setStash({ maps: maps })
    }, [
        maps
    ]);

    useEffect(() => console.log('stash update', stash), [stash]);

    return (
        <>
            <UpdateUserForm updateUser={setUser} />
            <pre>User: {prettyPrintJson(user)}</pre>
            <pre>Maps: {prettyPrintJson(maps)}</pre>
        </>
    );
};

interface Props {}
