export interface IUser {
    accountName: string;
    league: string;
    sessionId: string | undefined;
}

export class User {
    public accountName: string;
    public league: string;
    public sessionId: string | undefined;

    constructor({
        accountName,
        league,
        sessionId,
    }: IUser = {
        accountName: '',
        league: '',
        sessionId: '',
    }) {
        this.accountName = accountName;
        this.league = league;
        this.sessionId = sessionId;
    }
}
