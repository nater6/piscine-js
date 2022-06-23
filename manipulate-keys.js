const filterKeys = (obj, cond) => {
    let result = {};
    Object.keys(obj).forEach(key => {
        if (cond(key)) result[key] = obj[key]
    })
    return result
}

const mapKeys = (obj, cond) => {
    let result = {};
    Object.keys(obj).forEach(key => {
        let newK = cond(key)
        result[newK] = obj[key]
    })
    return result
}

const reduceKeys = (obj, cond, start) => {
    if (start === undefined) {
        return Object.keys(obj).reduce((prev, curr) => {
            return cond(prev, curr)
        })
    } else {
        return Object.keys(obj).reduce((prev, curr) => {
            return cond(prev, curr)
        }, start)
    }



}
// cart = {
//     vinegar: 80,
//     sugar: 100,
//     oil: 50,
//     onion: 200,
//     garlic: 22,
//     paprika: 4,
// }

// console.log(reduceKeys(cart, (acc, cr) => acc.concat(', ', cr)))
// console.log(reduceKeys(cart, (acc, cr) => `${acc}${cr}:`, ':'));