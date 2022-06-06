const escapeStr = "\' \` \\ \/ \""
const arr = [2, '4']
const obj = {
    str: 'abc',
    num: 123,
    bool: true,
    undef: undefined
}
const nested = {
    arr: [2, undefined, "4"],
    obj: {
        str1: 'abc',
        num1: 123,
        bool1: true
    }
}

Object.freeze(arr)
Object.freeze(obj)
Object.freeze(nested)