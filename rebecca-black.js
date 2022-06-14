const isFriday = (date) => date.getDay() === 5

const isWeekend = (date) => date.getDay() === 6 || date.getDay() === 0

const isLeapYear = (date) => {
    let year = date.getFullYear()
    return new Date(year, 1, 29).getDate() === 29
}

const isLastDayOfMonth = (date) => {
    let day = date.getDate()
    let month = date.getMonth()

    //days with 31 days
    let longerDays = [0, 2, 4, 6, 7, 9, 11]
    let shorterDays = [3, 5, 8, 10]

    if (longerDays.includes(month)) {
        return day == 31
    } else if (shorterDays.includes(month)) {
        return day == 30
    } else if (isLeapYear(date)) {
        return day == 29
    } else if (month == 1) {
        return day == 28
    }
}