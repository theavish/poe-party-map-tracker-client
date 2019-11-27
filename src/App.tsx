import React, { useEffect, useState } from 'react';
import { UpdateUserForm } from './components/UpdateUserForm/UpdateUserForm';
import { prettyPrintJson } from './helpers/jsonHelpers';
import { IUser } from './models/User';
import { getMaps } from './api/mapsApi';
import { IMap } from './models/Map';
import { MapListing } from './components/MapListing/MapListing';

export const App: React.FC<Props> = () => {
    const [
        user,
        setUser
    ] = useState<IUser | undefined>(undefined);

    const [
        maps,
        setMaps
    ] = useState<Array<IMap>>([]);

    // get a user's maps
    useEffect(() => {
        if (user == null) {
            return;
        }

        getMaps(user).then(setMaps);
    }, [
        user
    ]);

    // set the user's `ownedMaps` property
    useEffect(() => {
        if (!user || !maps) {
            return;
        }

        maps.forEach((map: IMap) => {
            if (!user.ownedMaps) {
                user.ownedMaps = [];
            }

            user.ownedMaps.push(map);
        });

        console.log(user)

        setUser(user);
    }, [
        user,
        maps,
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
