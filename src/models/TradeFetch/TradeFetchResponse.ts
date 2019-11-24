import { IItem } from '../Item';

export interface ITradeFetchResponse {
    result: Array<ITradeFetchResponse_Result>;
}

export interface ITradeFetchResponse_Result {
    id: string;
    item: IItem;
    listing: object;
}
