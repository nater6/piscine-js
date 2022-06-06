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

Object.freeze(arr);
Object.freeze(obj);
Object.freeze(nested);