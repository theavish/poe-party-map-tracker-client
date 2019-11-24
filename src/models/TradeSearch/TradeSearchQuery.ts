export interface ITradeSearchQuery {
    filters?: ITradeSearchQuery_Filters;
    stats?: Array<ITradeSearchQuery_Stat>;
    status: ITradeSearchQuery_Status;
    name?: string;
    type?: string;
}

interface ITradeSearchQuery_Filters {
    trade_filters: ITradeSearchQuery_Filters_TradeFilters;
    type_filters: ITradeSearchQuery_Filters_TypeFilters
}

interface ITradeSearchQuery_Filters_TradeFilters {
    filters: {
        account?: { input: string };
    }
}

interface ITradeSearchQuery_Filters_TypeFilters {
    filters: {
        category: {
            option: string;
        }
    }
}

interface ITradeSearchQuery_Stat {
    type: 'and' | 'not' | 'if' | 'count' | 'weight';
    filters: Array<object>;
}

interface ITradeSearchQuery_Status {
    option: 'online' | 'any';
}

export class TradeSearchQuery implements ITradeSearchQuery {
    public filters: ITradeSearchQuery_Filters | undefined;
    public stats: Array<ITradeSearchQuery_Stat> | undefined;
    public status: ITradeSearchQuery_Status = { option: 'online' };
    public name: string | undefined;
    public type: string | undefined;

    constructor({
        filters,
        status,
        stats,
        name,
        type,
    }: ITradeSearchQuery) {
        this.filters = filters;
        this.status = status;
        this.stats = stats;
        this.name = name;
        this.type = type;
    }
}
