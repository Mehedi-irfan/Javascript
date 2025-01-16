//we can declar string using new keyoward as a object
const gameName = new String("clash of clan")
console.log(gameName);

//using charAt we can see which charcter in which position
const name = 'irfan'
console.log(name.charAt(2));
//using index of we also can see which postion have which charcater 
console.log(name.indexOf('f'));

//for searching unicode we can use charCodeAt()
let str1 = "JavaScript";
console.log(str1.charCodeAt(4)); // Output: 83 (Unicode for "S")


// for concate the string we can use concate method
let str2 = "Hello";
let str21 = "World";
console.log(str2.concat(", ", str21, "!")); // Output: "Hello, World!"


//using includes we can seach any word is consist in variable or not
let str3 = "JavaScript is awesome";
console.log(str3.includes("awesome")); // Output: true
console.log(str3.includes("awesome", 15)); // Output: false

//using endswith we can check if string end with specified value or not
let str4 = "JavaScript is awesome";
console.log(str4.endsWith("JavaScript", 10)); // Output: true
console.log(str4.endsWith("awesome")); // Output: true

//using match(regax) Retrieves matches of a string against a regular expression.
let str5 = "The rain in SPAIN stays mainly in the plain gAin";
console.log(str5.match(/ain/gi)); // Output: ["ain", "AIN", "ain", "ain"]

//using repeat(count) method we can do repeat the string n time
let str6 = "Hi!";
console.log(str6.repeat(5)); // Output: "Hi!Hi!Hi!Hi!Hi!"

//using replace(searchValue, newValue) we can replace any value to new value
let str7 = "JavaScript is cool!";
console.log(str7.replace("cool", "awesome")); // Output: "JavaScript is awesome!"


//using replaceAll(searchValue, newValue) we can replace any array if is there have same type of text 
let str8 = "apple apple apple";
console.log(str8.replaceAll("apple", "orange")); // Output: "orange orange orange"

//using slice(starIndex, endIndex) method we can take any value from any array or string
let str9 = "Hello World";
console.log(str9.slice(6, 11)); // Output: "world"

//using split(separtor, limit) method we can make substring it's return an array
let str10 = "a,b,c";
console.log(str10.split(",")); // Output: ["a", "b", "c"]

//using statsWith(searchString, position) method we can find if string starts with this specified value ot not
let str11 = "JavaScript";
console.log(str11.startsWith("Java")); // Output: true

//using subString(start, end) method extracts characters between to indiex
let str12 = "JavaScript";
console.log(str12.substring(0, 4)); // Output: "Java"

//using toLowerCase() method we can make string lowercase
let str13 = "JavaScript";
console.log(str13.toLowerCase()); // Output: "javascript"

//using toUpperCase() method we can make string upper case
let str14 = "JavaScript";
console.log(str14.toUpperCase()); // Output: "JAVASCRIPT"

//using trim() method we can remove whitespace from both side
let str15 = "   Hello World   ";
console.log(str15.trim()); // Output: "Hello World"

//using toString() method we can conver a string object to string
let str = new String("Hello");
console.log(str.toString()); // Output: "Hello"
