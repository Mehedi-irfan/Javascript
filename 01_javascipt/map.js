/**
 *  map()
    Purpose: Used to transform elements in an array. It creates a new array by applying a function to each element of the original array.
    Key Points:
        Does not modify the original array.
        Used for transforming data (e.g., converting units, changing formats).
 */

const numbers = [1, 2, 3, 4, 5]
// Multiply each number by 2
const doubledNumbers = numbers.map(num => num * 2);

console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
///Yes, the map() method does return a value, and it always returns a new array where each element is the result of applying the callback function to the corresponding element in the original array.

const number = [1, 2, 3, 4, 5];

// Multiply each number by 3
const multipliedNumbers = number.map(num => num * 3);

console.log(multipliedNumbers); // Output: [3, 6, 9, 12, 15]
console.log(number); // Original array remains unchanged: [1, 2, 3, 4, 5]
