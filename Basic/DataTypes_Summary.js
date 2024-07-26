// there are two types of datatypes in js
//    1 --> Primitive 
//    2 --> Non Primitive or Reference type


// _Return type of variables in JavaScript
// 1) Primitive Datatypes
         const number = 100;
//        Number => number
         const string = "Anurag"
//        String  => string
         const isLoggedIn = true
//        Boolean  => boolean
        const temperature = null
//        null  => object
        let value;
//        undefined  =>  undefined
        const id = Symbol("123")
//        Symbol  =>  symbol
       const bigNumber = 3334647586586979696n
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes (reference DataType)

         const Names =["Anurag","kunal","aniket"]
//        Arrays  =>  object

         const myFunction = function(){
            console.log("Hello World");
         }
//        Function  =>  function
    
          let myObj = {
            name: "Anurag",
            marks: 87
          }
//        Object  =>  object

console.log(myObj);

console.log("\n");


// -------------------------------------------------------------------------------------------------------------------------------------


// There are two types of memory in JavaScript

// 1. Stack (Primitive DataTypes use stack memory )
// 2. Heap  (non-Primitive DataTypes use Heap memory )



// 1. Stack memory creates a copy of variable and it doesnot affect the original value

// 2. Heap memory does not create a copy it use the reference of the varialble 
//    if we change the value of the then the value of original variable will also change


// stack memory

console.log("Stack memory example");

let name1 = "anurag";
let anotherName = name1;

anotherName="Kumar"

console.log(name1);
console.log(anotherName);

console.log("\n");


console.log("Heap memory example");

 let userOne = {
        email : "Anurag@gmail.com",
        age : 19
 }

 let userTwo = userOne

 userTwo.age = 27


 console.log(userOne.age);
 console.log(userTwo.age);





