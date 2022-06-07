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

const lastIndexOf = (arr, val, start) => {
    let i = 0
    if (start != null) {
        i = start
    }
    let res = -1
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == val) {
            res = i
        }
    }
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
