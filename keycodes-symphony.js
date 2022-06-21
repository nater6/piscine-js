export function compose() {
    document.addEventListener('keydown', event => {
        let lowercase = 'abcaadefghijklmnopqrstuvwxyz'
        if (lowercase.includes(event.key)) {
            const newDiv = document.createElement('div')
            newDiv.setAttribute('class', 'note')
            newDiv.setAttribute('style', 'background-color: '+ colors[lowercase.indexOf(event.key)] + ';')


            const newContent = document.createTextNode(event.key);
            newDiv.appendChild(newContent); 
            document.body.append(newDiv);

        } else if (event.key == 'Backspace') {
            const lastBrick = document.querySelector('div:last-child')
            lastBrick.remove();
        } else if (event.key == 'Escape') {
            let createdDivs = document.querySelectorAll('div')
            for (let i = 0; i < createdDivs.length; i++) {
                createdDivs[i].remove()
            }

        }
    })
}

export const colors = [
    'indianred',
    'lightcoral',
    'salmon',
    'darksalmon',
    'lightsalmon',
    'crimson',
    'red',
    'firebrick',
    'darkred',
    'pink',
    'lightpink',
    'hotpink',
    'deeppink',
    'mediumvioletred',
    'palevioletred',
    'orange',
    'coral',
    'tomato',
    'orangered',
    'darkorange',
    'yellow',
    'gold',
    'lightyellow',
    'lemonchiffon',
    'lightgoldenrodyellow',
    'papayawhip'
]