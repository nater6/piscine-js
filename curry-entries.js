const defaultCurry = (a) =>
    (b) => {
        let result = {};
        Object.keys(a).forEach(key => result[key] = a[key]);
        Object.keys(b).forEach(key => result[key] = b[key]);
        return result;
    }

const mapCurry = (func) => (obj) => {
    let result = {};
    Object.keys(obj).forEach(key => result[func([key, obj[key]])[0]] = func([key, obj[key]])[1]);
    return result;
}

const reduceCurry = (func) => (obj, initial) => {
    if (initial === undefined) return Object.keys(obj).reduce((pKey, key) => func(pKey, [key, obj[key]]))
    return Object.keys(obj).reduce((pKey, key) => func(pKey, [key, obj[key]]), initial)
}

const filterCurry = (func) => (obj) => {
    let result = {};
    Object.keys(obj).forEach(key => func([key, obj[key]]) ? result[key] = obj[key] : null)
    return result
}

const reduceScore = (obj, start) => {
    let result = {}, total
    Object.keys(obj).forEach(key => obj[key].isForceUser ? result[key] = obj[key] : null)
    start !== undefined ? total = start : total = 0
    return reduceCurry((key, nextKey) => key + result[nextKey[0]].pilotingScore + result[nextKey[0]].shootingScore)(result, total)
}

const filterForce = (obj) => filterCurry((obj1) => obj[obj1[0]]['isForceUser'] && obj[obj1[0]]['shootingScore'] >= 80)(obj)

const mapAverage = (obj) => {
    let result = {}
    Object.keys(obj).forEach(nestedObj => {
        result[nestedObj] = mapCurry( x => ['averageScore', (obj[nestedObj]['pilotingScore'] + obj[nestedObj]['shootingScore']) / 2])(nestedObj)
        Object.keys(obj[nestedObj]).forEach(key => result[nestedObj][key] = obj[nestedObj][key])
    })
    return result
}