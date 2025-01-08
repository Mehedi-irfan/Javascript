console.log(typeof undefined) //undifined type
console.log(typeof null) // object type
console.log(typeof BigInt) // function type it's use for big number
console.log(typeof Symbol) // function type it's use for unqiue value

//number data type we can't use big number we just can use 2 power 52 for taking large number we can use BigInt data type
const sym1 = Symbol();
const sym2 = Symbol("foo");
const sym3 = Symbol("foo");
console.table([sym1, sym2, sym3])
//symbol dat type use for unique value