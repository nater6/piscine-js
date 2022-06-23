function filterEntries(obj, func) {
    let result = {}
    Object.entries(obj).forEach((elem) => (func(elem)) ? result[elem[0]] = elem[1] : undefined)
    return result
}

function mapEntries(obj, func) {
    let result = {};
    Object.entries(obj).map(sets => result[func(sets)[0]] = func(sets)[1]);
    return result
}

function reduceEntries(obj, func, start) {
    if (start === undefined) return Object.entries(obj).reduce((acc, key) => func(acc, [key, obj[key]]))
    return Object.keys(obj).reduce((acc, key) => func(acc, [key, obj[key]]), start)
}

const totalCalories = (obj) =>  +(reduceEntries(obj, (prev, next) =>  prev + (nutritionDB[next[0]].calories / 100) * next[1], 0).toFixed(1))

const lowCarbs = (obj) => filterEntries(obj, (pair) => (nutritionDB[pair[0]].carbs / 100) * pair[1] < 50)

const cartTotal = (obj) => mapEntries(obj, set => {
    let total = {}
    Object.keys(nutritionDB[set[0]]).forEach(key => {
        total[key] = +(((nutritionDB[set[0]][key] / 100) * set[1]).toFixed(3))
    })
    let result = [];
    result[0] = set[0]
    result[1] = total
    return result
})




