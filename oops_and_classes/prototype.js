//  Our Objective is to create a method called `trueLength()` which calculates the true length of the string

// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength());


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);    // here we created a method in prototype of object so every child of `Object` can use this. i.e. Arrays,String,Function
}

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);         // Prototype create for`Object` can be used by every other child of `Object` i.e. Arrays,Strings,Functions
}
// heroPower.hitesh()
// myHeros.hitesh()
// myHeros.heyHitesh()
heroPower.heyHitesh()     // Prototype created in Array,string or function can't be used by the `Object` because its the parent Prototype 

// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
    
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport   // __proto__ is used to reference to the other objects 
}

Teacher.__proto__ = User    // __proto__ can be used outside the object too. But __proto__ is older syntax


// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)   // setPrototypeOf works similar to __proto__ . setPrototypeOf is used to reference to the other objects 

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);      // here `this` will print the value of current context and the current context is whoever called the method trueLength of prototype 
    console.log(`True length is: ${this.trim().length}`);   // here we created a method to get the true length of the string
}

// anotherUsername.trueLength()
"Anurag".trueLength()       // Output :- Anurag 
                            //           6
"iceTea".trueLength()       // Output :- iceTea
                            //           6
 
