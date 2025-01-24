function SetUsername(username){
    //complex DB calls
    this.username = username      // // This would not work properly without `call()`
    console.log("called");
}




function createUser(username, email, password){
    // The call() method in JavaScript is used to invoke a function with a specified this context.

    SetUsername.call(this, username)            // `this` inside SetUsername is not bound to the new object if we don't use .call()
    // Using call(this, username): This forces this inside SetUsername to refer to the object that is being created by createUser.
   
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")

console.log(chai);                           // // `username` would be missing or undefined if we don't use .call()


//  SetUsername is a standalone function, and without call(), the this inside SetUsername might not refer to the newly created object.

// By using call(), you force the this context of the SetUsername function to refer to the this context of the createUser function, which represents the new object being created. This ensures that when you do this.username = username, the username is correctly set on the object you're creating.