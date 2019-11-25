import { IItem, IItem_Properties } from './Item';
import { ELeague } from './League';
import { defaultLeague } from '../constants/defaults';

export interface IMap extends IItem {
    getTier?(): number;
}

export class Mapp implements IMap {
    public corrupted: boolean;
    public descrText: string;
    public explicitMods: Array<string>;
    public extended: { mods: object; hashes: object; text: string };
    public frameType: number;
    public h: number;
    public icon: string;
    public identified: boolean;
    public ilvl: number;
    public league: ELeague;
    public name: string;
    public note: string;
    public properties: Array<IItem_Properties>;
    public typeLine: string;
    public verified: boolean;
    public w: number;

    constructor({
        corrupted,
        descrText,
        explicitMods,
        extended,
        frameType,
        h,
        icon,
        identified,
        ilvl,
        league,
        name,
        note,
        properties,
        typeLine,
        verified,
        w,
    }: IMap) {
        this.corrupted = corrupted;
        this.descrText = descrText;
        this.explicitMods = explicitMods;
        this.extended = extended;
        this.frameType = frameType;
        this.h = h;
        this.icon = icon;
        this.identified = identified;
        this.ilvl = ilvl;
        this.league = league;
        this.name = name;
        this.note = note;
        this.properties = properties;
        this.typeLine = typeLine;
        this.verified = verified;
        this.w = w;
    }

    public getTier(): number {
        const prop = this.properties.find(p => p.name === 'Map Tier');

        if (prop) {
            return parseInt(prop.values[0][0]);
        }

        return NaN;
    }
}
