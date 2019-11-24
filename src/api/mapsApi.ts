import { GET_TRADE_FETCH, POST_TRADE_SEARCH } from '../constants/urls';
import { TradeSearchRequest } from '../models/TradeSearch/TradeSearchRequest';
import { TradeSearchQuery } from '../models/TradeSearch/TradeSearchQuery';
import { defaultLeague } from '../constants/defaults';
import { getJsonFromResponse } from '../helpers/jsonHelpers';
import { ITradeSearchResponse } from '../models/TradeSearch/TradeSearchResponse';
import { ITradeFetchRequest } from '../models/TradeFetch/TradeFetchRequest';
import { ITradeFetchResponse, ITradeFetchResponse_Result } from '../models/TradeFetch/TradeFetchResponse';
import { IMap } from '../models/Map';
import { User } from '../models/User';

export const getMaps = async ({
    accountName,
    league = defaultLeague,
}: Partial<User>) => {
    if (!accountName) {
        return;
    }

    const maps: Array<IMap | undefined> = [];
    const mapIds = await getMapIds({ accountName, league });

    if (mapIds) {
        const mapData = await getMapData({
            query: mapIds.id.toString(),
            items: mapIds.result.toString(),
        });

        if (mapData) {
            mapData.result.forEach(({ item }: Partial<ITradeFetchResponse_Result>) => maps.push(item));
        }
    }

    return maps;
};

const getMapIds = ({
    accountName,
    league,
}: getMapIdsParams): Promise<ITradeSearchResponse> => {
    const url = POST_TRADE_SEARCH
        .replace('{league}', league);

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

const getMapData = async ({
    items,
    query,
}: ITradeFetchRequest): Promise<ITradeFetchResponse> => {
    const url = GET_TRADE_FETCH
        .replace('{items}', items.toString())
        .replace('{query}', query);

    return fetch(url, {
        method: 'get',
    }).then(getJsonFromResponse);
};

interface getMapsParams {
    accountName: string;
    league: string;
}

interface getMapIdsParams {
    accountName: string;
    league: string;
}
