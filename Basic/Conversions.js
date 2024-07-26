let score = 33

console.log(typeof score);

let marks = "33"

console.log(typeof marks);

let MarkstoNumber = Number(marks)

console.log(typeof MarkstoNumber);

let number = "33abc"

let stringtoNumber = Number(number)

console.log(typeof stringtoNumber);  //number
console.log(stringtoNumber);         //NaN


let num = null

let num1 = Number(num)
console.log(typeof num1);  // number
console.log(num1);        // 0


let num2 = undefined

let num3 = Number(num2)
console.log(typeof num3);   //number
console.log(num3);         //NaN



// "33"--> can be converted into a number

// "33abc" --> type will become number But it is NaN(not a number)

// null --> type will become number and after conversion null will become 0

//undefined --> type will become number But it is NaN(not a number)

let isLoggedIn =1
let booleanValue = Boolean(1)
console.log(typeof(booleanValue)); //boolean
console.log(booleanValue);         // true

// 1 --> true
// 0 --> false

// "" --> false
// "anurag" --> true

let anyNumber = 22

let StringtoNumber = String(anyNumber)

console.log(StringtoNumber);
console.log(typeof StringtoNumber);