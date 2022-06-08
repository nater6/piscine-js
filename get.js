var get = function (obj, path) {
    path = path.split(".")
    for (let i = 0; i < path.length; i++){
        obj = obj[path[i]]
        if (obj == null) {
            return undefined
        }
    }
    return obj
};