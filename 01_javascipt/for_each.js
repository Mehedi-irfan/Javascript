/**
 * The forEach loop in JavaScript is a method available on arrays that allows you to execute a provided function once for each element in the array. It is a higher-order function that simplifies the process of iterating over array elements.
 */


//in forEach loop we can get index, value and array also
const numbers = [1, 2, 3, 4, 5];

numbers.forEach((number) => {
    console.log(number);
});

const fruits = ['apple', 'banana', 'cherry'];

fruits.forEach((fruit, index) => {
    console.log(`${index}: ${fruit}`);
});

const myCoding = [
    {
        languageName : "Javascript",
        languageFileName : "js"
    },
    {
        languageName : "Python",
        languageFileName : "py"
    },
    {
        languageName : "C++",
        languageFileName : "Cpp"
    }
]
myCoding.forEach((item)=>{
    console.log(`Coding Language Name :- ${item.languageName} and this language file name is :- ${item.languageFileName}`);
    
})
//the important thing is forEach value didn't return any value ., it returns undefined.