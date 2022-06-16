export const getArchitects = () => {
    let nonArchs = document.getElementsByTagName('span');
     let archs = document.getElementsByTagName('a')
    let arrArchs = Array.prototype.slice.call(archs)
    let arrNonArchs = Array.prototype.slice.call(nonArchs)
    return [arrArchs, arrNonArchs]
}
 

export const getClassical = () => {
    let classical = document.querySelectorAll('.classical')
    let nonClassical = document.querySelectorAll('a:not(.classical)')
    let arrClass = Array.prototype.slice.call(classical)
    let arrNonClass = Array.prototype.slice.call(nonClassical)
    return [arrClass, arrNonClass]
 }
export const getActive = () => { 
    let active = document.querySelectorAll('.classical.active')
    let nonActive = document.querySelectorAll('.classical:not(.active)')
    let arrActive = Array.prototype.slice.call(active)
    let arrNonActive = Array.prototype.slice.call(nonActive)
    return [arrActive, arrNonActive]
 }
export const getBonannoPisano = () => {
    let bon = document.getElementById('BonannoPisano')
    let nonBon = document.querySelectorAll('.class.active:not(#BonannoPisano)')
    let arrNonBon = Array.prototype.slice.call(nonBon)
    return [bon, arrNonBon]
  }

