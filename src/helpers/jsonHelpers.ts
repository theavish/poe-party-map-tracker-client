export const prettyPrintJson = (
    json: object | undefined | null,
    whitespace: number = 2
): string =>
    JSON.stringify(json, null, whitespace);
