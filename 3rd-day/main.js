// // The class
// class Animal {
//     constructor(name, numLegs) {
//         // we using this. cuz  class is just a fancy object
//         //this refers to the new object/instance to be created
//         this.name = name
//         this.numLegs = numLegs
//         this.children = []
//     }
//     giveBirth(name) {
//         this.children.push(name)
//     }
// }

// // instantiate an actual object
// const cat = new Animal("Puss", 4)
// cat.giveBirth("Dolly")
// console.log(cat.name + " has " + cat.numLegs + " legs") //prints "Puss has 4 legs"
// console.log(cat.children) // should print an array with 1 item: ["Dolly"]﻿

// //more or less what happend 
// // this = {}
// // this.name = "Puss"
// // this.numLegs = 4
// // const cat = this


// //spot check
// const dog = new Animal('oscar', 4)
// console.log(dog.name);



// class Human {
//     constructor(name, age,isFriendly) {
//         this.name = name
//         this.age = age
//         this.isFriendly = isFriendly
//     }
// }

// const h1 = new Human('roi',28,true)

// console.log(`my name is ${h1.name}, im ${h1.age} and im ${h1.isFriendly ? 'very friendly' : 'not friendly'}`);



// class Vehicle {


//     constructor(x, y, speed, fuel) {
//         this.x = x;
//         this.y = y;
//         this._speed = speed;
//         this._fuel = fuel
//     }

//     set speed(speed) {
//         if (speed < 0) {
//             return console.log("Speed must be positive")
//         }
//         this._speed = speed
//     }

//     get speed() {
//         return this._speed
//     }

//     set fuel(amount) {
//         if (amount < 0 || amount > 150) {
//             console.log(`must be more then 0 or less then 150`);
//         } else {
//             this._fuel = amount
//         }
//     }
//     get fuel() {
//         return this._fuel
//     }

//     static getInfo() {
//         console.log(`We've sold ${Vehicle.carsSold} vehicles`);
//     }
//     static calculateMoney() {
//         console.log(`Made ${Vehicle.carsSold * 30000} dollars`);
//     }
// }
// Vehicle.carsSold = 0;
// const ferary = new Vehicle(100000, 4, 280)
// const bmw = new Vehicle(250000, 4, 300)

// Vehicle.getInfo()
// Vehicle.calculateMoney()

// const c = new Vehicle()
// c.x = 3
// c.y = 1
// c.speed = -2 // at this point, we'll get the console log saying speed needs to be positive
// c._fuel = 300
// console.log(c.fuel)
class Zoo {
    constructor() {
        this.animals = []
    }

    addAnimal(animal) {
        this.animals.push(animal)
        console.log("Added " + animal.name + " to the zoo")
    }

    showAnimals() {
        this.animals.forEach(a => console.log(a.name))

    }
}

class Animal {
    constructor(name, numLegs) {
        this.name = name
        this.numLegs = numLegs
    }
}

const cat = new Animal("Puss", 4)
const zoo = new Zoo()

zoo.addAnimal(cat) // prints "Added Puss to the zoo"
zoo.showAnimals() // prints "Puss"