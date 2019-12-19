//====== Prototypes Recap! =======//
// Animal => Bird => Eagle/Penguin
function Animal(attributes) {
  this.name = attributes.name;
  this.size = attributes.size;
  this.weight = attributes.weight;
  this.habitat = attributes.habitat;
  this.color = attributes.color;
  this.food = attributes.food;
  this.sound = attributes.sound;
}

Animal.prototype.eat = function() {
  return `${this.name}: I eat ${this.food}`;
};

Animal.prototype.speak = function() {
  return `${this.name}: ${this.sound}`;
};

function Bird(attributes) {
  Animal.call(this, attributes);
  this.wingspan = attributes.wingspan;
  this.canFly = attributes.canFly;
}

Bird.prototype = Object.create(Animal.prototype);

Bird.prototype.fly = function() {
  if (this.canFly) {
    return `${this.name}: I believe I can fly!`;
  } else {
    return `${this.name}: I'm attending flying lessons!`;
  }
};

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

//====== Prototypes Challenge! =======//
// 1- Create a Vehicle pseudoclass that has a method of info().
// 2- Create a Car pseudoclass that inherets Vehicle. Add a method of drive(). Add some relevant properties.
// 3- Create a Truck pseudoclass that inherets Vehicle. Add some relevant properties.
// 4- Initialise a tesla instance of the Car pseudoclass. Add some relevant property values.
// 5- Initialise a volvo instance of the Truck pseudoclass. Add some relevant property values.

// Hasan
function Vehicle(attributes) {
  this.color = attributes.color;
  this.design = attributes.design;
  this.engineSize = attributes.engineSize;
}

Vehicle.prototype.info = function() {
  return `Vehicle: ${this.color}, ${this.design}, ${this.engineSize}`;
};

Vehicle.prototype.drive = function() {};

function Car(attributes) {
  Vehicle.call(this, attributes);
  this.seatsCount = attributes.seatsCount;
}

Car.prototype = Object.create(Vehicle.prototype);

function Truck(attributes) {
  Vehicle.call(this, attributes);
  this.loadCapacity = attributes.loadCapacity;
}

Truck.prototype = Object.create(Vehicle.prototype);

function Tesla(attributes) {
  Car.call(this, attributes);
  this.chargingVoltage = attributes.chargingVoltage;
}

Tesla.prototype = Object.create(Car.prototype);

function Volvo(attributes) {
  Truck.call(this, attributes);
}

Volvo.prototype = Object.create(Truck.prototype);

const volvo = new Volvo({
  color: "darkblue",
  design: "suv",
  seatsCount: 3,
  engineSize: '1.8 L'
});

console.log(volvo);
