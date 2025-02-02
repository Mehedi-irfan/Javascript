//In JavaScript, the this keyword refers to the object that is currently executing a function. However, its value depends on how and where the function is called. The call(), apply(), and bind() methods allow us to control the value of this explicitly.

//this is global scope
console.log(this); // In browser: `window` object, In Node.js: `{}` (empty object)

//this inside a regular function
function showThis() {
  console.log(this);
}
showThis(); // In browser: `window`, In strict mode: `undefined`
// In strict mode, this is undefined because the function is not called as a method of an object

//this inside a object model
const person = {
  name: "Hasan",
  greet: function () {
    console.log(this.name); // `this` refers to `person` object
  },
};
person.greet(); // Output: Hasan
// In this case, this refers to the person object because the greet function is called as a method

//The call() method allows you to explicitly set the value of this and pass arguments individually.

function introduce(greeting) {
  console.log(`${greeting}, my name is ${this.name}`);
}

const person1 = { name: "Hasan" };
const person2 = { name: "Irfan" };

introduce.call(person1, "Hello"); // Output: Hello, my name is Hasan
introduce.call(person2, "Hi"); // Output: Hi, my name is Irfan

//apply
//The apply() method is similar to call(), but it takes arguments as an array.

function sum(a, b) {
  console.log(this.num + a + b);
}

const obj = { num: 10 };

sum.apply(obj, [5, 7]); // Output: 22

//bind
//The bind() method returns a new function with a permanently bound this value.

const personTwo = {
  name: "Hasan",
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};

const newGreet = personTwo.greet.bind(person);
newGreet(); // Output: Hello, my name is Hasan
