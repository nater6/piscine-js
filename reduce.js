function fold(array, func, acc) {
    let result = acc
    array.map((elem,) => {
        result = func(result, elem)
    })
    return result
}

function foldRight(array, func, acc) {
    let newArr = [];
    for (let i = array.length - 1; i >= 0; i--){
        newArr.push(array[i])
    }
        return fold(newArr, func, acc)
}

function reduce(array, func) {
    let result = array[0]
    
    array.slice(1).map((elem) => {
        result = func(result, elem)
    })
    return result
}

function reduceRight(array, func) {
    let newArr = [];
    for (let i = array.length - 1; i >= 0; i--) {
        newArr.push(array[i])
    }
    let result = newArr[0]

    newArr.slice(1).map((elem) => {
        result = func(result, elem)
    })
    return result
}