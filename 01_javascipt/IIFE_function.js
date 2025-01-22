//IIFE (Immediately Invoked Function Expression) in JavaScript
/*An IIFE (pronounced "iffy") is a JavaScript function that runs immediately after it is defined. It's a commonly used pattern for creating a function that is executed only once and avoids polluting the global scope. */

//An IIFE is a function expression wrapped in parentheses, followed by parentheses for invocation.
(function () {
    // Code inside the IIFE
    console.log("This is an IIFE!");
})();

(function () {
    console.log("IIFE executed!"); // Output: "IIFE executed!"
})();
//with arrow function
( (name) => {
    console.log(`Hello, ${name}!`);
})("Mehedi"); // Output: "Hello, Mehedi!"

(function () {
    const secret = "Hidden message";
    console.log(secret);
})();
// secret is not accessible here
