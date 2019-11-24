export interface ITradeSearchResponse {
    result: Array<string>;
    id: string;
    total: number;
}

export class TradeSearchResponse implements ITradeSearchResponse {
    public result: Array<string> = [];
    public id: string = '';
    public total: number = 0;

    constructor({
        result,
        id,
    }: Partial<ITradeSearchResponse> = {}) {
        if (!result || !id) {
            return;
        }

        this.result = result;
        this.id = id;
        this.total = result ? result.length : 0;
    }
}
