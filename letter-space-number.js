const letterSpaceNumber = (str) => {
    const regex = /[a-zA-Z]\s\d(?![0-9a-zA-Z])/g

    if (str.match(new RegExp(regex)) == null) {
        return []
    }
    return str.match(new RegExp(regex))
}