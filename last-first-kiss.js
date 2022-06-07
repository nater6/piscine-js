function first(arg) {
    return arg[0]
}

function last(arg) {
    var x = arg.length
    return arg[x - 1]
}

function kiss(arg) {
    const f = first(arg)
    const l = last(arg)
    const res = [l, f]
    return res
}