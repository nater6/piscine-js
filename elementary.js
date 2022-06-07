const multiply = (a, b) => {
   // check if a and b are negative
    const aSign = Math.sign(a)
    const bSign = Math.sign(b)

    //make a and b absolute values
    a = Math.abs(a)
    b = Math.abs(b)
    
    //Calculate the multiplied value
    var res = 0
    for (let i = 0; i < a; i++){
        res += b
    }
    if (aSign != bSign) {
        return -res
    } else {
        return res
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

    if (aSign != bSign) {
        return -div 
    } else {
        return div
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

    return res
}