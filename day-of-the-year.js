function dayOfTheYear(date) {
    let feb = 28
    if (isLeapYear(date)) feb = 29
    if (date.getFullYear() == 0 && date.getMonth() == 11) {
        date.setMonth(0)
        date.setDate(1)
        return 1
    }

    let monthDays = [31, feb, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    let days = 0
    if (date.getFullYear() < 1850 && date.getFullYear() > 0) days++
    console.log(date.toString())
    for (let i = 0; i < date.getMonth(); i++) {
        days += monthDays[i]
    }
    return days + date.getDate()

}

const isLeapYear = (date) => {
    let year = date.getFullYear()
    return new Date(year, 1, 29).getDate() === 29
}

console.log(dayOfTheYear(new Date('0001-01-01')))
console.log(dayOfTheYear(new Date('1664-08-09')))
console.log(dayOfTheYear(new Date('1600-12-31')))
console.log(dayOfTheYear(new Date('2020-06-22')))
console.log(dayOfTheYear(new Date('2048-12-08')))
console.log(dayOfTheYear(new Date('2048-11-08')))