// const slice = (val, num, num2) => {
//     if (Array.isArray(val)) {
//         if (num >= 0) {
//             if (num2 != null) {
//                 for (let i = num; i < num2; i++) {
//                     res.push(val[i])
//                 }
//                 return res
//             }
//             //create an empty slice to return the new value
//             let res = [];
//             //Loop through the array until the end, with i as num initially
//             for (let i = num; i < val.length; i++) {
//                 res.push(val[i])
//             }
//             return res
//         } else {
//             let res = [];
//             //Loop through the array until the end, with i as num initially
//             for (let i = val.length - 1; i >= val.length+num ; i--) {
//                 res.push(val[i])
//             }
//             return res.reverse()
//         }
//     } else {
//         if (num >= 0) {
//             if (num2 != null) {
//                 let res = '';
//                 //Loop through the array until the end, with i as num initially
//                 for (let i = num; i < num2; i++) {
//                     res += val[i]
//                 }
//                 return res
//             }
//             //create an empty slice to return the new value
//             let res = '';
//             //Loop through the array until the end, with i as num initially
//             for (let i = num; i < val.length; i++) {
//                 res += val[i]
//             }
//             return res
//         } else {
//             let res = '';
//             //Loop through the array until the end, with i as num initially
//             for (let i = val.length - 1; i >= val.length + num; i--) {
//                 res += val[i]
//             }
//             const split = res.split('')
//             const rev = split.reverse()
//             const join = rev.join('')
//             return join
//         }
//     }
// }

const slice = (slc, n1, n2) => {
    if (n1 < 0) {
        n1 = slc.length + n1
    }
    if ((n2 < 0) && (n2 != null)) {
        n2 = slc.length + n2
    }

    let upto = slc.length

    if (n2 != null) {
        upto = n2
    }

    if (Array.isArray(slc)) {

        //create an empty slice to return the new value
        let res = [];
        //Loop through the array until the end, with i as num initially
        for (let i = n1; i < upto; i++) {
            res.push(slc[i])
        }
        return res

    } else {
        let res = '';
        //Loop through the array until the end, with i as num initially
        for (let i = n1; i < upto; i++) {
            res += slc[i]
        }
        return res
    }



}