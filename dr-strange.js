function addWeek(str) {
    const start = new Date('0001-01-01')
    const current = new Date(str)
    let diff = Math.round(((start.getTime()) - (current.getTime())) / 86400000)

    diff = Math.abs(diff)

    let dayTracker = 1
    for (let i = 0; i < diff; i++){
        dayTracker++
        if (dayTracker == 15) {
            dayTracker = 1
        }
    }

    switch (dayTracker) {
        case 1:
            return 'Monday'
        case 2:
            return 'Tuesday'
        case 3:
            return 'Wednesday'
        case 4:
            return 'Thursday'
        case 5:
            return 'Friday'
        case 6:
            return 'Saturday'
        case 7:
            return 'Sunday'
        case 8:
            return 'secondMonday'
        case 9:
            return 'secondTuesday'
        case 10:
            return 'secondWednesday'
        case 11:
            return 'secondThursday'
        case 12:
            return 'secondFriday'
        case 13:
            return 'secondSaturday'
        case 14:
            return 'secondSunday'
    }
}

function timeTravel(obj) {
    const newH = obj.hour
    const newM = obj.minute
    const newS = obj.second


    obj.date.setHours(newH, newM, newS)

    return obj.date
}
