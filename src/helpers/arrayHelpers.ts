export const sortByProp = (prop: string) => (
    x: any,
    y: any,
): number => {
    const a = tryParseAsInt(x[prop]);
    const b = tryParseAsInt(y[prop]);

    if (a > b) {
        return 1;
    }

    if (a < b) {
        return -1;
    }

    return 0;
};

const tryParseAsInt = (input: any) =>
    typeof input === 'string' ? parseInt(input) : input;
