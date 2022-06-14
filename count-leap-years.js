function countLeapYears(date) {
    let startYear = 1
    let leapYears = 0
    
    while (startYear < date.getFullYear()) {
        
        if (new Date(startYear, 1, 29).getDate() === 29) {
            leapYears++
        }
        startYear++
    }
    return leapYears
}

const isLeapYear = (date) => {
    let year = date.getFullYear()
    return new Date(year, 1, 29).getDate() === 29
}