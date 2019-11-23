import { STASH_ITEMS } from '../constants/urls';
import { getJsonFromResponse } from '../helpers/jsonHelpers';
import { IStashItemsRequest } from '../models/StashItemsRequest';

export const getStashItems = ({
    accountName,
    league,
    realm,
    sessionId,
    tabIndex,
    tabs,
}: IStashItemsRequest) => {
    if (!tabIndex) {
        tabIndex = 0;
    }

    if (!tabs) {
        tabs = 0;
    }

    const url = STASH_ITEMS
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

