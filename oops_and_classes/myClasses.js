// ES6

// After ES6 this is how we can create methods using class and constructor 

class User {
    constructor(username,email,password){
        this.username = username
        this.email = email
        this.password = password
    }

    logMe(){
        console.log(`${this.username}`);
    }
    
    encryptedPassword(){
        console.log(`${this.password}abcd`);
        
    }

    

}

const student = new User("Anurag","example@gmail.com","1234")

student.logMe()
student.encryptedPassword()



// Behind the scene

// Without the constructor this is how we create methods 
// This is how method were created before ES6

function NewUser(username,email,password){
    this.username = username
    this.email = email
    this.password = password
}

NewUser.prototype.PrintName = function(){
    console.log(`${this.username}`);
    
}

NewUser.prototype.encryptedPassword = function(){

        console.log(`${this.password}abcd`)
    
}


const newUser = new NewUser("Anurag","example@gmail.com","1234")

newUser.PrintName()
newUser.encryptedPassword()