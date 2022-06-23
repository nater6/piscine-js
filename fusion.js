function fusion(a, b) {
    let result = {};
    let use = Object.keys(a).length > Object.keys(b).length ? a : b
    Object.keys(use).forEach((key) => {
        if (Array.isArray(a[key]) && Array.isArray(b[key])) {
            result[key] = a[key].concat(b[key])
        } else if (typeof a[key] === 'string' && typeof b[key] === 'string') {
            result[key] = a[key] + ' ' + b[key]
        } else if (typeof a[key] === 'number' && typeof b[key] === 'number') {
            result[key] = a[key] + b[key]
        } else if (typeof a[key] === 'object' && typeof b[key] === 'object' && a[key] !== null && b[key] !== null) {
            result[key] = fusion(a[key], b[key])
        } else {
            if (b[key] !== undefined) {
                result[key] = b[key]
            } else {
                result[key] = a[key]
            }

        }
    })
    return result
}