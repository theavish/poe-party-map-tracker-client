import React, { useMemo } from 'react';
import { MapDashboard } from '../MapDashboard/MapDashboard';
import { mapListByTier, mapsByTier } from '../../models/mapsByTier';
import { IUser } from '../../models/User';
import { Column } from 'react-table';

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
                    }
                ]
            })
        }

        return cols;
    }, [user]);

    const data = useMemo(() => mapListByTier, []);

    return (
        <MapDashboard
            columns={columns}
            data={data}
        />
    );
};
