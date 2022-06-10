const findIP = (str) => {
    const validFormat = /(0(?!\d)|[1-9][0-9]{0,2})\.(0(?!\d)|[1-9][0-9]{0,2})\.(0(?!\d)|[1-9][0-9]{0,2})\.(0(?!\d)|[1-9][0-9]{0,2})(:[0-9]{1,5})?/g
    let res = str.match(validFormat)
    let result = [];
    for (let i = 0; i < res.length; i++) {
        let temp = res[i].split('.')
        let push = true
        for (let j = 0; j < temp.length; j++) {
            let test = temp[j].split(':')
            if (test.length == 2) {
                if (test[1] > 65535) {
                    push = false
                    continue
                }
            }
            if (temp[j] > 255) {
                push = false
                continue
            }
        }
        if (push) {
            result.push(res[i])
        }
    }
    return result
}


