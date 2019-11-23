import { ERealm } from './Realm';
import { defaultRealm } from '../constants/defaults';
import { ELeague } from './League';

export interface IUser {
    accountName: string;
    league: ELeague;
    realm?: ERealm;
    sessionId: string;
}

export class User implements IUser {
    public accountName: string;
    public league: ELeague;
    public realm?: ERealm = defaultRealm;
    public sessionId: string;

    constructor({
        accountName,
        league,
        realm,
        sessionId,
    }: IUser) {
        this.accountName = accountName;
        this.league = league;
        this.sessionId = sessionId;
        this.realm = realm;
    }
}
