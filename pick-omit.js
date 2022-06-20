function pick(obj, str) {

    let result = {};
    Object.keys(obj).forEach(key => {
        if (str === 'string') {
          if (str === (key)) result[key] = obj[key]
        } else if (Array.isArray(str)) {
            if (str.includes(key)) result[key] = obj[key]
        }
        
    });
    return result;

}