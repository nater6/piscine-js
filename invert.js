function invert(obj) {
    let result = {};
    Object.keys(obj).forEach(key => {
        result[obj[key]] = key
    })

    return result
}
