function pick(obj, str) {
    let result = {};
    Object.keys(obj).forEach(key => {
        if (typeof str === 'string') {
            if (key === str) result[key] = obj[key]
        } else if (Array.isArray(str)) {
            if (str.includes(key)) result[key] = obj[key]
        }
    });
    return result;
}

function omit(obj, str) {
    let result = {};
    Object.keys(obj).forEach(key => {
        if (typeof str === 'string') {
            if (key !== str) result[key] = obj[key]
        } else if (Array.isArray(str)) {
            if (!str.includes(key)) result[key] = obj[key]
        }
    });
    return result;
}