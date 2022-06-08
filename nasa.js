const nasa = (N) => {
    let store = [];
    for (let i = 1; i <= N; i++){
        store.push(i)
    }
    // Loop through store 
    for (let j = 0; j <= store.length; j++) {
        if ((store[i] % 3 == 0) && (store[i] % 5 == 0)) {
            store[i] = "NASA"
        } else if (store[i] % 3 == 0) {
            store[i] = "NA"
        } else if (store[i] % 5 == 0) {
            store[i] = "SA"
        }
    }

    let res = ''
    for (let k = 0; k < store.length; k++){
        res += store[k]
    }
    return res
}