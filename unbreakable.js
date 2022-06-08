const split = (str, val) => {
    //loop through str if str[i] = val push to new array, if not add to res string
    let res = "";
    let resArr = [];

    if (val == null) {
        val = ' '
    }

    for (let i = 0; i < str.length; i++) {

        if ((str[i] != val) && (i != str.length - 1)) {
            res += str[i];

        } else if ((str[i] != val) && (i == str.length - 1)) {
            res += str[i];
            resArr.push(res);

        } else if ((str[i] == val) && (res != '')) {
            resArr.push(res);
            res = "";
        }
    }
    return resArr
};

const join = (arr, val) => {
    if (val == null) {
        val = ','
    }
    let res = ''

    for (let i = 0; i < arr.length; i++) {
        if (i == arr.length - 1) {
            res += arr[i]
        } else {
            res += arr[i] + val + ' '
        }
    }
    return res
}