import { IMap, Mapp } from '../../models/Map';
import React from 'react';
import './MapListing.css';

export const MapListing = ({
    maps,
}: Params) => {
    return (
        <>
            <ul>
                { maps &&
                    maps.map((map: IMap, index: number) => {
                        const m = new Mapp(map);

                        const type = m.typeLine;

                        return (
                            <li
                                key={index}
                            >
                                <img src={m.icon} alt={`${type} icon`} />
                                <div>{type} (T{m.getTier()})</div>
                            </li>
                        );
                    })
                }
            </ul>
        </>
    );
};

interface Params {
    maps: Array<IMap>;
}
