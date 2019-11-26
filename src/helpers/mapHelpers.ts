import { IMap } from '../models/Map';

export const getMapTier = (map: IMap) => {
    const mapTierProp = map.properties.find(p => p.name === 'Map Tier');
    let mapTier = 0;

    if (mapTierProp) {
        mapTier = parseInt(mapTierProp.values[0][0]);
    }

    return mapTier;
};

export const getMapBaseName: (map: IMap) => string = (map: IMap) =>
    map.typeLine
        .replace('Superior ', '')
        .replace('Zana\'s ', '')
        .replace('Blighted ', '');

export const getDistinctMaps: (maps: Array<IMap>) => { [key: string]: IMap; } = (maps: Array<IMap>) => {
    if (!maps || maps.length === 0) {
        return {};
    }

    const distinctMaps: { [key: string]: IMap; } = {};

    maps.forEach((map: IMap) => {
        const mapBaseName = getMapBaseName(map);
        distinctMaps[mapBaseName] = map;
    });

    return distinctMaps;
};
