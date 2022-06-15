function hasCity(country, cities) {
    function cityCheck(city) {
        if (cities.indexOf(city) !== -1) return city + ' is a city from ' + country
        return city +' is not a city from ' + country
    }
    return cityCheck
}