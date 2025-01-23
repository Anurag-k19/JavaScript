const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);  // Object will be the current context here
    }

}



//console.log(user.username)
//console.log(user.getUserDetails());

// console.log(this);  // here the global object would be the current context which is "{}" in node  but in browser it is "window"


function User(username, loginCount, isLoggedIn){

    this.username = username;     // `this.username` acts as a variable in the new context created using the `new` keyword and the `this` is binded to the new object/context created using the `new`
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this  // In javascript when we use a constructor function, in that case, even if we dont write `return this;`, the function still works because javaScript automatically returns the newly created object unless stated otherwise


}

const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);
//console.log(userTwo);


// what does new keyword do

// step 1 --> A new Object is created - When you use `new`, a new empty object is created

// step 2 --> Prototype Binding - the new object's prototype is set to the prototype of the constructor function

//  step 3 --> Binding - the `this` keyword within the constructor function is bound to the newly created object

//  step 4 --> Property Assignment - Properties like(`this.username` and `this.loginCount`) are assigned to the new object

//  step 5 --> Execution of Constructor - the constructor function executes, initializing the properties

// step 6 --> Return Value - Finaally, the new Object is returned
