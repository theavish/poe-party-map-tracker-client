import React, { useMemo, useState } from 'react';
import { MapDashboard } from '../MapDashboard/MapDashboard';
import { mapListByTier } from '../../models/mapsByTier';
import { IUser } from '../../models/User';
import { Column } from 'react-table';
import { IMap } from '../../models/Map';
import { getMapBaseName } from '../../helpers/mapHelpers';

export const MapListing: React.FC<{ user?: IUser }> = ({
    user,
}) => {
    const columns = useMemo(() => {
        const cols: Array<Column> = [
            {
                Header: () => null,
                Cell: ({ row }: {row: any}) => <img src={row.values.img} alt={`${row.values.name} Icon`} height="24px" width="24px" />,
                accessor: 'img'
            },
            {
                Header: 'Tier',
                accessor: 'tier'
            },
            {
                Header: 'Name',
                accessor: 'name'
            },
        ];

        if (user) {
            cols.push({
                Header: 'Owned By',
                columns: [
                    {
                        Header: user.accountName,
                        Cell: ({ user, row }: { user: IUser, row: { values: { name: string } } }) => {
                            if (user.ownedMaps) {
                                user.ownedMaps.map((map: IMap) => {
                                    console.log(row.values.name, getMapBaseName(map))
                                    if (row.values.name === getMapBaseName(map)) {
                                        return '✔';
                                    }

                                    return null;
                                });
                            }

                            return null;
                        },
                    }
                ]
            })
        }

        return cols;
    }, [user]);

    const data = useMemo(() => [...mapListByTier.map(map => {
        if (user) {
            if (map.subrows) {
                if (map.subrows.ownedBy) {
                    map.subrows.ownedBy = [...map.subrows.ownedBy, user.accountName];
                } else {
                    map.subrows.ownedBy = [user.accountName];
                }
            }
        }

        return map;
    })], [user]);

    return (
        <MapDashboard
            user={user}
            columns={columns}
            data={data}
        />
    );
};
