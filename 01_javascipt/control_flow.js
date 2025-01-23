/**
 * if Statement
    Executes a block of code if the condition is true.
 */
let age = 18;
   if (age >= 18) {
   console.log("You are eligible to vote.");
}
   
/**
 * if-else Statement
   Adds an alternative block of code if the condition is false.
 */
let ages = 16;
if (ages >= 18) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote.");
}
   
/**
 * if-else if Statement
Tests multiple conditions in sequence.
 */
let score = 85;
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else {
    console.log("Grade: C");
}

/**
 * Switch Statement
   Tests a variable against multiple values.
 */
let day = "Monday";
switch (day) {
    case "Monday":
        console.log("Start of the week.");
        break;
    case "Friday":
        console.log("Almost weekend!");
        break;
    default:
        console.log("It's just another day.");
}
 

//The nullish coalescing operator (??) in JavaScript is a logical operator that returns the right-hand side operand if the left-hand side operand is null or undefined. It’s commonly used to provide default values for variables or expressions.

// let result = value1 ?? value2;
/**
 * If value1 is not null or undefined, result will be value1.
   If value1 is null or undefined, result will be value2.
 */

let username = null;
let displayName = username ?? "Guest";
console.log(displayName); // Output: "Guest"
