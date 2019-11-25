export const sortByProp = (prop: string) => (
    x: any,
    y: any,
): number => {
    const a = x[prop].toUpperCase();
    const b = y[prop].toUpperCase();

    if (a > b) {
        return 1;
    }

    if (a < b) {
        return -1;
    }

    return 0;
};
