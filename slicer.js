const slice = (val, num, num2) => {
    if (Array.isArray(val)) {
        if (num >= 0) {
            if (num2 != null) {
                for (let i = num; i < num2; i++) {
                    res.push(val[i])
                }
                return res
            } 
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
        if (num >= 0) {
            if (num2 != null) {
                let res = '';
                //Loop through the array until the end, with i as num initially
                for (let i = num; i < num2; i++) {
                    res += val[i]
                }
                return res
            } 
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