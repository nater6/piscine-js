const slice = (val, num) => {
    if (Array.isArray(val)) {
        //create an empty slice to return the new value
        let res = [];
        //Loop through the array until the end, with i as num initially
        for (let i = num; i < val.length; i++) {
            res.push(val[i])
        }
        return res
    } else {
        //create an empty string to return the new value
        let res = '';
        for (let i = num; i < val.length; i++) {
            res += val[i]
        }
        return res
    }
}