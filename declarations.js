const escapeStr = "\' \` \\ \/ \""
const arr = [4, '2']
const obj = {
    str: 'abc',
    num: 123,
    bool: true,
    undef: undefined
}
const nested = {
    arr: [4, undefined, '2'],
    obj: {
        str: 'abc',
        num: 123,
        bool: true
    }
}

arr = Object.freeze(arr);
obj = Object.freeze(obj);
nested = Object.freeze(nested);