//Create a variable to use for a unique id and one to track the position
let value = 1
let pos = 0


export const build = (x) => {


    function buildBrick() {
        const newDiv = document.createElement("div");
        newDiv.setAttribute('id', 'brick-' + value.toString())
        value++

        if (pos === 1) newDiv.setAttribute('data-foundation', 'true')
        pos++
        if (pos === 3) pos = 0

        // add the newly created element and its content into the DOM
        const currentDiv = document.getElementById('brick-' + (value - 1).toString());
        document.body.insertBefore(newDiv, currentDiv);
    }
    const start = setInterval(buildBrick, 100)

    setTimeout(stop_interval, x * 100);
    function stop_interval() {
        clearInterval(start);
    }
}



export const destroy = () => {
    const lastBrick = document.querySelector('div:last-child')
    lastBrick.remove();
    
}

export const repair = (...htmlIds) => {

    let ids = Array.from(htmlIds)
    console.log(Array.isArray(ids))

    function repairer(ids) {
        const curr = document.getElementById(ids)
        console.log(curr)
        console.log(curr.hasAttribute('data-foundation'))

        if (curr.hasAttribute('data-foundation')) {
            curr.setAttribute('data-repaired', 'in progress')
        } else {
            curr.setAttribute('data-repaired', 'true')
        }
        console.log(curr.getAttribute('data-repaired'))
    }

    ids.forEach(element => {
        repairer(element)
    })
}