function first(arg) {
    return
}

function last(arg) {
    var x = arg.length
    return arg[x - 1]
}

function kiss(arg) {
    const f = first(arg)
    const l = last(arg)
    const res = [f, l]
    return res
}