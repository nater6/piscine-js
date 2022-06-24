function deepCopy(obj) {
    let res
    if (Array.isArray(obj)) {
        res = [];
        for (let i = 0; i < obj.length; i++) {
            res[i] = deepCopy(obj[i])
        }
    } else if (toString.call(obj).slice(8, -1) === 'Object') {
        res = {};
        Object.keys(obj).forEach(key => (res[key] = deepCopy(obj[key])));
    } else {
        res = obj
    }
    return res
}