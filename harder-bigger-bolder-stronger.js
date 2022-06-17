let idVal = 1
let fontSizeNum = 11


export function generateLetters() {

    function newLetterdiv() {
        //create a new div and give it a value
        const newDiv = document.createElement("div");
        newDiv.setAttribute('id', idVal.toString())

        //Choose a random letter from A-Z
        const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        const newContent = document.createTextNode(alpha[Math.floor(Math.random() * alpha.length)]);
        // const newContent = document.createTextNode("Hi there and greetings!");
        // add the text node to the newly created div
        newDiv.append(newContent);
        newDiv.style.fontSize = fontSizeNum.toString() + 'px'
        fontSizeNum++

        if (idVal <= 40) {
            newDiv.style.fontWeight = '300';
        } else if (idVal <= 80 && idVal > 40) {
            newDiv.style.fontWeight = '400';
        } else if (idVal > 80) {
            newDiv.style.fontWeight = '600';
        }
        idVal++

        // add the newly created element and its content into the DOM
        const currentDiv = document.getElementById((idVal - 1).toString());
        document.body.insertBefore(newDiv, currentDiv);
    }



    while (idVal <= 120) {
        newLetterdiv()
    }



}