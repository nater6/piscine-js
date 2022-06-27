const debounce = (func, time) => {
    let restart
    return function () {
        clearTimeout(restart)
        restart = setTimeout(func(), time)
    }
}

const opDebounce = (func, time, leading) {
    
}