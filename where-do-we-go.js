import { places } from "./where-do-we-go.data.js"

export function explore() {
    let orderedPlaces = places.sort((a, b) => {
        let aCoord = a.coordinates
        let bCoord = b.coordinates

        //convert a to a decimal coordinate
        let aDeg = +(aCoord.slice(0, aCoord.indexOf('°')))
        let bDeg = +(bCoord.slice(0, bCoord.indexOf('°')))
        //find the mins
        let aMin = +(aCoord.slice(aCoord.indexOf('°') + 1, aCoord.indexOf('\'')))
        let bMin = +(bCoord.slice(bCoord.indexOf('°') + 1, bCoord.indexOf('\'')))

        // console.log(aNum, bNum)

        //find the secs
        let aSec = +(aCoord.slice(aCoord.indexOf('\'') + 1, aCoord.indexOf('\"')))
        let bSec = +(bCoord.slice(bCoord.indexOf('\'') + 1, bCoord.indexOf('\"')))

        // console.log(aNum, bNum)

        let aDir = aCoord.split(" ")[0].slice(-1)
        let bDir = bCoord.split(" ")[0].slice(-1)

        if (aDir === 'S') {
            aDeg *= -1
            aMin *= -1
            aSec *= -1
        }
        if (bDir === 'S') {
            bDeg *= -1
            bMin *= -1
            bSec *= -1
        }
        if (aDir != bDir) {
            return aDir.charCodeAt(0) - bDir.charCodeAt(0)
        }
        if (aDeg != bDeg) {
            return bDeg - aDeg
        }
        if (aMin != bMin) {
            return bMin - aMin
        }
        return bSec - aSec

    })
    //Make the page go to the top when refreshed
    // window.onbeforeunload = function () {
    //     window.scrollTo(0, 0);
    // }

    //create the compass div
    const compass = document.createElement('div')
    compass.className = 'direction'
    compass.innerHTML = 'N'
    document.body.append(compass)

    let oldValue = 0
    let newValue = 0

    //Track when to change the text in the anchor
    let scrolled = false
    window.addEventListener('scroll', (e) => {
        newValue = window.pageYOffset;
        scrolled = true
        if (oldValue < newValue) {
            compass.innerHTML = 'S'
        } else {
            compass.innerHTML = 'N'
        }
        oldValue = newValue;

        // let val = (Math.round(window.scrollY / window.innerHeight))
        // console.log(window.scrollY, window.innerHeight, window.scrollY/window.innerHeight)
        // console.log(typeof val, val)
    });

    //Create the anchortag
    const newA = document.createElement('a')
    newA.className = 'location'
    newA.innerHTML = `${orderedPlaces[0].name}\n${orderedPlaces[0].coordinates}`
    newA.style.color = orderedPlaces[0].color
    newA.href = `https://www.google.com/maps/place/${orderedPlaces[0].coordinates}`
    newA.target = '_blank'
    document.body.append(newA)


    //create the section tags
    for (let i = 0; i < orderedPlaces.length; i++) {

        const newSect = document.createElement('section')
        newSect.id = i.toString()
        let imageLoc = orderedPlaces[i].name.toLowerCase().split(',')[0].split(' ').join('-')
        newSect.style.background = `URL('./where-do-we-go_images/${imageLoc}.jpg')`
        document.body.append(newSect)
    }

    let observer = new IntersectionObserver(valChanger => {
        valChanger.forEach(
            entry => {
                if (entry.isIntersecting === true) {
                    // console.log('----INTERSECTING!!!!!!!!111111!!!!---------------------------------------------------------------')

                    // const compassElem = document.querySelector('div')
                    // const anchorTag = document.querySelector('a')
                    // if (compassElem.innerHTML === 'N') {
                    //     if (scrolled) loc--
                    //     anchorTag.innerHTML = `${orderedPlaces[loc].name}\n${orderedPlaces[loc].coordinates}`
                    //     newA.style.color = orderedPlaces[loc].color
                    //     newA.href = `https://www.google.com/maps/place/${orderedPlaces[loc].coordinates}`
                    //     newA.target = '_blank'
                    // } else {

                    //     loc++
                    //     anchorTag.innerHTML = `${orderedPlaces[loc].name}\n${orderedPlaces[loc].coordinates}`
                    //     newA.style.color = orderedPlaces[loc].color
                    //     newA.href = `https://www.google.com/maps/place/${orderedPlaces[loc].coordinates}`
                    //     newA.target = '_blank'
                    // }

                    // let displayLoc = orderedPlaces[Math.round(window.scrollY / (window.innerHTML/2))]
                    // console.log(window.scrollY, window.innerHeight);
                    // console.log(displayLoc)
                    // newA.innerHTML = `${displayLoc.name}\n${displayLoc.coordinates}`
                    // newA.style.color = displayLoc.color
                    // newA.href = `https://www.google.com/maps/place/${displayLoc.coordinates}`
                    // anchorTag.innerHTML = `${orderedPlaces[loc].name}\n${orderedPlaces[loc].coordinates}`
                    
                    let val = (Math.round(window.scrollY / window.innerHeight))

                    newA.innerHTML = `${orderedPlaces[val].name}\n${orderedPlaces[val].coordinates}`
                    newA.style.color = orderedPlaces[val].color
                    newA.href = `https://www.google.com/maps/place/${orderedPlaces[val].coordinates}`


                }
            }
        )
    }, { threshold: [0.5] });

    const sections = document.querySelectorAll('section')
    sections.forEach(section => observer.observe(section))


}
