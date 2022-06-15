const longWords = (arr) => arr.every(fivePlus)

const fivePlus = (str) => str.length > 4

const oneLongWord = (arr) => arr.some(tenPlus)

const tenPlus = (str) => str.length > 9

const noLongWords = (arr) => arr.every(sevenLess)

const sevenLess = (str) => str.length < 7