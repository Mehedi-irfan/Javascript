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

const names = ['Mehedi', 'Hasan', 'Irfan'];

// Convert each name to uppercase
const upperCaseNames = names.map(name => name.toUpperCase());

console.log(upperCaseNames); // Output: ['MEHEDI', 'HASAN', 'IRFAN']
console.log(names); // Original array remains unchanged: ['Mehedi', 'Hasan', 'Irfan']


const numbersList = [1, 2, 3, 4, 5];

// Forget to return a value in the callback
const result = numbersList.map(num => { num * 2 }); // Missing `return`  //after using scope or currly backet we should use return keyword

console.log(result); // Output: [undefined, undefined, undefined, undefined, undefined]
