const RNA = (str) => {
    let res = ''

    for (let i = 0; i < str.length; i++) {
        switch (str[i]) {
            case 'G':
                res += 'C';
                break;
            case 'C':
                res += 'G';
                break;
            case 'T':
                res += 'A';
                break;
            case 'A':
                res += 'U';
                break;

        }
    }
    return res
}

const DNA = (str) => {
    let res = ''

    for (let i = 0; i < str.length; i++) {
        switch (str[i]) {
            case 'C':
                res += 'G';
                break;
            case 'G':
                res += 'C';
                break;
            case 'A':
                res += 'T';
                break;
            case 'U':
                res += 'A';
                break;

        }
    }
    return res
}