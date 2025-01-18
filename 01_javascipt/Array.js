//using shift() method we can delete first element of array
let shiFt = [1, 2, 3];
let removed = shiFt.shift(); // Returns 1
console.log(shiFt); // [2, 3]

//using unshift() method we can add new element in the first place
let un_shift = [1, 2, 3];
un_shift.unshift(0);  // Returns 4
console.log(un_shift); // [0, 1, 2, 3]

//using concat() method we can add two array
let arr1 = [1, 2];
let arr2 = [3, 4];
let merged = arr1.concat(arr2);
console.log(merged); // [1, 2, 3, 4]

//using splice() method we can remove or replace the element and it's change the main array
let arrSplice = [1, 2, 3, 4];
arrSplice.splice(1, 2, 'a', 'b'); // Removes 2, 3 and adds 'a', 'b'
console.log(arrSplice); // [1, 'a', 'b', 4]

//Using slice() method we can take any of element instated of changing the main array
let arrSlice = [1, 2, 3, 4];
let sliced = arrSlice.slice(1, 3); // Returns [2, 3]
console.log(sliced);

//using join() method we can make array to string  it retuns string
let arrStr = ['Hello', 'World'];
let str = arrStr.join(' '); // 'Hello World'
console.log(str);

//using toString() method we also can make array to string retrns string
let arrString = [1, 2, 3];
console.log(arrString.join()); // '1,2,3'

//using includes() method we can see is element contain in array or  not it's returns boolen value
let arrIncludes = [1, 2, 3];
console.log(arrIncludes.includes(2)); // true

//using indexOf() method we can find the index of array value.if value doesn't exist then it's return -1
let arrIndex = [1, 2, 3, 4];
let index = arrIndex.indexOf(3); // 2
console.log(index);
