import { IMap } from './Map';

export interface IStash {
    stash?: object;
    maps?: Array<IMap>;
    tabs?: Array<object>;
}

export class Stash implements IStash {
    public stash: object | undefined;
    public maps: Array<IMap> = [];
    public tabs: Array<object> = [];

    constructor(stash: IStash) {
        this.stash = stash;
    }
}
