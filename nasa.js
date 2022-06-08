const nasa = (N) => {
    let store = [];
    for (let i = 1; i <= N; i++){
        store.push(i)
    }
    // Loop through store 
    for (let j = 0; j <= store.length; j++) {
        if ((store[j] % 3 == 0) && (store[j] % 5 == 0)) {
            store[j] = "NASA"
        } else if (store[j] % 3 == 0) {
            store[i] = "NA"
        } else if (store[j] % 5 == 0) {
            store[j] = "SA"
        }
    }

    let res = ''
    for (let k = 0; k < store.length; k++){
        res += store[k]
    }
    return res
}