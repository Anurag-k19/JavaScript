

console.log("2" > 1); //true because comparison operator converted "2" into a number
console.log("02" > 1); //true because comparison operator converted "02" into a number
console.log(null > 0);  //false because comparison operator converted null into a 0 and (0 is not greater than 0)
console.log(null == 0); //false because null is not equal to false
console.log(null >= 0);  // true because comparison operator converted null to 0 and (0>=0)

// === is used for strict check 
// it checks for the value are of same data types or not

// but == converts the number to same data type

console.log("02" == 2); //true
console.log("02" === 2); //false