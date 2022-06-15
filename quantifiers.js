const every = (arr, func) => {
    for (let i = 0; i < arr.length; i++) {
        if (!func(arr[i])) return false
    }
    return true
}

const some = (arr, func) => {
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i])) return true
    }
    return false
}

const none = (arr, func) => {
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i])) return false
    }
    return true
}