const chunk = (arr, n) => {
    let temp = [];
    let res = [];
    let add = n-1

    for (let i = 0; i < arr.length; i++) {
        temp.push(arr[i])

        if ((i == add) || (i == arr.length - 1)) {
            res.push(temp)
            temp = [];
            add += n
        }
    }
    return res
}