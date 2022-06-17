import { styles } from "./pimp-my-style.data.js";
let index = 0
export function pimp() {
    //get the value of the class currently
    var classVal = document.getElementsByClassName('button')[0]
    console.log(classVal.className)
    //check if the button has the has the unpimp
    if (index == styles.length) {
        classVal.classList.toggle('unpimp')
        const lastClass = Array.prototype.slice.call(classVal.classList)
        classVal.classList.remove(lastClass[classVal.classList.length - 2])
        index = 0
    } else if (classVal.classList.contains('unpimp')) {
        if (classVal.classList.length == 2) {
            classVal.classList.remove('unpimp')
        } else {
            const lastClass = Array.prototype.slice.call(classVal.classList)
            classVal.classList.remove(lastClass[classVal.classList.length - 2])
        }
    } else {
        console.log(styles[index])
        let addValue = styles[index]
        //add the next class if the styles array
        classVal.classList.add(addValue)
        index++
    }
}