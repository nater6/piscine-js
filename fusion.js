function fusion(a, b) {
    let result = {}
    let allArr = true, allStr = true, allNum = true, allObj = true
    let args = [a,b]

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

        if (Object.keys(a).length > Object.keys(b).length) {
            Object.keys(a).forEach(key => {
                return result[key] = fusion(a[key], b[key])
            })
        } else {
            Object.keys(b).forEach(key =>  result[key] = fusion(a[key], b[key]))
        }
        console.log(result);
        return result

    } else {
        args.forEach(obj => {

            Object.keys(obj).forEach(key => {
                result[key] = obj[key]
            })
        })
        console.log(result)
        return result
    }

}

console.log(fusion(
    { a: { b: [1, 2], c: { d: 2 } } },
    { a: { b: [0, 2, 1], c: { d: 23 } } }
));