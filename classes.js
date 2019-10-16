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
    return `${this.name}: ${this.sound}!`;
  }
}

//====== Child Classes =======//
// Step 1. Create Class
// Step 2. Connect Child Class to Parent
class Bird extends Animal {
  constructor(attributes) {
    // Step 3. Inherit properties from Parent
    super(attributes);
    this.wingspan = attributes.wingspan;
    this.canFly = attributes.canFly;
  }
  // Step 4. Create Child Methods!
  fly() {
    if (this.canFly) {
      return `${this.name}: I believe I can fly!`
    }
    else {
      return `${this.name}: I'm going flying lessons!`;
    }
  }
}


const eagle = new Bird({
  name: "Golden Eagle",
  size: "Really Big",
  weight: "Lightweight",
  habitat: "The Mountains",
  color: "Brownish",
  food: 'Rabbit',
  sound: 'Eaaak',
  wingspan: "2 Meters",
  canFly: true,
});

const penguin = new Bird({
  name: 'Emperor Penguin',
  size: 'Smallish',
  weight: 'Quite Heavy',
  habitat: 'Antarctica',
  color: 'Black, White, & Yellow',
  food: 'Fish',
  sound: 'Noot Noot',
  wingspan: '75 Centimeters',
  canFly: false,
});

console.log(eagle);
console.log(penguin);
console.log(eagle.fly());
console.log(eagle.eat());
console.log(eagle.speak());
console.log(penguin.fly());
console.log(penguin.eat());
console.log(penguin.speak());



//====== Practical Example =======//
class User {
  constructor(name, email, age) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.admin = false;
  }
  increaseAge() {
    this.age += 1;
    console.log(`${this.name} is now ${this.age}!`);
  }
  isAdmin() {
    return `${this.name} is admin: ${this.admin}`;
  }
}

class Admin extends User {
  constructor(name, email, age) {
    super(name, email, age);
    this.admin = true;
  }
}

const jeff = new User('Jeff', 'jeff@email.com', 24);
const sara = new User('Sara', 'sara@email.com', 32);
const amy = new Admin('Amy', 'amy@email.com', 28);

jeff.increaseAge();

console.log(jeff);
console.log(sara);
console.log(amy);
console.log(jeff.isAdmin());
console.log(sara.isAdmin());
console.log(amy.isAdmin());
