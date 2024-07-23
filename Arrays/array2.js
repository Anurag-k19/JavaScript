
const fruits = ["Apple","Mango","Banana"]

const vegetables = ["Potato","Cabbage","Raddish"]


const new_array = fruits.concat(vegetables)

// console.log(new_array);


// Instead of using concat, We can use spread

// example

const all_fruits_and_vegetables = [...fruits, ...vegetables]

// console.log(all_fruits_and_vegetables);

// ------------------------------------------------------------------------------------------------------


// We can use flat to convert all of the values into one linear array

// console.log(numbers.flat(Infinity));   output : - [1,2,3,4,5,6,7,8,9,10,11,12,13]

const numbers = [1,2,3,4,[5,6],7,[8,9,[10,11,[12,13]]]]

// -------------------------------------------------------------------------------------------------------

// The Array.isArray() static method determines whether the passed value is an Array.

console.log(Array.isArray("Anurag"));   // false

console.log(Array.isArray([1,2,3,4]));  //true

// ----------------------------------------------------------------------------------------------------------------------

//The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.

console.log(Array.from("Anurag"));
console.log(Array.from([1,2,3], (x) => x+x));

// ---------------------------------------------------------------------------------------------------------------------

// The Array.of() static method creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments.

console.log(Array.of("Anurag","kumar",1,3,5));


let score1 = 156
let score2 = 453
let score3 = 234

console.log(Array.of(score1,score2,score3));

