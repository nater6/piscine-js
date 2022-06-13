const getURL = (str) => {
    const urlStart = /(https:\/\/|http:\/\/)\S+&\S+&(?=\s)/g
    const res = str.match(new RegExp(urlStart))
    return res
}

const greedyQuery = (str) => {
    const validUrls = getURL(str)
    const res = [];

    for (let j = 0; j < validUrls.length; j++) {
        const greedyUrls = validUrls[j].split('&')
        if (greedyUrls.length >= 3) res.push(validUrls[j])
    
    }
    return res
}

const notSoGreedy = (str) => {
    const validUrls = getURL(str)
    const res = [];

    for (let j = 0; j < validUrls.length; j++) {
        const greedyUrls = validUrls[j].split('&')
        if ((greedyUrls.length == 3) || (greedyUrls.length == 2))  res.push(validUrls[j])

    }
    return res
}