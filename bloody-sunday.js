function bloodySunday(str) {
    const start = new Date('0001-01-01')

    let diff = Math.round(((start.getTime()) - (str.getTime())) / 86400000)

    diff = Math.abs(diff)

    let dayTracker = 1
    for (let i = 0; i < diff; i++) {
        dayTracker++
        if (dayTracker == 7) {
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
    }
}