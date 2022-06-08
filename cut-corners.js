const round = (n) => {
    switch (n) {
        case Number.NaN:
            return 0
        case (n <= Number.MIN_VALUE):
            return Number.MIN_VALUE
        case (n >= Number.MAX_VALUE):
            return Number.MAX_VALUE
        default:
            return divide(n+0.499999999999999, 1)
    }
}

const ceil = (n) => {
    if (Number.NaN) {
        return 0
    }
     return divide(n,1) + 1
}

const floor = (n) => {
    if (Number.NaN) {
        return 0
    }
    return divide(n, 1) - 1
}

const trunc = (n) => {
    switch (n) {
        case (n == 0):
            return 0;
        case (n < 0):
            return ceil(n);
        case (n > 0):
            return floor(n);

    }
}