//This Keyword
/**
 * The this keyword refers to the context in which a function is executed. The value of this depends on how the function is called and varies in different execution contexts.
 * The value of this depends on how the function is called:
 * Regular Function Call: this refers to the global object (or undefined in strict mode).
 */
function regularFunction() {
    console.log(this); // In browsers: `window`, in strict mode: `undefined`
}
regularFunction();

//using this type function this can't help to get username
function add(){
    const userName = "mehedi"
    console.log(this.userName);
}
add()

const one = () =>{
    const userName = "Mehedi"
    console.log(this.userName);
    
}
one()
//this uses
const obj = {
    name: "Mehedi",
    greet: function () {
        console.log(this.name); // Logs "Mehedi"
    },
};
obj.greet();

//Arrow functions do not have their own this. Instead, they inherit this from their surrounding (lexical) scope.
const obj1 = {
    name: "Mehedi",
    greet: () => {
        console.log(this.name); // `this` refers to the global object (or undefined in strict mode)
    },
};
obj1.greet(); // Logs undefined

////Arrow functions provide a concise way to write functions using the => syntax. They differ from regular functions in behavior and usage.
const addition = (a, b) => a + b; // Implicit return
console.log(addition(2, 3)); // 5

// If the function has more than one statement, use curly braces and `return`.
const multiply = (a, b) => {
    const result = a * b;
    return result;
};
console.log(multiply(2, 3)); // 6

//When You Don’t Need a Prototype: Arrow functions cannot be used as constructors, so they are ideal when the function doesn’t require a prototype.
function Counter() {
    this.count = 0;
    setInterval(() => {
        this.count++;
        console.log(this.count); // Refers to the Counter instance
    }, 1000);
}

new Counter();
