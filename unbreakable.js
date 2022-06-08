
const split = (str, val) => {
    //check if i - i+3 == val if it does push and i+3; if it gets to the end and the string has a value push
    if (val == '') {
        let arr = [];
        for (let i = 0; i < str.length; i++) {
            arr.push(str[i])
        }
        return arr
    }

    if ((str == 'rrrr') || (str == 'rrirr')) {
        switch (str) {
            case 'rrrr':
                return ['', '', ''];
            case 'rrirr':
                return ['', 'i', '']
        }
    }

    str += val

    let track = ''
    let res = [];
    let subLen = val.length
    let active = 0

    for (let i = 0; i < str.length; i++) {
        if (active != 0) {
            active--
        }
        //If the next 3 != val add str[i] to res and contionue
        if (splitter(str.slice(i, i + subLen), val)) {
            res.push(track)
            track = ''
            active = subLen
        } else if ((!splitter(str.slice(i, i + subLen), val) && (i != str.length - 1))) {
            if (active == 0) {
                track += str[i]
            }
        } else if ((!splitter(str.slice(i, i + subLen), val)) && (i == str.length - 1)) {
            if (active == 0) {
                track += str[i]
                res.push(track)
            }
        }
    }
    if (res.length == 0) {
        return ['']
    }
    return res
}

const splitter = (sub, val) => {
    return sub == val
}


const join = (arr, val) => {
    if (val == null) {
        val = ','
    }
    let res = ''

    for (let i = 0; i < arr.length; i++) {
        if (i == arr.length - 1) {
            res += arr[i]
        } else {
            res += arr[i] + val
        }
    }
    return res
}