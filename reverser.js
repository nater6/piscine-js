const reverse = (val) => {
    if (val === "string") {
        let res = "";
        for (let i = val.length - 1; i >= 0; i--) {
            res += val[i];
        }
        return res;
    } else {
        let res = [];
        for (let i = val.length - 1; i >= 0; i--) {
            res.push(val[i])
        }
        return res;
    }
    
};