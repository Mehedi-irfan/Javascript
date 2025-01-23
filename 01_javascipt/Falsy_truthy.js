/**
 * 
In JavaScript, values are classified as either truthy or falsy based on how they evaluate in a boolean context (e.g., in an if statement).

Falsy Values
These are values that evaluate to false in a boolean context. JavaScript has only six falsy values:
   * false → The literal boolean value.
   * 0 → The number zero.
   * -0 → Negative zero.
   * "" or '' → Empty strings (both single and double quotes).
   * null → The absence of a value.
   * undefined → A variable with no assigned value.
   * NaN → "Not a Number," representing invalid numeric operations.
 */
if (false) console.log("This won't run.");
if (0) console.log("This won't run.");
if ("") console.log("This won't run.");
if (null) console.log("This won't run.");
if (undefined) console.log("This won't run.");
if (NaN) console.log("This won't run.");

/**
 * Truthy Values
   Everything that is not falsy is considered truthy. This includes:
    *Any non-zero numbers (e.g., 1, -1, 3.14).
    *Non-empty strings (e.g., "hello", 'world', " ").
    *Objects (e.g., {}, [], new Date()).
    *Functions.
    *Symbol values (e.g., Symbol()).
    *The boolean value true.
 */
if (true) console.log("This will run.");
if (1) console.log("This will run.");
if (-1) console.log("This will run.");
if ("hello") console.log("This will run.");
if ([]) console.log("This will run.");
if ({}) console.log("This will run.");
    
//Checking falsy or thruhy
console.log(Boolean(false)); // false
console.log(Boolean(0));     // false
console.log(Boolean(""));    // false
console.log(Boolean(null));  // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN));   // false

console.log(Boolean(1));     // true
console.log(Boolean("text")); // true
console.log(Boolean([]));    // true
console.log(Boolean({}));    // true
console.log(Boolean(true));  // true
