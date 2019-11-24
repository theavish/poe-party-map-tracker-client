export interface IStash {
    stash?: object;
    maps?: Array<object>;
    tabs?: Array<object>;
}

export class Stash implements IStash {
    public stash: object | undefined;
    public maps: Array<object> = [];
    public tabs: Array<object> = [];

    constructor(stash: IStash) {
        this.stash = stash;
    }
}
