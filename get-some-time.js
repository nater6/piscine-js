function firstDayWeek(week, year) {
    let monday = new Date(year, 0, (1 + (week - 1) * 7))

    while (monday.getDay != 1) {
        monday.setDate(monday.getDate - 1)
    }

    return monday.getDate().toString() + '-' + (monday.getMonth() + 1).toString() + '-' + monday.getFullYear().toString()
}
