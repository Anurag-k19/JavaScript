class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
        
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)              // Instead of using .call() to give the value of `this` to other `this` of any function we can user super in classes. This was introduced in ES6 and it does everything on its own like giving the value of current `this` to the other `this`
        this.email = email
        this.password = password
    }

    addCourse(){
        return `${this.username} aaded new course`
    }
    
}

const userOne = new Teacher("Anurag","example.gmail.com","123")

console.log(userOne.addCourse());

// as Teacher class extends User class, so Teacher class has the properties of User class as Teacher class is the child of User class

userOne.logMe() //Output :- USERNAME is Anurag

// we can who is instance of whom by using `instanceof`

console.log(userOne instanceof Teacher);  // Output :- true,    as userOne is a instance of Teacher
console.log(userOne instanceof User);     // Output :- true,    as userOne is a instance of Teacher and Teacher is a instance of or child of User

