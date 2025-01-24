/**
 * filter()
    Purpose: Used to filter elements in an array based on a condition. It returns a new array containing only the elements that satisfy the condition (the ones where the callback returns true).
    Key Points:
        Does not modify the original array.
        Used when you need a subset of the original array.
 */

const numbers = [10, 25, 30, 45, 50];

// Filter out numbers greater than 30
const filteredNumbers = numbers.filter(num => num > 30);

console.log(filteredNumbers); // Output: [45, 50]
//the filter() method does return a value, but it always returns a new array containing the elements that satisfy the given condition.


const number = [1, 3, 5];

// Try to filter even numbers
const evenNumbers = number.filter(num => num % 2 === 0);

console.log(evenNumbers); // Output: [] (empty array)
console.log(number);


const books = [
    {
        bookName : "js",
        author : "david jason",
        published : 1970
    },
    {
        bookName : "python",
        author : "david mark",
        published : 1990
    },
    {
        bookName : "C++",
        author : "axel jason",
        published : 1998
    },
]

const filterBook = books.filter((book)=> {
    return book.published >= 1990 
})
console.log(filterBook);
console.log(books);
