import { STASH_ITEMS } from '../constants/urls';
import {IUser, User} from '../models/User';

export const getStashItems = ({
    league = 'blight',
    accountName = 'theavish',
    userSessionCookie = 'd7941afb56fc4d0a450347cb074eef8f',
}: IUser = new User()): any => {
    const tabIndex: number | string = 0;
    const tabs: 0 | 1 | '0' | '1' = 1;

    const url = STASH_ITEMS
        .replace('{accountName}', accountName)
        .replace('{league}', league)
        .replace('{sessionId}', userSessionCookie)
        .replace('{tabIndex}', tabIndex.toString())
        .replace('{tabs}', tabs.toString());

    return fetch(url, {
        method: 'get',
    }).then(getJsonFromResponse);
};

const getJsonFromResponse = (response: Response): object =>
    response.json
        ? response.json()
        : response.text();

