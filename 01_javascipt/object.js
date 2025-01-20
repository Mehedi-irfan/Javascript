//if we use object as a litteral then it's not a singleton
const tinderUser = new Object()// this is singleton object
const tinderUsers = {} //it's not a singleton object


//An object is a standalone entity, with properties (key-value pairs) and methods (functions associated with the object).
let car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2023,
    start: function () {
      console.log("The car is starting...");
    },
  };
  
  console.log(car.brand); // Accessing a property: "Toyota"
  car.start(); // Calling a method: "The car is starting..."
  

  //object litteral
  let person = {
    name: "John",
    age: 30,
    greet: function () {
      console.log("Hello, " + this.name);
    },
  };
  
  person.greet(); // "Hello, John"
  
//using new Object() we can make a object
let obj = new Object();
obj.name = "Alice";
obj.age = 25;

console.log(obj.name); // "Alice"

//Iterating Over an Object
for (let key in car) {
    console.log(`${key}: ${car[key]}`);
  }
  // Output:
  // brand: Toyota
  // model: Camry
  
//to finding key from object we can use object.key()
console.log(Object.keys(car)); // ["brand", "model"]

//to finding value from object we can use object.value()
console.log(Object.values(car)); // ["Toyota", "Camry"]

//to get object value and key with an array we can use entries
console.log(Object.entries(car));
// [["brand", "Toyota"], ["model", "Camry"]]

// Object Methods
// Some built-in methods to manipulate objects:

// a) Object.assign()
// Copies properties from one object to another.
let obj1 = { a: 1 };
let obj2 = { b: 2 };
let combined = Object.assign({}, obj1, obj2);

console.log(combined); // { a: 1, b: 2 }

