const debounce = (fn, delay) => {
    let timer;
    return function (...args) {
        clearTimeout(timer)
        timer = setTimeout(() => fn(...args), delay)
    }
}

const opDebounce = (func, time, options) => {
    let timer
    options === undefined ? options = { leading: false } : null
    return function (...args) {
        if (!timer && options.leading) func(...args)
        clearTimeout(timer)
        timer = setTimeout(() => func(...args), time)
    }
}