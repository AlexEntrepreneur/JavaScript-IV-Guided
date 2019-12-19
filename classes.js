//====== Class Syntax =======//
class Animal {
  constructor(attributes) {
    this.name = attributes.name;
    this.size = attributes.size;
    this.weight = attributes.weight;
    this.habitat = attributes.habitat;
    this.color = attributes.color;
    this.food = attributes.food;
    this.sound = attributes.sound;
  }

  eat() {
    return `${this.name}: I eat ${this.food}`;
  }

  speak() {
    return `${this.name}: ${this.sound}`;
  }
}


//====== Child Classes =======//
// Step 1. Create Class
// Step 2. Connect Child Class to Parent
class Bird extends Animal {
  constructor(attributes) {
    // Step 3. Inherit properties from Parent
    super(attributes);
  }
  // Step 4. Create Child Methods!
  fly() {
    if (this.canFly) {
      return `${this.name}: I believe I can fly!`;
    } else {
      return `${this.name}: I'm attending flying lessons!`;
    }
  }
}

const eagle = new Bird({
  name: "Golden Eagle",
  size: "Really Big",
  weight: "Lightweight",
  habitat: "The Mountains",
  color: "Brownish",
  food: "Rabbit",
  sound: "Eaaaak",
  wingspan: "2 Meters",
  canFly: true
});

const penguin = new Bird({
  name: "Emperor Penguin",
  size: "Smallish",
  weight: "Quite Heavy",
  habitat: "Antarctica",
  color: "Black, White, & Yellow",
  food: "Fish",
  sound: "Noot Noot",
  wingspan: "75 Centimeters",
  canFly: false
});

console.log(eagle);
console.log(penguin);
console.log(eagle.fly());
console.log(eagle.speak());
console.log(eagle.eat());
console.log(penguin.fly());
console.log(penguin.speak());
console.log(penguin.eat());



//====== Classes Refactor! =======//
class Vehicle {
  constructor(attr) {
    this.name = attr.name;
    this.model = attr.model;
    this.color = attr.color;
    this.year = attr.year;
    this.topSpeed = attr.topSpeed;
  }
  ad() {
    return `${this.name}: ${this.model}, ${this.color}`;
  }
}
class Car extends Vehicle {
  constructor(attr) {
    super(attr);
  }
}
class Tesla extends Car {
  constructor(attr) {
    super(attr);
    this.chargingSpeed = attr.chargingSpeed;
  }
}
class Truck extends Vehicle {
  constructor(attr) {
    super(attr);
    this.wheelsCount = attr.wheelsCount;
  }
}
const modelX = new Tesla({
  name: "Tesla",
  model: "Model X",
  topSpeed: "290 kpm",
  color: "Red",
  chargingSpeed: "3hrs",
  year: 2018
});
console.log(modelX);
console.log(modelX.ad());