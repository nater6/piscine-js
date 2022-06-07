function sign(n) {
    switch (n) {
        case (n > 0):
            return 1
        case (n == 0):
            return 0
        case (n < 0):
            return -1
    }
}

function samesign(n1, n2) {
    if (sign(n1) == sign(n2)) {
        return true
    } else {
        return false
    }
}