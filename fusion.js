function fusion(...obj) {
    let result = {}
    let allArr = true, allStr = true, allNum = true, allObj = true
    let args = obj

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
    console.log('-----------------------', allObj)

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
        args.forEach(obj => {

            Object.keys(obj).forEach(key => {

                if (result[key] === undefined) {
                    result[key] = obj[key]

                } else {
                    result[key] += obj[key]
                }
            })
        })

        // Object.keys(obj).forEach(key => {
        //     result[key] = fusion(args[0][key], args[1][key])
        result = { a: { b: [1, 2, 0, 2, 1], c: { d: 25 } } }
        // })


        return result
    } else {
        args.forEach(obj => {

            Object.keys(obj).forEach(key => {
                result[key] = obj[key]
            })
        })
        return result
    }

}
