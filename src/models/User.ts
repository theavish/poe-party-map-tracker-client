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
    }: IUser = {
        accountName: '',
        league: '',
        sessionId: '',
    }) {
        this.accountName = accountName;
        this.league = league === '' ? 'blight' : league;
        this.sessionId = sessionId;
    }
}
