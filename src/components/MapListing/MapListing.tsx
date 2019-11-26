import React, { useMemo } from 'react';
import { MapDashboard } from '../MapDashboard/MapDashboard';
import { mapListByTier, mapsByTier } from '../../models/mapsByTier';
import { IUser } from '../../models/User';

export const MapListing: React.FC<{ user?: IUser }> = ({
    user,
}) => {
    const columns = useMemo(() => {
        const cols = [
            {
                Header: () => null,
                Cell: ({ row }: {row: any}) => <img src={row.values.img} alt={`${row.values.name} Icon`} />,
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
            user ? {
                Header: 'Owned By',
                columns: []
            } : undefined,
        ];



        return cols;
    }, []);

    const data = useMemo(() => mapListByTier, []);

    return (
        <MapDashboard
            columns={columns}
            data={data}
        />
    );
};
