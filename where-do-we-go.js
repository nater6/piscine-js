import { places } from "./where-do-we-go.data.js"

export function explore() {
    let orderedPlaces = places.sort((a, b) => {
        let aCoord = a.coordinates
        let bCoord = b.coordinates
        console.log(aCoord, bCoord)

        // let aNum = 0
        // let bNum = 0
        //convert a to a decimal coordinate
        let aDeg = +(aCoord.slice(0, aCoord.indexOf('°')))
        let bDeg = +(bCoord.slice(0, bCoord.indexOf('°')))
        //find the mins
        let aMin = +(aCoord.slice(aCoord.indexOf('°') + 1, aCoord.indexOf('\'')))
        let bMin = +(bCoord.slice(bCoord.indexOf('°') + 1, bCoord.indexOf('\'')))

        // console.log(aNum, bNum)
        // aNum += (aMin / 60)
        // bNum += (bMin / 60)
        // console.log(aNum, bNum)

        //find the secs
        let aSec = +(aCoord.slice(aCoord.indexOf('\'') + 1, aCoord.indexOf('\"')))
        let bSec = +(bCoord.slice(bCoord.indexOf('\'') + 1, bCoord.indexOf('\"')))
        // console.log(aSec, bSec);

        // aNum += (aSec / 3600)
        // bNum += (bSec / 3600)
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




        // console.log(aMin, bMin)

    })
    //Make the page go to the top when refreshed
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }

    let loc = 0

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
    });

    //Create the anchortag
    const newA = document.createElement('a')
    newA.className = 'location'
    newA.innerHTML = `${orderedPlaces[loc].name}\n${orderedPlaces[loc].coordinates}`
    newA.style.color = orderedPlaces[loc].color
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
                if (entry.isIntersecting) {

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

                    let displayLoc = sorted[Math.round(window.scrollY/ window.innerHTML)]

                }
            }
        )
    }, { threshold: [0.5] });

    const sections = document.querySelectorAll('section')
    sections.forEach(section => observer.observe(section))


}

// function sorter(arr) {
//     let i = 0
//     arr.forEach(elem => {

//         let aCoord = arr[i][coordinates]
//         let bCoord = arr[i+1][coordinates]
//         let aNum = 0
//         let bNum = 0
//         //convert a to a decimal coordinate
//         let firstA = aCoord.splice(0, aCoord.indexOf('°'))
//         let firstB = bCoord.splice(0, bCoord.indexOf('°'))
//         console.log(firstA, firstB)
//     })
// }

