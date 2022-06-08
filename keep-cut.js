const cutFirst = (str) => str.slice(2) 

const cutLast = (str) => str.slice(0, (str.length - 2))

const cutFirstLast = (str) => str.slice(2, (str.length - 2))

const keepFirst = (str) => str.slice(0, 2)

const keepLast = (str) => str.slice(-2)

const keepFirstLast = (str) => {
    //Empty string to store result
    let res = ''
    //add first to values to the string
    res = str.slice(0, 2)
    //Add last two values to the string
    res += str.slice(-2)
    return res
}