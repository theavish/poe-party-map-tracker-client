import { ERealm } from './Realm';
import { defaultRealm } from '../constants/defaults';
import { ELeague } from './League';
import { IMap } from './Map';

export interface IUser {
    accountName: string;
    league?: ELeague;
    ownedMaps?: Array<IMap>;
    realm?: ERealm;
    sessionId?: string;
}

export class User implements IUser {
    public accountName: string;
    public league?: ELeague;
    public ownedMaps?: Array<IMap>;
    public realm?: ERealm = defaultRealm;
    public sessionId?: string;

    constructor({
        accountName,
        league,
        ownedMaps = [],
        realm,
        sessionId,
    }: IUser) {
        this.accountName = accountName;
        this.ownedMaps = ownedMaps;
        this.league = league;
        this.sessionId = sessionId;
        this.realm = realm;
    }
}
