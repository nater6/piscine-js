const indexOf = (arr, val) => {
    let i = 0;
    //loop thorugh the array
    while (i < arr.length) {
        if (arr[i] == val) {
            return i
        }
        i++
    }
    return -1
}

const lastIndexOf = (arr, val) => {
    //reverse the array
    var revArr = arr.reverse();
    //call index of on revArr
    res = indexOf(revArr, val)
    return res
}

const includes = (arr, val) => {
    let check = indexOf(arr, val)
    if (check == -1) {
        return false
    } else {
        return true
    }
}
