const ionOut = (str) => {
    const pattern = /\w*tion\b/g
    let temp = str.match(new RegExp(pattern))
    if (temp == null) {
        return [];
    }
    
    let res = [];
    for (let i = 0; i < temp.length; i++) {
        res.push(temp[i].slice(0,-3))
    }
    return res

}