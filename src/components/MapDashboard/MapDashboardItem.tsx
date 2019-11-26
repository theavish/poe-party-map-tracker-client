import React from 'react';
import { IMap } from '../../models/Map';
import { getMapBaseName, getMapTier } from '../../helpers/mapHelpers';

export const MapDashboardItem: React.FC<Props> = ({
    map,
}) => {
    const avatar = map.icon;
    const name = getMapBaseName(map);
    const tier = getMapTier(map);

    return (
        <div>
            <img src={avatar} alt=""/>
            <div>
                <span>{name}</span>
                <span>(T{tier})</span>
            </div>
        </div>
    );
};

interface Props {
    map: IMap;
}
