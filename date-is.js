const isValid = (date) => (date instanceof Date && !isNaN(date)) || ((typeof date === 'number') && !isNaN(date))

const isAfter = (date1, date2) => {
    if (date1 instanceof Date && date2 instanceof Date) {
        return (date1.getTime() > date2.getTime())
    } else {
        return date1 > date2
    }

}

const isBefore = (date1, date2) => {
    if (date1 instanceof Date && date2 instanceof Date) {
        return (date1.getTime() < date2.getTime())
    } else {
        return date1 < date2
    }
} 

const isFuture = (date) => isValid(date) && isAfter(date, Date.now())

const isPast = (date) => isValid(date) && isBefore(date, Date.now())