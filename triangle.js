const triangle = (n) => {
    let res = ''
    for (let i = 0; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            res += '*'
            if (j == i - 1) {
                res += '\n'
            }
        }
    }
    return res
}