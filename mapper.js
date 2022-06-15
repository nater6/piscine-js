function map(array, func) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(func(array[i], i, array))
    }
    return result
}

const flatMap = (arr, func) => {
    let temp = map(arr, func)
    
    //Now flatten the mapped array
    let result = [];
    //loop through temp array
    for (let i = 0; i < temp.length; i++) {
        //if the type if an array loop through the array again and push each of its elements
        if (Array.isArray(temp[i])) {
            for (let elem of temp[i]) {
                result.push(elem)
            }
        } else {
            result.push(temp[i])
        }
    }
    return result
}
    
