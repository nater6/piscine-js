export function pick() {

    //create the div containing the hsl value
    const hslDiv = document.createElement('div')

    hslDiv.setAttribute('class', 'text hsl')

    const hslValue = document.createTextNode('hsl(0, 50%, 0%)')
    hslDiv.appendChild(hslValue)
    const currentDiv = document.getElementById("div1");
    document.body.insertBefore(hslDiv, currentDiv);

    //Create the hue div
    const hueDiv = document.createElement('div')
    hueDiv.setAttribute('class', 'text hue')
    hueDiv.setAttribute('style', 'position: absolute;')
    let hueValue = document.createTextNode(`hue 0`);
    hueDiv.appendChild(hueValue)
    const prevDiv = document.getElementById("div1");
    document.body.insertBefore(hueDiv, prevDiv);

    //Create the luminosity div
    const lumDiv = document.createElement('div')

    lumDiv.setAttribute('class', 'text luminosity')
    lumDiv.setAttribute('style', 'position: absolute;')
    const lumValue = document.createTextNode('luminosity  0')
    lumDiv.appendChild(lumValue)
    const prev1Div = document.getElementById("div1");
    document.body.insertBefore(lumDiv, prev1Div);


    let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    svg.setAttributeNS(null, 'height', window.innerHeight)
    svg.setAttributeNS(null, 'width', window.innerWidth)
    

    var axisX = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    axisX.setAttributeNS(null, 'id', 'axisY')
    axisX.setAttributeNS(null, 'x1', 0)
    axisX.setAttributeNS(null, 'x2', 0)
    axisX.setAttributeNS(null, 'y1', 0)
    axisX.setAttributeNS(null, 'y2', 0)
    var axisY = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    axisY.setAttributeNS(null, 'id', 'axisX')
    axisY.setAttributeNS(null, 'y1', 0)
    axisY.setAttributeNS(null, 'y2', 0)
    axisY.setAttributeNS(null, 'x1',0)
    axisY.setAttributeNS(null, 'x2', 0)
    axisX.style.stroke = 'white'
    axisX.style.strokeWidth = '1'
    axisY.style.stroke = 'white'
    axisY.style.strokeWidth = '1'
    svg.append(axisX, axisY)

    document.body.append(svg)



    document.addEventListener('mousemove', event => {

        let windowWidth = document.documentElement.clientWidth;
        let x = event.clientX;
        let windowHeight = document.documentElement.clientHeight;
        let y = event.clientY;

        let hueVal = (x / windowWidth) * 360
        let lumVal = (y / windowHeight) * 100
        // hueValue = document.createTextNode(`hue ${hueVal}`)
        hueDiv.textContent = `hue \n ${Math.round(hueVal)}`
        lumDiv.textContent = `luminosity \n ${Math.round(lumVal)}`
        hslDiv.textContent = `hsl(${Math.round(hueVal)}, 50%, ${Math.round(lumVal)}%)`
        document.body.style.background = `hsl(${Math.round(hueVal)}, 50%, ${Math.round(lumVal)}%)`
       
        let lineX = document.getElementById('axisY')
        lineX.setAttributeNS(null, 'x1', 0)
        lineX.setAttributeNS(null, 'x2', window.innerWidth)
        lineX.setAttributeNS(null, 'y1', event.clientY)
        lineX.setAttributeNS(null, 'y2', event.clientY)
        
        let lineY = document.getElementById('axisX')
        lineY.setAttributeNS(null, 'y1', 0)
        lineY.setAttributeNS(null, 'y2', window.innerHeight)
        lineY.setAttributeNS(null, 'x1', event.clientX)
        lineY.setAttributeNS(null, 'x2', event.clientX)
       
        lineX.style.stroke = 'white'
        lineX.style.strokeWidth = '1'
        lineY.style.stroke = 'white'
        lineY.style.strokeWidth = '1'

        // svg.append(lineY)
        // svg.append(lineX)
        
    })

    document.addEventListener('click', event => {
        let copyValue = document.querySelector('.hsl').innerHTML
        navigator.clipboard.writeText(copyValue)
    
    })




}