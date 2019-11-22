export interface IStash {
    stash: object | null;
    tabs: Array<object>;
}

export class Stash {
    public stash: object | null;
    public tabs: Array<object | null> = [];

    constructor(stash: IStash) {
        this.stash = stash;
    }
}
