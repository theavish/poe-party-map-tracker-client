export interface IUser {
    accountName: string;
    league: string;
    sessionId: string;
}

export class User {
    public accountName: string;
    public league: string;
    public sessionId: string;

    constructor({
        accountName,
        league,
        sessionId,
    }: IUser) {
        this.accountName = accountName;
        this.league = league;
        this.sessionId = sessionId;
    }
}
