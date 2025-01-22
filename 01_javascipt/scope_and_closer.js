/**----------Global Variable or Global Scope-----------
 * A variable has global scope when it is declared outside any function, block, or module, making it accessible anywhere in the code.
 * Global variables are properties of the window object in browsers or global in Node.js.
 */
// Example of Global Scope
var globalVar = "I am global"; // Using var
let globalLet = "I am also global"; // Using let
const globalConst = "I am globally constant"; // Using const

function testGlobalScope() {
    console.log(globalVar);   // Accessible here
    console.log(globalLet);   // Accessible here
    console.log(globalConst); // Accessible here
}
testGlobalScope();

/**-------------------Local Variable or Local Scope-----------------
 * A variable has local scope when it is declared inside a function, block, or module. Such variables can only be accessed within their defining scope.
 * Function Scope: Variables declared inside a function using var, let, or const.
   Block Scope: Variables declared inside a block { ... } using let or const.
 * 
 */
function functionScope() {
    var localVar = "I am local to this function";
    console.log(localVar); // Accessible here
}
functionScope(); // console.log(localVar); // Error: localVar is not defined

if (true) {
    let blockLet = "I am block-scoped";
    const blockConst = "I am also block-scoped";
    console.log(blockLet);   // Accessible here
    console.log(blockConst); // Accessible here
}
// console.log(blockLet);   // Error: blockLet is not defined //we can't call this two value from outside of if
// console.log(blockConst); // Error: blockConst is not defined

//Hoisting
function hoistingExample() {
    console.log(myVar); // undefined (due to hoisting)
    var myVar = "Hello";
    console.log(myVar); // "Hello"
}
hoistingExample();

//closure
function createCounter() {
    let count = 0; // Enclosed variable

    return function () {
        count++;
        return count;
    };
}

const counter1 = createCounter();
console.log(counter1()); // Output: 1
console.log(counter1()); // Output: 2
console.log(counter1()); // Output: 3

const counter2 = createCounter(); // New closure
console.log(counter2()); // Output: 1

//using let 
for (let i = 0; i < 3; i++) {
    setTimeout(function () {
        console.log(i); // Logs: 0, 1, 2
    }, 1000);
}

//using var
for (var i = 0; i < 3; i++) {
    setTimeout(function () {
        console.log(i); // Logs: 3, 3, 3
    }, 1000);
}
