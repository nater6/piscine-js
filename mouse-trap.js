
export function createCircle() {
    document.addEventListener('mousedown', event => {
        const newCirc = document.createElement('div')
        newCirc.setAttribute('class', 'circle')
        newCirc.setAttribute('id', 'Tester')
        let x = event.clientX
        let y = event.clientY
        newCirc.setAttribute('style', 'left: ' + x.toString() + 'px; top: ' + y.toString() + 'px; background: white;')
        const currentDiv = document.getElementById("div1");
        document.body.insertBefore(newCirc, currentDiv);
    })
}

export function moveCircle() {
    // const lastCircle = document.querySelector('div:last-child')
    document.addEventListener('mousemove', event => {
        const lastCircle = document.querySelector('div:last-child')
        // console.log(lastCircle)
        lastCircle.style.left = `${event.clientX}px`
        lastCircle.style.top = `${event.clientY}px`
        document.body.append(lastCircle)
        let midBox = document.querySelector('div.box')
        let dims = midBox.getBoundingClientRect()
        // console.log('Properties')
        // console.log(dims.left)
        // console.log(lastCircle.style.left)
        // console.log(dims.right)
        // console.log(dims.top)
        // console.log(lastCircle.style.top)
        // console.log(dims.bottom)



        if (lastCircle.getAttribute('class') !== 'box') {
            if ((+lastCircle.style.left.replace('px', '') > (dims.x + 1)) && (+lastCircle.style.left.replace('px', '') < (dims.right - 51)) && (+lastCircle.style.top.replace('px', '') > (dims.top + 1)) && (+lastCircle.style.top.replace('px', '') < (dims.bottom - 51))) {
                lastCircle.style.background = 'var(--purple)'
            }
        }

        if (event.clientX < (dims.x + 1) && lastCircle.style.background === 'var(--purple)') {
            console.log(lastCircle.style.left)
            lastCircle.style.left = (dims.x + 1).toString() + 'px'

            if (event.clientY < (dims.top + 1)) {
                lastCircle.style.top = (dims.y + 1).toString() + 'px'
            }
            console.log(event.clientY)
            console.log(dims.bottom)

            if (event.clientY > (dims.bottom - 51)) {
                lastCircle.style.top = (dims.bottom - 51).toString() + 'px'
            }
        } else if (event.clientX > (dims.right - 51) && lastCircle.style.background === 'var(--purple)') {
            lastCircle.style.left = (dims.right - 51).toString() + 'px'

            if (event.clientY < (dims.top + 1)) {
                lastCircle.style.top = (dims.y + 1).toString() + 'px'
            }
            console.log(event.clientY)
            console.log(dims.bottom)

            if (event.clientY > (dims.bottom - 51)) {
                lastCircle.style.top = (dims.bottom - 51).toString() + 'px'
            }
        } else if ((event.clientY > (dims.bottom - 51)) && lastCircle.style.background === 'var(--purple)') {
            lastCircle.style.top = (dims.bottom - 51).toString() + 'px'
            
        } else if ((event.clientY < (dims.top + 1)) && lastCircle.style.background === 'var(--purple)') {
            lastCircle.style.top = (dims.top + 1).toString() + 'px'
            
        }

    })

    // const curr = document.querySelector('div:last-child')
    // console.log('latCircle: ' + curr)
    // let midBox = document.querySelector('div.box')
    // let dims = midBox.getBoundingClientRect()
    // console.log(midBox)
    // console.log(dims)
    // console.log(curr.style.left)
    // if (((curr.style.left.replace('px', '') > dims.x) && (curr.style.left.replace('px', '') > dims.right)) && ((curr.style.top.replace('px', '') > dims.top) && (curr.style.top.replace('px', '') < dims.bottom))) {
    //     console.log('-----------------------------------------------------------')
    // }
}

export function setBox() {
    const centerBox = document.createElement('div')
    centerBox.setAttribute('class', 'box')
    document.body.append(centerBox)
}