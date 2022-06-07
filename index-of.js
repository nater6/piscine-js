const indexOf = (arr, val, start) => {
    let i = 0
    if (start != null) {
        i = start
    }
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
    return indexOf(revArr, val)
}

const includes = (arr, val) => {
    let check = indexOf(arr, val)
    if (check == -1) {
        return false
    } else {
        return true
    }
}
