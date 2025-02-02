/**
 * In JavaScript, prototypes allow objects to inherit properties and methods from other objects. Every JavaScript function has a special property called prototype, which is used to attach shared properties and methods to instances of that function.
 */
//Example :-
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Adding a method to Person's prototype
Person.prototype.greet = function () {
  // console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

const person1 = new Person("Hasan", 22);
const person2 = new Person("Irfan", 25);

person1.greet(); // Output: Hello, my name is Hasan and I am 22 years old.
person2.greet(); // Output: Hello, my name is Irfan and I am 25 years old.

let myHeros = ['spinerman', "thor"];

let herosPower = {
  spiderman : 'sling',
  thor : 'hammer',
  getSpiderManPower : function (){
    console.log(`spiderman power :- ${this.spiderman}`)
  }
}

Object.prototype.irfan = function (){
  console.log('Irfan is present all object')
}
Array.prototype.mehedi = function(){
  console.log('Mehedi is present all object')
}
myHeros.irfan()
myHeros.mehedi()
// herosPower.mehedi()


//we can make our own method or property then we can use this easily
let lengthValue = 'mehediHasanIrfan    '

String.prototype.trueLength = function (){
  console.log(`True Length of :- ${this.trim().length}`)
}

lengthValue.trueLength()
'nuist'.trueLength()