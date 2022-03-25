//this includes the vehicle class as a module
const VehicleModule = require("./vehicle")

class Car extends VehicleModule {
    constructor (make, model, year, color, mileage)
    super (make, model, year, color, mileage)
    this.maximumPassengers = 5
    this.passenger = 0
    this.numberOfWheels = 4
    this.maximumSpeed = 160
    this.fuel = 10
    this.scheduleService = 30000

}

loadPassenger(num) {
    if (this.passenger >= this.maximumPassenger) {
        console.log (" WARNING: You have reached your maximum load capacity for passengers!")
    } else {
        console.log ("Ensure that all passengers are buckled and enjoy the ride.")
    }
}

start() {
    if(this.fuel < 0) {
        console.log ("Engine started")
    } else 
        console.log ("WARNING: Low fuel!")
}

scheduleService(mileage) {
    if (this.mileage > 30000) {
        this.scheduleService = true
        return this.schedule.Service
    }
}
//this shows how to call from this module...
let newCar1 = new Car("Mecury", "Sedan", "1965", "red", 120000);


