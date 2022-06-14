function matchCron(cron, date) {
    let cronArr = cron.split(' ')
    console.log(cronArr)

    for (let i = 0; i < cronArr.length; i++) {
        if (cronArr[i] !== '*') {
            switch (i) {
                case 0:
                    if (date.getMinutes() != cronArr[i]) return false
                    continue;
                case 1:  
                    if (date.getHours() != cronArr[i]) return false
                    continue;
                case 2:
                    if (date.getDate() != cronArr[i]) return false
                    continue;
                case 3:
                    if ((date.getMonth() + 1) != parseInt(cronArr[i])) return false
                    continue;
                case 4:
                    if (date.getDay() != cronArr[i]) return false
                    continue;
            }
        }
    }
    return true
}

