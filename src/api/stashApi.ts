import { GET_STASH_ITEMS } from '../constants/urls';
import { getJsonFromResponse } from '../helpers/jsonHelpers';
import { IStashItemsRequest } from '../models/StashItemsRequest';
import { defaultRealm } from '../constants/defaults';

export const getStashItems = ({
    accountName,
    league,
    realm = defaultRealm,
    sessionId,
    tabIndex = 0,
    tabs = 0,
}: IStashItemsRequest) => {
    const url = GET_STASH_ITEMS
        .replace('{accountName}', accountName)
        .replace('{league}', league)
        .replace('{realm}', realm)
        .replace('{sessionId}', sessionId)
        .replace('{tabIndex}', tabIndex.toString())
        .replace('{tabs}', tabs.toString());

    return fetch(url, {
        method: 'get',
    }).then(getJsonFromResponse);
};

