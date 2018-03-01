import notify from './Notification'

notify('This is a Notification')

class Car {

    constructor(name, model) {
        this.name = name
        this.model = model
    }
}

let car = new Car('Skyline', 'DatSun')

console.log(car)
