const sameAmount = (str, pattern1, pattern2) => {
    let times1 = (str.match(new RegExp(pattern1, 'g'))|| []).length
    let times2 = (str.match(new RegExp(pattern2, 'g')) || []).length
    return times1 == times2 
}