const filterShortStateName = (arr) => arr.filter(sevenPlus)

function sevenPlus(str) {
    if (str.length < 7) return true
    return false
}

const filterStartVowel = (arr) => arr.filter(vowelChecker)

function vowelChecker(str) {
    if (str[0] == 'A' || str[0] == 'E' || str[0] == 'I' || str[0] == 'O' || str[0] == 'U' || str[0] == 'a' || str[0] == 'e' || str[0] == 'i' || str[0] == 'o' || str[0] == 'u') return true
    return false
}

const filter5Vowels = (arr) => arr.filter(vowelTimes)

function vowelTimes(str) {
    if (str == null) return false
    let vowels = 0
    for (let letter of str) {
        if (letter == 'A' || letter == 'a' || letter == 'E' || letter == 'e' || letter == 'I' || letter == 'i' || letter == 'O' || letter == 'o' || letter == 'U' || letter == 'u') vowels++
    }
    if (vowels >= 5) return true
    return false

}
const filter1DistinctVowel = (arr) => arr.filter(distinct)

function distinct(str) {
    if ((str.match(/a/gi)) != null && str.match(/(e|i|o|u)/gi) != null) return false
    if ((str.match(/e/gi)) != null && str.match(/(a|i|o|u)/gi) != null) return false
    if ((str.match(/i/gi)) != null && str.match(/(e|a|o|u)/gi) != null) return false
    if ((str.match(/o/gi)) != null && str.match(/(e|i|a|u)/gi) != null) return false
    if ((str.match(/u/gi)) != null && str.match(/(e|i|o|a)/gi) != null) return false
    return true
}

const multiFilter = (arr) => arr.filter(killer)

function killer(obj) {
    if ((obj.capital).length < 8) return false
    if (vowelChecker(obj.name)) return false
    if (!oneVowel(obj.tag)) return false
    if (obj.region == 'South') return false
    return true
}

function oneVowel(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) return true
    }
    return false
}

