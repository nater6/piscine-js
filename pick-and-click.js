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
    let hueValue = document.createTextNode(`hue 0`)
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
    var axisX = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    axisX.setAttributeNS('null', 'id', 'axisX')
    var axisY = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    axisY.setAttributeNS('null', 'id', 'axisY')
    document.addEventListener('mousemove', event => {

        let windowWidth = document.documentElement.clientWidth;
        let x = event.clientX;
        let windowHeight = document.documentElement.clientHeight;
        let y = event.clientY;
        console.log(x, y)

        let hueVal = Math.round((x / windowWidth) * 360)
        let lumVal = Math.round((y / windowHeight) * 100)
        // hueValue = document.createTextNode(`hue ${hueVal}`)
        hueDiv.textContent = `hue \n ${hueVal}`
        lumDiv.textContent = `luminosity \n ${lumVal}`
        hslDiv.textContent = `hsl(${hueVal}, 50%, ${lumVal}%)`
        document.body.style.background = `hsl(${hueVal}, 50%, ${lumVal}%)`
       
        axisX.setAttributeNS('null', 'x1', x.toString())
        axisX.setAttributeNS('null', 'x2', x.toString())
        axisY.setAttributeNS('null', 'y1', y.toString())
        axisY.setAttributeNS('null', 'y2', y.toString())
        document.body.append(axisX)
        document.body.append(axisY)
    })

    document.addEventListener('click', event => {
        event.clipboardData.setData('text/plain', `hsl( ${hueVal.toString()}, 50%, ${lumVal.toString()}%)`)
    })




}