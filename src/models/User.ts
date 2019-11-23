import { TRealm } from './Realm';

export interface IUser {
    accountName: string;
    league: string;
    realm: TRealm;
    sessionId: string;
}

export class User implements IUser {
    public accountName: string;
    public realm: TRealm;
    public league: string;
    public sessionId: string;

    constructor({
        accountName,
        league,
        realm,
        sessionId,
    }: IUser) {
        this.accountName = accountName;
        this.league = league === '' ? 'blight' : league;
        this.sessionId = sessionId;

        switch (realm) {
            case 'pc':
            case 'sony':
            case 'xbox':
                this.realm = realm;
                break;

            default:
                this.realm = 'pc';
                break;
        }
    }
}
