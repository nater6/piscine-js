const escapeStr = "\' \` \\ \/ \""
const UnfrozenArr = [4, '2']
const UnfrozenObj = {
    str: 'abc',
    num: 123,
    bool: true,
    undef: undefined
}
const UnfrozenNested = {
    arr: [4, undefined, '2'],
    obj: {
        str: 'abc',
        num: 123,
        bool: true
    }
}

const arr = Object.freeze(UnfrozenArr);
const obj = Object.freeze(UnfrozenObj);
const nested = Object.freeze(UnfrozenNested);