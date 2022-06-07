const slice = (val, num) => {
    if (Array.isArray(val)) {
        if (number >= 0) {
            //create an empty slice to return the new value
            let res = [];
            //Loop through the array until the end, with i as num initially
            for (let i = num; i < val.length; i++) {
                res.push(val[i])
            }
            return res
        } else {
            let res = [];
            //Loop through the array until the end, with i as num initially
            for (let i = val.length - 1; i >= val.length+num ; i--) {
                res.push(val[i])
            }
            return res.reverse()
        }
    } else {
        if (number >= 0) {
            //create an empty slice to return the new value
            let res = '';
            //Loop through the array until the end, with i as num initially
            for (let i = num; i < val.length; i++) {
                res += val[i]
            }
            return res
        } else {
            let res = '';
            //Loop through the array until the end, with i as num initially
            for (let i = val.length - 1; i >= val.length + num; i--) {
                res += val[i]
            }
            const split = res.split('')
            const rev = split.reverse()
            const join = rev.join('')
            return join
        }
    }
}