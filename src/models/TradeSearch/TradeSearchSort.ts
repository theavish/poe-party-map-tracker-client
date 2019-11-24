import { ESortOrder } from '../SortOrder';
import { defaultSortOrder } from '../../constants/defaults';

export interface ITradeSearchSort {
    price: ESortOrder;
}

export class TradeSearchSort implements ITradeSearchSort {
    public price: ESortOrder;

    constructor(price: ESortOrder = defaultSortOrder) {
        this.price = price;
    }
}
