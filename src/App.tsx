import React, { useEffect, useState } from 'react';
import { UpdateUserForm } from './components/UpdateUserForm/UpdateUserForm';
import { prettyPrintJson } from './helpers/jsonHelpers';
import { IUser } from './models/User';
import { getMaps } from './api/mapsApi';
import { IMap } from './models/Map';
import { MapListing } from './components/MapListing/MapListing';
import { sortByProp } from './helpers/arrayHelpers';

export const App: React.FC<Props> = () => {
    const [
        user,
        setUser
    ] = useState<IUser | undefined>(undefined);

    const [
        maps,
        setMaps
    ] = useState<Array<IMap>>([]);

    useEffect(() => {
        if (user == null) {
            return;
        }

        getMaps(user).then(m => setMaps(m.sort(sortByProp('typeLine'))));
    }, [
        user
    ]);

    return (
        <>
            <UpdateUserForm updateUser={setUser} />
            <pre>User: {prettyPrintJson(user)}</pre>
            <MapListing user={user} />
        </>
    );
};

interface Props {}
