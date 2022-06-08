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

const divide = (a, b) => {
    // check if a and b are negative
    const aSign = Math.sign(a)
    const bSign = Math.sign(b)

    //make a and b absolute values
    a = Math.abs(a)
    b = Math.abs(b)

    let div = 0
    let i = 0
    while (i < a) {
        i += b
        div++
    }
    if ((modulo(a, 2) == 0) == false) {
        div--
    }
    

    if ((aSign == bSign) == false) {
        return parseFloat(-div)
    } else {
        return parseFloat(div)
    }
}
const modulo = (a, b) => {
    // check if a and b are negative
    const aSign = Math.sign(a)
    const bSign = Math.sign(b)

    //make a and b absolute values
    a = Math.abs(a)
    b = Math.abs(b)
    var res = 0

    let i = 0
    while (i < a) {
        i += b
    }

    //minus the last b to find the last multiple of b below a
    i -= b

    // the modulo is the difference between a and i
    res = a - i
    if (aSign < 0) {
        res = -res
    }

    return parseFloat(res)
}