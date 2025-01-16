//in number data type we can use some of method or built in function
//using toString() method we can convert number to string with specifide base
let num = 255;
console.log(num.toString()); // Output: "255"
console.log(num.toString(16)); // Output: "ff" (hexadecimal)

//using toFixed() method we can say how many number we need after . in decimal number
let decimalNumber = 3.14159;
console.log(decimalNumber.toFixed(2)); // Output: "3.14"

//using toExponential(digits) method we can formats a number in exponential
let exponentialNumber = 2;
console.log(exponentialNumber.toExponential(2)); // Output: "2.00e+0"

//using toPrecision(digits) method we can Formats a number to a specified length, including both integer and fractional parts.
let fractionalNumber = 123.456;
console.log(fractionalNumber.toPrecision(4)); // Output: "123.5"

//using valueOff() method we can find primtive value of number object
let primitiveValue = new Number(10);
console.log(num.valueOf()); // Output: 10

//defind number data type using new Number() it's return a array 

//using isInterger(value) method check is value is integer
console.log(Number.isInteger(10)); // Output: true
console.log(Number.isInteger(10.5)); // Output: false


//using parseFloat(string) method Parses a string and returns a floating-point number.
console.log(Number.parseFloat("3.14")); // Output: 3.14
console.log(Number.parseFloat("123abc")); // Output: 123

//using parseInt(string, radix) method Parses a string and returns an integer of the specified base (radix).
console.log(Number.parseInt("1001")); // Output: 9 (binary to decimal)
console.log(Number.parseInt("42", 10)); // Output: 42

//using MAX_VALUE() method we can find largest number in javascript
console.log(Number.MAX_VALUE); // Output: 1.7976931348623157e+308

//using MIN_VALUE() method we can find smallest number in javascript
console.log(Number.MIN_VALUE); // Output: 5e-324


//using Number() method convert a value to number
console.log(Number("123")); // Output: 123
console.log(Number("abc")); // Output: NaN
