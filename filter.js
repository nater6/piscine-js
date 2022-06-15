function filter(array, func) {
    let result = [];
    array.map((elem, i, array) => {
        if (func(elem, i, array)) {
            result.push(elem)
        }
    })
    return result
}

function reject(array, func) {
    let result = [];
    array.map((elem, i, array) => {
        if (!func(elem, i, array)) {
            result.push(elem)
        }
    })
    return result
}

function partition(array, func) {
    return [filter(array,func), reject(array, func)]
}