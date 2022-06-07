function first(arg) {
    return
}
function last(arg) {
    var x = arg.length
    return arg[x - 1]
}

function kiss(arg) {
    var f = arg[0]
    var l = arg[arg.length - 1]
    const res = [f, l]
    return res
}