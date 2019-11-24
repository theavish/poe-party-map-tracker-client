import { GET_TRADE_FETCH, POST_TRADE_SEARCH } from '../constants/urls';
import { TradeSearchRequest } from '../models/TradeSearch/TradeSearchRequest';
import { TradeSearchQuery } from '../models/TradeSearch/TradeSearchQuery';
import { defaultLeague } from '../constants/defaults';
import { getJsonFromResponse } from '../helpers/jsonHelpers';
import { ITradeSearchResponse, TradeSearchResponse } from '../models/TradeSearch/TradeSearchResponse';
import { ITradeFetchRequest } from '../models/TradeFetch/TradeFetchRequest';
import { ITradeFetchResponse, ITradeFetchResponse_Result } from '../models/TradeFetch/TradeFetchResponse';
import { IMap } from '../models/Map';
import { User } from '../models/User';

export const getMaps = ({
    accountName,
    league = defaultLeague,
}: Partial<User>): Promise<Array<IMap>> => {
    if (!accountName) {
        return new Promise(resolve => resolve([]));
    }

    const maps: Array<IMap> = [];

    return getMapIds({ accountName, league })
        .then(searchResponse => {
            return getMapData({
                query: searchResponse.id.toString(),
                items: searchResponse.result.toString(),
            }).then(mapData => {
                mapData.result.forEach(({ item }: Partial<ITradeFetchResponse_Result>) => item && maps.push(item));
                return maps;
            });
        });
};

const getMapIds = ({
    accountName,
    league = defaultLeague,
}: Partial<User>): Promise<ITradeSearchResponse> => {
    if (!accountName) {
        return new Promise((resolve, reject) => reject(new TradeSearchResponse()));
    }

    const url = POST_TRADE_SEARCH
        .replace('{league}', league.toString());

    const searchQuery = new TradeSearchQuery({
        filters: {
            trade_filters: {
                filters: {
                    account: {
                        input: accountName,
                    },
                },
            },
            type_filters: {
                filters: {
                    category: {
                        option: 'map',
                    },
                },
            },
        },
        status: {
            option: 'any',
        },
    });

    return fetch(url, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(new TradeSearchRequest(searchQuery)),
    }).then(getJsonFromResponse);
};

const getMapData = ({
    items,
    query = '',
}: ITradeFetchRequest): Promise<ITradeFetchResponse> => {

    const url = GET_TRADE_FETCH
        .replace('{items}', items)
        .replace('{query}', query);

    return fetch(url, {
        method: 'get',
    }).then(getJsonFromResponse);
};

interface getMapIdsParams {
    accountName: string;
    league: string;
}
