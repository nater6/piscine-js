function repeat (str, num) {
    let number = 0
    let string = ''
    //make sure the variables have the correct values
    if (num === 'number') {
        number = num
        string = str
    } else {
        number = str
        string = str
    }
    let res = ''
    //loop and return the value each time
    for (let i = 0; i < number; i++) {
        res = res + string
    }
    return res
}