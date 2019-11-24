import { ITradeSearchQuery } from './TradeSearchQuery';
import { ITradeSearchSort, TradeSearchSort } from './TradeSearchSort';

export interface ITradeSearchRequest {
    query: ITradeSearchQuery;
    sort: ITradeSearchSort;
}

export class TradeSearchRequest implements ITradeSearchRequest {
    public query: ITradeSearchQuery;
    public sort: ITradeSearchSort;

    constructor(
        query: ITradeSearchQuery,
        sort = new TradeSearchSort()
    ) {
        this.query = query;
        this.sort = sort;
    }
}
