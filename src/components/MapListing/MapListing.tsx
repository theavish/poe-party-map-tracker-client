import { IMap } from '../../models/Map';
import React from 'react';
import { IItem } from '../../models/Item';

export const MapListing = ({
    maps,
}: Params) => {
    const makeDisplayName = ({ name, typeLine }: Partial<IItem>) => name ? `${name} ${typeLine}` : typeLine;

    return (
        <ul>
            { maps &&
                maps.map((map: IMap, index: number) => (
                        <li
                            key={index}
                        >
                            <img src={map.icon} alt=""/>
                            <div>{makeDisplayName(map)}</div>
                        </li>
                    ))
            }
        </ul>
    );
};

interface Params {
    maps: Array<IMap> | undefined | null;
}
