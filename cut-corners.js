const round = (n) => {
    switch (n) {
        case (n !== 'number'):
            return 0
        case (n <= Integer.MIN_VALUE):
            return Integer.MIN_VALUE
        case (n >= Integer.MAX_VALUE):
            return Integer.MAX_VALUE
        default:
            return parseFloat(n.toFixed())
    }
}

const ceil = (n) => {
    if (n !== 'number') {
        return 0
    }
    parseFloat((n + 0.499999999999999).toFixed())
}

const floor = (n) => {
    if (n !== 'number') {
        return 0
    }
    parseFloat((n - 0.499999999999999).toFixed())
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