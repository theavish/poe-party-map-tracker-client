export interface IStash {
    stash: object | null;
    tabs: Array<object> | undefined | null;
}

export class Stash implements IStash {
    public stash: object | null;
    public tabs: Array<object> | undefined | null;

    constructor(stash: IStash) {
        this.stash = stash;
    }
}
