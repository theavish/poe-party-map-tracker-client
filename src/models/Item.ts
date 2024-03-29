import { ELeague } from './League';

export interface IItem {
    corrupted: boolean;
    descrText: string;
    explicitMods: Array<string>;
    extended: { mods: object, hashes: object, text: string };
    frameType: number;
    h: number
    icon: string;
    identified: boolean;
    ilvl: number;
    league: ELeague;
    name: string;
    note: string;
    properties: Array<IItem_Properties>
    typeLine: string;
    verified: boolean;
    w: number;
}

export interface IItem_Properties {
    displayMode: number;
    name: string;
    type: number;
    values: [[string, number]];
}
