function citiesOnly(objArr) {
    let res = [];
    objArr.map(x => res.push(x.city))
    return res
}

function upperCasingStates(strArr) {
    let res = [];
    strArr.map(element => {
        //split element by space
        let spaces = element.split(' ')
        let appender = [];
        //map through spaces and turn all things capital
        spaces.map(x => {
            appender.push(x[0].toUpperCase() + x.slice(1))
        })

        // now join spaces and add to res
        res.push(appender.join(' '))
    });

    return res
}

function fahrenheitToCelsius(tempArr) {
    let res = [];
    tempArr.map(temp => {
        let temperature = parseInt(temp.slice(0, -2))
        let celcius = Math.round((((temperature - 32) * 5) / 9)-0.5)
        res.push(celcius.toString() + '°C')
    })
    return res
}

function trimTemp(objArr) {
    objArr.map(obj => {
        obj.temperature = obj.temperature.replace(/\s/g, '')
    })
    return objArr
}

function tempForecasts(objArr) {
    let res = [];
    objArr.map(obj => {
        let str = ''
        // get the temp in C
        let temps = parseInt(obj.temperature.slice(0, -2))
        let celcius = Math.round((((temps - 32) * 5) / 9) - 0.5)
        str += celcius.toString() + '°Celsius in ' + obj.city + ', '
        //make the state upper case
        let x = obj.state.split(' ')
        let temp = [];
        x.map(x1 => temp.push(x1[0].toUpperCase() + x1.slice(1)))
        let state = temp.join(' ')
        str += state
        res.push(str)
    })
    return res
}