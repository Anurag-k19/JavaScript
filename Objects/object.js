//  singleton object means it does not not have any instances it is single

//singleton   - when an object is created using constructor it will be a singleton
//              But when created using object literals it will not be singleton



// Object literals

const symbol = Symbol()

 const User = {
    name : "Anurag",
     age : 19,
     [symbol] :"newSymbol",
     location : "Noida",
     email: "Anurag@gmail.com",
     "full name": "Anurag Kumar",

 }


//  console.log(User.name);

//  console.log(User["full name"]);  // If we create a string instance then we need to use square brackets to access them otherwise we can use (.)

//  console.log(User[symbol]);      // to print a symbol we need to declare them with square bracket[]  and while printing we need to use aquare bracket as well

 User.email = "Anurag@microsoft.com"

//  console.log(User["email"]);

// we can freeze a object, So that no one can make any changes

// Object.freeze(User)

User.email="AnuragKumar@chatGpt.com"
// console.log(User.email);



// We can also add function in Objects. Functions are trwated as Variables

User.greetings = function(){
    console.log(`Hello new JS user ${this["full name"]} age ${this.age} `);  //we use "this" to access the proprerty attached to Object
}

// console.log(User.greetings);  // when we print function without using brackets it gives "[Function (anonymous)]" as output , it is a reference to the function

console.log(User.greetings());

console.log(User.greetings());

