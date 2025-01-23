// JavaScript is a prototype base language.
// If javascript is unable to provide values or output then it checks on its upper levels or layers until it does not gets `null` value
// In Javascript everthing is object  -- 
// such as `Arrays has their properties and it also has the properties of the `object` as well `
//  same for `string` and `function` too

// `the parent of `Object` in JavaScript is null, That's why we don't have any prototype further Objects



function multipleBy5(num){

    return num*5
}

multipleBy5.power = 2

console.log(multipleBy5(5));
console.log(multipleBy5.power);  //Output :- 2   we can make functions work as a object too as in JavaScript everything is object
console.log(multipleBy5.prototype);  //Output -: {}

function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){                   // These are the methods for the prototypes. and this is increment method of prototype, which we can call it after creating a `new createUser('JohnDoe', 10)`
    console.log(this.score+=1);
                                           
}
createUser.prototype.printMe = function(){                     // // These are the methods for the prototypes. and this is printme method of prototype which we can call it after creating a `new createUser('JohnDoe', 10)`
    console.log(`price is ${ this.score}`);
}

const chai = new createUser("chai", 25)     //  by using `new` keyword a new object is created and from the constructor `createUser` properties such as `this.username` is binded to this new object. And now this have the context of this new created object
const tea = createUser("tea", 250)

chai.printMe()        // Calling the created printMe() method of prototype 
chai.increment()

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/