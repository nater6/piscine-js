const filterKeys = (obj, cond) => {
    let result = {};
    Object.keys(obj).forEach(key => (cond(key)) ? result[key] = obj[key] : undefined)
    return result
}

const mapKeys = (obj, cond) => {
    let result = {};
    Object.keys(obj).forEach(key =>  result[cond(key)] = obj[key])
    return result
}

const reduceKeys = (obj, cond, start) => {
    if (start === undefined) return Object.keys(obj).reduce((prev, curr) =>  cond(prev, curr))
        return Object.keys(obj).reduce((prev, curr) => cond(prev, curr), start)
    }
