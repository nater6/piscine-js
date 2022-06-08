var get = function (obj, path) {
    path = path.split(".")

    for (let i = 0; i < path.length; i++) {
        if (path[i] == null) {
            return undefined
        }
    }
    
    for (var i = 0, len = path.length; i < len; i++) {
        obj = obj[path[i]];
    }
    return obj;
};