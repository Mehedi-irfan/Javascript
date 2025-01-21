//A function in JavaScript is a block of reusable code designed to perform a particular task. Functions allow you to organize your code, make it more readable, and avoid repetition. They can accept inputs (parameters), perform operations, and return outputs (results).

//we can define function in different way
// Anonymous function expression
const greetting = function(name) {
    console.log("Hello, " + name);
};
greetting("mehedi")

// Named function expression
const greet = function sayHello(name) {
    console.log("Hello, " + name);
};

//arrow function
const greetes = (name) => {
    console.log("Hello, " + name);
};

//we can use rest or spreed parameter for taken infinity value
function funck(...names) {
    console.log("Hello, " + names.join(", "));
}

funck("John", "Jane", "Alex"); // "Hello, John, Jane, Alex"

//we can use object in function to get parameter or take a value and we can use object as a argument also array
const course = {
    name : "python",
    price : 999
}

function instructor(courseName) {
    return `i bought ${courseName.name} to price ${courseName.price}`
}
const result = instructor(course)
console.log(result);
