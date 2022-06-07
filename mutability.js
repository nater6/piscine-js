const person = {
    name: 'Rick',
    age: 78,
    country: 'FR',
}
const clone1 = {
    name: 'Rick',
    age: 77,
    country: 'US',
}
const clone2 = {
    name: 'Rick',
    age: 77,
    country: 'US',
}
const samePerson = Object.assign(person)

