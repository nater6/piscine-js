function dayOfTheYear(date) {
    let feb = 28
    if (isLeapYear(date)) feb = 29
    console.log(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate())

    let monthDays = [31, feb, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    let days = 0

    for (let i = 0; i < date.getUTCMonth(); i++) {
        days += monthDays[i]
    }
    return days + date.getUTCDate()

}

const isLeapYear = (date) => {
    let year = date.getFullYear()
    return new Date(year, 1, 29).getDate() === 29
}
