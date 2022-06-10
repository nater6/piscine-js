const groupPrice = (str) => {
    const price = /(USD|\$)\S+\b/g
    const temp = str.match(price)
    if (temp == null) return [];
    let prices = [];
    for (let i = 0; i < temp.length; i++) {
        let store = [];
        store.push(temp[i])
        let spliter = temp[i].split('.')
        spliter.map((st) => store.push(st.replace(/(USD|\$)/ ,'')))
        prices.push(store)
    }
    return prices
}
