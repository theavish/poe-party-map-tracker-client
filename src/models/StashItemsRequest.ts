export interface IStashItemsRequest {
    accountName: string;
    league: string;
    realm?: string;
    sessionId: string;
    tabIndex?: number;
    tabs?: 0 | 1;
}
