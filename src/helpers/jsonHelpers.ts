export const prettyPrintJson = (
    input: object | undefined | null,
    whitespace: number = 2
): string =>
    JSON.stringify(input, null, whitespace);

export const getJsonFromResponse = (response: Response) =>
    response && response.json ? response.json() : response.text();
