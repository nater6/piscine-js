const vowels = /(a|e|i|o|u)/gi

const vowelDots = (str) => {
    let res = str.replace(vowels, '$1.' )
    return res
}
