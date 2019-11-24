import { GET_STASH_ITEMS } from '../constants/urls';
import { getJsonFromResponse } from '../helpers/jsonHelpers';
import { IGetStashItemsRequest } from '../models/GetStashItems/GetStashItemsRequest';

export const getStashItems = ({
    accountName,
    league,
    realm,
    sessionId,
    tabIndex = 0,
    tabs = 0,
}: IGetStashItemsRequest) => {
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

