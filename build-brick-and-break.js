//Create a variable to use for a unique id and one to track the position
let value = 0
let pos = 0


export const build = (x) => {


    function buildBrick() {
        const newDiv = document.createElement("div");
        newDiv.setAttribute('id', 'brick-' + value.toString())
        value++

        if (pos === 1) newDiv.setAttribute('foundation', 'true')
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
    console.log(lastBrick)
    lastBrick.remove();
    
}

export const repair = (...htmlIds) => {

    let ids = Array.from(htmlIds)
    console.log(Array.isArray(ids))

    function repairer(ids) {
        const curr = document.getElementById(ids)
        console.log(curr)
        console.log(curr.hasAttribute('foundation'))

        if (curr.hasAttribute('foundation')) {
            curr.setAttribute('repaired', 'in progress')
        } else {
            curr.setAttribute('repaired', 'true')
        }
        console.log(curr.getAttribute('repaired'))
    }

    ids.forEach(element => {
        repairer(element)
    })
}