/**
 * reduce()
    Purpose: Used to reduce an array to a single value (e.g., sum, product, etc.) by applying a function to each element and carrying over an accumulator.
    Key Points:
        It takes two arguments: a callback function and an initial value for the accumulator.
        Callback has four parameters: accumulator, currentValue, currentIndex (optional), and array (optional).
 */

const numbers = [1, 2, 3, 4, 5]
// Sum all numbers in the array
const sum = numbers.reduce((acc, num) => acc + num, 0);

console.log(sum); // Output: 15

const nestedArray = [[1, 2], [3, 4], [5]];

// Flatten the array
const flattened = nestedArray.reduce((acc, curr) => acc.concat(curr), []);

console.log(flattened); // Output: [1, 2, 3, 4, 5]

const course = [
    {
        courseName : "js",
        price : 6500
    },
    {
        courseName : "Python",
        price : 4500
    },
    {
        courseName : "Java",
        price : 3600
    },
    {
        courseName : "C++",
        price : 7500
    }
]

const totalPrice = course.reduce((acc, item)=> {
    return acc + item.price
}, 0)

console.log(totalPrice);


//Yes, the reduce() method always returns a value, which is the single accumulated result of reducing the array. The value returned by reduce() depends on the logic inside its callback function and the initial value you provide.

const numbersLists = [1, 2, 3, 4, 5];

// Calculate the product
const product = numbersLists.reduce((acc, num) => acc * num, 1);

console.log(product); // Output: 120
