//In JavaScript, getters and setters are special methods used to define how to retrieve (get) and update (set) the value of an object's property. They allow better control over how properties are accessed and modified.

const person = {
  firstName: "Mehedi",
  lastName: "Hasan",
  
  // Getter method
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  
  // Setter method
  set fullName(name) {
    const parts = name.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
};

console.log(person.fullName); // Output: Mehedi Hasan

person.fullName = "Irfan Ahmed";
console.log(person.firstName); // Output: Irfan
console.log(person.lastName);  // Output: Ahmed

const person = {
  firstName: "Mehedi",
  lastName: "Hasan",
  
  // Getter method
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  
  // Setter method
  set fullName(name) {
    const parts = name.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
};

console.log(person.fullName); // Output: Mehedi Hasan

person.fullName = "Irfan Ahmed";
console.log(person.firstName); // Output: Irfan
console.log(person.lastName);  // Output: Ahmed


//getter setter using class
class User {
  constructor(name, age) {
    this._name = name; // Using _name to avoid direct access
    this._age = age;
  }

  // Getter method
  get name() {
    return this._name;
  }

  // Setter method
  set name(newName) {
    if (newName.length > 0) {
      this._name = newName;
    } else {
      console.log("Name cannot be empty.");
    }
  }

  // Getter for age
  get age() {
    return this._age;
  }

  // Setter for age with validation
  set age(newAge) {
    if (newAge > 0) {
      this._age = newAge;
    } else {
      console.log("Age must be a positive number.");
    }
  }
}

const user1 = new User("Hasan", 22);
console.log(user1.name); // Output: Hasan

user1.name = "Irfan";
console.log(user1.name); // Output: Irfan

user1.age = -5; // Output: Age must be a positive number.
console.log(user1.age); // Output: 22

