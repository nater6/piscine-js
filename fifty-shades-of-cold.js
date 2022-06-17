import { colors } from "./fifty-shades-of-cold.data.js"

export function generateClasses() {

    //Create a stlye tag
    const newStyle = document.createElement('style');

    let styling = '';

    for (let i = 0; i < colors.length; i++) {
        styling += '.' + colors[i] + ` {
            background: ` + colors[i] + `;
        }

        `
    }

    // newStyle.textContent = styling;

    const stylingStr = document.createTextNode(styling)
    newStyle.appendChild(stylingStr)

    document.head.appendChild(newStyle)
}

export function generateColdShades() {
    const colorCheck = ['aqua', 'blue', 'green', 'cyan', 'navy', 'purple']

    colors.map(elem => {
        for (let i = 0; i < colorCheck.length; i++) {
            if (elem.includes(colorCheck[i])) {
                const newDiv = document.createElement('div')

                const insideText = document.createTextNode(elem)

                newDiv.appendChild(insideText)

                newDiv.setAttribute('class', elem)

                const currentDiv = document.getElementById("div1");
                document.body.insertBefore(newDiv, currentDiv);
            }
        }
    })
}


export function choseShade(shade) {  
    let allDivs = document.querySelectorAll('div')

    for (let i = 0; i < allDivs.length; i++) {
      allDivs[i].className = shade
    }
}