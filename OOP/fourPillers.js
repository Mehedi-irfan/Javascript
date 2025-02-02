//Abstraction
//Abstraction means hiding the complex implementation details and exposing only the necessary parts to the user. It helps in reducing complexity and increasing code reusability.

//Example :-
class Car {
    constructor(brand, model) {
      this.brand = brand;
      this.model = model;
    }
  
    // Abstract method: The user doesn't need to know how the engine works
    startEngine() {
      console.log(`The ${this.brand} ${this.model}'s engine has started.`);
    }
}

const myCar = new Car("Toyota", "Corolla");
myCar.startEngine(); // Output: The Toyota Corolla's engine has started.
  

//Encapsulation
//Encapsulation is the practice of keeping the data (properties) private inside a class and allowing controlled access via methods (getters & setters).

//Example :-
class BankAccount {
    #balance; // Private property
  
    constructor(owner, balance) {
      this.owner = owner;
      this.#balance = balance;
    }
  
    // Getter method to read balance
    getBalance() {
      return `Account balance: $${this.#balance}`;
    }
  
    // Setter method to deposit money
    deposit(amount) {
      if (amount > 0) {
        this.#balance += amount;
        console.log(`Deposited: $${amount}. New balance: $${this.#balance}`);
      } else {
        console.log("Deposit amount must be positive.");
      }
    }
}
  
const myAccount = new BankAccount("Hasan", 500);
console.log(myAccount.getBalance()); // Output: Account balance: $500
myAccount.deposit(200); // Output: Deposited: $200. New balance: $700

//Polymorphism
//Polymorphism allows one function or method to have different behaviors based on the object calling it.

//Example :- 
class Animal {
    makeSound() {
      console.log("Some generic animal sound");
    }
  }
  
  class Dog extends Animal {
    makeSound() {
      console.log("Woof! Woof!");
    }
  }
  
  class Cat extends Animal {
    makeSound() {
      console.log("Meow! Meow!");
    }
  }
  
  const animal1 = new Dog();
  const animal2 = new Cat();
  
  animal1.makeSound(); // Output: Woof! Woof!
  animal2.makeSound(); // Output: Meow! Meow!

//Inheritance
//Inheritance allows a child class to acquire properties and methods from a parent class. This promotes code reusability. 

//Example :- 
class Vehicle {
    constructor(type, brand) {
      this.type = type;
      this.brand = brand;
    }
  
    showDetails() {
      console.log(`This is a ${this.brand} ${this.type}.`);
    }
  }
  
  class Car extends Vehicle {
    constructor(brand, model) {
      super("Car", brand);
      this.model = model;
    }
  
    showDetails() {
      console.log(`This is a ${this.brand} ${this.model} Car.`);
    }
  }
  
const myCar2 = new Car("Tesla", "Model S");
myCar2.showDetails(); // Output: This is a Tesla Model S Car.
  