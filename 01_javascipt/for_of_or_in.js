/**
 * The for...of loop is used to iterate over iterable objects such as arrays, strings, maps, sets, and more. It provides a simple way to access the values of an iterable.
 */
const array = [10, 20, 30, 40, 50];

for (const value of array) {
    console.log(value);
}

/**
 * The for...in loop is used to iterate over the enumerable properties (keys) of an object. It can also be used with arrays, but it is generally not recommended for that purpose.
 */
const person = {
    name: 'Alice',
    age: 25,
    city: 'New York'
};

for (const key in person) {
    console.log(`${key}: ${person[key]}`);
}