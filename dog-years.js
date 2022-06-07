function dogYears(planet, age) {
    //calculate the earth age of the dog
    const earthAge = (age / 31557600) * 7

    switch (planet) {
        case 'earth':
            return parseInt(earthAge.toFixed(2))
            break;
        case 'mercury':
            mercAge = earthAge / 0.2408467
            return parseInt(mercAge.toFixed(2))
            break;
        case 'venus':
            venusAge = earthAge / 0.61519726
            return parseInt(venusAge.toFixed(2))
            break;
        case 'mars':
            marsAge = earthAge / 1.8808158
            return parseInt(marsAge.toFixed(2))
            break;
        case 'jupiter':
            jupAge = earthAge / 11.862615
            return parseInt(jupAge.toFixed(2))
            break;
        case 'saturn':
            satAge = earthAge / 29.447498
            return parseInt(satAge.toFixed(2))
            break;
        case 'uranus':
            urAge = earthAge / 84.016846
            return parseInt(urAge.toFixed(2))
            break;
        case 'neptune':
            nepAge = earthAge / 164.79132
            return parseInt(nepAge.toFixed(2))
            break;
    }
}