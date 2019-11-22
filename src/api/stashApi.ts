import { STASH_ITEMS } from '../constants/urls';

export const getStashItems = ({
    league = 'blight',
    tabs = '1',
    tabIndex = '0',
    accountName = 'theavish',
    userSessionCookie = 'd7941afb56fc4d0a450347cb074eef8f',
} = {}): any => {
    const url = STASH_ITEMS
        .replace('{accountName}', accountName)
        .replace('{league}', league)
        .replace('{sessionId}', userSessionCookie)
        .replace('{tabIndex}', tabIndex)
        .replace('{tabs}', tabs);

    return fetch(url, {
        method: 'get',
    }).then(getJsonFromResponse);
};

const getJsonFromResponse = (response: Response): object =>
    response.json
        ? response.json()
        : response.text();

