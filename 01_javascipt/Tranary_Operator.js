//tranary operator syntax
/**
 * condition ? expressionIfTrue : expressionIfFalse;
 */

let age = 18;
let status = age >= 18 ? "Adult" : "Minor";
console.log(status); // Output: "Adult"

/**
 * Nested Ternary Operator
   You can nest ternary operators, but this can make your code harder to read. Use parentheses for clarity.
 */
let score = 85;
let grade = score >= 90 ? "A" : score >= 80 ? "B" : "C";
console.log(grade); // Output: "B"


let isLoggedIn = true;
let message = isLoggedIn ? "Welcome back!" : "Please log in.";
console.log(message); // Output: "Welcome back!"


let num = 5
let result = num % 2 == 0 ? "Even" : "Odd";
console.log(result);


let ages = 18
let canVote = ages >= 18? "Yes" : "No"
console.log(canVote);

let name = "Hasan"
let isMember = true
console.log(`Hello ! ${isMember ? "Mehedi" :"Guest"} ${name}`);

