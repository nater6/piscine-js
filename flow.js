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
