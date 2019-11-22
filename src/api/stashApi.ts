import { STASH_ITEMS } from '../constants/urls';
import { IUser, User } from '../models/User';
import { getJsonFromResponse } from '../helpers/jsonHelpers';

export const getStashItems = ({
    league,
    accountName,
    sessionId,
}: IUser = new User()): any => {
    const tabIndex: number | string = 0;
    const tabs: 0 | 1 = 1;

    const url = STASH_ITEMS
        .replace('{accountName}', accountName)
        .replace('{league}', league)
        .replace('{sessionId}', sessionId)
        .replace('{tabIndex}', tabIndex.toString())
        .replace('{tabs}', tabs.toString());

    return fetch(url, {
        method: 'get',
    }).then(getJsonFromResponse);
};

