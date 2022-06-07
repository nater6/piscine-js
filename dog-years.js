function dogYears(planet, age) {
    //calculate the earth age of the dog
    const earthAge = (age / 31557600) * 7

    switch (planet) {
        case 'earth':
            return parseFloat(earthAge.toFixed(2))
            break;
        case 'mercury':
           const mercAge = earthAge / 0.2408467
            return parseFloat(mercAge.toFixed(2))
            break;
        case 'venus':
            const venusAge = earthAge / 0.61519726
            return parseFloat(venusAge.toFixed(2))
            break;
        case 'mars':
            const marsAge = earthAge / 1.8808158
            return parseFloat(marsAge.toFixed(2))
            break;
        case 'jupiter':
            const jupAge = earthAge / 11.862615
            return parseFloat(jupAge.toFixed(2))
            break;
        case 'saturn':
            const satAge = earthAge / 29.447498
            return parseFloat(satAge.toFixed(2))
            break;
        case 'uranus':
            const urAge = earthAge / 84.016846
            return parseFloat(urAge.toFixed(2))
            break;
        case 'neptune':
            const nepAge = earthAge / 164.79132
            return parseFloat(nepAge.toFixed(2))
            break;
    }
}