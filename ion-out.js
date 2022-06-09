const ionOut = (str) => {
    const pattern = /\w*tion\b/g
    let temp = str.match(new RegExp(pattern))
    if (temp == null) return [];
    return temp.map((x) => x.slice(0, -3))
}