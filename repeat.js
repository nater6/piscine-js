const repeat = (str, num) {
    var number = 0
    var string = ''
    //make sure the variables have the correct values
    if (num === 'number'){
        number = num
        string = str
    } else {
        number = str
        string = str
    }
    
    //loop and return the value each time
    for (let i = 0; i < number; i++){
        return string
    }
}