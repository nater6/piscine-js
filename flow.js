const flow =
    (funcArr) => {
        return (...elem) => {
            let args = elem.slice()
        
            funcArr.forEach(element => {
                if (Array.isArray(args)) {
                    args = element(...args)
                } else {
                    args = element(args)
                }
            
            });
            return args
        }
    }
// const flow =
//     (func) =>
//         (...value) => {
//             let res = value.slice();
//             func.forEach((x) => {
//                 if (Array.isArray(res)) {
//                     res = x(...res);
//                 } else {
//                     res = x(res);
//                 }
//             });
//             return res;
//         };