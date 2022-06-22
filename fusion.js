function fusion1(...objs) {
    let result = {}
    let allArr = true, allStr = true, allNum = true, allObj = true
    let args = objs

    args.forEach(obje => {
        Object.keys(obje).forEach(key => {

            if (!Array.isArray(obje[key])) {
                allArr = false
            }
            if (typeof obje[key] !== 'string') (
                allStr = false
            )
            if (typeof obje[key] !== 'number') (
                allNum = false
            )
            if (!(typeof obje[key] == 'object' && !Array.isArray(obje[key]))) {
                allObj = false
            }

        }
        )


    })


    if (allArr) {
        console.log("ARRAY BRANCH");
        //Go through args and add 
        args.forEach(obj => {

            Object.keys(obj).forEach(key => {

                if (result[key] === undefined) {
                    // result[key] = [];
                    result[key] = obj[key]

                } else {
                    result[key] = result[key].concat(obj[key])
                }
            })
        })
        return result
    } else if (allStr) {
        console.log("STRING BRANCH");
        args.forEach(obj => {

            Object.keys(obj).forEach(key => {

                if (result[key] === undefined) {
                    result[key] = obj[key]
                } else {
                    result[key] += ' ' + obj[key]
                }
            })
        })
        return result
    } else if (allNum) {
        console.log("NUMBERS BRANCH");
        args.forEach(obj => {

            Object.keys(obj).forEach(key => {

                if (result[key] === undefined) {
                    result[key] = obj[key]

                } else {
                    result[key] += obj[key]
                }
            })
        })
        return result
    } else if (allObj) {
        console.log('IN OBJECT BRANCH');
        args.forEach(obj => {

            Object.keys(obj).forEach(key => {
                result[key] = fusion(obj[key])
            })
        })
        console.log(result);
        return result
    } else {
        console.log("NOT MATCHING");
        args.forEach(obj => {

            Object.keys(obj).forEach(key => {
                result[key] = obj[key]
            })
        })
        console.log(result)
        return result
    }

}

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