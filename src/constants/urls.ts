const serverAddress = 'http://localhost:1337';

export const GET_STASH_ITEMS = `${serverAddress}/api/get-stash-items?league={league}&realm={realm}&sessionId={sessionId}&tabs={tabs}&tabIndex={tabIndex}&accountName={accountName}`;
export const POST_TRADE_SEARCH = `${serverAddress}/api/trade-search?league={league}`;
export const GET_TRADE_FETCH = `${serverAddress}/api/trade-fetch?items={items}&query={query}`;

export const POE_SESSION_ID_INSTRUCTIONS = 'https://www.pathofexile.com/forum/view-thread/1989935/page/9#p14857124';
