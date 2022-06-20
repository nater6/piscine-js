import { gossips } from "./gossip-grid.data.js";

export function grid() {
    //Create the gossip adding form card
   

    //Create the form
    let form = document.createElement('form')
    form.className = 'gossip'
    document.body.append(form)
    //TextArea
    const textArea = document.createElement('textarea')
    form.append(textArea)
    document.body.append(form)
    //Button
    const button = document.createElement('button')
    button.setAttribute('type', 'submit')
    button.textContent = "Share gossip!"
    form.append(button)
    //Append the form and adder box to the body
    
    

    button.addEventListener('click', e => {

        //add the next div
        let card = document.createElement('div')
        card.setAttribute('class', 'gossip ')
        let newContent = document.createTextNode(document.querySelector('textarea').value)
        card.appendChild(newContent)
        let submitBox = document.querySelectorAll('.gossip')[1]
        
        document.body.insertBefore(card, submitBox)
        e.preventDefault()
        document.querySelector('textarea').value = ''
    })


    //Loop through the gossips array create a div with the information added inside
    for (let val = 0; val < gossips.length; val++) {
        //Create the div
        let card = document.createElement('div')
        card.setAttribute('class', 'gossip ')
        const cardContent = document.createTextNode(gossips[val])
        card.appendChild(cardContent)
        document.body.append(card)
    }

    let ranges = document.createElement('div')
    ranges.setAttribute('class', 'ranges')
    const rangeOne = document.createElement('input')
    rangeOne.min = '200'
    rangeOne.max = '800'
    rangeOne.setAttribute('type', 'range')
    rangeOne.setAttribute('id', 'width')
    rangeOne.setAttribute('class', 'range')
    //Create a label
    const widLable = document.createElement('label')
    widLable.setAttribute('for', 'width')
    widLable.innerHTML = 'Width'
    widLable.style.color = 'white'
    ranges.append(widLable)
    
    ranges.append(rangeOne)
    const rangeTwo = document.createElement('input')
    rangeTwo.setAttribute('type', 'range')
    rangeTwo.setAttribute('id', 'fontSize')
    rangeTwo.setAttribute('class', 'range')
    rangeTwo.min = '20'
    rangeTwo.max = '40'
    rangeTwo.value = '50%'
    //Create a label
    const fsLable = document.createElement('label')
    fsLable.setAttribute('for', 'fontSize')
    fsLable.innerHTML = 'Font Size'
    fsLable.style.color = 'white'
    ranges.append(fsLable)
    
    ranges.append(rangeTwo)
    const rangeThree = document.createElement('input')
    rangeThree.setAttribute('type', 'range')
    rangeThree.setAttribute('id', 'background')
    rangeThree.setAttribute('class', 'range')
    rangeThree.min = '20'
    rangeThree.max = '75'
    rangeThree.value = '50'

    //Create a Label
    const backGLable = document.createElement('label')
    backGLable.setAttribute('for', 'background')
    backGLable.innerHTML = 'Background'
    backGLable.style.color = 'white'
    ranges.append(backGLable)
    
    ranges.append(rangeThree)
    document.body.append(ranges)
    
    rangeOne.addEventListener('input', e => {
        const allBoxes = document.querySelectorAll('.gossip')
        allBoxes.forEach(div => {
            div.style.width = rangeOne.value + 'px'
        })
    }) 
    rangeTwo.addEventListener('input', e => {
        const allBoxes = document.querySelectorAll('.gossip')
        allBoxes.forEach(div => {
            div.style.fontSize = rangeTwo.value + 'px'
        })
    }) 
    rangeThree.addEventListener('input', e => {
        const allBoxes = document.querySelectorAll('.gossip')
        allBoxes.forEach(div => {
            div.style.background = `hsl(280, 50%, ${rangeThree.value}%)` 
        })
    }) 
    
    


}