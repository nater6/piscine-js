const pyramid = (x, n) => {
    // create a string to store the result
    let res = ''
    //Create a loop that goes from 0 upto n
    for (let i = 1; i <= n; i++) {
        let noOfChar = ((2 *i) - 1)
        let noOfSpaces = (((2*n) - 1) - noOfChar) * x.length
        noOfSpaces /= 2
        console.log(i)
        console.log('noOfChar: ' + noOfChar)
        console.log('noOfSpaces: ' + noOfSpaces)
        //create a nested for loop that adds the number of spaces before the value
        for (let j = 0; j < noOfSpaces; j++) {
            res += ' '
        }
        //create another loop that adds the actual character in
        for (let k = 0; k < noOfChar; k++) {
            res += x
        }
        res += '\n'

    }
    return res
}